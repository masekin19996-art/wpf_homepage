import PcTop from "../../imports/PcTop-20-3337";
import PhoneTop from "../../imports/PhoneTop-20-3333";

export default function ResponsiveWebsite() {
  return (
    <div className="relative min-h-screen">
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden md:block">
        <PcTop />
      </div>

      {/* Mobile Version - Hidden on desktop */}
      <div className="block md:hidden">
        <PhoneTop />
      </div>
    </div>
  );
}