import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Decorative color blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex gap-1">
            {["#c9a84c", "#87a878", "#ff69b4", "#aed9e0", "#c1651a"].map((color, i) => (
              <div
                key={i}
                className="w-3 h-10 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-4 tracking-tight">
          Vibe{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400">
            Palette
          </span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl mb-3 font-light">
          あなたの審美世界観を診断
        </p>

        <p className="text-neutral-500 text-sm md:text-base mb-12 leading-relaxed max-w-md">
          12の質問に答えて、あなただけの
          <span className="text-neutral-300">カラーパレット</span>と
          <span className="text-neutral-300">Aesthetic</span>を発見しよう。
          世界に16のVibeがある——あなたはどこに属する？
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="group relative inline-flex items-center gap-3 bg-white text-neutral-950 font-semibold px-10 py-4 rounded-full text-lg hover:bg-neutral-100 transition-all duration-300 hover:scale-105 shadow-2xl shadow-white/10"
        >
          <span>診断スタート</span>
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <p className="mt-6 text-neutral-600 text-sm">所要時間 約3分 · 全12問</p>

        {/* Preview palette strip */}
        <div className="mt-16 flex gap-1 opacity-30">
          {[
            "#1a1410", "#c9a84c", "#f5f0e8", "#87a878", "#ff69b4",
            "#c0c0c0", "#0d1b2a", "#b57bee", "#39ff14", "#c1651a",
            "#ffb6c1", "#2d5a27", "#ff6b35", "#c19a6b", "#ffd700", "#e8d5b0",
          ].map((color, i) => (
            <div
              key={i}
              className="w-6 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Gallery link */}
        <Link
          href="/gallery"
          className="mt-8 text-neutral-600 hover:text-neutral-400 text-sm transition-colors underline underline-offset-4"
        >
          全16タイプを見る
        </Link>
      </div>
    </main>
  );
}
