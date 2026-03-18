"use client";

import type { ColorSwatch } from "@/data/aesthetics";

interface ColorPaletteProps {
  palette: ColorSwatch[];
  large?: boolean;
}

export function ColorPalette({ palette, large = false }: ColorPaletteProps) {
  return (
    <div className={`flex gap-2 ${large ? "gap-3" : "gap-2"}`}>
      {palette.map((swatch, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div
            className={`rounded-2xl shadow-lg transition-transform hover:scale-105 ${
              large ? "w-14 h-20 md:w-16 md:h-24" : "w-10 h-14"
            }`}
            style={{ backgroundColor: swatch.hex }}
            title={swatch.name}
          />
          {large && (
            <div className="text-center">
              <p className="text-[10px] text-neutral-400 font-mono">{swatch.hex}</p>
              <p className="text-[10px] text-neutral-500 mt-0.5 leading-tight max-w-[64px] text-center">
                {swatch.name}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
