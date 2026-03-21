"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import type { AestheticType, AestheticId } from "@/data/aesthetics";
import { AESTHETICS } from "@/data/aesthetics";
import type { DetailedReport } from "@/data/reports";
import { ColorPalette } from "./ColorPalette";
import { PurchaseButton } from "./PurchaseButton";

interface ReportContentProps {
  aesthetic: AestheticType;
  report: DetailedReport;
}

function ReportInner({ aesthetic, report }: ReportContentProps) {
  const searchParams = useSearchParams();
  const isUnlocked = searchParams.get("unlocked") === "true";
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

      {/* Locked State */}
      {!isUnlocked && (
        <div className="relative">
          <div className="blur-sm opacity-20 select-none pointer-events-none py-12 px-6">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="h-6 bg-neutral-800 rounded w-40" />
              <div className="space-y-2">
                <div className="h-4 bg-neutral-800 rounded w-full" />
                <div className="h-4 bg-neutral-800 rounded w-5/6" />
                <div className="h-4 bg-neutral-800 rounded w-4/5" />
                <div className="h-4 bg-neutral-800 rounded w-full" />
              </div>
              <div className="h-6 bg-neutral-800 rounded w-32" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 bg-neutral-800 rounded-2xl" />
                <div className="h-40 bg-neutral-800 rounded-2xl" />
              </div>
              <div className="h-6 bg-neutral-800 rounded w-36" />
              <div className="space-y-2">
                <div className="h-4 bg-neutral-800 rounded w-full" />
                <div className="h-4 bg-neutral-800 rounded w-3/4" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-3xl p-8 md:p-10 text-center max-w-sm mx-4"
              style={{
                background: `linear-gradient(135deg, ${c1.hex}30, ${c5.hex}25)`,
                border: `1px solid ${c1.hex}50`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="text-5xl mb-4">🔒</div>
              <h2 className="font-serif text-xl md:text-2xl text-white mb-3 italic">
                詳細レポートを読む
              </h2>
              <p className="text-neutral-400 text-sm mb-2 leading-relaxed">
                本質的な性格・強みと弱み・恋愛・仕事・相性・成長メッセージを収録
              </p>
              <p className="text-white text-3xl font-bold mb-6">¥80</p>
              <PurchaseButton
                typeId={aesthetic.id}
                className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition-all hover:scale-105 text-neutral-950 bg-white hover:bg-neutral-100 cursor-pointer"
              >
                購入してレポートを読む →
              </PurchaseButton>
              <p className="text-neutral-500 text-xs mt-4">
                Stripeによる安全な決済
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Unlocked Content */}
      {isUnlocked && (
        <div className="max-w-2xl mx-auto px-6 pb-24 space-y-12">
          <section>
            <SectionLabel color={c1.hex}>本質的な性格</SectionLabel>
            <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
              {report.corePersonality}
            </p>
          </section>

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

          <section>
            <SectionLabel color={c1.hex}>恋愛スタイル</SectionLabel>
            <p className="text-neutral-300 leading-relaxed">{report.loveStyle}</p>
          </section>

          <section>
            <SectionLabel color={c1.hex}>仕事・才能の発揮</SectionLabel>
            <p className="text-neutral-300 leading-relaxed">{report.workStyle}</p>
          </section>

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

          <section className="rounded-2xl border border-neutral-700/50 p-6" style={{ background: `${c1.hex}08` }}>
            <SectionLabel color={c1.hex}>あなたの影の部分</SectionLabel>
            <p className="text-neutral-400 leading-relaxed italic">{report.shadowSide}</p>
          </section>

          <section
            className="rounded-2xl p-8 text-center"
            style={{ background: `linear-gradient(135deg, ${c1.hex}20, ${c5.hex}15)`, border: `1px solid ${c1.hex}30` }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Growth Message</p>
            <p className="text-white text-base md:text-lg leading-relaxed font-serif italic">
              &ldquo;{report.growthMessage}&rdquo;
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={`/result/${aesthetic.id}`}
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 px-8 py-3 rounded-full hover:border-neutral-500 transition-all hover:scale-105 text-sm"
            >
              結果ページに戻る
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 font-semibold px-8 py-3 rounded-full hover:bg-neutral-100 transition-all hover:scale-105 text-sm"
            >
              もう一度診断する
            </Link>
          </div>
        </div>
      )}
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

export function ReportContent(props: ReportContentProps) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-neutral-950 flex items-center justify-center">
          <p className="text-neutral-400">読み込み中...</p>
        </main>
      }
    >
      <ReportInner {...props} />
    </Suspense>
  );
}
