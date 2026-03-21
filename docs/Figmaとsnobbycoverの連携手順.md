# Figma と snobbycover の連携手順

Figma の編集を snobbycover サイトに反映する手順です。

---

## ファイルキー

- **Snobby_manga_cover**: `OxkTcaOwIejjSgqn4YCbpe`
- Figma の URL `figma.com/design/OxkTcaOwIejjSgqn4YCbpe/...` から確認可能

---

## 全部まとめてエクスポートする方法

### 1. トークンを取得

1. [Figma](https://www.figma.com) にログイン
2. プロフィール → **Settings** → **Account** → **Personal access tokens**
3. **Generate new token** でトークンを発行し、コピーして保存

### 2. 一括エクスポートを実行

```bash
FIGMA_ACCESS_TOKEN=あなたのトークン npm run figma:sync:all
```

これで、Figma ファイル内の **FRAME / COMPONENT / INSTANCE** がすべて `public/snobbycover/` に保存されます。ファイル名はレイヤー名から自動で付けられます。

---

## この画面（Figma）からやること

1. **編集権限があること**  
   - 「閲覧とコメントのみ」の場合は **編集開始** ボタンで編集モードにする

2. **一括エクスポート**  
   - 上記の `npm run figma:sync:all` を実行すれば、この画面にあるスライド（Slide 16:9 - 1, 2, 3 など）やコンポーネントが自動でエクスポートされます。

3. **特定のページだけエクスポートしたい場合**  
   - `figma-sync.config.json` の `exportAll.pageName` にページ名を指定

```json
"exportAll": {
  "enabled": true,
  "pageName": "Page 1"
}
```

---

## Node ID を個別に使う場合

特定のレイヤーだけを個別指定したいとき：

1. Figma で対象レイヤーをクリック
2. URL の `?node-id=0-1` の `0-1` をコピー
3. ハイフンをコロンに変換: `0-1` → `0:1`
4. `figma-sync.config.json` の `assets` に追加

```json
{
  "filename": "book.png",
  "nodeId": "0:1",
  "description": "表紙"
}
```

```bash
FIGMA_ACCESS_TOKEN=xxx npm run figma:sync
```

---

## ノード一覧を確認する

どの Node ID があるか確認したいとき：

```bash
FIGMA_ACCESS_TOKEN=あなたのトークン npm run figma:list-nodes
```

---

## まとめ

| やりたいこと | コマンド |
|-------------|----------|
| **全部まとめてエクスポート** | `npm run figma:sync:all` |
| 個別の Node ID でエクスポート | `npm run figma:sync` |
| Node ID 一覧を表示 | `npm run figma:list-nodes` |

**一番手軽なのは `figma:sync:all`** です。Node ID を 1 つずつ調べる必要はありません。
