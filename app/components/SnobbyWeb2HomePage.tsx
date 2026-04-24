"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";
import PcTop from "../../snobby-web2-src/imports/PcTop-26-4483";
import PhoneTop from "../../snobby-web2-src/imports/PhoneTop-26-4479";

export default function SnobbyWeb2HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("snobbycover-scrollable");
    return () => document.documentElement.classList.remove("snobbycover-scrollable");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname.includes("snobbycover")) {
      document.title = "snobbybookcover";
    }
  }, []);

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="hidden min-w-0 w-full max-w-[100vw] overflow-x-hidden md:block">
        <PcTop />
      </div>
      <div className="min-w-0 w-full max-w-[100vw] overflow-x-hidden md:hidden">
        <PhoneTop />
      </div>
    </>
  );
}
