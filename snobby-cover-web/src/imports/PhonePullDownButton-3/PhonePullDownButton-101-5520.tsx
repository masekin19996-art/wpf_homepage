function Container() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center py-[10px] relative shrink-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-left tracking-[-0.24px] whitespace-nowrap">DOWNLOAD Cover Data</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="content-stretch flex flex-col items-center justify-center relative" data-name="Arrow Icon">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <div className="h-[9.65px] relative w-[13px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9.65">
                    <path d="M6.5 0L13 9.65H0L6.5 0Z" fill="var(--fill-0, black)" id="Polygon 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhonePullDownButton() {
  return (
    <button className="cursor-pointer relative size-full" data-name="Phone_pull-down-button">
      <div className="content-stretch flex flex-col items-center relative size-full">
        <Container />
        <div className="bg-white content-stretch cursor-pointer flex flex-col items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Dropdown Menu">
          <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[10px] relative shrink-0 w-[300px]" data-name="Phone_pull-down-menu-item">
            <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[13px] text-black text-left">文庫判</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[10px] relative shrink-0 w-[300px]" data-name="Phone_pull-down-menu-item">
            <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[13px] text-black text-left">新書判</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[10px] relative shrink-0 w-[300px]" data-name="Phone_pull-down-menu-item">
            <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[13px] text-black text-left">B6判</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[10px] relative shrink-0 w-[300px]" data-name="Phone_pull-down-menu-item">
            <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[13px] text-black text-left">四六判</p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[10px] relative shrink-0 w-[300px]" data-name="Phone_pull-down-menu-item">
            <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[13px] text-black text-left">A5判</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </button>
  );
}