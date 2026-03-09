# GitHub へプッシュする手順

リポジトリの初期化と初回コミット（`out` 含む）は済んでいます。あとは **GitHub で新しいリポジトリを作成** し、**リモートを追加してプッシュ** するだけです。

---

## 1. GitHub で新しいリポジトリを作成

1. [GitHub](https://github.com/new) にログインして **New repository** を開く。
2. 次を設定：
   - **Repository name**: 例）`MyWiiProject` または `wii-menu-mock`
   - **Description**: 任意（例：Wii風ポートフォリオモック）
   - **Public** を選択。
   - **「Add a README file」はチェックしない**（既にローカルにコードがあるため）。
   - **Create repository** をクリック。

---

## 2. リモートを追加してプッシュ

GitHub の作成後画面に表示される **リポジトリURL** を使います。

### リポジトリURL の例
- HTTPS: `https://github.com/あなたのユーザー名/MyWiiProject.git`
- SSH:   `git@github.com:あなたのユーザー名/MyWiiProject.git`

### ターミナルで実行（URL は自分のものに置き換える）

```bash
cd "/Users/sekoma/Desktop/プログラム＆拡張/Claude Code フォルダ/MyWiiProject"

# リモートを追加（HTTPS の例）
git remote add origin https://github.com/あなたのユーザー名/MyWiiProject.git

# プッシュ
git push -u origin main
```

**SSH を使う場合:**
```bash
git remote add origin git@github.com:あなたのユーザー名/MyWiiProject.git
git push -u origin main
```

- 初回プッシュ時に GitHub のログイン（HTTPS ならパスワードまたはトークン、SSH なら鍵）が求められます。
- プッシュが完了すると、GitHub のリポジトリページにソースと **out** が反映されています。

---

## 3. 確認

- GitHub のリポジトリページで **out** フォルダが表示されていること。
- 静的ホスティング（Vercel / Netlify / Cloudflare Pages）で「リポジトリからデプロイ」する場合は、**公開ディレクトリを `out`** に設定してください。
