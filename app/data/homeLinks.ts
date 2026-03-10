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
  { url: "https://ultra_omamori.whenpigsfly.jp", title: "ultra_omamori" },
  { url: "https://snobby_cover.whenpigsfly.jp", title: "snobby_cover" },
  { url: "https://hickey_tattoo.whenpigsfly.jp", title: "hickey_tattoo" },
  { url: "https://gummy_gummy.whenpigsfly.jp", title: "gummy_gummy" },
];
