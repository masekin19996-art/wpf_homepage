export default function PcPullDownButton() {
  return (
    <button className="bg-[#002daa] content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative size-full" data-name="PC_pull-down-button">
      <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[28px] text-left text-white tracking-[-0.28px] whitespace-nowrap">DOWNLOAD This Cover Data</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="content-stretch flex flex-col items-center justify-center relative" data-name="Down Arrow">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <div className="h-[14.846px] relative w-[20px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.8462">
                    <path d="M10 0L20 14.8462H0L10 0Z" fill="var(--fill-0, white)" id="Polygon 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}