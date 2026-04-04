/** 本番 Next（SnobbyCoverPcTop / PhoneTop）と同ロジック — react-router 版 */
import PcTop from "./SnobbyCoverPcTop";
import PhoneTop from "./SnobbyCoverPhoneTop";

export default function HomePage() {
  return (
    <>
      {/* PC Version - Hidden on mobile */}
      <div className="hidden md:block">
        <PcTop />
      </div>

      {/* Mobile Version - Hidden on desktop */}
      <div className="block md:hidden">
        <PhoneTop />
      </div>
    </>
  );
}
