# Vercel で routes-manifest.json エラーが出る場合

このプロジェクトは **Next.js の静的エクスポート**です。Vercel で `npm run build` を走らせると Next.js 用のチェックが入り、`routes-manifest.json` を探してエラーになります。

**対策:** ビルドは実行せず、リポジトリにコミット済みの **`out` フォルダをそのまま** デプロイします。

---

## 1. vercel.json（リポジトリ側）

すでに次の設定になっています（ビルドは行わない）。

- **Install Command:** スキップ
- **Build Command:** 何もしない（no-op）
- **Output Directory:** `out`

→ コミット済みの `out` がそのまま配信されます。

---

## 2. Vercel ダッシュボードで確認すること

**Settings** → **General** → **Build & Output Settings** で、**Override** がオンになっている場合は、次のように揃えてください。

| 項目 | 設定値 |
|------|--------|
| **Framework Preset** | **Other** |
| **Build Command** | `echo 'Pre-built out in repo'`（または Override をオフにして vercel.json に任せる） |
| **Output Directory** | `out` |

**Override をオフ** にすると、`vercel.json` の設定が使われます。

---

## 3. ソースを変えたとき

コードを変更したら、**ローカルで** 次を実行してからコミット・プッシュしてください。Vercel はプッシュされた `out` をそのままデプロイします。

```bash
npm run build
git add out
git commit -m "Update static build"
git push
```
