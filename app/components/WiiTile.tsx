"use client";

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

/* 全タイルをデザインなしの凹みのみに統一（EXAMPLE・アイコンなし） */
export default function WiiTile({ tile, index }: WiiTileProps) {
  return (
    <motion.div
      className="wii-tile wii-tile--recessed"
      style={{ aspectRatio: "16/9" }}
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      role="presentation"
    />
  );
}
