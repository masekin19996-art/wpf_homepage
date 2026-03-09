# Vercel で routes-manifest.json エラーが出る場合

このプロジェクトは **Next.js の静的エクスポート**（`out` フォルダ）なので、Vercel では **Next.js ではなく「静的サイト」として** デプロイする必要があります。

## 必須設定（Vercel ダッシュボード）

**Settings** → **General** → **Build & Output Settings** で次を設定してください。

| 項目 | 設定値 |
|------|--------|
| **Framework Preset** | **Other**（Next.js にしない） |
| **Build Command** | `npm run build` |
| **Output Directory** | `out` |
| **Install Command** | `npm install` のままで可 |

### なぜ「Other」にするか

- **Next.js** を選ぶと、Vercel は `out` の中に `routes-manifest.json` などのサーバー用ファイルがあると期待します。
- 静的エクスポートではこれらのファイルは生成されないため、**routes-manifest.json が見つからない** エラーになります。
- **Other** にすると「ビルド結果の `out` をそのまま配信するだけ」になるため、エラーが出ません。

設定を変えたら **Redeploy** を実行してください。
