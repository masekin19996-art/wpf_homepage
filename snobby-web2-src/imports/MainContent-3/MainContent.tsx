import svgPaths from "./svg-v5bu1yr7f6";

function Component() {
  return (
    <div className="col-1 h-[65px] ml-0 mt-0 relative row-1 w-[419.2px]" data-name="_レイヤー_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419.2 65">
        <g clipPath="url(#clip0_98_4547)" id="_ã¬ã¤ã¤ã¼_1">
          <path d={svgPaths.p1c81ce80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pf7a7100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3dda2a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p33335800} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p207aad80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p33ff2b00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1e299e80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3cc5d880} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3d477a00} fill="var(--fill-0, white)" id="Vector_9" />
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

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Component />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[45px] items-start justify-center leading-[0] p-[90px] relative w-full">
          <Group />
          <div className="font-['Shippori_Mincho:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[18px] text-white tracking-[0.36px] w-[min-content]">
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

function ImageContainer() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[30px] pr-[80px] relative size-full">
          <div className="aspect-[699/654] relative shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.2%] left-0 max-w-none top-[-0.21%] w-full" src="29e7cd6e2f99acae267dfcf14e425cd5b4b7bc0c.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="bg-[#002daa] content-stretch flex items-center relative size-full" data-name="Main Content">
      <ContentContainer />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageContainer />
      </div>
    </div>
  );
}