import { ImageResponse } from "next/og";
import { AESTHETICS, AESTHETIC_LIST, type AestheticId } from "@/data/aesthetics";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return AESTHETIC_LIST.map((a) => ({ type: a.id }));
}

export default function OGImage({ params }: { params: { type: string } }) {
  const aesthetic = AESTHETICS[params.type as AestheticId];

  if (!aesthetic) {
    return new ImageResponse(
      <div style={{ width: 1200, height: 630, background: "#0a0a0a" }} />,
      { width: 1200, height: 630 }
    );
  }

  const colors = aesthetic.palette.map((c) => c.hex);
  const [c1, c2, c3, c4, c5] = colors;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient from palette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at top left, ${c1}30, transparent 50%), radial-gradient(ellipse at bottom right, ${c5}25, transparent 50%)`,
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 40,
            fontSize: 18,
            color: "#525252",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Vibe Palette
        </div>

        {/* "Your Vibe is" label */}
        <div
          style={{
            fontSize: 20,
            color: "#737373",
            letterSpacing: "0.2em",
            marginBottom: 20,
          }}
        >
          YOUR VIBE IS
        </div>

        {/* Emoji */}
        <div style={{ fontSize: 80, marginBottom: 20 }}>{aesthetic.emoji}</div>

        {/* Aesthetic name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#ffffff",
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          {aesthetic.nameJa}
        </div>

        {/* Sub mood */}
        <div
          style={{
            fontSize: 28,
            color: "#a3a3a3",
            marginBottom: 52,
          }}
        >
          {aesthetic.subMoodJa}
        </div>

        {/* Color palette swatches */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {[c1, c2, c3, c4, c5].map((color, i) => (
            <div
              key={i}
              style={{
                width: i === 2 ? 72 : 56,
                height: i === 2 ? 72 : 56,
                borderRadius: "50%",
                background: color,
                boxShadow: `0 0 24px ${color}80`,
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 60px",
          }}
        >
          <div style={{ fontSize: 18, color: "#737373" }}>
            あなたのVibeは何色？ 全16タイプ
          </div>
          <div style={{ fontSize: 18, color: "#525252", letterSpacing: "0.1em" }}>
            vibe-palette-taupe.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
