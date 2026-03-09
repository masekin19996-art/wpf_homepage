"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TileData } from "../data/tiles";

interface DetailPanelProps {
  tile: TileData | null;
  onClose: () => void;
}

export default function DetailPanel({ tile, onClose }: DetailPanelProps) {
  return (
    <AnimatePresence>
      {tile && (
        <motion.div
          key={tile.id}
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* 背景オーバーレイ */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5, 15, 35, 0.72)" }}
            onClick={onClose}
          />

          {/* パネル本体 */}
          <motion.div
            className="wii-panel rounded-3xl relative overflow-hidden"
            style={{ width: "clamp(310px, 42vw, 480px)", zIndex: 1 }}
            initial={{ scale: 0.75, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.75, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 330, damping: 32 }}
          >
            {/* サムネイルエリア */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                height: "clamp(160px, 20vw, 230px)",
                background: "linear-gradient(160deg, #dce8f4 0%, #eaf2fb 60%, #f2f7fd 100%)",
                borderBottom: "1px solid rgba(180,210,240,0.5)",
              }}
            >
              {/* 回転リング */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "68%", aspectRatio: "1",
                  border: "1.5px solid rgba(150,190,230,0.35)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "46%", aspectRatio: "1",
                  border: "1.5px solid rgba(150,190,230,0.25)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />

              {/* メインアイコン（プレースホルダー） */}
              <motion.div
                className="relative z-10 flex items-center justify-center rounded-2xl"
                style={{
                  width: "clamp(80px, 9vw, 110px)",
                  aspectRatio: "1",
                  background: "linear-gradient(135deg, #c8daf0 0%, #b0cbe8 100%)",
                  border: "2px solid rgba(160,200,240,0.6)",
                  boxShadow: "0 8px 24px rgba(0,60,120,0.18)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="45%"
                  height="45%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(60,110,170,0.8)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
              </motion.div>

              {/* 上部グロス */}
              <div
                className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "40%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* テキスト & ボタンエリア */}
            <div className="relative z-10 px-8 pt-6 pb-7">
              {/* タイトル */}
              <h2
                className="font-bold text-center"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  color: "#1a3c66",
                  letterSpacing: "0.08em",
                  lineHeight: 1.2,
                }}
              >
                {tile.title}
              </h2>
              <p
                className="text-center font-medium mt-1"
                style={{ fontSize: "clamp(11px, 1.1vw, 13px)", color: "#6688aa" }}
              >
                {tile.subtitle}
              </p>
              <p
                className="text-center mt-3"
                style={{
                  fontSize: "clamp(11px, 1vw, 13px)",
                  color: "#5577a0",
                  lineHeight: 1.7,
                }}
              >
                {tile.description}
              </p>

              {/* アクセントライン */}
              <div
                className="mx-auto my-5 rounded-full"
                style={{
                  width: "44px", height: "2px",
                  background: "linear-gradient(90deg, transparent, #5599dd, transparent)",
                }}
              />

              {/* ENTERボタン */}
              <motion.a
                href={tile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wii-btn rounded-full py-3 px-8"
                style={{ fontSize: "clamp(13px, 1.3vw, 15px)", letterSpacing: "0.12em" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                ▶&nbsp;&nbsp;ENTER
              </motion.a>

              {/* BACKボタン */}
              <motion.button
                className="block w-full text-center mt-3"
                style={{
                  fontSize: "clamp(11px, 1vw, 13px)",
                  color: "#7799bb",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.07em",
                  fontFamily: "inherit",
                }}
                onClick={onClose}
                whileHover={{ color: "#4466aa", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                ← BACK TO HOME
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
