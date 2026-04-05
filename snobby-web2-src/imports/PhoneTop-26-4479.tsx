import { imgUrl, type ImgSrc } from "../imgUrl";
import svgPaths from "./svg-onjxnqyi0f";
import logoSvgPaths from "./StoryContainer/svg-ltvce3v4b7";
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

function MarqueeBookPhone({
  bunko,
  manga,
  wrapClassName,
  onMangaClick,
}: {
  bunko: ImgSrc;
  manga: ImgSrc;
  wrapClassName: string;
  onMangaClick: () => void;
}) {
  return (
    <div className={`${wrapClassName} group relative overflow-hidden`}>
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
  const wrap =
    "h-[80px] relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-[52px]";
  return (
    <div className="absolute content-stretch flex gap-[65px] items-center left-0 top-0 animate-scroll-left-mobile">
      {Array.from({ length: 16 }, (_, i) => (
        <MarqueeBookPhone
          key={`m-left-${i}`}
          bunko={marqueeBunkoCovers[i % 8]}
          manga={marqueeMangaCovers[i % 8]}
          wrapClassName={wrap}
          onMangaClick={onMangaClick}
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
      <a
        href="https://home.whenpigsfly.jp/"
        rel="noopener noreferrer"
        className="cursor-pointer transition-opacity hover:opacity-80 z-10"
      >
        <Component />
      </a>
    </div>
  );
}

function Frame3({ onMangaClick }: { onMangaClick: () => void }) {
  const wrap =
    "h-[80px] relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-[52px]";
  return (
    <div className="absolute content-stretch flex gap-[65px] items-center left-[-936px] top-0 animate-scroll-right-mobile">
      {Array.from({ length: 16 }, (_, i) => (
        <MarqueeBookPhone
          key={`m-right-${i}`}
          bunko={marqueeBunkoCovers[i % 8]}
          manga={marqueeMangaCovers[i % 8]}
          wrapClassName={wrap}
          onMangaClick={onMangaClick}
        />
      ))}
    </div>
  );
}

function Container({ onMangaClick }: { onMangaClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col h-[649px] items-center justify-between py-[30px] relative shrink-0 w-[1300px]" data-name="Container">
      <div className="h-[80px] overflow-clip relative shrink-0 w-[970.149px]" data-name="frame36">
        <Frame2 onMangaClick={onMangaClick} />
      </div>
      <Navbar />
      <div className="h-[80px] overflow-clip relative shrink-0 w-[970.149px]" data-name="frame36">
        <Frame3 onMangaClick={onMangaClick} />
      </div>
    </div>
  );
}

function PhoneLogoComponent() {
  return (
    <div className="h-[35px] relative shrink-0 w-[225.723px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.723 35">
        <g clipPath="url(#clip0_98_4536)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={logoSvgPaths.p10b33600} fill="var(--fill-0, white)" id="Vector" />
          <path d={logoSvgPaths.p544d180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={logoSvgPaths.pbec5740} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={logoSvgPaths.p3e5ee240} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={logoSvgPaths.p1dc98700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={logoSvgPaths.p11c5d600} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={logoSvgPaths.p3ceba940} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={logoSvgPaths.p28253a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={logoSvgPaths.p20725d80} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_98_4536">
            <rect fill="white" height="35" width="225.723" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start leading-[0] pt-4 relative w-full px-0">
        <PhoneLogoComponent />
        <div className="font-['Shippori_Mincho',sans-serif] min-w-full not-italic relative shrink-0 text-[12px] text-white tracking-[0.24px] w-[min-content]">
          <p className="leading-[24px] mb-0">あなたは電車に乗っていて、向かいに座っている人が難しそうな本を読んでいる。</p>
          <p className="leading-[24px] mb-0">そういう人はどこか知的で魅力的だ。</p>
          <p className="leading-[24px] mb-0">しかしこんなサイトを見ているあなたはきっと読書をしても、Instagramの通知ひとつで本を閉じてしまう。</p>
          <p className="leading-[24px] mb-0">そのままでは電車で見かけたその人のように、知的な魅力を手にすることはできない。</p>
          <p className="leading-[24px] mb-0">でも大丈夫。ここで自分の読みたい漫画のサイズに合ったブックカバーを印刷して被せれば、あなたはいつでもどこでも「賢い人」になれる。</p>
          <p className="leading-[24px] mb-0">好きな漫画を読みながら、</p>
          <p className="leading-[24px]">知的な魅力を演出しよう。</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Animation Image">
      <div className="content-stretch flex flex-col items-stretch px-0 relative w-full">
        <div className="aspect-[1024/960] relative shrink-0 w-full">
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
  );
}

function StoryContainer() {
  return (
    <div className="bg-[#002daa] relative flex w-full shrink-0 flex-col items-center pb-0 sm:pb-1 px-5 sm:px-6" data-name="Story Container">
      <div className="flex w-full max-w-[min(520px,100%)] flex-col items-center gap-1.5 sm:gap-2">
        <Container2 />
        <Frame5 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage1)} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage2)} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/a/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame4 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type A</p>
      </Link>
      <Link href="/type/b/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame6 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type B</p>
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage3)} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage4)} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/c/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame7 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type C</p>
      </Link>
      <Link href="/type/d/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame8 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type D</p>
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage5)} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage6)} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/e/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame9 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type E</p>
      </Link>
      <Link href="/type/f/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame10 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type F</p>
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage7)} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="aspect-[400/385] bg-[#f6f6f6] content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 w-full">
      <div className="h-[130px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[84px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrl(imgImage8)} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Link href="/type/g/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame11 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type G</p>
      </Link>
      <Link href="/type/h/" className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative cursor-pointer transition-[filter] duration-300 hover:brightness-[0.88] active:brightness-[0.82]" data-name="Collection Item">
        <Frame12 />
        <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Type H</p>
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
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[15px] pt-[36px] px-[15px] relative w-full">
        <p className="font-['Barlow_Condensed',sans-serif] font-medium leading-[0.92] relative shrink-0 text-[30px] text-white tracking-[0.03em] uppercase whitespace-nowrap [font-feature-settings:'kern'_1]">
          Collection
        </p>
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
        className="overflow-clip relative shrink-0 size-[18px] cursor-pointer transition-opacity hover:opacity-80"
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Barlow_Condensed',sans-serif] font-medium tracking-[-0.02em] leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">@2026 Snobby BOOK Cover</p>
    </div>
  );
}

export default function PhoneTop() {
  const [readerOpen, setReaderOpen] = useState(false);

  return (
    <div className="content-stretch flex flex-col items-center pt-[45px] relative size-full" data-name="Phone_TOP">
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
        <Container3 />
      </div>
      <div className="bg-black relative shrink-0 w-full z-10" data-name="PcFooter">
        <div className="content-stretch flex flex-col gap-[15px] items-start px-[20px] py-[30px] relative w-full">
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}