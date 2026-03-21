"use client";

/**
 * SnobbyCoverFigmaPage
 * Figma: Snobby_manga_cover (OxkTCaOwlejjSgqn4YCbpe)
 * Figma のスライド（Slide 16:9 - 1, 2, 3）をそのまま表示
 */
export default function SnobbyCoverFigmaPage() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Figma の Slide 16:9 - 1: Hero（森林＋浮遊カバー＋MAKE YOUR BOOKS SMART） */}
      <section style={{ width: "100%", lineHeight: 0 }}>
        <img
          src="/snobbycover/Slide-169-1.png"
          alt="MAKE YOUR BOOKS SMART"
          style={{ width: "100%", height: "auto", display: "block", verticalAlign: "top" }}
        />
      </section>
      {/* Figma の Slide 16:9 - 2: STORY（青）＋ SIMULATOR（黒） */}
      <section style={{ width: "100%", lineHeight: 0 }}>
        <img
          src="/snobbycover/Slide-169-2.png"
          alt="STORY & SIMULATOR"
          style={{ width: "100%", height: "auto", display: "block", verticalAlign: "top" }}
        />
      </section>
      {/* Figma の Slide 16:9 - 3: COLLECTION */}
      <section style={{ width: "100%", lineHeight: 0 }}>
        <img
          src="/snobbycover/Slide-169-3.png"
          alt="COLLECTION"
          style={{ width: "100%", height: "auto", display: "block", verticalAlign: "top" }}
        />
      </section>
    </div>
  );
}
