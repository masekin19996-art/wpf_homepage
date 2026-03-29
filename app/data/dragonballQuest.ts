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

/**
 * 設問番号（1–7）ごとの図書館内ヒント（ダミー／企画用で差し替え）
 * インデックス 0 = Q1 … 6 = Q7
 */
export const LIBRARY_HINTS_BY_QUESTION: Record<UniversityId, [string, string, string, string, string, string, string]> = {
  utokyo: [
    "東京大学 総合図書館 — 2階 北閲覧室 / スティール書架 東列 ラベル帯「Q01」付近・下から2段目（ダミー）",
    "東京大学 総合図書館 — 2階 北閲覧室 / 同東列 中段 ラベル「Q02」（ダミー）",
    "東京大学 総合図書館 — 3階 参考圖書室 カウンター向かって左手 壁面案内「Q03」（ダミー）",
    "東京大学 総合図書館 — 1階 新館エレベーター前 フロア図パネル裏側メモ欄の指示「Q04」（ダミー）",
    "東京大学 総合図書館 — B1 閉架請求ホール 番号札掲示「Q05」列（ダミー）",
    "東京大学 総合図書館 — 2階 複写機コーナー奥 電話ボックス型ブース脚元マーキング「Q06」（ダミー）",
    "東京大学 総合図書館 — 2階 北閲覧室 / 記号ラベル「DB-Ω」付近の架下段・最終片「Q07」（ダミー）",
  ],
  waseda: [
    "早稲田大学 中央図書館 — 4F 開架閲覧席ゾーン 窓側から3列目 床誘導テープ終端「Q01」（ダミー）",
    "早稲田大学 中央図書館 — 4F 壁面案内板「STACK-N」から数えて1番目の短架「Q02」（ダミー）",
    "早稲田大学 中央図書館 — 3F グループ学習室前 ロッカー列 E ブロック「Q03」（ダミー）",
    "早稲田大学 中央図書館 — 2F 現刊コーナー 最新棚の北端サイン「Q04」（ダミー）",
    "早稲田大学 中央図書館 — 1F 返却口横 パンフレット棚最下段「Q05」（ダミー）",
    "早稲田大学 中央図書館 — B1 マイクロ資料室 受付窓口左「Q06」（ダミー）",
    "早稲田大学 中央図書館 — 4F 開架 窓側カウンター奥 記念展示ケース下「Q07」（ダミー）",
  ],
  keio: [
    "慶應義塾大学 三田メディアセンター — 1F レファレンスデスク右手 地図コーナー先端架「Q01」（ダミー）",
    "慶應義塾大学 三田メディアセンター — 2F 開架北ブロック 番号札「Q02」区画（ダミー）",
    "慶應義塾大学 三田メディアセンター — 3F 閲覧席 窓列 コンセント番号 C-Q03（ダミー）",
    "慶應義塾大学 三田メディアセンター — 1F 複写コーナー 料金表下ステッカー「Q04」（ダミー）",
    "慶應義塾大学 三田メディアセンター — B1 書庫前室 表示灯ボックス「Q05」（ダミー）",
    "慶應義塾大学 三田メディアセンター — 2F グループ閲覧 ホワイトボード脚「Q06」（ダミー）",
    "慶應義塾大学 三田メディアセンター — 1F 固定テーブル下 通風グリル寄りシール「Q07」（ダミー）",
  ],
  sophia: [
    "上智大学 中央図書館 — B1 閉架請求カウンター 窓口右端マップ「Q01」（ダミー）",
    "上智大学 中央図書館 — 2F 開架 神学書架ブロック入口床サイン「Q02」（ダミー）",
    "上智大学 中央図書館 — 3F 雑誌コーナー バックナンバー架 色テープ青「Q03」（ダミー）",
    "上智大学 中央図書館 — 1F アカデミック・コモンズ 申請箱上ラベル「Q04」（ダミー）",
    "上智大学 中央図書館 — B1 展示ケース「Rare-07」上段隣「Q05」（ダミー）",
    "上智大学 中央図書館 — 2F 電源席列 柱番号 P-Q06（ダミー）",
    "上智大学 中央図書館 — B1 展示ケース「Rare-07」の下段「Q07」（ダミー）",
  ],
  tjst: [
    "東京科学大学 図書館 — 開架エリア入口 床誘導「TS-Q01」（キャンパスにより名称差異・ダミー）",
    "東京科学大学 図書館 — 「TS-STACK」標識から南に1ラック目「Q02」（ダミー）",
    "東京科学大学 図書館 — グループ学習室前 掲示ボードピン穴パターン「Q03」（ダミー）",
    "東京科学大学 図書館 — 複合機横 リサイクル箱上シール「Q04」（ダミー）",
    "東京科学大学 図書館 — 閉架事務室 ガラス面ステッカー「Q05」（ダミー）",
    "東京科学大学 図書館 — 電子ジャーナル端末列 端末ID末尾 Q06（ダミー）",
    "東京科学大学 図書館 — 「TS-STACK」標識から南に3ラック「Q07」（ダミー）",
  ],
  rikkyo: [
    "東京理科大学 葛飾キャンパス図書館 — 3F 自然科学書架ブロック 列頭札「Q01」（ダミー）",
    "東京理科大学 葛飾キャンパス図書館 — 2F 工学書架 通路中央床プレート「Q02」（ダミー）",
    "東京理科大学 葛飾キャンパス図書館 — 1F 参考ツール棚 幅広架下端「Q03」（ダミー）",
    "東京理科大学 葛飾キャンパス図書館 — 3F 記号「CH-DRG」架から東2bay「Q04」（ダミー）",
    "東京理科大学 葛飾キャンパス図書館 — 閲覧席アーム左 番号シール「Q05」（ダミー）",
    "東京理科大学 葛飾キャンパス図書館 — 複写プリペイド機横 釣銭口上「Q06」（ダミー）",
    "東京理科大学 葛飾キャンパス図書館 — 3F 自然科学書架 記号「CH-DRG」近傍「Q07」（ダミー）",
  ],
};

export function getLibraryHintForQuestion(
  uni: UniversityId,
  riddleNo: number,
): string | null {
  const row = LIBRARY_HINTS_BY_QUESTION[uni];
  const idx = riddleNo - 1;
  if (idx < 0 || idx >= row.length) return null;
  return row[idx];
}

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
