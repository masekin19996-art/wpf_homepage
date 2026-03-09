"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = "subscribe" | "message";

export default function MailModal({ isOpen, onClose }: MailModalProps) {
  const [tab, setTab] = useState<Tab>("subscribe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === "message" && name && email && message) {
      const mailto = `mailto:info@whenpigsfly.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;
      window.open(mailto, "_blank");
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName(""); setEmail(""); setMessage("");
      onClose();
    }, 2200);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName(""); setEmail(""); setMessage("");
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
          transition={{ duration: 0.24 }}
        >
          {/* オーバーレイ */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5,15,35,0.70)" }}
            onClick={handleClose}
          />

          {/* モーダル本体 */}
          <motion.div
            className="mail-modal rounded-3xl relative overflow-hidden"
            style={{ width: "clamp(300px, 38vw, 440px)", zIndex: 1 }}
            initial={{ scale: 0.78, opacity: 0, y: 22 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.78, opacity: 0, y: 22 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ヘッダー */}
            <div style={{
              background: "linear-gradient(160deg, #b8cede 0%, #9ab4cc 100%)",
              padding: "20px 24px 16px",
              borderBottom: "1px solid rgba(160,195,230,0.4)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "16px", fontWeight: 700,
                  color: "white", letterSpacing: "0.04em",
                  textShadow: "0 1px 3px rgba(0,40,80,0.3)",
                }}>
                  ✉ Contact
                </span>
                <motion.button
                  onClick={handleClose}
                  style={{ background: "rgba(255,255,255,0.3)", border: "none", borderRadius: "50%",
                    width: 28, height: 28, cursor: "pointer", color: "white",
                    fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                >✕</motion.button>
              </div>

              {/* タブ */}
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                {(["subscribe", "message"] as Tab[]).map((t) => (
                  <motion.button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      padding: "5px 14px", borderRadius: "20px", border: "none",
                      cursor: "pointer", fontSize: "11px", fontWeight: 700,
                      letterSpacing: "0.05em",
                      background: tab === t ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                      color: tab === t ? "#2a5080" : "rgba(255,255,255,0.85)",
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  >
                    {t === "subscribe" ? "SUBSCRIBE" : "MESSAGE"}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* フォーム */}
            <div style={{ padding: "22px 24px 24px" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: "center", padding: "24px 0" }}
                  >
                    <div style={{ fontSize: "36px", marginBottom: "10px" }}>✓</div>
                    <p style={{ color: "#2a5080", fontWeight: 700, fontSize: "14px" }}>
                      {tab === "subscribe" ? "登録ありがとうございます！" : "メッセージを受け取りました！"}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key={tab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.18 }}
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                  >
                    {tab === "message" && (
                      <input
                        className="mail-input"
                        placeholder="お名前"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ padding: "9px 13px", fontSize: "13px", width: "100%" }}
                      />
                    )}
                    <input
                      className="mail-input"
                      type="email"
                      placeholder="メールアドレス"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ padding: "9px 13px", fontSize: "13px", width: "100%" }}
                    />
                    {tab === "message" && (
                      <textarea
                        className="mail-input"
                        placeholder="メッセージ"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        style={{ padding: "9px 13px", fontSize: "13px",
                          width: "100%", resize: "none", lineHeight: 1.6 }}
                      />
                    )}

                    <motion.button
                      type="submit"
                      className="wii-btn rounded-full"
                      style={{ padding: "10px", fontSize: "13px",
                        letterSpacing: "0.1em", marginTop: "4px" }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {tab === "subscribe" ? "▶  SUBSCRIBE" : "▶  SEND"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
