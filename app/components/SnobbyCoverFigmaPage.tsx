"use client";

import SnobbyCoverPcTop from "./SnobbyCoverPcTop";
import SnobbyCoverPhoneTop from "./SnobbyCoverPhoneTop";

/**
 * snobbycover ランディング。実装は本リポジトリの `snobby-cover-web/`
 * （Figma エクスポート＋本番同等のマーキーPDF・Collection hover）と同一ロジックの Next 版。
 */
export default function SnobbyCoverFigmaPage() {
  return (
    <>
      <div className="hidden md:block">
        <SnobbyCoverPcTop />
      </div>
      <div className="md:hidden">
        <SnobbyCoverPhoneTop />
      </div>
    </>
  );
}
