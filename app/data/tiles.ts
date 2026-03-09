export interface TileData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
}

export const tiles: TileData[] = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  title: "EXAMPLE",
  subtitle: `Channel ${i + 1}`,
  description: "サンプルプロジェクトのデモンストレーションです。ENTERを押すと別サイトへ移動します。",
  url: "https://example.com",
}));
