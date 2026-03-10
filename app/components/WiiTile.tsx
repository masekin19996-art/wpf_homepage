"use client";

import { motion } from "framer-motion";
import { TileData } from "../data/tiles";

interface WiiTileProps {
  tile: TileData;
  index: number;
  isClickable?: boolean;
}

const tileVariants = {
  hidden: { scale: 0.9, opacity: 0, y: 8 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 26, delay: i * 0.038 },
  }),
};

/* タイル: 上4つだけクリック可能なサムネイル枠、それ以外は凹みのみ */
export default function WiiTile({ tile, index, isClickable = false }: WiiTileProps) {
  const handleClick = () => {
    if (!isClickable) return;
    window.open(tile.url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className={isClickable ? "wii-tile" : "wii-tile wii-tile--recessed"}
      style={{ aspectRatio: "16/9" }}
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover={isClickable ? { scale: 1.05, transition: { type: "spring", stiffness: 420, damping: 26 } } : undefined}
      whileTap={isClickable ? { scale: 0.94 } : undefined}
      onClick={handleClick}
      role={isClickable ? "link" : "presentation"}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => e.key === "Enter" && handleClick() : undefined}
    >
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {/* 後から画像や動画を入れられるサムネイル枠 */}
        <div className={isClickable ? "wii-thumb-slot wii-thumb-slot--active" : "wii-thumb-slot"} />
      </div>
    </motion.div>
  );
}
