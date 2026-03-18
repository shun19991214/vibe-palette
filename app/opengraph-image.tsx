import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vibe Palette — あなたの審美世界観を診断";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        {/* Background gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, #b57bee40, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ff69b440, transparent)",
          }}
        />

        {/* Color swatches row */}
        <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
          {["#1a1410", "#87a878", "#c0c0c0", "#ff69b4", "#c1651a", "#b57bee", "#f5e642", "#4a90a4"].map(
            (color, i) => (
              <div
                key={i}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: color,
                  boxShadow: `0 0 20px ${color}60`,
                }}
              />
            )
          )}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: 16,
            fontStyle: "italic",
          }}
        >
          Vibe Palette
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#a3a3a3",
            letterSpacing: "0.1em",
          }}
        >
          あなたの審美世界観を診断
        </div>

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#525252",
            letterSpacing: "0.2em",
          }}
        >
          12 QUESTIONS · 16 AESTHETIC TYPES
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
