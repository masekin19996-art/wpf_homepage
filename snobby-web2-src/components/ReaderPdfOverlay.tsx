"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  getDocument,
  GlobalWorkerOptions,
  version as pdfjsVersion,
} from "pdfjs-dist";

const readerMangaPdfUrl = "/snobby-web2-assets/reader-fetish-manga.pdf";

// Vite ではローカルの worker を bundle してもパス不整合で失敗しやすいので、
// バージョンを pdfjs と揃えた CDN を使う（本番・開発ともに同じ挙動）
GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.mjs`;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ReaderPdfOverlay({ open, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (!open) return;
    setError(null);

    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;

    (async () => {
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) {
        setError("表示できませんでした");
        return;
      }

      try {
        const res = await fetch(readerMangaPdfUrl);
        if (!res.ok) throw new Error(`fetch ${res.status}`);
        if (cancelled) return;

        const buf = await res.arrayBuffer();
        if (cancelled) return;

        const pdf = await getDocument({
          data: new Uint8Array(buf),
          useSystemFonts: true,
          cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsVersion}/cmaps/`,
          cMapPacked: true,
          standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsVersion}/standard_fonts/`,
        }).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const maxW = Math.min(window.innerWidth * 0.92, 720);
        const maxH = window.innerHeight * 0.88;
        const cssScale = Math.min(
          maxW / baseViewport.width,
          maxH / baseViewport.height,
          3,
        );
        const viewport = page.getViewport({ scale: cssScale });

        const dpr = Math.min(window.devicePixelRatio || 1, 3);
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const transform =
          dpr !== 1 ? ([dpr, 0, 0, dpr, 0, 0] as [number, number, number, number, number, number]) : undefined;

        const renderTask = page.render({
          canvasContext: ctx,
          viewport,
          transform,
          background: "rgb(255,255,255)",
        });
        await renderTask.promise;
      } catch (e) {
        if (!cancelled) {
          console.error("[ReaderPdfOverlay]", e);
          setError("PDF を読み込めませんでした");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open]);

  useLayoutEffect(() => {
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
      className="fixed inset-0 z-[200] flex cursor-default items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Reader"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="閉じる"
        className="absolute right-5 top-5 z-10 rounded border border-white/30 bg-black/40 px-3 py-1.5 font-['Barlow_Condensed',sans-serif] text-[13px] uppercase tracking-wide text-white hover:bg-white/10"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        esc
      </button>
      <div
        className="pointer-events-none max-h-[88vh] max-w-[min(92vw,720px)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {error ? (
          <p className="pointer-events-none rounded bg-black/80 px-4 py-3 text-center text-sm text-white">
            {error}
          </p>
        ) : null}
        <canvas
          ref={canvasRef}
          className="h-auto max-h-[88vh] w-auto max-w-full bg-white"
        />
      </div>
    </div>
  );
}
