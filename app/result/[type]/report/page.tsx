import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AESTHETICS, AESTHETIC_LIST, type AestheticId } from "@/data/aesthetics";
import { REPORTS } from "@/data/reports";
import { ReportContent } from "@/components/result/ReportContent";

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
    robots: { index: false, follow: false },
  };
}

export default function ReportPage({ params }: Props) {
  const aesthetic = AESTHETICS[params.type as AestheticId];
  const report = REPORTS[params.type as AestheticId];
  if (!aesthetic || !report) notFound();

  return <ReportContent aesthetic={aesthetic} report={report} />;
}
