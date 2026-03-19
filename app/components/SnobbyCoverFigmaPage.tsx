"use client";

/**
 * SnobbyCoverFigmaPage
 * Figma: Snobby_manga_cover (OxkTCaOwlejjSgqn4YCbpe)
 * 1920px base design → fluid responsive via clamp / vw
 */
export default function SnobbyCoverFigmaPage() {
  return (
    <div
      style={{
        background: "#002DAA",
        color: "#FFFFFF",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ──────────────────────────────────────
          Section 2: Product Showcase
      ────────────────────────────────────── */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(40px, 5vw, 100px)",
          padding: "clamp(60px, 8vw, 160px) clamp(40px, 6vw, 120px)",
          minHeight: "60vh",
        }}
      >
        {/* Book cover image */}
        <div style={{ flex: "0 0 auto" }}>
          <img
            src="/snobbycover/book.png"
            alt="社会学：祝祭の記号"
            style={{
              width: "clamp(160px, 24vw, 458px)",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Product detail panel */}
        <div
          style={{
            flex: "1 1 320px",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(40px, 5vw, 103px)",
          }}
        >
          {/* BOOK SIZE block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(24px, 3vw, 80px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                gap: "clamp(12px, 1.5vw, 30px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2.3vw, 44px)",
                  lineHeight: 1.3,
                  color: "#FFFFFF",
                }}
              >
                BOOK SIZE
              </span>
              {/* Triangle polygon */}
              <span
                style={{
                  display: "inline-block",
                  width: 0,
                  height: 0,
                  borderTop: "clamp(10px, 1.2vw, 22px) solid transparent",
                  borderBottom: "clamp(10px, 1.2vw, 22px) solid transparent",
                  borderLeft: "clamp(17px, 2vw, 39px) solid #FFFFFF",
                  marginBottom: "4px",
                  flexShrink: 0,
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 500,
                  fontSize: "clamp(18px, 2.1vw, 40px)",
                  lineHeight: 2,
                  color: "#FFFFFF",
                }}
              >
                文庫版
              </span>
              <hr
                style={{
                  border: "none",
                  borderTop: "4px solid #FFFFFF",
                  margin: 0,
                }}
              />
            </div>
          </div>

          {/* BOOK COVER block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(24px, 3vw, 80px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                gap: "clamp(12px, 1.5vw, 30px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fjalla One', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 2.1vw, 40px)",
                  lineHeight: 1.26,
                  color: "#FFFFFF",
                }}
              >
                BOOK COVER
              </span>
              {/* Triangle polygon */}
              <span
                style={{
                  display: "inline-block",
                  width: 0,
                  height: 0,
                  borderTop: "clamp(10px, 1.2vw, 22px) solid transparent",
                  borderBottom: "clamp(10px, 1.2vw, 22px) solid transparent",
                  borderLeft: "clamp(17px, 2vw, 39px) solid #FFFFFF",
                  marginBottom: "4px",
                  flexShrink: 0,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(8px, 0.8vw, 15px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(18px, 2.1vw, 40px)",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                社会学：祝祭の記号
              </span>
              <hr
                style={{
                  border: "none",
                  borderTop: "4px solid #FFFFFF",
                  margin: 0,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          Section 3: About
      ────────────────────────────────────── */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(24px, 2.6vw, 50px)",
          padding: "clamp(30px, 2.6vw, 50px) clamp(24px, 3.1vw, 60px)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(20px, 2.1vw, 40px)",
            lineHeight: 1.2,
            color: "#FFFFFF",
          }}
        >
          About
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(24px, 2.6vw, 50px)",
            padding: "0 clamp(0px, 4.2vw, 80px)",
          }}
        >
          {/* Japanese copy */}
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(14px, 1.25vw, 24px)",
              lineHeight: 2.083,
              letterSpacing: "0.03em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            私たちは、あまりに不自由な社会に生きている。電車内で漫画のページを捲る指先さえ、誰かの視線という名の検閲を受けてはいないか。
            <br />
            &#34;Snobby MANGA Cover&#34;は、あなたの世俗的な耽溺を、形而上学的な思索へと塗り替える知的偽装デバイスである。
            <br />
            手に持つのは、ハイデガーか、ドストエフスキーか、あるいは実体のない架空の古典か。
            <br />
            表層を「知性」で武装し、内面で「娯楽」を貪る。この二元論的な背徳感こそが、現代における真の自由の形である。
            <br />
            さあ、賢者の顔をして、物語の深淵へ。
          </p>

          {/* English copy */}
          <p
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.25vw, 24px)",
              lineHeight: 2.083,
              letterSpacing: "0.03em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Ours is a society of profound confinement. Even a simple flip of a
            manga page is subjected to the silent censorship of the public eye.
            <br />
            <br />
            &#34;Snobby MANGA Cover&#34; is a tool for intellectual disguise,
            reframing your secular pleasures as metaphysical inquiries.
            <br />
            <br />
            In your hands: Heidegger, Dostoevsky, or an untitled void.
            <br />
            <br />
            Weaponize your exterior with &#34;intelligence&#34; while feasting
            on &#34;leisure&#34; inside. This dualistic subversion is the only
            true freedom left to us.
            <br />
            <br />
            Assume the scholar&#39;s poise, and vanish into the depths of the
            story.
          </p>
        </div>
      </section>
    </div>
  );
}
