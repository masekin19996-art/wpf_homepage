"use client";

import { useEffect } from "react";
import Link from "next/link";
import svgPaths from "@/data/snobbyCoverPhoneSvgPaths";

const imgImage1 = "/snobbycover-pc/4b2c642b3dee2dfbf48cc77281e1d3c526ef7c8e.png";
const imgImage2 = "/snobbycover-pc/ddaf5fd981ce79d1036782c7975f966b502396ab.png";
const imgImage3 = "/snobbycover-pc/dabfc8b57e524b6c032d31a63968dc88b0c4ddcc.png";
const imgImage4 = "/snobbycover-pc/31bf7224a75dc4cf12b1b54f930f5c6fcd1c865a.png";
const imgImage5 = "/snobbycover-pc/216527f26b77a26dc101fee4191cdf3117f91333.png";
const imgImage6 = "/snobbycover-pc/16ec4dd2d9b51bb5927bd12fb88057972145a52f.png";
const imgImage7 = "/snobbycover-pc/02793cc22d98336be15c201cd980361daa39d989.png";
const imgImage8 = "/snobbycover-pc/1a913b8f643c48fbc72b906a5fcd5b32b4dd539c.png";
const imgPageFlipAnimation11 = "/snobbycover-pc/16a460214cc94501b5cc5ddc0d961f99b240f024.png";

const MARQUEE_DESIGN_COVERS = [
  imgImage1,
  imgImage2,
  imgImage3,
  imgImage4,
  imgImage5,
  imgImage6,
  imgImage7,
  imgImage8,
] as const;

const MARQUEE_MANGA_COVERS = [
  "/snobbycover-pc/cover-marquee-01-dragonball.png",
  "/snobbycover-pc/cover-marquee-02-akira.png",
  "/snobbycover-pc/cover-marquee-03-tokyo-girls-bravo.png",
  "/snobbycover-pc/cover-marquee-04-evangelion.png",
  "/snobbycover-pc/cover-marquee-05-slamdunk.png",
  "/snobbycover-pc/cover-marquee-06-nana.png",
  "/snobbycover-pc/cover-marquee-07-akagi.png",
  "/snobbycover-pc/cover-marquee-08-kimi-ni-todoke.png",
] as const;

const marqueePhoneCellTop =
  "h-[85.454px] relative shadow-[0px_2.011px_2.011px_0px_rgba(0,0,0,0.25)] shrink-0 w-[55.293px]";
const marqueePhoneCellBottom =
  "h-[85.29px] relative shadow-[0px_2.007px_2.007px_0px_rgba(0,0,0,0.25)] shrink-0 w-[55.18px]";
const marqueeImgFade = "transition-opacity duration-100 ease-out";

function MarqueeBookPhone({
  baseSrc,
  hoverSrc,
  cellClass,
}: {
  baseSrc: string;
  hoverSrc: string;
  cellClass: string;
}) {
  return (
    <div className={`${cellClass} overflow-hidden group`}>
      <img
        alt=""
        className={`absolute inset-0 max-w-none object-cover size-full pointer-events-none ${marqueeImgFade} group-hover:opacity-0`}
        src={baseSrc}
      />
      <img
        alt=""
        className={`absolute inset-0 max-w-none object-cover size-full pointer-events-none opacity-0 ${marqueeImgFade} group-hover:opacity-100`}
        src={hoverSrc}
      />
    </div>
  );
}

function Frame2() {
  const pairIndices = [...MARQUEE_DESIGN_COVERS.keys(), ...MARQUEE_DESIGN_COVERS.keys()];
  return (
    <div className="absolute content-stretch flex gap-[90.48px] items-center left-0 top-0 animate-scroll-left-mobile">
      {pairIndices.map((slot, i) => (
        <MarqueeBookPhone
          key={`ph-marquee-l-${i}`}
          cellClass={marqueePhoneCellTop}
          baseSrc={MARQUEE_DESIGN_COVERS[slot]}
          hoverSrc={MARQUEE_MANGA_COVERS[slot]}
        />
      ))}
    </div>
  );
}

function Component() {
  return (
    <div className="h-[45px] relative shrink-0 w-[304px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 304 45">
        <g clipPath="url(#clip0_6_953)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.pbc4e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p227e5280} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3e12f600} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p20995500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pf00c700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p15a13280} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p8d3d000} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2e0ebf00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p2c628880} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p37d4d600} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1ababb00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1e867b00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pabfff80} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p260b8c00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p23b2c900} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_6_953">
            <rect fill="white" height="45" width="304" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pb-[10.156px] pt-[11.849px] relative shrink-0 w-[650px]" data-name="Navbar">
      <Component />
    </div>
  );
}

function Frame3() {
  const pairIndices = [...MARQUEE_DESIGN_COVERS.keys(), ...MARQUEE_DESIGN_COVERS.keys()];
  return (
    <div className="absolute content-stretch flex gap-[90.48px] items-center left-[-1271.75px] top-0 animate-scroll-right-mobile">
      {pairIndices.map((slot, i) => (
        <MarqueeBookPhone
          key={`ph-marquee-r-${i}`}
          cellClass={marqueePhoneCellBottom}
          baseSrc={MARQUEE_DESIGN_COVERS[slot]}
          hoverSrc={MARQUEE_MANGA_COVERS[slot]}
        />
      ))}
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[649px] items-center justify-between py-[30px] relative shrink-0 w-[1300px]" data-name="Container">
      <div className="h-[85.454px] overflow-clip relative shrink-0 w-[970.149px]" data-name="frame36">
        <Frame2 />
      </div>
      <Navbar />
      <div className="h-[85.454px] overflow-clip relative shrink-0 w-[970.149px]" data-name="frame36">
        <Frame3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#002daa] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col font-['Hiragino_Mincho_Pro:W3',sans-serif] gap-[15px] items-start not-italic pt-[40px] px-[40px] relative text-white w-full">
        <p className="leading-[40px] relative shrink-0 text-[34px] tracking-[1.02px] w-full" style={{ fontFeatureSettings: "'hwid'" }}>
          「賢い」は作れる。
        </p>
        <div className="leading-[0] relative shrink-0 text-[12px] tracking-[0.24px] w-full">
          <p className="leading-[24px] mb-0">あなたは電車に乗っていて、向かいに座っている人が難しそうな本を読んでいる。</p>
          <p className="leading-[24px] mb-0">そういう人はどこか知的で魅力的だ。</p>
          <p className="leading-[24px] mb-0">しかしこんなサイトを見ているあなたはきっと読書をしても、Instagramの通知ひとつで本を閉じてしまう。</p>
          <p className="leading-[24px] mb-0">そのままでは電車で見かけたその人のように、知的な魅力を手にすることはできない。</p>
          <p className="leading-[24px] mb-0">でも大丈夫。ここで自分の読みたい漫画のサイズに合ったブックカバーを印刷して被せれば、あなたはいつでもどこでも「賢い人」になれる。</p>
          <p className="leading-[24px]">好きな漫画を読みながら、知的な魅力を演出しよう。</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[25px] relative w-full">
        <div className="aspect-[322/305] relative shrink-0 w-full" data-name="page_flip_animation_1 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[98.98%] left-0 max-w-none top-[0.52%] w-full" src={imgPageFlipAnimation11} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryContainer() {
  return (
    <div className="bg-[#002daa] content-stretch flex flex-col items-start relative rounded-[5px] shrink-0 w-full" data-name="Story Container">
      <Container2 />
      <Frame5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[30px] text-white tracking-[-0.3px] whitespace-nowrap">STORY</p>
        <StoryContainer />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/a" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame4 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type A</p>
      </Link>
      <Link href="/type/b" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame6 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type B</p>
      </Link>
    </div>
  );
}

function CollectionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Collection Container">
      <Container4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/c" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame7 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type C</p>
      </Link>
      <Link href="/type/d" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame8 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type D</p>
      </Link>
    </div>
  );
}

function CollectionContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Collection Container">
      <Container5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/e" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame9 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type E</p>
      </Link>
      <Link href="/type/f" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame10 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type F</p>
      </Link>
    </div>
  );
}

function CollectionContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Collection Container">
      <Container6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/g" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame11 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type G</p>
      </Link>
      <Link href="/type/h" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer active:opacity-70 transition-opacity" data-name="Collection Item">
        <Frame12 />
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type H</p>
      </Link>
    </div>
  );
}

function CollectionContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Collection Container">
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[15px] px-[15px] relative w-full">
        <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[30px] text-white tracking-[-0.3px] uppercase whitespace-nowrap">Collection</p>
        <CollectionContainer />
        <CollectionContainer1 />
        <CollectionContainer2 />
        <CollectionContainer3 />
      </div>
    </div>
  );
}

function Frame() {
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['DIN_Condensed_VF:Regular',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

export default function SnobbyCoverPhoneTop() {
  useEffect(() => {
    document.documentElement.classList.add("snobbycover-scrollable");
    return () => document.documentElement.classList.remove("snobbycover-scrollable");
  }, []);

  return (
    <div className="content-stretch flex flex-col items-center pt-[45px] relative size-full min-h-screen" data-name="Phone_TOP">
      <video
        autoPlay
        muted
        className="absolute inset-0 max-w-none object-cover size-full z-0"
        controlsList="nodownload"
        loop
        playsInline
      >
        <source src="/videos/snobbycover-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-[1] content-stretch flex flex-col items-center w-full">
        <Container />
        <Container1 />
        <Container3 />
        <div className="bg-black relative shrink-0 w-full" data-name="PcFooter">
          <div className="content-stretch flex flex-col gap-[15px] items-start px-[20px] py-[30px] relative w-full">
            <Frame />
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}