import type { Metadata } from "next";
import Link from "next/link";
import { AESTHETIC_LIST } from "@/data/aesthetics";
import { ColorPalette } from "@/components/result/ColorPalette";

export const metadata: Metadata = {
  title: "全16タイプ一覧 | Vibe Palette",
  description: "16種類のAesthetic（審美世界観）タイプをすべて見る。あなたのVibeはどれ？",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 py-16 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-14 text-center">
        <Link
          href="/"
          className="inline-block text-neutral-500 hover:text-neutral-300 text-sm mb-8 transition-colors"
        >
          ← ホーム
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 italic">
          16 Vibes
        </h1>
        <p className="text-neutral-500 text-base max-w-md mx-auto">
          世界に16のAestheticがある。あなたはどの世界観に属している？
        </p>

        <Link
          href="/quiz"
          className="mt-8 inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold px-8 py-3 rounded-full hover:bg-neutral-100 transition-all hover:scale-105"
        >
          今すぐ診断する →
        </Link>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AESTHETIC_LIST.map((aesthetic) => {
          const [c1, , c5] = aesthetic.palette;
          return (
            <Link
              key={aesthetic.id}
              href={`/result/${aesthetic.id}`}
              className="group relative rounded-3xl border border-neutral-800 overflow-hidden transition-all duration-300 hover:border-neutral-600 hover:scale-[1.02]"
              style={{
                background: `radial-gradient(ellipse at top left, ${c1.hex}25 0%, transparent 60%), radial-gradient(ellipse at bottom right, ${c5.hex}15 0%, transparent 50%), #0f0f0f`,
              }}
            >
              {/* Palette accent bar */}
              <div className="flex h-1.5">
                {aesthetic.palette.map((s, i) => (
                  <div key={i} className="flex-1" style={{ backgroundColor: s.hex }} />
                ))}
              </div>

              <div className="p-5">
                {/* Emoji + name */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-neutral-600 uppercase tracking-widest mb-1">
                      {aesthetic.name}
                    </p>
                    <h2 className="font-serif text-xl text-white font-medium italic">
                      {aesthetic.nameJa}
                    </h2>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {aesthetic.subMoodJa}
                    </p>
                  </div>
                  <span className="text-3xl">{aesthetic.emoji}</span>
                </div>

                {/* Palette swatches */}
                <ColorPalette palette={aesthetic.palette} />

                {/* Arrow on hover */}
                <div className="mt-4 flex justify-end">
                  <span className="text-neutral-600 text-sm transition-all duration-200 group-hover:text-neutral-300 group-hover:translate-x-1">
                    詳細を見る →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
