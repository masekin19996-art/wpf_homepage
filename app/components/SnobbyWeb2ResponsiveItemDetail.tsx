"use client";

import { useLayoutEffect, type ComponentType } from "react";
import { Toaster } from "sonner";
import PcTypeA from "../../snobby-web2-src/imports/PcTypeA-2-1/PcTypeA-80-4826";
import PcTypeB from "../../snobby-web2-src/imports/PcTypeB-2-1/PcTypeB";
import PcTypeC from "../../snobby-web2-src/imports/PcTypeC-2-1/PcTypeC";
import PcTypeD from "../../snobby-web2-src/imports/PcTypeD-2-1/PcTypeD";
import PcTypeE from "../../snobby-web2-src/imports/PcTypeE/PcTypeE";
import PcTypeF from "../../snobby-web2-src/imports/PcTypeF/PcTypeF";
import PcTypeG from "../../snobby-web2-src/imports/PcTypeG/PcTypeG";
import PcTypeH from "../../snobby-web2-src/imports/PcTypeH/PcTypeH";
import PhoneTypeA from "../../snobby-web2-src/imports/PhoneTypeA-2-1/PhoneTypeA-80-4975";
import PhoneTypeB from "../../snobby-web2-src/imports/PhoneTypeB-2-1/PhoneTypeB";
import PhoneTypeC from "../../snobby-web2-src/imports/PhoneTypeC-2-1/PhoneTypeC";
import PhoneTypeD from "../../snobby-web2-src/imports/PhoneTypeD-2-1/PhoneTypeD";
import PhoneTypeE from "../../snobby-web2-src/imports/PhoneTypeE/PhoneTypeE";
import PhoneTypeF from "../../snobby-web2-src/imports/PhoneTypeF/PhoneTypeF";
import PhoneTypeG from "../../snobby-web2-src/imports/PhoneTypeG/PhoneTypeG";
import PhoneTypeH from "../../snobby-web2-src/imports/PhoneTypeH/PhoneTypeH";

const pcComponents: Record<string, ComponentType> = {
  a: PcTypeA,
  b: PcTypeB,
  c: PcTypeC,
  d: PcTypeD,
  e: PcTypeE,
  f: PcTypeF,
  g: PcTypeG,
  h: PcTypeH,
};

const phoneComponents: Record<string, ComponentType> = {
  a: PhoneTypeA,
  b: PhoneTypeB,
  c: PhoneTypeC,
  d: PhoneTypeD,
  e: PhoneTypeE,
  f: PhoneTypeF,
  g: PhoneTypeG,
  h: PhoneTypeH,
};

export default function SnobbyWeb2ResponsiveItemDetail({ typeId }: { typeId: string }) {
  const id = typeId.toLowerCase();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  const PcComponent = pcComponents[id] ?? PcTypeA;
  const PhoneComponent = phoneComponents[id] ?? PhoneTypeA;

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="min-w-0 max-w-full overflow-x-hidden">
        <div className="hidden min-w-0 max-w-full md:block">
          <PcComponent />
        </div>
        <div className="block min-w-0 max-w-full md:hidden">
          <PhoneComponent />
        </div>
      </div>
    </>
  );
}
