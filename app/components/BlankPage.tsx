"use client";

import { useRef, useEffect, useState } from "react";
import ShopifyStoryPage from "./ShopifyStoryPage";
import { STORY_GUM, STORY_KISS } from "@/data/shopifyStory";

/**
 * 4つのサブドメイン（ultra.omamori / snobbycover / hickeytattoo / gummygummy）で表示する、
 * まっさらなページです。後からデザインやコンテンツを足せます。
 */
const SNobbyCoverHost = "snobbycover.whenpigsfly.jp";
const FindTheDragonballHost = "findthedragonball.whenpigsfly.jp";
const GummyGummyHost = "gummygummy.whenpigsfly.jp";
const HickeyTattooHost = "hickeytattoo.whenpigsfly.jp";

function SnobbyCoverVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.playsInline = true;
    const play = () => {
      el.play().catch(() => {});
    };
    play();
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);
    return () => {
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectFit: "cover" }}
    >
      <source src="/videos/snobbycover-bg.mp4" type="video/mp4" />
    </video>
  );
}

/** 1行分：白枠＋BOOKテキスト。サイズ・動きは変更なし。 */
function SnobbyCoverScrollRow({ direction }: { direction: "right" | "left" }) {
  const copiesPerSet = 6;
  const totalCopies = copiesPerSet * 2;
  const cardWidth = "calc(100vw / 6)";
  return (
    <div
      className="snobbycover-row"
      style={{
        overflow: "hidden",
        height: "20vh",
        minHeight: "70px",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        className={`snobbycover-strip snobbycover-strip--${direction}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          width: "200%",
          height: "100%",
          flexShrink: 0,
        }}
      >
        {Array.from({ length: totalCopies }).map((_, i) => (
          <div
            key={i}
            className="snobbycover-book-card"
            style={{
              flex: `0 0 ${cardWidth}`,
              width: cardWidth,
              minWidth: cardWidth,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
              background: "transparent",
              border: "2px solid white",
              borderRadius: 0,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 3vw, 28px)",
              color: "white",
              letterSpacing: "0.08em",
            }}
          >
            BOOK
          </div>
        ))}
      </div>
    </div>
  );
}

function SnobbyCoverContent() {
  return (
    <div
      className="snobbycover-content"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px, 6vw, 80px)",
        background: "rgba(250,250,250,0.92)",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: "#111",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: 700,
          marginBottom: "32px",
          letterSpacing: "0.12em",
        }}
      >
        商品
      </h2>
      <p
        style={{
          fontSize: "clamp(14px, 1.5vw, 16px)",
          lineHeight: 1.8,
          maxWidth: "520px",
          textAlign: "center",
          fontWeight: 400,
          letterSpacing: "0.04em",
        }}
      >
        コンテンツの説明や商品をここに並べることができます。
      </p>
    </div>
  );
}

function FindTheDragonballPlaceholder() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        background: "#ffffff",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: "#111",
      }}
    >
      <span
        style={{
          fontSize: "clamp(24px, 4vw, 40px)",
          fontWeight: 400,
          letterSpacing: "0.04em",
        }}
      >
        dragonball
      </span>
    </div>
  );
}

export default function BlankPage({ host = "" }: { host?: string }) {
  const isSnobbyCover = host === SNobbyCoverHost;
  const isFindTheDragonball = host === FindTheDragonballHost;
  const isGummyGummy = host === GummyGummyHost;
  const isHickeyTattoo = host === HickeyTattooHost;
  const [phase, setPhase] = useState<"idle" | "exiting" | "entered">("idle");

  if (isFindTheDragonball) {
    return <FindTheDragonballPlaceholder />;
  }
  if (isGummyGummy) {
    return (
      <ShopifyStoryPage
        config={STORY_GUM}
        itemHref={`https://${GummyGummyHost}/`}
        storyHref={`https://${GummyGummyHost}/`}
      />
    );
  }
  if (isHickeyTattoo) {
    return (
      <ShopifyStoryPage
        config={STORY_KISS}
        itemHref={`https://${HickeyTattooHost}/`}
        storyHref={`https://${HickeyTattooHost}/`}
      />
    );
  }

  const handleEnter = () => {
    if (phase !== "idle") return;
    setPhase("exiting");
    setTimeout(() => setPhase("entered"), 2000);
  };

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden ${isSnobbyCover ? "snobbycover-page" : ""}`}
      style={{
        background: isSnobbyCover ? undefined : "#f8f9fa",
        margin: 0,
        padding: 0,
      }}
    >
      {isSnobbyCover && (
        <>
          <SnobbyCoverVideo />

          {/* 上段・下段：白枠BOOK（Enterでじわっとフェードアウト） */}
          <div
            className="snobbycover-strips-wrap"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              opacity: phase === "idle" ? 1 : 0,
              transition: phase === "exiting" ? "opacity 1.8s ease-out" : phase === "entered" ? "none" : "opacity 0.3s ease",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
              <SnobbyCoverScrollRow direction="right" />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
              <SnobbyCoverScrollRow direction="left" />
            </div>
          </div>

          {/* 中央：タイトル＋Enter（Enterでフェードアウト） */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: phase === "idle" ? "auto" : "none",
              opacity: phase === "entered" ? 0 : 1,
              transition: phase === "exiting" ? "opacity 1.2s ease-out" : "none",
            }}
          >
            <h1
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 6vw, 72px)",
                color: "white",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                letterSpacing: "0.06em",
                marginBottom: "28px",
              }}
            >
              Snobby Book Cover
            </h1>
            <button
              onClick={handleEnter}
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(14px, 1.5vw, 18px)",
                letterSpacing: "0.2em",
                color: "white",
                background: "transparent",
                border: "2px solid white",
                padding: "12px 32px",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#111";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Enter
            </button>
          </div>

          {/* コンテンツ（Enter後に表示・背景動画のまま） */}
          {phase === "entered" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                animation: "snobbycoverContentIn 0.6s ease-out forwards",
              }}
            >
              <SnobbyCoverContent />
            </div>
          )}
        </>
      )}
    </div>
  );
}
