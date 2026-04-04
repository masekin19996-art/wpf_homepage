import svgPaths from "./svg-ltvce3v4b7";

function Component() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[225.723px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.723 35">
        <g clipPath="url(#clip0_98_4536)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.p10b33600} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p544d180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pbec5740} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3e5ee240} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1dc98700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p11c5d600} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3ceba940} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p28253a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p20725d80} fill="var(--fill-0, white)" id="Vector_9" />
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

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Component />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start leading-[0] pt-[55px] px-[40px] relative w-full">
        <Group />
        <div className="font-['Shippori_Mincho:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[13px] text-white tracking-[0.26px] w-[min-content]">
          <p className="leading-[26px] mb-0">あなたは電車に乗っていて、向かいに座っている人が難しそうな本を読んでいる。</p>
          <p className="leading-[26px] mb-0">そういう人はどこか知的で魅力的だ。</p>
          <p className="leading-[26px] mb-0">しかしこんなサイトを見ているあなたはきっと読書をしても、Instagramの通知ひとつで本を閉じてしまう。</p>
          <p className="leading-[26px] mb-0">そのままでは電車で見かけたその人のように、知的な魅力を手にすることはできない。</p>
          <p className="leading-[26px] mb-0">でも大丈夫。ここで自分の読みたい漫画のサイズに合ったブックカバーを印刷して被せれば、あなたはいつでもどこでも「賢い人」になれる。</p>
          <p className="leading-[26px] mb-0">好きな漫画を読みながら、</p>
          <p className="leading-[26px]">知的な魅力を演出しよう。</p>
        </div>
      </div>
    </div>
  );
}

function AnimationImage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Animation Image">
      <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
        <div className="aspect-[352/317] relative shrink-0 w-full" data-name="page_flip_animation_1 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[104.1%] left-[-0.09%] max-w-none top-[-1.82%] w-full" src="29e7cd6e2f99acae267dfcf14e425cd5b4b7bc0c.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StoryContainer() {
  return (
    <div className="bg-[#002daa] content-stretch flex flex-col gap-[15px] items-start pb-[20px] relative size-full" data-name="Story Container">
      <Container />
      <AnimationImage />
    </div>
  );
}