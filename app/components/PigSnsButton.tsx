"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── SNSリンク（ここを変更） ── */
const SNS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/whenpigsfly/",
    color: "#b0a0b8",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/whenpigsfly",
    color: "#7888a0",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/whenpigsfly",
    color: "#8a90b8",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
  },
];

/* ── 豚アイコン（白背景を背景色になじませてオブジェクトのみ見えるように） ── */
function PigSnsIcon({ size = 36 }: { size?: number }) {
  return (
    <img
      src="/pig-sns-icon.png"
      alt=""
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: "999px",
        backgroundColor: "rgba(210,222,236,0.88)", // pig-btn と同じ色で四角をなじませる
        filter: "brightness(0.92) saturate(0.7) hue-rotate(185deg) contrast(1.05)",
      }}
    />
  );
}

export default function PigSnsButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-3 left-3 z-30" style={{ userSelect: "none" }}>
      {/* 豚ボタン */}
      <motion.button
        className="pig-btn flex items-center justify-center"
        style={{ width: 56, height: 56 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.88 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="SNSメニューを開く"
      >
        <PigSnsIcon size={36} />
      </motion.button>

      {/* SNSドロップダウン */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -6 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            style={{
              position: "absolute",
              top: "62px",
              left: 0,
              background: "rgba(232,240,250,0.97)",
              border: "1.5px solid rgba(200,218,240,0.8)",
              borderRadius: "14px",
              padding: "10px",
              boxShadow: "0 8px 28px rgba(0,50,120,0.18)",
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              minWidth: "130px",
            }}
          >
            {SNS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 10px",
                  borderRadius: "9px",
                  background: s.color,
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(false)}
              >
                {s.icon}
                <span style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}>
                  {s.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
