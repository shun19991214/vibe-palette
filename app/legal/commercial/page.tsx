import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Vibe Palette",
};

export default function CommercialDisclosure() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-neutral-500 hover:text-neutral-300 text-sm mb-8 inline-block">
          ← トップに戻る
        </Link>
        <h1 className="text-3xl font-bold text-white mb-8">特定商取引法に基づく表記</h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">販売業者</span>
            <span>個人事業</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">運営責任者</span>
            <span>請求があった場合に遅滞なく開示いたします</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">所在地</span>
            <span>請求があった場合に遅滞なく開示いたします</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">連絡先</span>
            <span>vibe.palette.app@gmail.com</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">販売価格</span>
            <span>各商品ページに記載（税込価格）</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">商品代金以外の費用</span>
            <span>なし</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">支払方法</span>
            <span>クレジットカード（Stripe経由）</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">支払時期</span>
            <span>商品購入時に即時決済</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">商品の引き渡し時期</span>
            <span>決済完了後、即時にデジタルコンテンツへのアクセスが可能</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">返品・キャンセル</span>
            <span>デジタルコンテンツの性質上、購入後の返品・キャンセルは原則不可。商品に重大な不備がある場合は個別対応いたします。</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 pb-4">
            <span className="text-neutral-500">動作環境</span>
            <span>最新バージョンのChrome、Safari、Firefox、Edgeに対応したウェブブラウザ</span>
          </div>
        </div>
      </div>
    </main>
  );
}
