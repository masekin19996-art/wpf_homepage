"use client";

import Link from "next/link";
import { useState } from "react";
import svgPaths from "@/data/snobbyCoverTypePhoneSvgPaths";

const imgImage1 = "/snobbycover-pc/7e54fefff7f475211e360b4f1f885093de587142.png";

const SIZE_OPTIONS = [
  { label: "文庫判", id: "bunko" },
  { label: "新書判", id: "shinsho" },
  { label: "B6判", id: "b6" },
  { label: "四六判", id: "shiroku" },
  { label: "A5判", id: "a5" },
];

function Frame4() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[30px] relative shrink-0 text-black w-full">
      <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[20px] whitespace-nowrap">Size Guide</p>
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
      <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[20px] whitespace-nowrap">How to Use</p>
      <p className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[22px] min-w-full relative shrink-0 text-[11px] tracking-[0.22px] w-[min-content]">下のダウンロードボタンから、カバーのデザインデータをダウンロードいただけます。アクセアなどの印刷会社へそのまま入稿できるほか、ご自身でプリントアウトして使うことも可能です。</p>
    </div>
  );
}

function Container() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[45px] pt-[15px] px-[20px] relative w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Phone_Item">
          <Frame4 />
          <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-black tracking-[-0.24px] w-full">Type A</p>
        </div>
        <p className="font-['Noto_Sans_JP:Light',sans-serif] font-light leading-[22px] min-w-full relative shrink-0 text-[11px] text-black tracking-[0.22px] w-[min-content]">
          都市空間における熱狂といわゆる「排除」のメカニズムを、記号論のアプローチから解剖した伝説的論考。社会の安定を維持するために、共同体はいかにして「祝祭」という名の合法的な狂気を演出し、大衆の鬱屈を処理してきたのか。演劇的手法を用いて現代社会の虚構性を暴き、日常という名の舞台をハックするための戦略を提示した、アヴァンギャルドな社会学の極北。
          <br aria-hidden="true" />
          という体のブックカバーです。
        </p>
        <div className="relative shrink-0 w-full">
          <div className="border border-black">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#002daa] content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative w-full" data-name="Phone_pull-down-button"
            >
              <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-left text-white tracking-[-0.24px] whitespace-nowrap">DOWNLOAD This Cover Data</p>
              <div className={`content-stretch flex flex-col items-center justify-center relative shrink-0 transition-transform ${isOpen ? "" : "rotate-180"}`} data-name="Arrow Icon">
                <div className="h-[9.65px] relative w-[13px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9.65">
                    <path d="M6.5 0L13 9.65H0L6.5 0Z" fill="white" id="Polygon 1" />
                  </svg>
                </div>
              </div>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? `${SIZE_OPTIONS.length * 50}px` : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {SIZE_OPTIONS.map((option) => (
                <a
                  key={option.id}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="group flex items-center justify-between px-[16px] py-[12px] border-t border-black cursor-pointer hover:bg-black transition-colors"
                  data-name="Phone_pull-down-menu-item"
                >
                  <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] relative text-[13px] text-black group-hover:text-white transition-colors">{option.label}</p>
                  <svg className="w-[20px] h-[20px] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L12 16M12 16L8 12M12 16L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
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
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Social Icons">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.9145">
            <path d={svgPaths.pd787000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Social Icons">
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
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[35px] relative shrink-0 w-[237px]" data-name="_レイヤー_1">
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

export default function SnobbyCoverTypeDetailPhone() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center pt-[105px] relative size-full" data-name="Phone_TypeA">
      <Container />
      <div className="bg-black content-stretch flex flex-col gap-[15px] items-start px-[20px] py-[30px] relative shrink-0 w-[402px]" data-name="Phone_Footer">
        <Frame2 />
        <Frame3 />
      </div>
      <div className="absolute bottom-0 h-[874px] left-[calc(50%+7.5px)] pointer-events-none top-0">
        <div className="-translate-x-1/2 bg-black content-stretch flex flex-col items-center overflow-clip pb-[11px] pointer-events-auto pt-[60px] sticky top-0 w-[500px]" data-name="Phone_Header">
          <Link href="/" className="cursor-pointer">
            <Component />
          </Link>
        </div>
      </div>
    </div>
  );
}