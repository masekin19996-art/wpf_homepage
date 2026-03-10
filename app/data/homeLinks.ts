/**
 * 1ページ目・上段の「クリックできる4つの角丸長方形」のリンク先です。
 * ここを編集するだけで、それぞれのボタンが飛ぶURLを変更できます。
 *
 * 手順は docs/4つのリンクの設定手順.md を参照。
 */

export interface HomeLinkItem {
  /** クリック時に開くURL（例: https://example.com） */
  url: string;
  /** ボタンの名前（アクセシビリティ・ツールチップ用。任意） */
  title: string;
  /** サムネイル画像のURL（後から画像を入れる場合に使用。未使用なら省略可） */
  imageUrl?: string;
}

/**
 * 上段左から順に、1番・2番・3番・4番のリンクです。
 * 並び順を変えたい場合は、この配列の順序を入れ替えてください。
 */
export const homeLinks: HomeLinkItem[] = [
  { url: "https://ultra.omamori.whenpigsfly.jp", title: "ultra.omamori" },
  { url: "https://snobbycover.whenpigsfly.jp", title: "snobbycover" },
  { url: "https://hickeytattoo.whenpigsfly.jp", title: "hickeytattoo" },
  { url: "https://gummygummy.whenpigsfly.jp", title: "gummygummy" },
];
