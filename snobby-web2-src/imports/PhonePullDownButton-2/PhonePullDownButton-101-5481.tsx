export default function PhonePullDownButton() {
  return (
    <button className="bg-[#002daa] content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative size-full" data-name="Phone_pull-down-button">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-left text-white tracking-[-0.24px] whitespace-nowrap">DOWNLOAD Cover Data</p>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Arrow Icon">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[9.65px] relative w-[13px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9.65">
                <path d="M6.5 0L13 9.65H0L6.5 0Z" fill="var(--fill-0, white)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}