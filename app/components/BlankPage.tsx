"use client";

import { useRef, useEffect } from "react";

/**
 * 4つのサブドメイン（ultra.omamori / snobbycover / hickeytattoo / gummygummy）で表示する、
 * まっさらなページです。後からデザインやコンテンツを足せます。
 */
const SNobbyCoverHost = "snobbycover.whenpigsfly.jp";

const SNobbyCoverBookSrc = "/snobbycover/book.png";

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

/** 1行分：白長方形の枠で本画像を表示。矢印方向に無限スクロール（上段→右・下段→左）。 */
function SnobbyCoverScrollRow({ direction }: { direction: "right" | "left" }) {
  const copiesPerSet = 4;
  const totalCopies = copiesPerSet * 2; /* 2組でループ */
  const cardWidth = "clamp(140px, 28vw, 320px)";
  const gap = "clamp(8px, 2vw, 20px)";
  return (
    <div
      className="snobbycover-row"
      style={{
        overflow: "hidden",
        flex: "1 1 0",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        className={direction === "right" ? "snobbycover-strip snobbycover-strip--right" : "snobbycover-strip snobbycover-strip--left"}
        style={{
          display: "flex",
          alignItems: "stretch",
          gap,
          padding: "0 clamp(12px, 3vw, 24px)",
          width: "200%",
          minHeight: "min(22vh, 180px)",
        }}
      >
        {Array.from({ length: totalCopies }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${cardWidth}`,
              width: cardWidth,
              minWidth: cardWidth,
              borderRadius: "8px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={SNobbyCoverBookSrc}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                minHeight: "120px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SnobbyCoverOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none",
      }}
    >
      <SnobbyCoverScrollRow direction="right" />
      <SnobbyCoverScrollRow direction="left" />
    </div>
  );
}

export default function BlankPage({ host = "" }: { host?: string }) {
  const isSnobbyCover = host === SNobbyCoverHost;

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: isSnobbyCover ? undefined : "#f8f9fa",
        margin: 0,
        padding: 0,
      }}
    >
      {isSnobbyCover && (
        <>
          <SnobbyCoverVideo />
          <SnobbyCoverOverlay />
        </>
      )}
    </div>
  );
}
