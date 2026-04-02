"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SnobbyCoverTypeDetailPc from "./SnobbyCoverTypeDetailPc";
import SnobbyCoverTypeDetailPhone from "./SnobbyCoverTypeDetailPhone";

const VALID = new Set(["a", "b", "c", "d", "e", "f", "g", "h"]);

export default function SnobbyCoverTypePageClient({ typeId }: { typeId: string }) {
  const router = useRouter();
  const id = typeId.toLowerCase();

  useEffect(() => {
    document.documentElement.classList.add("snobbycover-scrollable");
    return () => document.documentElement.classList.remove("snobbycover-scrollable");
  }, []);

  useEffect(() => {
    if (!VALID.has(id)) router.replace("/");
  }, [id, router]);

  if (!VALID.has(id)) {
    return <div className="min-h-screen bg-black" aria-hidden />;
  }

  return (
    <>
      <div className="hidden md:block">
        <SnobbyCoverTypeDetailPc />
      </div>
      <div className="md:hidden">
        <SnobbyCoverTypeDetailPhone />
      </div>
    </>
  );
}
