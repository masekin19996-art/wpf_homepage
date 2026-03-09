"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TileData } from "../data/tiles";

interface WiiTileProps {
  tile: TileData;
  index: number;
}

const tileVariants = {
  hidden: { scale: 0.90, opacity: 0, y: 8 },
  visible: (i: number) => ({
    scale: 1, opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 26, delay: i * 0.038 },
  }),
};

export default function WiiTile({ tile, index }: WiiTileProps) {
  const [flashing, setFlashing] = useState(false);

  const handleClick = () => {
    if (flashing) return;
    setFlashing(true);
    setTimeout(() => {
      setFlashing(false);
      window.open(tile.url, "_blank", "noopener,noreferrer");
    }, 280);
  };

  return (
    <motion.div
      className="wii-tile"
      style={{ aspectRatio: "16/9" }}
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 420, damping: 26 } }}
      whileTap={{ scale: 0.94 }}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      {flashing && <div className="tile-flash" />}

      <div className="absolute inset-0 flex flex-col z-20">
        {/* サムネイルエリア（上70%） */}
        <div
          className="flex-1 flex items-center justify-center"
          style={{
            background: "linear-gradient(160deg, #bfceda 0%, #cad8e6 100%)",
            borderBottom: "1px solid rgba(165,190,218,0.45)",
          }}
        >
          <div style={{
            width: "36%", aspectRatio: "1",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #afc2d4 0%, #9eb6cc 100%)",
            border: "1.5px solid rgba(140,175,215,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="44%" height="44%" viewBox="0 0 24 24" fill="none"
              stroke="rgba(80,120,165,0.65)" strokeWidth="1.8" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
        </div>

        {/* タイトルエリア（下30%） */}
        <div style={{
          height: "30%", display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(195,210,228,0.75)", padding: "0 6px",
        }}>
          <span style={{
            fontSize: "clamp(9px, 0.95vw, 12px)",
            fontWeight: 700, color: "#2e4a68",
            letterSpacing: "0.07em", textAlign: "center",
          }}>
            {tile.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
