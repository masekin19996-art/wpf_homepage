"use client";

import SnobbyCoverPcTop from "./SnobbyCoverPcTop";
import SnobbyCoverPhoneTop from "./SnobbyCoverPhoneTop";

/**
 * snobbycover サブドメイン用ランディング（Snobby_Cover_web_260331 相当・PC/スマホ切替）
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
