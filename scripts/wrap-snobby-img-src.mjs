import fs from "node:fs";
import path from "node:path";

const root = path.resolve("snobby-web2-src");

function walkTsx(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkTsx(p, out);
    else if (ent.name.endsWith(".tsx")) out.push(p);
  }
  return out;
}

const re = /src=\{(?!imgUrl\()([a-zA-Z_][a-zA-Z0-9_]*)\}/g;

for (const file of walkTsx(root)) {
  let s = fs.readFileSync(file, "utf8");
  if (!re.test(s)) continue;
  re.lastIndex = 0;
  s = s.replace(re, "src={imgUrl($1)}");

  if (s.includes('import { imgUrl }')) {
    fs.writeFileSync(file, s);
    continue;
  }

  const relDir = path.relative(root, path.dirname(file));
  const depth = relDir ? relDir.split(path.sep).length : 0;
  const mod = depth === 0 ? "./imgUrl" : `${"../".repeat(depth)}imgUrl`;
  const importLine = `import { imgUrl } from "${mod}";`;

  const lines = s.split("\n");
  let i = 0;
  if (lines[0] === '"use client";' || lines[0] === "'use client';") i = 1;
  lines.splice(i, 0, importLine);
  fs.writeFileSync(file, lines.join("\n"));
}
