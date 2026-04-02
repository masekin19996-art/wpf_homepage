"use client";

import { useEffect } from "react";
import Link from "next/link";
import svgPaths from "@/data/snobbyCoverPcSvgPaths";

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

/** マーキー用・ホバー時のみ差し替え（8枚・順は MARQUEE_DESIGN と対応） */
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

const marqueeImgFade = "transition-opacity duration-100 ease-out";

function MarqueeBookPc({ baseSrc, hoverSrc }: { baseSrc: string; hoverSrc: string }) {
  return (
    <div className="h-[170px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[110px] overflow-hidden group">
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
    <div className="absolute content-stretch flex gap-[180px] items-center left-0 top-0 animate-scroll-left">
      {pairIndices.map((slot, i) => (
        <MarqueeBookPc
          key={`pc-marquee-l-${i}`}
          baseSrc={MARQUEE_DESIGN_COVERS[slot]}
          hoverSrc={MARQUEE_MANGA_COVERS[slot]}
        />
      ))}
    </div>
  );
}

function Component() {
  return (
    <div className="h-[120.139px] relative shrink-0 w-[812px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 812 120.139">
        <g clipPath="url(#clip0_23_4043)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.p34c5f800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1c04be00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p39888e00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p25e02500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p19cd7ea0} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1f816f80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3490640} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2ecf3300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p31bbcf00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p339e0f90} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p34db5180} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p300a9080} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p37357e00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p86ee00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p23bf8a00} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_23_4043">
            <rect fill="white" height="120.139" width="812" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pb-[30px] pt-[35px] relative shrink-0" data-name="Navbar">
      <Component />
    </div>
  );
}

function Frame3() {
  const pairIndices = [...MARQUEE_DESIGN_COVERS.keys(), ...MARQUEE_DESIGN_COVERS.keys()];
  return (
    <div className="absolute content-stretch flex gap-[180px] items-center left-[-2530px] top-0 animate-scroll-right">
      {pairIndices.map((slot, i) => (
        <MarqueeBookPc
          key={`pc-marquee-r-${i}`}
          baseSrc={MARQUEE_DESIGN_COVERS[slot]}
          hoverSrc={MARQUEE_MANGA_COVERS[slot]}
        />
      ))}
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-screen items-center justify-between py-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[170px] overflow-clip relative shrink-0 w-full" data-name="frame36">
        <Frame2 />
      </div>
      <Navbar />
      <div className="h-[170px] overflow-clip relative shrink-0 w-full" data-name="frame36">
        <Frame3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-snobby-mincho gap-[45px] items-start justify-center not-italic p-[90px] relative text-white w-full">
          <p className="leading-[65px] relative shrink-0 text-[64px] tracking-[1.92px] whitespace-nowrap" style={{ fontFeatureSettings: "'hwid'" }}>
            「賢い」は作れる。
          </p>
          <div className="leading-[0] min-w-full relative shrink-0 text-[18px] tracking-[0.36px] w-[min-content]">
            <p className="leading-[35px] mb-0">あなたは電車に乗っていて、向かいに座っている人が難しそうな本を読んでいる。</p>
            <p className="leading-[35px] mb-0">そういう人はどこか知的で魅力的だ。</p>
            <p className="leading-[35px] mb-0">しかしこんなサイトを見ているあなたはきっと読書をしても、Instagramの通知ひとつで本を閉じてしまう。</p>
            <p className="leading-[35px] mb-0">そのままでは電車で見かけたその人のように、知的な魅力を手にすることはできない。</p>
            <p className="leading-[35px] mb-0">でも大丈夫。ここで自分の読みたい漫画のサイズに合ったブックカバーを印刷して被せれば、あなたはいつでもどこでも「賢い人」になれる。</p>
            <p className="leading-[35px]">好きな漫画を読みながら、知的な魅力を演出しよう。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[30px] pr-[100px] relative size-full">
          <div className="aspect-[699/654] relative shrink-0 w-full" data-name="page_flip_animation_1 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.2%] left-0 max-w-none top-[-0.21%] w-full" src={imgPageFlipAnimation11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryContainer() {
  return (
    <div className="bg-[#002daa] content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Story Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[48px] text-white tracking-[-0.48px] whitespace-nowrap">STORY</p>
        <StoryContainer />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
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

function Frame5() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionItemsRow() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Collection Items Row 1">
      <Link href="/type/a" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame4 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type A</p>
      </Link>
      <Link href="/type/b" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame5 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type B</p>
      </Link>
      <Link href="/type/c" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame6 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type C</p>
      </Link>
      <Link href="/type/d" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame7 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type D</p>
      </Link>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f6f6f6] h-[385px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="h-[280px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[181px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionItemsRow1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Collection Items Row 2">
      <Link href="/type/e" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame8 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type E</p>
      </Link>
      <Link href="/type/f" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame9 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type F</p>
      </Link>
      <Link href="/type/g" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame10 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type G</p>
      </Link>
      <Link href="/type/h" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110" data-name="PcItems">
        <Frame11 />
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type H</p>
      </Link>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[45px] px-[45px] relative w-full">
        <p className="font-snobby-din leading-[normal] relative shrink-0 text-[48px] text-white tracking-[-0.48px] uppercase whitespace-nowrap">Collection</p>
        <CollectionItemsRow />
        <CollectionItemsRow1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-end relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[25px]" data-name="Social Icons">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9167 20.7146">
            <path d={svgPaths.p399a3200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[25px]" data-name="Social Icons">
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
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-snobby-din leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

export default function SnobbyCoverPcTop() {
  useEffect(() => {
    document.documentElement.classList.add("snobbycover-scrollable");
    return () => document.documentElement.classList.remove("snobbycover-scrollable");
  }, []);

  return (
    <div className="content-stretch flex flex-col items-center relative size-full min-h-screen" data-name="PC_TOP">
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
        <Container4 />
        <div className="bg-black relative shrink-0 w-full" data-name="PC_Footer">
          <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
            <Frame />
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}