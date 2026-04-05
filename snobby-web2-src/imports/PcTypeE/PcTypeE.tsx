import { imgUrl } from "../../imgUrl";
import svgPaths from "./svg-150y1f7z9i";
import imgImage8 from "../../assets/216527f26b77a26dc101fee4191cdf3117f91333.png";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { coverPdfHref } from "../../lib/coverPdfHref";
import { DownloadSizeAnchor } from "../../components/DownloadSizeAnchor";

const COVER_TYPE = "E" as const;

function Frame2() {
  return (
    <div className="bg-[#f6f6f6] h-[750px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[589px] relative shadow-[0px_3.671px_3.671px_0px_rgba(0,0,0,0.25)] shrink-0 w-[380px]" data-name="image 8">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage8)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="About Section">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[28px] tracking-[-0.28px] whitespace-nowrap">About</p>
      <div className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[13px] tracking-[0.26px] w-[min-content]">
        <p className="leading-[30px] mb-0">世界が言葉によって分節化され、「意味」のネットワークに回収される以前の、根源的な生の躍動はいかにして可能なのか。疾走する馬の群れや風の律動をモデルに、意味の牢獄としての言語を解体し、身体感覚を社会の規律から奪還するためのマテリアルな思考を提示する。概念による理解を拒絶し、生をその不透明さにおいて肯定しようとする、現代思想の記念碑的著作。</p>
        <p className="leading-[30px]">という体のブックカバー。</p>
      </div>
    </div>
  );
}

function HowToUseSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="How to Use Section">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[28px] tracking-[-0.28px] whitespace-nowrap">How to Use</p>
      <p className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[30px] min-w-full relative shrink-0 text-[13px] tracking-[0.26px] w-[min-content]">下のダウンロードボタンから、カバーのデザインデータをダウンロードいただけます。アクセアなどの印刷会社へそのまま入稿できるほか、ご自身でプリントアウトして使うことも可能です。</p>
    </div>
  );
}

function InstructionsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-black w-full" data-name="Instructions Section">
      <AboutSection />
      <HowToUseSection />
    </div>
  );
}

function DescriptionSection() {
  const [isOpen, setIsOpen] = useState(false);

  const sizes = [
    { name: "文庫判", size: "bunko" as const },
    { name: "新書判", size: "shinsho" as const },
    { name: "B6判", size: "b6" as const },
    { name: "四六判", size: "46" as const },
    { name: "A5判", size: "a5" as const },
  ];

  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Description Section">
      <InstructionsSection />
      <div className="relative shrink-0 w-full">
        {isOpen && (
          <div className="absolute bottom-full left-0 mb-[-1px] w-full divide-y divide-black border border-black bg-white animate-slide-up z-10">
            {sizes.map((size, index) => (
              <DownloadSizeAnchor
                key={index}
                name={size.name}
                href={coverPdfHref(COVER_TYPE, size.size)}
                download
                onClick={() => {
                  setIsOpen(false);
                  toast.success(`「${size.name}」のカバー用PDFをダウンロードしました。`);
                }}
              />
            ))}
          </div>
        )}
        <button
          className={`cursor-pointer relative w-full transition-all ${
            isOpen
              ? 'bg-white border border-black'
              : 'bg-[#002daa] hover:bg-white hover:border hover:border-black'
          }`}
          data-name="PC_pull-down-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative w-full">
              <p className={`font-['Instrument_Serif',sans-serif] tracking-[-0.01em] leading-[normal] not-italic relative shrink-0 text-[28px] text-left whitespace-nowrap ${
                isOpen ? 'text-black' : 'text-white'
              }`}>DOWNLOAD Cover Data</p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className={`flex-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <div className="content-stretch flex flex-col items-center justify-center relative" data-name="Down Arrow">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-180">
                        <div className="h-[14.846px] relative w-[20px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.8462">
                            <path d="M10 0L20 14.8462H0L10 0Z" fill={isOpen ? "black" : "white"} id="Polygon 1" />
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
      </div>
    </div>
  );
}

function SizeGuideSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-start min-h-px min-w-px relative text-black" data-name="Size Guide Section">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[28px] tracking-[-0.28px] whitespace-nowrap">Size Guide</p>
      <div className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[0px] tracking-[0.26px] w-[min-content] whitespace-pre-wrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[30px] mb-0 text-[13px] underline">文庫判：105 × 148mm</p>
        <p className="leading-[30px] mb-0 text-[13px]">一般的な文庫本のサイズ。岩波文庫、新潮文庫、講談社文庫などのほか、A6判の小型手帳などにも適合。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[30px] mb-0 text-[13px] underline">新書判：103 × 182mm</p>
        <p className="leading-[30px] mb-0 text-[13px]">「少年ジャンプ」や「少年マガジン」などの少年・少女漫画の単行本に最も多いサイズ。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[30px] mb-0 text-[13px] underline">B6判：128 × 182mm</p>
        <p className="leading-[30px] mb-0 text-[13px]">「モーニング」や「アフタヌーン」などの青年漫画の単行本に多いサイズ。新書判よりも横幅と厚みがあるコミックスに適す。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[30px] mb-0 text-[13px] underline">四六判：127 × 188mm</p>
        <p className="leading-[30px] mb-0 text-[13px]">書店の新刊コーナーに並ぶ一般的な単行本（文芸書、エッセイなど）のサイズ。ハードカバーのほか、厚手のソフトカバー本にも適合。</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[30px] mb-0 text-[13px] underline">A5判：148 × 210mm</p>
        <p className="leading-[30px] mb-0 text-[13px]">漫画の「完全版」や「愛蔵版」、教科書や学術雑誌などに用いられる大判サイズ。</p>
        <p className="leading-[30px] mb-0 text-[13px]">&nbsp;</p>
        <p className="leading-[30px] text-[13px]">※いずれのサイズも、背表紙の厚みに合わせて折り返し部分で幅を調整できる仕様となっています。</p>
      </div>
    </div>
  );
}

function InformationSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-start min-h-px min-w-px relative self-stretch" data-name="Information Section">
      <DescriptionSection />
      <SizeGuideSection />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[30px] items-start pb-[60px] pt-[45px] px-[45px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-h-px min-w-px relative" data-name="Book Cover">
          <Frame2 />
          <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">Type E</p>
        </div>
        <InformationSection />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-end relative shrink-0 w-full">
      <a
        href="https://x.com/a_pig_flying"
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-clip relative shrink-0 size-[25px] cursor-pointer transition-opacity hover:opacity-80"
        data-name="Social Icons"
        aria-label="X (formerly Twitter)"
      >
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9167 20.7146">
            <path d={svgPaths.p399a3200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a
        href="https://www.instagram.com/wpf.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer overflow-clip relative shrink-0 size-[25px] transition-opacity hover:opacity-80"
        data-name="Social Icons"
        aria-label="Instagram"
      >
        <div className="absolute inset-[0_0.06%_0.02%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9854 24.9951">
            <path d={svgPaths.p29dd8d80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[24.32%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8418 12.8418">
            <path d={svgPaths.p10040e00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99805 2.99805">
            <path d={svgPaths.p1ff67d00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[42px] relative shrink-0 w-[283px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 50">
        <g clipPath="url(#clip0_11_1874)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.p1602d800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p271b0f20} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pae31780} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p8ef5c80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p26cbd80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p25511380} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pc5a3c00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2bd46040} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p119faa30} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1d267100} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.pfa1af00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p32ef1100} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p3bd23480} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p184dcb00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1f6ad1f0} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_11_1874">
            <rect fill="white" height="50" width="337" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function PcTypeE() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-x-hidden pt-[66px] relative size-full min-w-0 max-w-full" data-name="PC_TypeE">
      <Container />
      <div className="bg-black relative shrink-0 w-full" data-name="PC_Footer">
        <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
          <Frame />
          <Frame1 />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <div className="sticky top-0 z-10 flex w-full items-center justify-center bg-black px-4 py-3 sm:px-8 pointer-events-auto" data-name="PC_Header">
          <Link href="/" className="inline-flex shrink-0 cursor-pointer transition-opacity hover:opacity-80">
            <Component />
          </Link>
        </div>
      </div>
    </div>
  );
}