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

/** 1行分：本画像を表示。白背景を消し、矢印方向に無限スクロール。 */
function SnobbyCoverScrollRow({ direction }: { direction: "right" | "left" }) {
  const copiesPerSet = 4;
  const totalCopies = copiesPerSet * 2;
  const cardWidth = "clamp(70px, 12vw, 160px)";
  const gap = "clamp(6px, 1.5vw, 14px)";
  return (
    <div
      className="snobbycover-row"
      style={{
        overflow: "hidden",
        height: "20vh",
        minHeight: "60px",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        className={direction === "right" ? "snobbycover-strip snobbycover-strip--right" : "snobbycover-strip snobbycover-strip--left"}
        style={{
          display: "flex",
          alignItems: "center",
          gap,
          padding: "0 clamp(8px, 2vw, 16px)",
          width: "200%",
          height: "100%",
        }}
      >
        {Array.from({ length: totalCopies }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${cardWidth}`,
              width: cardWidth,
              minWidth: cardWidth,
              borderRadius: "6px",
              overflow: "hidden",
              background: "transparent",
              isolation: "isolate",
            }}
          >
            <img
              src={SNobbyCoverBookSrc}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                minHeight: "50px",
                objectFit: "contain",
                display: "block",
                mixBlendMode: "multiply",
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
        pointerEvents: "none",
      }}
    >
      {/* 上段 1/5：GIF が右方向に流れる */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <SnobbyCoverScrollRow direction="right" />
      </div>
      {/* 下段 1/5：GIF が左方向に流れる（中央 3/5 は動画のみ） */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <SnobbyCoverScrollRow direction="left" />
      </div>
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
