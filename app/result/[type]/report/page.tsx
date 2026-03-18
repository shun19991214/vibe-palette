import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AESTHETICS, AESTHETIC_LIST, type AestheticId } from "@/data/aesthetics";
import { REPORTS } from "@/data/reports";
import { ColorPalette } from "@/components/result/ColorPalette";

interface Props {
  params: { type: string };
}

export async function generateStaticParams() {
  return AESTHETIC_LIST.map((a) => ({ type: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const aesthetic = AESTHETICS[params.type as AestheticId];
  if (!aesthetic) return {};
  return {
    title: `【詳細レポート】${aesthetic.nameJa} | Vibe Palette`,
    description: `${aesthetic.nameJa}の詳細パーソナリティレポート。強み・弱み・恋愛・仕事・成長メッセージを収録。`,
  };
}

export default function ReportPage({ params }: Props) {
  const aesthetic = AESTHETICS[params.type as AestheticId];
  const report = REPORTS[params.type as AestheticId];
  if (!aesthetic || !report) notFound();

  const [c1, c2, , , c5] = aesthetic.palette;

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero */}
      <div
        className="relative pt-12 pb-16 px-6"
        style={{
          background: `radial-gradient(ellipse at top, ${c1.hex}35 0%, transparent 55%), radial-gradient(ellipse at bottom right, ${c5.hex}20 0%, transparent 50%)`,
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Nav */}
          <div className="flex justify-between items-center mb-12">
            <Link
              href={`/result/${aesthetic.id}`}
              className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
            >
              ← 結果に戻る
            </Link>
            <span className="font-serif italic text-neutral-500 text-sm">
              Premium Report
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
              Detailed Personality Report
            </p>
            <div className="text-6xl mb-4">{aesthetic.emoji}</div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-2 italic">
              {aesthetic.nameJa}
            </h1>
            <p className="text-neutral-400 mb-6">{aesthetic.subMoodJa}</p>
            <div className="flex justify-center">
              <ColorPalette palette={aesthetic.palette} large />
            </div>
          </div>
        </div>
      </div>

      {/* Report Sections */}
      <div className="max-w-2xl mx-auto px-6 pb-24 space-y-12">

        {/* Core Personality */}
        <section>
          <SectionLabel color={c1.hex}>本質的な性格</SectionLabel>
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            {report.corePersonality}
          </p>
        </section>

        {/* Strengths & Weaknesses */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-800 p-6" style={{ background: `${c1.hex}10` }}>
            <h3 className="font-serif text-lg text-white mb-4 italic">強み</h3>
            <ul className="space-y-3">
              {report.strengths.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-300">
                  <span style={{ color: c2.hex }} className="flex-shrink-0 mt-0.5">◆</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="font-serif text-lg text-white mb-4 italic">課題・弱み</h3>
            <ul className="space-y-3">
              {report.weaknesses.map((w, i) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-400">
                  <span className="text-neutral-600 flex-shrink-0 mt-0.5">◇</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Love Style */}
        <section>
          <SectionLabel color={c1.hex}>恋愛スタイル</SectionLabel>
          <p className="text-neutral-300 leading-relaxed">{report.loveStyle}</p>
        </section>

        {/* Work Style */}
        <section>
          <SectionLabel color={c1.hex}>仕事・才能の発揮</SectionLabel>
          <p className="text-neutral-300 leading-relaxed">{report.workStyle}</p>
        </section>

        {/* Lifestyle Advice */}
        <section>
          <SectionLabel color={c1.hex}>あなたへのライフスタイル提言</SectionLabel>
          <ul className="space-y-4">
            {report.lifestyleAdvice.map((advice, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
                <span className="text-2xl font-serif text-neutral-600 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-neutral-300 text-sm leading-relaxed">{advice}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Compatibility */}
        <section>
          <SectionLabel color={c1.hex}>他タイプとの相性</SectionLabel>
          <div className="space-y-4">
            {report.compatibility.map((comp) => {
              const other = AESTHETICS[comp.typeId];
              return (
                <div key={comp.typeId} className="flex gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
                  <span className="text-2xl flex-shrink-0">{other.emoji}</span>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">{other.nameJa}</p>
                    <p className="text-neutral-400 text-sm">{comp.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Shadow Side */}
        <section className="rounded-2xl border border-neutral-700/50 p-6" style={{ background: `${c1.hex}08` }}>
          <SectionLabel color={c1.hex}>あなたの影の部分</SectionLabel>
          <p className="text-neutral-400 leading-relaxed italic">{report.shadowSide}</p>
        </section>

        {/* Growth Message */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{ background: `linear-gradient(135deg, ${c1.hex}20, ${c5.hex}15)`, border: `1px solid ${c1.hex}30` }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Growth Message</p>
          <p className="text-white text-base md:text-lg leading-relaxed font-serif italic">
            "{report.growthMessage}"
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 border border-neutral-700 text-neutral-300 px-8 py-3 rounded-full hover:border-neutral-500 transition-all hover:scale-105 text-sm"
          >
            もう一度診断する
          </Link>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <h2 className="font-serif text-xl text-white italic">{children}</h2>
    </div>
  );
}
