"use client";

import { useState, useEffect } from "react";
import WiiMenu from "./WiiMenu";
import BlankPage from "./BlankPage";

/** このドメインで開いたときは「まっさらなページ」を表示する */
const BLANK_PAGE_HOSTS = [
  "ultra.omamori.whenpigsfly.jp",
  "snobbycover.whenpigsfly.jp",
  "hickeytattoo.whenpigsfly.jp",
  "gummygummy.whenpigsfly.jp",
];

export default function HostAwarePage() {
  const [showWii, setShowWii] = useState<boolean | null>(null);

  useEffect(() => {
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    setShowWii(!BLANK_PAGE_HOSTS.includes(host));
  }, []);

  if (showWii === null) {
    return (
      <div
        className="min-h-screen w-full"
        style={{ background: "#f8f9fa", margin: 0, padding: 0 }}
      />
    );
  }
  return showWii ? <WiiMenu /> : <BlankPage />;
}
