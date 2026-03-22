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

        <table className="w-full text-sm leading-relaxed border-collapse">
          <tbody>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 w-[160px] align-top font-normal">販売業者</th>
              <td className="py-4">請求があった場合は遅滞なく開示いたします</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">運営責任者</th>
              <td className="py-4">請求があった場合は遅滞なく開示いたします</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">所在地</th>
              <td className="py-4">請求があった場合は遅滞なく開示いたします</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">電話番号</th>
              <td className="py-4">請求があった場合は遅滞なく開示いたします</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">メールアドレス</th>
              <td className="py-4">vibe.palette.app@gmail.com</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">販売URL</th>
              <td className="py-4">https://vibe-palette-taupe.vercel.app</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">販売価格</th>
              <td className="py-4">
                Vibe Palette 詳細パーソナリティレポート: ¥80（税込）<br />
                ※ 各商品の価格は購入ページにも記載しています
              </td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">商品代金以外の必要料金</th>
              <td className="py-4">なし（インターネット接続に必要な通信料はお客様のご負担となります）</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">お支払い方法</th>
              <td className="py-4">クレジットカード（Visa、Mastercard、American Express、JCB）<br />※ 決済処理は Stripe 株式会社のシステムを利用しています</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">お支払い時期</th>
              <td className="py-4">クレジットカード決済は購入時にただちに処理されます</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">商品の引き渡し時期</th>
              <td className="py-4">決済完了後、即時にデジタルコンテンツへのアクセスが可能となります</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">返品・交換について</th>
              <td className="py-4">
                <p className="font-semibold text-neutral-200 mb-2">＜お客様都合による返品・交換＞</p>
                <p className="mb-3">
                  デジタルコンテンツという商品の性質上、購入後の返品・交換はお受けしておりません。
                  購入前に商品内容を十分にご確認の上、ご購入ください。
                </p>
                <p className="font-semibold text-neutral-200 mb-2">＜不良品・サービス不備の場合＞</p>
                <p>
                  コンテンツが正常に表示されない、二重決済が発生した等の不備があった場合は、
                  購入後7日以内に vibe.palette.app@gmail.com までご連絡ください。
                  状況を確認の上、全額返金にて対応いたします。
                </p>
              </td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-neutral-500 py-4 pr-4 align-top font-normal">動作環境</th>
              <td className="py-4">最新バージョンの Chrome、Safari、Firefox、Edge に対応したウェブブラウザ。インターネット接続環境が必要です。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
