"use client";

import { useRef, useEffect } from "react";

/**
 * 4つのサブドメイン（ultra.omamori / snobbycover / hickeytattoo / gummygummy）で表示する、
 * まっさらなページです。後からデザインやコンテンツを足せます。
 */
const SNobbyCoverHost = "snobbycover.whenpigsfly.jp";

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
      {isSnobbyCover && <SnobbyCoverVideo />}
    </div>
  );
}
