function ButtonFrame() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center mb-[-1px] py-[10px] relative shrink-0 w-full" data-name="Button Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-left tracking-[-0.28px] whitespace-nowrap">DOWNLOAD Cover Data</p>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Down Arrow">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[14.846px] relative w-[20px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.8462">
                <path d="M10 0L20 14.8462H0L10 0Z" fill="var(--fill-0, black)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PcPullDownButton() {
  return (
    <button className="cursor-pointer relative size-full" data-name="PC_pull-down-button">
      <div className="content-stretch flex flex-col items-end pb-px relative size-full">
        <div className="bg-white content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Pull-Down Menu">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <div className="bg-white relative shrink-0 w-full" data-name="PC_pull-down-menu-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative w-full">
                <p className="flex-[1_0_0] font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-left">文庫判</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="PC_pull-down-menu-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative w-full">
                <p className="flex-[1_0_0] font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-left">新書判</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="PC_pull-down-menu-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative w-full">
                <p className="flex-[1_0_0] font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-left">B6判</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="PC_pull-down-menu-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative w-full">
                <p className="flex-[1_0_0] font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-left">四六判</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="PC_pull-down-menu-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[15px] relative w-full">
                <p className="flex-[1_0_0] font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black text-left">A5判</p>
              </div>
            </div>
          </div>
        </div>
        <ButtonFrame />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </button>
  );
}