"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tiles } from "../data/tiles";
import WiiTile from "./WiiTile";
import PigSnsButton from "./PigSnsButton";
import MailModal from "./MailModal";
import ShopModal from "./ShopModal";

/* ── リンク設定（ここを変更） ── */
const ABOUT_URL = "https://example.com/about";  // whenpigsfly Aboutページ

const ITEMS_PER_PAGE = 12;
const PAGE_COUNT = Math.ceil(tiles.length / ITEMS_PER_PAGE); // 3

/* ── ショッピングバッグアイコン ── */
function IconShop() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

/* ── 封筒アイコン ── */
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="22,4 12,13 2,4"/>
    </svg>
  );
}

/* ── スライドアニメーション（Wii風残像） ── */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0.15,
    filter: "blur(10px)",
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 28, mass: 1.1 },
      opacity: { duration: 0.28 },
      filter: { duration: 0.32 },
      scale: { duration: 0.28 },
    },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0.15,
    filter: "blur(10px)",
    scale: 0.97,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 28, mass: 1.1 },
      opacity: { duration: 0.22 },
      filter: { duration: 0.22 },
      scale: { duration: 0.22 },
    },
  }),
};

export default function WiiMenu() {
  const [mailOpen, setMailOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [page, setPage]         = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = (newPage: number) => {
    if (newPage < 0 || newPage >= PAGE_COUNT || newPage === page) return;
    setDirection(newPage > page ? 1 : -1);
    setPage(newPage);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 48) {
      goTo(dx > 0 ? page + 1 : page - 1);
    }
  };

  const currentTiles = tiles.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <div className="wii-bg relative w-screen h-screen overflow-hidden flex flex-col">

      {/* ── 豚SNSボタン（左上） ── */}
      <PigSnsButton />

      {/* ── メインコンテンツエリア ── */}
      <main
        className="flex-1 flex items-center justify-center relative"
        style={{ paddingTop: "48px", paddingBottom: "106px", paddingLeft: "52px", paddingRight: "52px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 左矢印 */}
        <AnimatePresence>
          {page > 0 && (
            <motion.button
              key="arrow-left"
              className="page-arrow"
              style={{ left: "8px" }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.14, x: -2 }}
              whileTap={{ scale: 0.88 }}
              onClick={() => goTo(page - 1)}
              aria-label="前のページ"
            >
              ‹
            </motion.button>
          )}
        </AnimatePresence>

        {/* グリッド（3ページ分のスライド） */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-4 gap-3"
            style={{ width: "min(1280px, 94vw)", willChange: "transform, opacity, filter" }}
          >
            {currentTiles.map((tile, i) => (
              <WiiTile
                key={tile.id}
                tile={tile}
                index={i}
                isClickable={page === 0 && i < 4}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 右矢印 */}
        <AnimatePresence>
          {page < PAGE_COUNT - 1 && (
            <motion.button
              key="arrow-right"
              className="page-arrow"
              style={{ right: "8px" }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              whileHover={{ scale: 1.14, x: 2 }}
              whileTap={{ scale: 0.88 }}
              onClick={() => goTo(page + 1)}
              aria-label="次のページ"
            >
              ›
            </motion.button>
          )}
        </AnimatePresence>

        {/* ページドット */}
        <div className="page-dots">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <motion.button
              key={i}
              className={`page-dot${i === page ? " active" : ""}`}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`ページ ${i + 1}`}
            />
          ))}
        </div>
      </main>

      {/* ── ボトムバー（fixed・中央アーチ） ── */}
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 40 }}>
        {/* Wii準拠: 中央が盛り上がり(y=4)、左右が低い(y=26)アーチ形状（変更不可） */}
        <svg
          width="100%" height="34" viewBox="0 0 1440 34" preserveAspectRatio="none"
          style={{ display: "block", marginBottom: "-1px" }}
        >
          <defs>
            <linearGradient id="archGradBot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(205,228,255,0.88)" />
              <stop offset="100%" stopColor="rgba(250,253,255,0.97)" />
            </linearGradient>
          </defs>
          {/* 中央アーチ塗り */}
          <path
            d="M0,34 L0,26 C220,26 480,4 720,4 C960,4 1220,26 1440,26 L1440,34 Z"
            fill="url(#archGradBot)"
          />
          {/* 青いハイライトライン */}
          <path
            d="M0,26 C220,26 480,4 720,4 C960,4 1220,26 1440,26"
            fill="none"
            stroke="rgba(100,195,255,0.70)"
            strokeWidth="1.6"
          />
          {/* 白い内側グロー */}
          <path
            d="M0,28 C220,28 480,6 720,6 C960,6 1220,28 1440,28"
            fill="none"
            stroke="rgba(255,255,255,0.82)"
            strokeWidth="1.0"
          />
        </svg>

        {/* 1fr-auto-1fr: 中央を水平方向に固定 */}
        <footer
          className="wii-bottom-bar"
          style={{
            height: "72px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "18px",
          }}
        >
          {/* ── 左：SHOPボタン（モーダル開き） ── */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <motion.button
              className="wii-circle-btn"
              style={{ width: 50, height: 50, flexDirection: "column", gap: "2px" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.90 }}
              onClick={() => setShopOpen(true)}
              aria-label="ショップ"
            >
              <IconShop />
              <span style={{
                fontSize: "7px", fontWeight: 700, letterSpacing: "0.07em",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}>SHOP</span>
            </motion.button>
          </div>

          {/* ── 中央：wpfロゴ（1.5倍） ── */}
          <motion.a
            href={ABOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            whileHover={{ scale: 1.06, opacity: 0.85 }}
            whileTap={{ scale: 0.94 }}
            title="whenpigsfly about"
          >
            <div style={{ mixBlendMode: "multiply" }}>
              <img
                src="/wpf-logo.png"
                alt="whenpigsfly"
                style={{
                  height: "39px", width: "auto", display: "block",
                  filter: "invert(45%) sepia(18%) saturate(380%) hue-rotate(185deg) brightness(82%) opacity(0.72)",
                }}
              />
            </div>
          </motion.a>

          {/* ── 右：メールボタン ── */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <motion.button
              className="wii-circle-btn"
              style={{ width: 50, height: 50 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.90 }}
              onClick={() => setMailOpen(true)}
              aria-label="メール・お問い合わせ"
            >
              <IconMail />
            </motion.button>
          </div>
        </footer>
      </div>

      {/* ── モーダル ── */}
      <MailModal isOpen={mailOpen} onClose={() => setMailOpen(false)} />
      <ShopModal isOpen={shopOpen} onClose={() => setShopOpen(false)} />
    </div>
  );
}
