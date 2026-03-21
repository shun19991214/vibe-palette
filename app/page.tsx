import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 -left-12 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 -right-12 w-72 h-72 bg-pink-500/12 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 w-full max-w-lg mx-auto">
        {/* Palette logo */}
        <div className="mb-10 flex gap-1.5">
          {["#8b5cf6", "#f472b6", "#fb923c", "#34d399", "#60a5fa"].map((color, i) => (
            <div
              key={i}
              className="w-3 h-12 rounded-full animate-float"
              style={{ backgroundColor: color, animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-4 tracking-tight">
          Vibe{" "}
          <span className="italic gradient-text">Palette</span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl mb-3 font-light tracking-wide">
          あなたの審美世界観を診断
        </p>

        <p className="text-neutral-500 text-sm md:text-base mb-12 leading-relaxed w-full">
          12の質問に答えて、あなただけの
          <span className="text-neutral-300">カラーパレット</span>と
          <span className="text-neutral-300">Aesthetic</span>を発見しよう。
          <br className="hidden sm:block" />
          全16タイプ——あなたはどこに属する？
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow bg-white text-neutral-950 hover:bg-neutral-100 shadow-2xl shadow-violet-500/10"
        >
          <span>診断スタート</span>
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>

        <p className="mt-6 text-neutral-600 text-xs tracking-widest uppercase">
          約3分 · 12問 · 無料
        </p>

        {/* Preview palette strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-1.5 w-full">
          {[
            "#1a1410", "#c9a84c", "#f4c2c2", "#87a878", "#ff69b4",
            "#c0c0c0", "#0d1b2a", "#b57bee", "#f8f6f2", "#7a9a6c",
            "#ffb6c1", "#2d5a27", "#ff6b35", "#1b2a4a", "#ffd700", "#e8a0bf",
          ].map((color, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full opacity-40 hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Gallery link */}
        <Link
          href="/gallery"
          className="mt-8 glass px-5 py-2 rounded-full text-neutral-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
        >
          全16タイプを見る →
        </Link>
      </div>
    </main>
  );
}
