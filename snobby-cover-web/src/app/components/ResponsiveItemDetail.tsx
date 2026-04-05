import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router";
import PcTypeA from "../../imports/PcTypeA-2-1/PcTypeA-80-4826";
import PcTypeB from "../../imports/PcTypeB-2-1/PcTypeB";
import PcTypeC from "../../imports/PcTypeC-2-1/PcTypeC";
import PcTypeD from "../../imports/PcTypeD-2-1/PcTypeD";
import PcTypeE from "../../imports/PcTypeE/PcTypeE";
import PcTypeF from "../../imports/PcTypeF/PcTypeF";
import PcTypeG from "../../imports/PcTypeG/PcTypeG";
import PcTypeH from "../../imports/PcTypeH/PcTypeH";
import PhoneTypeA from "../../imports/PhoneTypeA-2-1/PhoneTypeA-80-4975";
import PhoneTypeB from "../../imports/PhoneTypeB-2-1/PhoneTypeB";
import PhoneTypeC from "../../imports/PhoneTypeC-2-1/PhoneTypeC";
import PhoneTypeD from "../../imports/PhoneTypeD-2-1/PhoneTypeD";
import PhoneTypeE from "../../imports/PhoneTypeE/PhoneTypeE";
import PhoneTypeF from "../../imports/PhoneTypeF/PhoneTypeF";
import PhoneTypeG from "../../imports/PhoneTypeG/PhoneTypeG";
import PhoneTypeH from "../../imports/PhoneTypeH/PhoneTypeH";

const pcComponents: Record<string, React.ComponentType> = {
  a: PcTypeA,
  b: PcTypeB,
  c: PcTypeC,
  d: PcTypeD,
  e: PcTypeE,
  f: PcTypeF,
  g: PcTypeG,
  h: PcTypeH,
};

const phoneComponents: Record<string, React.ComponentType> = {
  a: PhoneTypeA,
  b: PhoneTypeB,
  c: PhoneTypeC,
  d: PhoneTypeD,
  e: PhoneTypeE,
  f: PhoneTypeF,
  g: PhoneTypeG,
  h: PhoneTypeH,
};

export default function ResponsiveItemDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const validTypes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const typeId = id?.toLowerCase() || 'a';

  useLayoutEffect(() => {
    if (!validTypes.includes(typeId)) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [typeId]);
  
  if (!validTypes.includes(typeId)) {
    navigate('/');
    return null;
  }

  const PcComponent = pcComponents[typeId] || PcTypeA;
  const PhoneComponent = phoneComponents[typeId] || PhoneTypeA;

  return (
    <div className="min-w-0 max-w-full overflow-x-hidden">
      {/* PC Version - Hidden on mobile */}
      <div className="hidden min-w-0 max-w-full md:block">
        <PcComponent />
      </div>

      {/* Mobile Version - Hidden on desktop */}
      <div className="block min-w-0 max-w-full md:hidden">
        <PhoneComponent />
      </div>
    </div>
  );
}
