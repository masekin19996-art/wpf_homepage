import { imgUrl, type ImgSrc } from "../imgUrl";
import svgPaths from "./svg-4647uwwlqn";
import logoSvgPaths from "./MainContent-3/svg-v5bu1yr7f6";
import imgImage1 from "../assets/4b2c642b3dee2dfbf48cc77281e1d3c526ef7c8e.png";
import imgImage2 from "../assets/ddaf5fd981ce79d1036782c7975f966b502396ab.png";
import imgImage3 from "../assets/dabfc8b57e524b6c032d31a63968dc88b0c4ddcc.png";
import imgImage4 from "../assets/31bf7224a75dc4cf12b1b54f930f5c6fcd1c865a.png";
import imgImage5 from "../assets/216527f26b77a26dc101fee4191cdf3117f91333.png";
import imgImage6 from "../assets/16ec4dd2d9b51bb5927bd12fb88057972145a52f.png";
import imgImage7 from "../assets/02793cc22d98336be15c201cd980361daa39d989.png";
import imgImage8 from "../assets/1a913b8f643c48fbc72b906a5fcd5b32b4dd539c.png";
import imgStoryBlueSectionCover from "../assets/cover.gif";
import imgMangaDragonBall from "../assets/cover-marquee-01-dragonball-4ef83bff-edd2-468c-ba67-f5bd2703e8f7.png";
import imgMangaAkira from "../assets/cover-marquee-02-akira-4d2f304c-2413-4fed-8623-eb43dd3a7d83.png";
import imgMangaTokyoGirlsBravo from "../assets/cover-marquee-03-tokyo-girls-bravo-8d6dd602-b93a-464a-9109-5ff9c1939476.png";
import imgMangaEvangelion from "../assets/cover-marquee-04-evangelion-dde986b3-6de8-4891-83db-ba47ce248c52.png";
import imgMangaSlamDunk from "../assets/cover-marquee-05-slamdunk-2d361dba-6744-4ebb-a26f-6b148be827c2.png";
import imgMangaNana from "../assets/cover-marquee-06-nana-032ca25c-febe-45d8-bf24-5fc230c60c7b.png";
import imgMangaAkagi from "../assets/cover-marquee-07-akagi-6a7be211-1812-43b3-8437-20a1129b167c.png";
import imgMangaKimiNiTodoke from "../assets/cover-marquee-08-kimi-ni-todoke-0ca6801b-1dfa-4aea-ba7e-cec9fa5dfb58.png";
import { useState } from "react";
import ReaderPdfOverlay from "../components/ReaderPdfOverlay";
import Link from "next/link";

const marqueeBunkoCovers = [
  imgImage1,
  imgImage2,
  imgImage3,
  imgImage4,
  imgImage5,
  imgImage6,
  imgImage7,
  imgImage8,
];

const marqueeMangaCovers = [
  imgMangaDragonBall,
  imgMangaAkira,
  imgMangaTokyoGirlsBravo,
  imgMangaEvangelion,
  imgMangaSlamDunk,
  imgMangaNana,
  imgMangaAkagi,
  imgMangaKimiNiTodoke,
];

function MarqueeBookPc({
  bunko,
  manga,
  onMangaClick,
}: {
  bunko: ImgSrc;
  manga: ImgSrc;
  onMangaClick: () => void;
}) {
  return (
    <div className="h-[154px] relative shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] shrink-0 w-[100px] group overflow-hidden">
      <img
        alt=""
        className="pointer-events-none absolute inset-0 max-w-none object-cover size-full transition-opacity duration-300 ease-out group-hover:opacity-0"
        src={imgUrl(bunko)}
      />
      <img
        alt=""
        className="pointer-events-none absolute inset-0 max-w-none object-cover size-full opacity-0 transition-opacity duration-300 ease-out group-hover:pointer-events-auto group-hover:cursor-pointer group-hover:opacity-100"
        src={imgUrl(manga)}
        onClick={(e) => {
          e.stopPropagation();
          onMangaClick();
        }}
      />
    </div>
  );
}

function Frame2({ onMangaClick }: { onMangaClick: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[130px] items-center left-0 top-0 animate-scroll-left">
      {Array.from({ length: 16 }, (_, i) => (
        <MarqueeBookPc
          key={`left-${i}`}
          bunko={marqueeBunkoCovers[i % 8]}
          manga={marqueeMangaCovers[i % 8]}
          onMangaClick={onMangaClick}
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
      <a
        href="https://home.whenpigsfly.jp/"
        rel="noopener noreferrer"
        className="cursor-pointer transition-opacity hover:opacity-80"
      >
        <Component />
      </a>
    </div>
  );
}

function Frame3({ onMangaClick }: { onMangaClick: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[130px] items-center left-[-1840px] top-0 animate-scroll-right">
      {Array.from({ length: 16 }, (_, i) => (
        <MarqueeBookPc
          key={`right-${i}`}
          bunko={marqueeBunkoCovers[i % 8]}
          manga={marqueeMangaCovers[i % 8]}
          onMangaClick={onMangaClick}
        />
      ))}
    </div>
  );
}

function Container({ onMangaClick }: { onMangaClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col h-screen items-center justify-between py-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[154px] overflow-clip relative shrink-0 w-full" data-name="frame36">
        <Frame2 onMangaClick={onMangaClick} />
      </div>
      <Navbar />
      <div className="h-[154px] overflow-clip relative shrink-0 w-full" data-name="frame36">
        <Frame3 onMangaClick={onMangaClick} />
      </div>
    </div>
  );
}

function LogoComponent() {
  return (
    <div className="h-[65px] relative shrink-0 w-[419.2px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419.2 65">
        <g clipPath="url(#clip0_98_4547)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={logoSvgPaths.p1c81ce80} fill="var(--fill-0, white)" id="Vector" />
          <path d={logoSvgPaths.pf7a7100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={logoSvgPaths.p3dda2a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={logoSvgPaths.p33335800} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={logoSvgPaths.p207aad80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={logoSvgPaths.p33ff2b00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={logoSvgPaths.p1e299e80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={logoSvgPaths.p3cc5d880} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={logoSvgPaths.p3d477a00} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_98_4547">
            <rect fill="white" height="65" width="419.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[45px] items-start justify-center leading-[0] py-[20px] pl-2 pr-3 sm:py-[28px] sm:pl-4 sm:pr-4 md:py-[36px] lg:py-[44px] lg:pl-6 lg:pr-5 relative w-full min-w-0">
          <LogoComponent />
          <div className="font-['Shippori_Mincho',sans-serif] min-w-full not-italic relative shrink-0 text-[17px] text-white tracking-[0.34px] w-[min-content]">
            <p className="leading-[33px] mb-0">あなたは電車に乗っていて、向かいに座っている人が難しそうな本を読んでいる。</p>
            <p className="leading-[33px] mb-0">そういう人はどこか知的で魅力的だ。</p>
            <p className="leading-[33px] mb-0">しかしこんなサイトを見ているあなたはきっと読書をしても、Instagramの通知ひとつで本を閉じてしまう。</p>
            <p className="leading-[33px] mb-0">そのままでは電車で見かけたその人のように、知的な魅力を手にすることはできない。</p>
            <p className="leading-[33px] mb-0">でも大丈夫。ここで自分の読みたい漫画のサイズに合ったブックカバーを印刷して被せれば、あなたはいつでもどこでも「賢い人」になれる。</p>
            <p className="leading-[33px]">好きな漫画を読みながら、知的な魅力を演出しよう。</p>
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
        <div className="content-stretch flex flex-col items-center justify-center py-[20px] pl-3 pr-3 sm:py-[28px] sm:pl-4 sm:pr-4 md:py-[36px] lg:py-[44px] lg:pl-5 lg:pr-6 relative size-full min-w-0">
          <div className="aspect-[1024/960] relative shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute inset-0 size-full max-w-none object-contain object-center"
                src={imgUrl(imgStoryBlueSectionCover)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryContainer() {
  return (
    <div className="bg-[#002daa] relative flex w-full shrink-0 justify-center px-5 sm:px-8 md:px-12 lg:px-16" data-name="Story Container">
      <div className="flex w-full max-w-[min(1280px,100%)] min-w-0 flex-row items-center gap-5 md:gap-6 lg:gap-8">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[48px] text-white tracking-[-0.48px] whitespace-nowrap">STORY</p>
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage1)} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage2)} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage3)} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage4)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionItemsRow() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Collection Items Row 1">
      <Link href="/type/a/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame4 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type A</p>
      </Link>
      <Link href="/type/b/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame5 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type B</p>
      </Link>
      <Link href="/type/c/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame6 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type C</p>
      </Link>
      <Link href="/type/d/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame7 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type D</p>
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage5)} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage6)} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage7)} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage8)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionItemsRow1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Collection Items Row 2">
      <Link href="/type/e/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame8 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type E</p>
      </Link>
      <Link href="/type/f/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame9 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type F</p>
      </Link>
      <Link href="/type/g/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame10 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type G</p>
      </Link>
      <Link href="/type/h/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[424px] items-center min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.88]" data-name="PcItems">
        <Frame11 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">Type H</p>
      </Link>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[45px] pt-[52px] px-[45px] relative w-full">
        <p className="font-['Barlow_Condensed',sans-serif] font-medium leading-[0.92] relative shrink-0 text-[48px] text-white tracking-[0.03em] uppercase whitespace-nowrap [font-feature-settings:'kern'_1]">
          Collection
        </p>
        <CollectionItemsRow />
        <CollectionItemsRow1 />
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
        className="overflow-clip relative shrink-0 size-[25px] cursor-pointer transition-opacity hover:opacity-80"
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
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

export default function PcTop() {
  const [readerOpen, setReaderOpen] = useState(false);

  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="PC_TOP">
      <video
        autoPlay
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover bg-black"
        controlsList="nodownload"
        loop
        muted
        playsInline
      >
        <source src="/videos/snobbycover-bg.mp4" type="video/mp4" />
      </video>
      <ReaderPdfOverlay open={readerOpen} onClose={() => setReaderOpen(false)} />
      <div className="relative z-10 w-full flex flex-col items-center">
        <Container onMangaClick={() => setReaderOpen(true)} />
        <StoryContainer />
        <Container4 />
      </div>
      <div className="bg-black relative shrink-0 w-full z-10" data-name="PC_Footer">
        <div className="content-stretch flex flex-col gap-[30px] items-start p-[45px] relative w-full">
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}