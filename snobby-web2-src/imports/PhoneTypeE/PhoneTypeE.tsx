import { imgUrl } from "../../imgUrl";
import svgPaths from "./svg-r1qc3fknbk";
import imgImage1 from "../../assets/216527f26b77a26dc101fee4191cdf3117f91333.png";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { coverPdfHref } from "../../lib/coverPdfHref";
import { DownloadSizeAnchor } from "../../components/DownloadSizeAnchor";

const COVER_TYPE = "E" as const;

function Frame4() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage1)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[30px] relative shrink-0 text-black w-full">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap">Size Guide</p>
      <div className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[0px] tracking-[0.22px] w-[min-content] whitespace-pre-wrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] mb-0 text-[11px] underline">文庫判：105 × 148mm</p>
        <p className="leading-[22px] mb-0 text-[11px]">一般的な文庫本のサイズ。岩波文庫、新潮文庫、講談社文庫などのほか、A6判の小型手帳などにも適合。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] mb-0 text-[11px] underline">新書判：103 × 182mm</p>
        <p className="leading-[22px] mb-0 text-[11px]">「少年ジャンプ」や「少年マガジン」などの少年・少女漫画の単行本に最も多いサイズ。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] mb-0 text-[11px] underline">B6判：128 × 182mm</p>
        <p className="leading-[22px] mb-0 text-[11px]">「モーニング」や「アフタヌーン」などの青年漫画の単行本に多いサイズ。新書判よりも横幅と厚みがあるコミックスに適す。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] mb-0 text-[11px] underline">四六判：127 × 188mm</p>
        <p className="leading-[22px] mb-0 text-[11px]">書店の新刊コーナーに並ぶ一般的な単行本（文芸書、エッセイなど）のサイズ。ハードカバーのほか、厚手のソフトカバー本にも適合。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] mb-0 text-[11px] underline">A5判：148 × 210mm</p>
        <p className="leading-[22px] mb-0 text-[11px]">漫画の「完全版」や「愛蔵版」、教科書や学術雑誌などに用いられる大判サイズ。</p>
        <p className="leading-[22px] mb-0 text-[11px]">&nbsp;</p>
        <p className="leading-[22px] text-[11px]">※いずれのサイズも、背表紙の厚みに合わせて折り返し部分で幅を調整できる仕様となっています。</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-black w-full">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap">How to Use</p>
      <p className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[22px] min-w-full relative shrink-0 text-[11px] tracking-[0.22px] w-[min-content]">上のダウンロードボタンから、カバーのデザインデータをダウンロードいただけます。アクセアなどの印刷会社へそのまま入稿できるほか、ご自身でプリントアウトして使うことも可能です。</p>
    </div>
  );
}

function Container() {
  const [isOpen, setIsOpen] = useState(false);

  const sizes = [
    { name: "文庫判", size: "bunko" as const },
    { name: "新書判", size: "shinsho" as const },
    { name: "B6判", size: "b6" as const },
    { name: "四六判", size: "46" as const },
    { name: "A5判", size: "a5" as const },
  ];

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[45px] pt-[15px] px-[20px] relative w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Phone_Item">
          <Frame4 />
          <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">Type E</p>
        </div>
        <p className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[22px] min-w-full relative shrink-0 text-[11px] text-black tracking-[0.22px] w-[min-content]">
          世界が言葉によって分節化され、「意味」のネットワークに回収される以前の、根源的な生の躍動はいかにして可能なのか。疾走する馬の群れや風の律動をモデルに、意味の牢獄としての言語を解体し、身体感覚を社会の規律から奪還するためのマテリアルな思考を提示する。概念による理解を拒絶し、生をその不透明さにおいて肯定しようとする、現代思想の記念碑的著作。
          <br aria-hidden="true" />
          という体のブックカバー。
        </p>
        <div className="relative w-[300px]">
          <button
            className={`content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative w-full transition-all ${
              isOpen
                ? 'bg-white border border-black'
                : 'bg-[#002daa] hover:bg-white hover:border hover:border-black'
            }`}
            data-name="Phone_pull-down-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className={`font-['Instrument_Serif',sans-serif] tracking-[-0.01em] leading-[normal] not-italic relative shrink-0 text-[24px] text-left whitespace-nowrap ${
              isOpen ? 'text-black' : 'text-white'
            }`}>DOWNLOAD Cover Data</p>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Arrow Icon">
              <div className="flex items-center justify-center relative shrink-0">
                <div className={`flex-none transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}>
                  <div className="h-[9.65px] relative w-[13px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9.65">
                      <path d="M6.5 0L13 9.65H0L6.5 0Z" fill={isOpen ? "black" : "white"} id="Polygon 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 z-10 w-full divide-y divide-black border border-black bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] animate-slide-down">
              {sizes.map((size, index) => (
                <DownloadSizeAnchor
                  key={index}
                  name={size.name}
                  href={coverPdfHref(COVER_TYPE, size.size)}
                  download
                  className="[&>span]:text-[13px]"
                  onClick={() => {
                    setIsOpen(false);
                    toast.success(`「${size.name}」のカバー用PDFをダウンロードしました。`);
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <Frame />
        <Frame1 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <a
        href="https://x.com/a_pig_flying"
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-clip relative shrink-0 size-[18px] cursor-pointer transition-opacity hover:opacity-80"
        data-name="Social Icons"
        aria-label="X (formerly Twitter)"
      >
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.9145">
            <path d={svgPaths.pd787000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a
        href="https://www.instagram.com/wpf.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer overflow-clip relative shrink-0 size-[18px] transition-opacity hover:opacity-80"
        data-name="Social Icons"
        aria-label="Instagram"
      >
        <div className="absolute inset-[0_0.06%_0.02%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9895 17.9965">
            <path d={svgPaths.p18a97b60} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[24.32%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.24609 9.24609">
            <path d={svgPaths.p12023800} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.15859 2.1586">
            <path d={svgPaths.p1cee4d00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[-0.2px] whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[30px] relative shrink-0 w-[203px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 35">
        <g clipPath="url(#clip0_15_2450)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.p43b2080} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2d1e1b80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3fc17300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3647d100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pd3d8700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p27658400} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3577f00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3f8ef440} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p35277a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p68b5a00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p15c78680} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p170b8c0} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p4ddfa00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p28ce8570} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p146a9a40} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_15_2450">
            <rect fill="white" height="35" width="237" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function PhoneTypeE() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-x-hidden pt-[54px] relative size-full min-w-0 max-w-full" data-name="Phone_TypeE">
      <Container />
      <div className="bg-black content-stretch flex flex-col gap-[15px] items-start px-[20px] py-[30px] relative shrink-0 w-[402px]" data-name="Phone_Footer">
        <Frame2 />
        <Frame3 />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <div className="sticky top-0 z-10 flex w-full items-center justify-center bg-black px-4 py-3 pointer-events-auto" data-name="Phone_Header">
          <Link href="/" className="inline-flex shrink-0 cursor-pointer transition-opacity hover:opacity-80">
            <Component />
          </Link>
        </div>
      </div>
    </div>
  );
}