import { useState } from "react";

interface DownloadDropdownProps {
  type: "pc" | "phone";
}

export function DownloadDropdownPC() {
  const [isOpen, setIsOpen] = useState(false);

  const sizes = [
    { name: "文庫判：105 × 148mm", file: "bunko.pdf" },
    { name: "新書判：103 × 182mm", file: "shinsho.pdf" },
    { name: "B6判：128 × 182mm", file: "b6.pdf" },
    { name: "四六判：127 × 188mm", file: "shirokunban.pdf" },
    { name: "A5判：148 × 210mm", file: "a5.pdf" }
  ];

  return (
    <div className="relative shrink-0 w-full">
      <button
        className="bg-[#002daa] cursor-pointer relative w-full transition-colors hover:bg-[#0024aa]"
        data-name="PC_pull-down-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative w-full">
            <p className="font-['Instrument_Serif',sans-serif] tracking-[-0.01em] leading-[normal] not-italic relative shrink-0 text-[28px] text-left text-white whitespace-nowrap">DOWNLOAD Cover Data</p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className={`flex-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
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
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fade-in z-10">
          {sizes.map((size, index) => (
            <a
              key={index}
              href={`#download-${size.file}`}
              className="block px-6 py-4 text-[15px] text-black hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 font-['Noto_Sans_JP:Light',sans-serif]"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                console.log(`Downloading: ${size.file}`);
              }}
            >
              {size.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function DownloadDropdownPhone() {
  const [isOpen, setIsOpen] = useState(false);

  const sizes = [
    { name: "文庫判：105 × 148mm", file: "bunko.pdf" },
    { name: "新書判：103 × 182mm", file: "shinsho.pdf" },
    { name: "B6判：128 × 182mm", file: "b6.pdf" },
    { name: "四六判：127 × 188mm", file: "shirokunban.pdf" },
    { name: "A5判：148 × 210mm", file: "a5.pdf" }
  ];

  return (
    <div className="relative w-[300px]">
      <button
        className="bg-[#002daa] content-stretch cursor-pointer flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[10px] relative w-full transition-colors hover:bg-[#0024aa]"
        data-name="Phone_pull-down-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-['Instrument_Serif',sans-serif] tracking-[-0.01em] leading-[normal] not-italic relative shrink-0 text-[24px] text-left text-white whitespace-nowrap">DOWNLOAD Cover Data</p>
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Arrow Icon">
          <div className="flex items-center justify-center relative shrink-0">
            <div className={`flex-none transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}>
              <div className="h-[9.65px] relative w-[13px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9.65">
                  <path d="M6.5 0L13 9.65H0L6.5 0Z" fill="var(--fill-0, white)" id="Polygon 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fade-in z-10">
          {sizes.map((size, index) => (
            <a
              key={index}
              href={`#download-${size.file}`}
              className="block px-4 py-3 text-[13px] text-black hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 font-['Noto_Sans_JP:Light',sans-serif]"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                console.log(`Downloading: ${size.file}`);
              }}
            >
              {size.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
