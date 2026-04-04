"use client";

import SnobbyCoverPcTop from "./SnobbyCoverPcTop";
import SnobbyCoverPhoneTop from "./SnobbyCoverPhoneTop";

/**
 * snobbycover ランディング（Snobby-Cover_web PcTop-26-4483 / PhoneTop-26-4479 基板＋マーキーPDF・Collection hover 暗転）
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
