"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import type { AestheticType } from "@/data/aesthetics";

interface ShareImageCardProps {
  aesthetic: AestheticType;
}

export function ShareImageCard({ aesthetic }: ShareImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  async function handleDownload() {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 3,
      });
      const link = document.createElement("a");
      link.download = `vibe-palette-${aesthetic.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  }

  // Gradient from palette colors
  const [c1, c2, c3] = aesthetic.palette;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Card to export */}
      <div
        ref={cardRef}
        className="w-[320px] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: `linear-gradient(135deg, ${c1.hex}22, ${c2.hex}33, ${c3.hex}22)`,
          backgroundColor: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.08)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div className="flex h-2">
          {aesthetic.palette.map((s, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: s.hex }} />
          ))}
        </div>

        <div className="p-6 flex flex-col gap-5">
          {/* Emoji + title */}
          <div className="text-center">
            <div className="text-5xl mb-3">{aesthetic.emoji}</div>
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-1"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              My Vibe Palette
            </p>
            <h2
              className="text-2xl font-bold mb-1"
              style={{
                color: "white",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              {aesthetic.nameJa}
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {aesthetic.subMoodJa}
            </p>
          </div>

          {/* Palette */}
          <div className="flex gap-2 justify-center">
            {aesthetic.palette.map((swatch, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-12 h-16 rounded-xl shadow-lg"
                  style={{ backgroundColor: swatch.hex }}
                />
                <p
                  className="text-[9px] font-mono text-center"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {swatch.hex}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p
            className="text-center text-[10px] mt-1"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            vibepalette.app
          </p>
        </div>
      </div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 disabled:opacity-50"
      >
        {downloading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>生成中...</span>
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>画像を保存してシェア</span>
          </>
        )}
      </button>
    </div>
  );
}
