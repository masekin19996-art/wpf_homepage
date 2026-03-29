"use client";

import { useEffect } from "react";
import svgPaths from "@/data/snobbyCoverPcSvgPaths";

/** マーキー用・Collection 用のデザイン表紙（非ホバー時・下段プレビュー） */
const imgImage1 = "/snobbycover-pc/7e54fefff7f475211e360b4f1f885093de587142.png";
const imgImage2 = "/snobbycover-pc/6cbc192fcb77a36c641a6739b105db80af5cbcf3.png";
const imgImage3 = "/snobbycover-pc/069f0a85e4aeb7da10d674f63bae81e5d33f3937.png";
const imgImage4 = "/snobbycover-pc/f0c9d57b28a67bf29f8cacb8124594a91023f590.png";
const imgImage5 = "/snobbycover-pc/1274b7660cafb010ee27addadafc36f4eec414b1.png";
const imgImage6 = "/snobbycover-pc/2c3b6dd6821be3ac97fb007612198a6c55073c5f.png";
const imgImage7 = "/snobbycover-pc/d3219ff9aca3a57348b46d03ffd6924943e0b135.png";
const imgImage8 = "/snobbycover-pc/52e3b78475a5d3b593e87d1143103835e18860c0.png";
const imgPageFlipAnimation11 = "/snobbycover-pc/6612dcc3fbb4db103577f57022c2a8262b6ab6ed.png";

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

/** マーキー ホバー時のみ差し替える実コミック表紙（8枚・順は MARQUEE_DESIGN と対応） */
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

const marqueeImgFade =
  "transition-opacity duration-100 ease-out pointer-events-none";

function MarqueeBookFull({ baseSrc, hoverSrc }: { baseSrc: string; hoverSrc: string }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group"
      data-name="image 1"
    >
      <img
        alt=""
        className={`absolute inset-0 max-w-none object-cover size-full ${marqueeImgFade} group-hover:opacity-0`}
        src={baseSrc}
      />
      <img
        alt=""
        className={`absolute inset-0 max-w-none object-cover size-full opacity-0 ${marqueeImgFade} group-hover:opacity-100`}
        src={hoverSrc}
      />
    </div>
  );
}

function MarqueeBookAspect({ baseSrc, hoverSrc }: { baseSrc: string; hoverSrc: string }) {
  return (
    <div
      className="absolute aspect-[319/494] left-0 right-0 top-0 overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group"
      data-name="image 2"
    >
      <img
        alt=""
        className={`absolute inset-0 max-w-none object-cover size-full ${marqueeImgFade} group-hover:opacity-0`}
        src={baseSrc}
      />
      <img
        alt=""
        className={`absolute inset-0 max-w-none object-cover size-full opacity-0 ${marqueeImgFade} group-hover:opacity-100`}
        src={hoverSrc}
      />
    </div>
  );
}

function MarqueeBookStrip({ direction }: { direction: "left" | "right" }) {
  const pairIndices = [...MARQUEE_DESIGN_COVERS.keys(), ...MARQUEE_DESIGN_COVERS.keys()];
  return (
    <div
      className={
        direction === "left"
          ? "absolute content-stretch flex gap-[180px] items-center left-0 top-0 animate-scroll-left"
          : "absolute content-stretch flex gap-[180px] items-center left-[-2530px] top-0 animate-scroll-right"
      }
    >
      {pairIndices.map((slot, i) => (
        <div key={i} className="h-[170px] relative shrink-0 w-[110px]" data-name={`image ${i + 1}`}>
          {i % 8 === 0 ? (
            <MarqueeBookFull baseSrc={MARQUEE_DESIGN_COVERS[slot]} hoverSrc={MARQUEE_MANGA_COVERS[slot]} />
          ) : (
            <MarqueeBookAspect baseSrc={MARQUEE_DESIGN_COVERS[slot]} hoverSrc={MARQUEE_MANGA_COVERS[slot]} />
          )}
        </div>
      ))}
    </div>
  );
}

function Frame2() {
  return <MarqueeBookStrip direction="left" />;
}

function Component() {
  return (
    <div className="h-[130px] relative shrink-0 w-[879px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 879 130">
        <g clipPath="url(#clip0_1_481)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.p275745c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pc424600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p378beb80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3e014d00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p550f800} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p21a9cd80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p109ffa00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p146e1400} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p243e7a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3ea34d00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3f81c600} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2cc37600} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pe82b9f0} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p335ffb40} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p162626c0} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_1_481">
            <rect fill="white" height="130" width="879" />
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
  return <MarqueeBookStrip direction="right" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-screen items-center justify-between py-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[170px] overflow-clip relative shrink-0 w-full" data-name="UpperStream">
        <Frame2 />
      </div>
      <Navbar />
      <div className="h-[170px] overflow-clip relative shrink-0 w-full" data-name="LowerStream">
        <Frame3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#002daa] flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_Serif_JP',serif] gap-[30px] items-start justify-center not-italic p-[90px] relative text-white w-full">
          <p className="leading-[65px] relative shrink-0 text-[64px] tracking-[1.92px] whitespace-nowrap" style={{ fontFeatureSettings: "'hwid'" }}>
            「賢い」は作れる。
          </p>
          <div className="leading-[0] min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
            <p className="leading-[35px] mb-0">あなたは電車に乗っていて、向かいに座っている人が難しそうな本を読んでいる。</p>
            <p className="leading-[35px] mb-0">そういう人はどこか知的で魅力的だ。</p>
            <p className="leading-[35px] mb-0">しかしこのサイトを見ているあなたはきっと、ものの10分で読書に飽きて、Instagramの通知ひとつで目線はスマホに移ってしまうだろう。</p>
            <p className="leading-[35px] mb-0">そのままでは電車で見かけたその人のように、文化的で知的な魅力を手にすることは永遠にできない。</p>
            <p className="leading-[35px] mb-0">でももう大丈夫。ここで自分の読みたい漫画や雑誌のサイズに合ったブックカバーを印刷して被せて仕舞えば、あなたはいつでもどこでも漫画や雑誌を読みながら「賢い人」になれる。</p>
            <p className="leading-[35px]">あなたも賢くなって、知的な魅力を演出しませんか？</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="aspect-[813/644] relative shrink-0 w-full" data-name="page_flip_animation_1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPageFlipAnimation11} />
      </div>
    </div>
  );
}

function StoryContainer() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Story Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[48px] text-white tracking-[-0.48px] whitespace-nowrap">STORY</p>
        <StoryContainer />
      </div>
    </div>
  );
}

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

function Frame5() {
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

function Frame6() {
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

function Frame7() {
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

function CollectionItemsRow() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Collection Items Row 1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative">
        <Frame4 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type A</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative">
        <Frame5 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type B</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative">
        <Frame6 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type C</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative" data-name="Item">
        <Frame7 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type D</p>
      </div>
    </div>
  );
}

function Frame8() {
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

function Frame9() {
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

function Frame10() {
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

function Frame11() {
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

function CollectionItemsRow1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Collection Items Row 2">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative">
        <Frame8 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type E</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative">
        <Frame9 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type F</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative">
        <Frame10 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type G</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative" data-name="Item">
        <Frame11 />
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type H</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[45px] px-[45px] relative w-full">
        <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[48px] text-white tracking-[-0.48px] uppercase whitespace-nowrap">Collection</p>
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
      <p className="font-['Fjalla_One',sans-serif] font-[350] leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

/** 夜・読書シーンの写真背景（full-bleed / cover） */
function SnobbyCoverBackgroundImage() {
  return (
    <img
      src="/snobbycover/hero-bg-night-reading.png"
      alt=""
      className="absolute inset-0 z-0 h-full min-h-screen w-full max-w-none object-cover pointer-events-none"
      style={{ objectFit: "cover" }}
      decoding="async"
      fetchPriority="high"
      aria-hidden
    />
  );
}

export default function SnobbyCoverPcTop() {
  useEffect(() => {
    document.documentElement.classList.add("snobbycover-scrollable");
    return () => document.documentElement.classList.remove("snobbycover-scrollable");
  }, []);

  return (
    <div
      className="snobbycover-pc-top content-stretch flex flex-col items-center relative w-full min-h-screen"
      data-name="PC_TOP"
    >
      <SnobbyCoverBackgroundImage />
      <div className="relative z-10 flex w-full flex-col items-center">
        <Container />
        <Container1 />
        <Container4 />
        <div className="bg-black relative shrink-0 w-full" data-name="Footer">
          <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
            <Frame />
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}