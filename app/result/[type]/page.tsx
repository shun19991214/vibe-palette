import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AESTHETICS, AESTHETIC_LIST, type AestheticId } from "@/data/aesthetics";
import { ColorPalette } from "@/components/result/ColorPalette";
import { ShareButtons } from "@/components/result/ShareButtons";
import { ShareImageCard } from "@/components/result/ShareImageCard";
import { PurchaseButton } from "@/components/result/PurchaseButton";

interface Props {
  params: { type: string };
}

export async function generateStaticParams() {
  return AESTHETIC_LIST.map((a) => ({ type: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const aesthetic = AESTHETICS[params.type as AestheticId];
  if (!aesthetic) return {};

  const title = `私のVibe Paletteは「${aesthetic.nameJa}」でした | Vibe Palette`;
  const description = aesthetic.description.slice(0, 100) + "…";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ResultPage({ params }: Props) {
  const aesthetic = AESTHETICS[params.type as AestheticId];
  if (!aesthetic) notFound();

  const [c1, , c5] = aesthetic.palette;

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero section with palette-based gradient */}
      <div
        className="relative pt-16 pb-20 px-6"
        style={{
          background: `radial-gradient(ellipse at top, ${c1.hex}30 0%, transparent 60%), radial-gradient(ellipse at bottom right, ${c5.hex}20 0%, transparent 50%)`,
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Nav */}
          <div className="flex justify-between items-center mb-16">
            <Link
              href="/"
              className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
            >
              ← ホーム
            </Link>
            <span className="font-serif italic text-neutral-500 text-sm">
              Vibe Palette
            </span>
            <Link
              href="/gallery"
              className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
            >
              全タイプ →
            </Link>
          </div>

          {/* Result reveal */}
          <div className="animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Your Vibe is
            </p>

            <div className="text-7xl mb-6">{aesthetic.emoji}</div>

            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-3 italic">
              {aesthetic.nameJa}
            </h1>

            <p className="text-neutral-400 text-lg mb-12">{aesthetic.subMoodJa}</p>

            {/* Color palette */}
            <div className="flex justify-center mb-12">
              <ColorPalette palette={aesthetic.palette} large />
            </div>

            {/* Description */}
            <div className="max-w-lg mx-auto mb-12">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed text-balance">
                {aesthetic.description}
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 justify-center mb-16">
              {aesthetic.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-400"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Report CTA */}
      <section className="py-16 px-6 border-t border-neutral-800/50">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-10 text-center"
            style={{
              background: `linear-gradient(135deg, ${c1.hex}20, ${c5.hex}15)`,
              border: `1px solid ${c1.hex}40`,
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">Premium</p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 italic">
              詳細パーソナリティレポート
            </h2>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              本質的な性格・強みと弱み・恋愛スタイル・仕事での才能の発揮・
              ライフスタイル提言・他タイプとの相性・成長メッセージを収録。
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {["本質的な性格", "強み・弱み", "恋愛スタイル", "仕事・才能", "相性診断", "成長メッセージ"].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-white text-2xl font-bold mb-6">¥80</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <PurchaseButton
                typeId={aesthetic.id}
                className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition-all hover:scale-105 text-neutral-950 cursor-pointer"
                style={{ backgroundColor: c1.hex }}
              >
                購入してレポートを読む →
              </PurchaseButton>
            </div>
            <p className="text-neutral-500 text-xs mt-4">Stripeによる安全な決済</p>
          </div>
        </div>
      </section>

      {/* Share section */}
      <section className="py-16 px-6 border-t border-neutral-800/50">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="font-serif text-2xl text-white mb-2 italic">
              結果をシェアしよう
            </h2>
            <p className="text-neutral-500 text-sm">
              友達のVibe Paletteも見てみよう
            </p>
          </div>

          {/* Downloadable card */}
          <ShareImageCard aesthetic={aesthetic} />

          {/* SNS share buttons */}
          <ShareButtons typeId={aesthetic.id} shareText={aesthetic.shareText} nameJa={aesthetic.nameJa} />
        </div>
      </section>

      {/* Celebrities */}
      <section className="py-12 px-6 border-t border-neutral-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl text-white mb-6 italic">
            同じVibeを持つ人たち
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {aesthetic.celebrities.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: retake or gallery */}
      <section className="py-12 px-6 border-t border-neutral-800/50">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 font-semibold px-8 py-3 rounded-full hover:bg-neutral-100 transition-all hover:scale-105"
          >
            もう一度診断する
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 px-8 py-3 rounded-full hover:border-neutral-500 transition-all hover:scale-105"
          >
            全16タイプを見る
          </Link>
        </div>
      </section>
    </main>
  );
}
