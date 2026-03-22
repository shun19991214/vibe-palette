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
          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">販売業者</span>
            <span>個人事業（Vibe Palette 運営）</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">運営責任者</span>
            <span>請求があった場合に遅滞なく開示いたします</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">所在地</span>
            <span>請求があった場合に遅滞なく開示いたします</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">電話番号</span>
            <span>請求があった場合に遅滞なく開示いたします</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">メールアドレス</span>
            <span>vibe.palette.app@gmail.com</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">販売URL</span>
            <span>https://vibe-palette-taupe.vercel.app</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">商品名</span>
            <span>Vibe Palette 詳細パーソナリティレポート</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">商品の説明</span>
            <span>
              審美世界観（Aesthetic）診断の結果に基づく詳細なパーソナリティレポートです。
              本質的な性格分析、強みと弱み、恋愛スタイル、仕事での才能の活かし方、
              ライフスタイルの提言、他タイプとの相性診断、成長メッセージを含むデジタルコンテンツです。
              診断結果ページからオンラインで閲覧できます。
            </span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">販売価格</span>
            <span>¥80（税込）</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">商品代金以外の費用</span>
            <span>なし（通信料等はお客様のご負担となります）</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">支払方法</span>
            <span>クレジットカード（Visa, Mastercard, American Express, JCB）※ Stripe株式会社の決済システムを利用</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">支払時期</span>
            <span>商品購入時に即時決済されます</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">商品の引き渡し時期</span>
            <span>決済完了後、即時にデジタルコンテンツへのアクセスが可能となります</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">返品・返金ポリシー</span>
            <span>
              デジタルコンテンツの性質上、購入後の返品・返金は原則としてお受けしておりません。
              ただし、以下の場合は返金に応じます。
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>商品に重大な不備（コンテンツが表示されない等）があった場合</li>
                <li>二重決済が発生した場合</li>
                <li>その他、当方の責に帰すべき事由がある場合</li>
              </ul>
              <p className="mt-2">返金のご請求は、購入後7日以内に vibe.palette.app@gmail.com までご連絡ください。</p>
            </span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500">キャンセルについて</span>
            <span>
              デジタルコンテンツの即時提供という性質上、決済完了後のキャンセルはお受けしておりません。
              購入前に商品内容を十分ご確認の上、ご購入ください。
            </span>
          </div>

          <div className="grid grid-cols-[160px_1fr] gap-4 pb-4">
            <span className="text-neutral-500">動作環境</span>
            <span>最新バージョンの Chrome、Safari、Firefox、Edge に対応したウェブブラウザ。インターネット接続環境が必要です。</span>
          </div>
        </div>
      </div>
    </main>
  );
}
