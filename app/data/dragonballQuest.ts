/**
 * Find the Dragonball — 大学・パス・謎解き・図書館ヒント（プレースホルダー）
 */

export type UniversityId =
  | "utokyo"
  | "waseda"
  | "keio"
  | "sophia"
  | "tjst"
  | "rikkyo";

export const UNIVERSITIES: {
  id: UniversityId;
  label: string;
  /** 仮パス（数字 1 桁） */
  pass: string;
}[] = [
  { id: "utokyo", label: "東京大学", pass: "1" },
  { id: "waseda", label: "早稲田大学", pass: "2" },
  { id: "keio", label: "慶應大学", pass: "3" },
  { id: "sophia", label: "上智大学", pass: "4" },
  { id: "tjst", label: "東京科学大学", pass: "5" },
  { id: "rikkyo", label: "東京理科大学", pass: "6" },
];

export type RiddleItem = {
  no: number;
  prompt: string;
  /** 正規化後に比較する想定の解答 */
  answers: string[];
};

/** 7 問（後から差し替え可） */
export const RIDDLES: RiddleItem[] = [
  {
    no: 1,
    prompt: "物語の冒頭で、ブルマが悟空に着けていたデバイスは何か（カタカナ4文字）",
    answers: ["ドラゴンレーダー", "ドラゴンレーダ"],
  },
  {
    no: 2,
    prompt: "地球の神龍を呼び出す際に唱える呪文の最後のフレーズは（「〜よ、出てこい」）",
    answers: ["カム・ヒア・ドラゴン", "カムヒアドラゴン"],
  },
  {
    no: 3,
    prompt: "悟空の兄の名前は（カタカナ）",
    answers: ["ラディッツ"],
  },
  {
    no: 4,
    prompt: "ナメック星の神龍の名前は（カタカナ）",
    answers: ["ポルンガ"],
  },
  {
    no: 5,
    prompt: "フリーザが言う「戦闘力」でベジータが計測された初期値は（数字のみ）",
    answers: ["18000", "１８０００"],
  },
  {
    no: 6,
    prompt: "人造人間18号の弟にあたる人造人間は何号か（数字のみ）",
    answers: ["17", "１７"],
  },
  {
    no: 7,
    prompt: "魔人ブウを生み出した術師の名前は（カタカナ）",
    answers: ["ビビディ"],
  },
];

/** 正解時：大学ごとの図書館内ヒント（ダミーテキスト） */
export const LIBRARY_HINTS: Record<UniversityId, string> = {
  utokyo:
    "東京大学 総合図書館 — 2階 北閲覧室 / スティール書架 東列 記号ラベル「DB-Ω」付近の架下段（実施前に必ず当館の利用案内を確認してください）",
  waseda:
    "早稲田大学 中央図書館 — 4F 開架閲覧席ゾーン 窓側カウンター奥、壁面案内板「STACK-N」から数えて3番目の短架（ダミー／企画用）",
  keio:
    "慶應義塾大学 三田メディアセンター — 1F レファレンスデスク右手の地図コーナー背面、固定テーブル下の通風グリル寄り（ダミー）",
  sophia:
    "上智大学 中央図書館 — B1 閉架請求カウンター横、展示ケース「Rare-07」の下段（ダミー）",
  tjst:
    "東京科学大学 図書館（キャンパスにより名称が異なります）— 開架エリア「TS-STACK」標識から南に3ラック（ダミー）",
  rikkyo:
    "東京理科大学 葛飾キャンパス図書館 — 3F 自然科学書架ブロック、記号「CH-DRG」近傍（ダミー）",
};

export function normalizeAnswer(raw: string): string {
  return raw
    .trim()
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .toLowerCase();
}

export function passesMatch(input: string, expected: string): boolean {
  const a = normalizeAnswer(input);
  const b = normalizeAnswer(expected);
  return a === b;
}

export function checkRiddleAnswer(riddleNo: number, raw: string): boolean {
  const r = RIDDLES.find((x) => x.no === riddleNo);
  if (!r) return false;
  const n = normalizeAnswer(raw);
  return r.answers.some((ans) => normalizeAnswer(ans) === n);
}
