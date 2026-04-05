"use client";

import { Toaster } from "sonner";
import PcTop from "../../snobby-web2-src/imports/PcTop-26-4483";
import PhoneTop from "../../snobby-web2-src/imports/PhoneTop-26-4479";

export default function SnobbyWeb2HomePage() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="hidden md:block">
        <PcTop />
      </div>
      <div className="md:hidden">
        <PhoneTop />
      </div>
    </>
  );
}
