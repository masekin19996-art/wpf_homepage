# whenpigsfly.jp サブドメイン公開ガイド

このドキュメントでは、本プロジェクト（Wii風モック）を **mock.whenpigsfly.jp** で一般公開するための手順をまとめます。

- **メインドメイン whenpigsfly.jp** は Shopify のまま変更しません。
- **サブドメイン mock.whenpigsfly.jp** のみ、静的ホスティング（Vercel / Netlify / Cloudflare Pages）に紐付けます。

---

## 1. ビルドと静的書き出し（out）

### 1.1 ローカルで確認

```bash
npm install
npm run build
```

- ビルド完了後、**`out`** フォルダが生成されます。
- 中身: `index.html`, `404.html`, `_next/`（JS/CSS）, `wpf-logo.png` など。

### 1.2 出力の確認

| 項目 | 値 |
|------|-----|
| 出力ディレクトリ | `out` |
| ルートページ | `out/index.html` |
| 404 ページ | `out/404.html` |

---

## 2. デプロイ先の選択と準備

いずれか **1 つ** を選んでデプロイします。サブドメイン用 DNS は「3. お名前.com DNS 設定」で共通です。

---

### 2A. Vercel（推奨：Next に最適）

1. [Vercel](https://vercel.com) にログイン（GitHub 連携推奨）。
2. **Add New → Project** で当リポジトリをインポート。
3. **Framework Preset**: Next.js のまま。
4. **Build and Output Settings**（任意）:
   - Build Command: `npm run build`
   - Output Directory: `out`
5. **Deploy** を実行。
6. デプロイ後、**Settings → Domains** で `mock.whenpigsfly.jp` を追加。
7. Vercel が表示する **CNAME の指示** を控える（多くの場合 `cname.vercel-dns.com` またはプロジェクト用 xxx.vercel.app）。

**Vercel で表示されるドメイン例:**
- デフォルト: `my-wii-project-xxxx.vercel.app`
- カスタム: `mock.whenpigsfly.jp`（DNS 設定後）

---

### 2B. Netlify

1. [Netlify](https://netlify.com) にログイン。
2. **Add new site → Import an existing project** で Git リポジトリを接続。
3. ビルド設定（`netlify.toml` で済ませています）:
   - Build command: `npm run build`
   - Publish directory: `out`
4. **Deploy site** を実行。
5. **Domain settings → Add custom domain** で `mock.whenpigsfly.jp` を追加。
6. Netlify の **DNS の指示**（CNAME 先）を控える。通常は `xxxx.netlify.app` のようなサイト名。

**Netlify の CNAME 先例:**
- `xxxx.netlify.app`（サイトのサブドメイン名）

---

### 2C. Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
2. リポジトリを選択。
3. ビルド設定:
   - Framework preset: Next.js（Static HTML でも可）
   - Build command: `npm run build`
   - Build output directory: `out`
4. **Save and Deploy**。
5. **Custom domains** で `mock.whenpigsfly.jp` を追加。
6. Cloudflare 側で **DNS を管理する場合** は、同じ Cloudflare 内で CNAME を追加（下記「3. お名前.com DNS」は「お名前.com で DNS を管理する場合」用です）。

**Cloudflare Pages の CNAME 先例:**
- `<project>.pages.dev`

---

## 3. お名前.com での DNS 設定（サブドメインのみ）

**前提:**  
- **whenpigsfly.jp（ルート）** は Shopify 用の A レコード・CNAME 等を **そのままにします。**  
- **追加するのは mock.whenpigsfly.jp 用の CNAME だけ** にします。

### 3.1 お名前.com でやること

1. お名前.com の **ネームサーバー** で whenpigsfly.jp の DNS を管理していることを確認。
2. **DNS 設定 / レコード設定** を開く。
3. **「レコードの追加」** で次の **1 件だけ** 追加。

### 3.2 追加するレコード（デプロイ先別）

| デプロイ先 | ホスト名 | タイプ | 値（レコードの内容） | TTL |
|------------|----------|--------|------------------------|-----|
| **Vercel** | `mock` | CNAME | `cname.vercel-dns.com` | 3600（または既定） |
| **Netlify** | `mock` | CNAME | `xxxx.netlify.app`（Netlify が表示するサイト URL） | 3600 |
| **Cloudflare Pages** | `mock` | CNAME | `<プロジェクト名>.pages.dev` | 3600 |

- **ホスト名** は `mock` のみ。`mock.whenpigsfly.jp` 全体ではなく、サブドメイン部分だけです（お名前.com の画面で「@」や「www」の隣に「mock」と入力する欄）。
- **A レコードは追加しない**（サブドメインは CNAME のみで十分です）。
- ルート（whenpigsfly.jp）用の A レコードや CNAME は **変更・削除しない** でください。

### 3.3 設定値の取得方法

- **Vercel**: ダッシュボード **Settings → Domains** で `mock.whenpigsfly.jp` を追加すると、CNAME 先（多くは `cname.vercel-dns.com`）が表示されます。
- **Netlify**: **Domain settings → DNS configuration** に「CNAME レコード」の値（例: `xxxx.netlify.app`）が書いてあります。
- **Cloudflare Pages**: **Custom domains** で追加すると、CNAME 先が `xxx.pages.dev` と表示されます。その値をそのまま使います。

### 3.4 反映待ち

- 反映まで **数分〜最大 48 時間** かかることがあります。
- 確認: ブラウザで `https://mock.whenpigsfly.jp` を開く。

---

## 4. サブドメイン戦略（今後、mock2 / mock3 を増やす場合）

- **1 サイト = 1 サブドメイン** にすると管理しやすいです。
- 例:  
  - 今回: `mock.whenpigsfly.jp` → この Wii モック  
  - 今後: `mock2.whenpigsfly.jp`, `portfolio.whenpigsfly.jp` など

### 4.1 お名前.com での追加手順（2 サイト目以降）

1. 新しいサイトを Vercel / Netlify / Cloudflare Pages にデプロイ。
2. そのサイトに **新しいカスタムドメイン** を追加（例: `mock2.whenpigsfly.jp`）。
3. お名前.com の DNS で **レコードを 1 件追加**:
   - ホスト名: `mock2`（または任意のサブドメイン名）
   - タイプ: CNAME
   - 値: そのサービスが表示する CNAME 先（Vercel の場合は多くの場合 `cname.vercel-dns.com`、Netlify/CF はそれぞれの指示通り）。
4. **whenpigsfly.jp や mock.whenpigsfly.jp の既存レコードは触らない**。

### 4.2 運用のコツ

- **サブドメイン名** は用途で分ける（例: `mock`, `mock2`, `app`, `blog`）。
- 各サービス（Vercel/Netlify/CF）の「カスタムドメイン」に、対応するサブドメインを 1 対 1 で登録するだけです。

---

## 5. チェックリスト

- [ ] `npm run build` で `out` が生成される
- [ ] デプロイ先（Vercel / Netlify / Cloudflare Pages）のいずれかにデプロイ済み
- [ ] そのサービスで `mock.whenpigsfly.jp` をカスタムドメインとして追加
- [ ] お名前.com で **ホスト名 `mock`、CNAME、値（サービスから表示された CNAME 先）** を 1 件だけ追加
- [ ] whenpigsfly.jp の既存 DNS（Shopify 用）は変更していない
- [ ] しばらく待ってから `https://mock.whenpigsfly.jp` にアクセスして表示確認

---

## 6. トラブルシューティング

| 現象 | 確認すること |
|------|----------------|
| 404 / サイトが出ない | デプロイ先の「公開ディレクトリ」が `out` になっているか確認。 |
| DNS が反映されない | お名前.com の「ホスト名」が `mock` だけか確認。`mock.whenpigsfly.jp` とフルで入れていないか。 |
| ルートドメインがおかしくなった | お名前.com で **A レコードや www の CNAME を変更・削除していないか** 確認。触るのは `mock` の CNAME だけにすること。 |
| HTTPS が効かない | Vercel/Netlify/CF は通常、カスタムドメイン追加後に自動で証明書を発行します。反映まで 数分〜24 時間かかることがあります。 |

---

## 7. まとめ：今回追加する DNS レコード（コピー用）

**お名前.com で追加するレコード（1 件のみ）:**

```
ホスト名:  mock
タイプ:    CNAME
値:        （デプロイ先の指示に従う）
           ・Vercel の場合の例: cname.vercel-dns.com
           ・Netlify の場合の例: xxxx.netlify.app
           ・Cloudflare Pages の場合の例: xxxx.pages.dev
TTL:       3600（または規定値）
```

**変更・削除しないもの:**  
whenpigsfly.jp（ルート）や www 用の既存の A レコード・CNAME（Shopify 用）はそのままにしてください。
