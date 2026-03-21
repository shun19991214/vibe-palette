import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | Vibe Palette",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-neutral-500 hover:text-neutral-300 text-sm mb-8 inline-block">
          ← トップに戻る
        </Link>
        <h1 className="text-3xl font-bold text-white mb-8">利用規約</h1>
        <p className="text-sm text-neutral-500 mb-8">最終更新日: 2026年3月18日</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第1条（適用）</h2>
            <p>
              本規約は、Vibe Palette（以下「当サービス」）の利用に関する条件を定めるものです。ユーザーは、本規約に同意した上で当サービスを利用するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第2条（サービス内容）</h2>
            <p>当サービスは以下のコンテンツを提供します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>審美世界観（Aesthetic）診断（無料）</li>
              <li>詳細パーソナリティレポート（有料: ¥80）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第3条（有料コンテンツ）</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>有料コンテンツの決済はStripeを通じて処理されます</li>
              <li>購入後はすぐにコンテンツにアクセスできます</li>
              <li>デジタルコンテンツの性質上、購入後のキャンセル・返金には原則対応いたしかねますが、コンテンツに重大な不備がある場合は個別にご対応いたします</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第4条（免責事項）</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>当サービスの診断結果はエンターテイメントを目的としたものであり、心理学的な診断・医療的な助言を提供するものではありません</li>
              <li>診断結果に基づくユーザーの判断・行動について、当サービスは一切の責任を負いません</li>
              <li>サービスの一時的な中断・停止が生じた場合の損害について、当サービスは責任を負いません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第5条（禁止事項）</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>当サービスのコンテンツの無断複製・転載</li>
              <li>サービスの運営を妨害する行為</li>
              <li>不正な手段によるアクセス</li>
              <li>その他、当サービスが不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第6条（知的財産権）</h2>
            <p>
              当サービスに掲載されるテキスト・画像・デザイン等の知的財産権は、当サービスの運営者に帰属します。ただし、診断結果の画像をSNSでシェアすることは許可されています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第7条（規約の変更）</h2>
            <p>
              当サービスは、必要に応じて本規約を変更できるものとします。変更後の規約は、当ページに掲載した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">第8条（準拠法・管轄）</h2>
            <p>
              本規約の解釈は日本法に準拠し、紛争が生じた場合は東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">お問い合わせ</h2>
            <p>メール: vibe.palette.app@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
