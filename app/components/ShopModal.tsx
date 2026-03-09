"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PIN_LENGTH = 4;

export default function ShopModal({ isOpen, onClose }: ShopModalProps) {
  const [pin, setPin] = useState<string[]>([]);
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);

  const handleDigit = (d: string) => {
    if (pin.length >= PIN_LENGTH) return;
    setPin((p) => [...p, d]);
  };

  const handleDelete = () => setPin((p) => p.slice(0, -1));

  const handleConfirm = () => {
    if (pin.length < PIN_LENGTH) return;
    setShake(true);
    setError(true);
    setTimeout(() => {
      setShake(false);
      setError(false);
      setPin([]);
    }, 1100);
  };

  const handleClose = () => {
    setPin([]);
    setShake(false);
    setError(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          {/* オーバーレイ */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5,15,35,0.74)" }}
            onClick={handleClose}
          />

          {/* モーダル本体 */}
          <motion.div
            className="shop-modal rounded-3xl relative overflow-hidden"
            style={{ width: "clamp(280px, 30vw, 340px)", zIndex: 1 }}
            initial={{ scale: 0.78, opacity: 0, y: 22 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.78, opacity: 0, y: 22 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── ヘッダー ── */}
            <div style={{
              background: "linear-gradient(160deg, #4aa8ee 0%, #2a7ecc 55%, #1a62be 100%)",
              padding: "18px 20px 14px",
              borderBottom: "1px solid rgba(100,180,255,0.25)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <div style={{
                    width: 30, height: 30,
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: "9px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: "13px", fontWeight: 800,
                    color: "white", letterSpacing: "0.10em",
                    textShadow: "0 1px 4px rgba(0,30,100,0.4)",
                  }}>
                    SHOP CHANNEL
                  </span>
                </div>
                <motion.button
                  onClick={handleClose}
                  style={{
                    background: "rgba(255,255,255,0.22)", border: "none",
                    borderRadius: "50%", width: 26, height: 26,
                    cursor: "pointer", color: "white", fontSize: "13px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                  whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.88 }}
                >✕</motion.button>
              </div>
            </div>

            {/* ── ボディ ── */}
            <div style={{ padding: "22px 20px 24px" }}>
              {/* 説明文 */}
              <p style={{
                textAlign: "center", fontSize: "12px",
                color: "#3a6090", fontWeight: 600,
                letterSpacing: "0.03em", marginBottom: "18px",
                lineHeight: 1.6,
              }}>
                パスワードを入力してください
              </p>

              {/* PINドット表示 */}
              <motion.div
                animate={shake ? { x: [-7, 7, -7, 7, -4, 4, 0] } : {}}
                transition={{ duration: 0.45 }}
                style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "22px" }}
              >
                {Array.from({ length: PIN_LENGTH }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: i < pin.length ? [1, 1.3, 1] : 1,
                    }}
                    transition={{ duration: 0.18 }}
                    style={{
                      width: 14, height: 14, borderRadius: "50%",
                      border: `2px solid ${error ? "rgba(220,70,70,0.6)" : "rgba(80,140,210,0.45)"}`,
                      background: i < pin.length
                        ? (error ? "#e05858" : "#3a92e4")
                        : "transparent",
                      boxShadow: i < pin.length && !error
                        ? "0 0 8px rgba(60,150,240,0.4)"
                        : "none",
                      transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s",
                    }}
                  />
                ))}
              </motion.div>

              {/* 数字パッド */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                maxWidth: "210px",
                margin: "0 auto",
              }}>
                {["1","2","3","4","5","6","7","8","9"].map((d) => (
                  <motion.button
                    key={d}
                    className="pin-btn"
                    onClick={() => handleDigit(d)}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.91, backgroundColor: "rgba(80,155,235,0.22)" }}
                  >{d}</motion.button>
                ))}
                <div />
                <motion.button
                  className="pin-btn"
                  onClick={() => handleDigit("0")}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.91 }}
                >0</motion.button>
                <motion.button
                  className="pin-btn pin-del"
                  onClick={handleDelete}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.91 }}
                >⌫</motion.button>
              </div>

              {/* 操作ボタン行 */}
              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <motion.button
                  className="shop-btn-cancel"
                  style={{ flex: 1 }}
                  onClick={handleClose}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  キャンセル
                </motion.button>
                <motion.button
                  className="shop-btn-confirm"
                  style={{ flex: 1, opacity: pin.length < PIN_LENGTH ? 0.55 : 1 }}
                  onClick={handleConfirm}
                  whileHover={{ scale: pin.length < PIN_LENGTH ? 1 : 1.03 }}
                  whileTap={{ scale: pin.length < PIN_LENGTH ? 1 : 0.97 }}
                >
                  確 認
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
