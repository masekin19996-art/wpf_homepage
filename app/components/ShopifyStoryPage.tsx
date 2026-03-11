"use client";

import { useRef, useEffect, useState } from "react";

type StoryConfig = {
  sections: Array<
    | { type: "video"; video: string; videoUrl: string }
    | { type: "image"; image: string }
  >;
  getVideoUrl: (filename: string) => string;
  getImageUrl: (filename: string) => string;
};

/** 動画セクション（ループ・ミュート・オートプレイ）。ローカル失敗時は YouTube にフォールバック */
function StoryVideoSection({
  src,
  youtubeFallback,
}: {
  src: string;
  youtubeFallback: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useYoutube, setUseYoutube] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || useYoutube) return;
    el.muted = true;
    el.playsInline = true;
    const play = () => el.play().catch(() => {});
    play();
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);
    return () => {
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
    };
  }, [useYoutube]);

  const ytId = youtubeFallback?.match(/[?&]v=([^&]+)/)?.[1] ?? "";

  return (
    <section
      className="story-section story-video"
      style={{
        padding: "100px 0 36px",
        background: "#fce4fb",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: 8 }}>
          {!useYoutube ? (
            <video
              ref={videoRef}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={() => setUseYoutube(true)}
            />
          ) : null}
          {useYoutube && ytId ? (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&loop=1&playlist=${ytId}&mute=1&playsinline=1`}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** 画像セクション */
function StoryImageSection({ src, alt }: { src: string; alt?: string }) {
  return (
    <section
      className="story-section story-image"
      style={{
        padding: "0",
        background: "#fce4fb",
      }}
    >
      <div style={{ width: "100%" }}>
        <img
          src={src}
          alt={alt ?? ""}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            verticalAlign: "top",
          }}
        />
      </div>
    </section>
  );
}

/** ITEM / STORY ヘッダー（Shopify の rich-text 相当） */
function StoryHeader({
  itemHref,
  storyHref,
  isStory,
}: {
  itemHref: string;
  storyHref: string;
  isStory: boolean;
}) {
  return (
    <section
      style={{
        padding: "68px 24px 0",
        background: "#fce4fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 28,
        flexWrap: "wrap",
      }}
    >
      <a
        href={itemHref}
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 32px",
          fontSize: 16,
          fontWeight: 600,
          borderRadius: 9999,
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.06)",
          color: "#000",
          textDecoration: "none",
          transition: "0.25s",
        }}
      >
        ITEM
      </a>
      <a
        href={storyHref}
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 32px",
          fontSize: 16,
          fontWeight: 600,
          borderRadius: 9999,
          background: isStory ? "rgba(0,0,0,0.06)" : "#fff",
          border: "1px solid rgba(0,0,0,0.06)",
          color: "#000",
          textDecoration: "none",
          transition: "0.25s",
        }}
      >
        STORY
      </a>
    </section>
  );
}

export default function ShopifyStoryPage({
  config,
  itemHref = "/",
  storyHref = "/",
}: {
  config: StoryConfig;
  itemHref?: string;
  storyHref?: string;
}) {
  return (
    <div
      className="shopify-story-page"
      style={{
        minHeight: "100vh",
        height: "100dvh",
        maxHeight: "100vh",
        background: "#fce4fb",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <StoryHeader itemHref={itemHref} storyHref={storyHref} isStory />
      {config.sections.map((s, i) =>
        s.type === "video" ? (
          <StoryVideoSection
            key={i}
            src={config.getVideoUrl(s.video)}
            youtubeFallback={s.videoUrl}
          />
        ) : (
          <StoryImageSection
            key={i}
            src={config.getImageUrl(s.image)}
            alt=""
          />
        )
      )}
    </div>
  );
}
