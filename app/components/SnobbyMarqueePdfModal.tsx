"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
};

export default function SnobbyMarqueePdfModal({ open, onClose, src }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 p-4"
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        className="fixed left-4 top-4 z-[10001] rounded border border-white/80 bg-black/80 px-3 py-2 font-mono text-sm text-white shadow hover:bg-white/20"
        onClick={onClose}
      >
        ESC
      </button>
      <div className="relative h-[80vh] w-[80vw] max-h-[90vh] max-w-[90vw] bg-neutral-900 shadow-2xl">
        <iframe title="PDF" src={src} className="size-full border-0" />
      </div>
    </div>
  );
}
