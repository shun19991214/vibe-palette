"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ReportSuccessPage() {
  const [typeId, setTypeId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vp_report_type");
    if (stored) {
      setTypeId(stored);
    }
  }, []);

  if (typeId === null) {
    return (
      <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⏳</div>
          <p className="text-neutral-400">読み込み中...</p>
        </div>
      </main>
    );
  }

  if (!typeId) {
    return (
      <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-5xl mb-4">❓</div>
          <h1 className="text-xl text-white mb-4">タイプ情報が見つかりません</h1>
          <p className="text-neutral-500 text-sm mb-6">
            もう一度診断を受けてからレポートをご購入ください。
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold px-8 py-3 rounded-full hover:bg-neutral-100 transition-all hover:scale-105"
          >
            診断を受ける →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="font-serif text-3xl text-white mb-3 italic">
          ご購入ありがとうございます！
        </h1>
        <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
          詳細パーソナリティレポートをお楽しみください。
          以下のボタンからレポートを閲覧できます。
        </p>
        <Link
          href={`/result/${typeId}/report?unlocked=true`}
          className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold px-8 py-3 rounded-full hover:bg-neutral-100 transition-all hover:scale-105"
        >
          レポートを読む →
        </Link>
        <p className="text-neutral-600 text-xs mt-6">
          ブックマークしておくと、いつでもレポートにアクセスできます。
        </p>
      </div>
    </main>
  );
}
