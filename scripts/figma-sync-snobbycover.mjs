#!/usr/bin/env node
/**
 * Figma から snobbycover 用画像をエクスポート
 * - 個別: figma-sync.config.json の nodeId を指定
 * - 一括: --export-all で全フレームを自動取得
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const FIGMA_API = "https://api.figma.com/v1";

async function fetchFigma(accessToken, path) {
  const url = `${FIGMA_API}${path}`;
  const res = await fetch(url, { headers: { "X-Figma-Token": accessToken } });
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  return res.json();
}

function sanitizeFilename(name) {
  return name
    .replace(/[^\w\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "asset";
}

/** エクスポート対象ノード（FRAME, COMPONENT, RECTANGLE 等）を収集 */
function collectExportableNodes(node, prefix = "", list = [], pageNameFilter = null) {
  if (!node) return list;
  const isPage = node.type === "CANVAS";
  const currentPage = isPage ? node.name : prefix.split("::")[0];

  if (pageNameFilter && isPage && node.name !== pageNameFilter) return list;

  if (["FRAME", "COMPONENT", "INSTANCE"].includes(node.type) && !isPage) {
    const name = node.name || "unnamed";
    const path = prefix ? `${prefix} > ${name}` : name;
    list.push({ id: node.id, name, path, type: node.type });
  }

  if (node.children) {
    const p = isPage ? node.name : prefix;
    for (const child of node.children) {
      collectExportableNodes(child, p, list, pageNameFilter);
    }
  }
  return list;
}

async function listNodes(accessToken, fileKey) {
  const file = await fetchFigma(accessToken, `/files/${fileKey}`);
  const list = [];
  for (const page of file.document?.children || []) {
    collectExportableNodes(page, page.name, list);
  }
  console.log("\n=== エクスポート可能なノード一覧 ===\n");
  for (const { id, path, type } of list) {
    const fixed = id.replace(/-/g, ":");
    console.log(`  ${fixed.padEnd(14)} | ${type.padEnd(10)} | ${path}`);
  }
  console.log("\n");
  return list;
}

async function exportAndSave(accessToken, fileKey, assets, outputDir, format = "png", scale = 2) {
  const valid = assets.filter((a) => a.nodeId && a.nodeId.trim());
  if (valid.length === 0) {
    console.log("⚠️  nodeId が空です。--export-all を使うか、figma-sync.config.json に nodeId を設定してください。");
    return;
  }

  const outPath = join(ROOT, outputDir);
  if (!existsSync(outPath)) mkdirSync(outPath, { recursive: true });

  const BATCH_SIZE = 20;
  for (let i = 0; i < valid.length; i += BATCH_SIZE) {
    const batch = valid.slice(i, i + BATCH_SIZE);
    console.log(`  バッチ ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(valid.length / BATCH_SIZE)} (${batch.length}件)...`);

    const params = new URLSearchParams({
      ids: batch.map((a) => a.nodeId).join(","),
      format: format || "png",
      scale: String(scale || 2),
    });

    const data = await fetchFigma(accessToken, `/images/${fileKey}?${params}`);
    if (data.err) throw new Error(`Figma: ${data.err}`);

    const images = data.images || {};

    for (const asset of batch) {
      const url = images[asset.nodeId];
      if (!url) {
        console.warn(`⚠️  ${asset.filename}: URL 取得失敗 (nodeId: ${asset.nodeId})`);
        continue;
      }
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`⚠️  ${asset.filename}: ダウンロード失敗 ${res.status}`);
        continue;
      }
      const dest = join(outPath, asset.filename);
      writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
      console.log(`✓ ${asset.filename}`);
    }
  }
}

async function exportAll(accessToken, fileKey, outputDir, format, scale, pageNameFilter = null) {
  const file = await fetchFigma(accessToken, `/files/${fileKey}`);
  const list = [];
  for (const page of file.document?.children || []) {
    collectExportableNodes(page, page.name, list, pageNameFilter);
  }

  if (list.length === 0) {
    console.log("⚠️  エクスポート対象のノードがありません。");
    return;
  }

  const seen = new Set();
  const assets = list.map((n, i) => {
    let base = sanitizeFilename(n.name);
    if (seen.has(base)) {
      let j = 1;
      while (seen.has(`${base}-${j}`)) j++;
      base = `${base}-${j}`;
    }
    seen.add(base);
    return { nodeId: n.id.replace(/-/g, ":"), filename: `${base}.${format || "png"}` };
  });

  console.log(`\n${assets.length} 件をエクスポートします:\n`);
  await exportAndSave(accessToken, fileKey, assets, outputDir, format, scale);
}

async function main() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    console.error("FIGMA_ACCESS_TOKEN を設定してください。");
    process.exit(1);
  }

  const configPath = join(ROOT, "figma-sync.config.json");
  const config = JSON.parse(readFileSync(configPath, "utf8"));
  const cfg = config.snobbycover;
  if (!cfg) {
    console.error("figma-sync.config.json に snobbycover がありません");
    process.exit(1);
  }

  const listMode = process.argv.includes("--list-nodes");
  const exportAllMode = process.argv.includes("--export-all");

  if (listMode) {
    await listNodes(token, cfg.fileKey);
    return;
  }

  if (exportAllMode) {
    const pageName = cfg.exportAll?.pageName || null;
    console.log("Figma から一括エクスポート中...\n");
    await exportAll(token, cfg.fileKey, cfg.outputDir, cfg.format, cfg.scale, pageName);
    console.log("\n完了。public/snobbycover/ を確認してください。");
    return;
  }

  const manualAssets = cfg.assets?.filter((a) => a.nodeId) || [];
  if (manualAssets.length > 0) {
    console.log("Figma から個別エクスポート中...\n");
    await exportAndSave(token, cfg.fileKey, manualAssets, cfg.outputDir, cfg.format, cfg.scale);
  } else {
    console.log("個別 nodeId が未設定です。--export-all で一括エクスポートを試してください。");
    console.log("  npm run figma:sync -- --export-all");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
