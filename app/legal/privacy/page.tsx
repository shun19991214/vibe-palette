import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Vibe Palette",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-neutral-500 hover:text-neutral-300 text-sm mb-8 inline-block">
          ← トップに戻る
        </Link>
        <h1 className="text-3xl font-bold text-white mb-8">プライバシーポリシー</h1>
        <p className="text-sm text-neutral-500 mb-8">最終更新日: 2026年3月18日</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. はじめに</h2>
            <p>
              Vibe Palette（以下「当サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サービスがどのような情報を収集し、どのように利用するかを説明します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. 収集する情報</h2>
            <p>当サービスは以下の情報を収集する場合があります。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>診断の回答データ（ブラウザ内で処理され、サーバーには送信されません）</li>
              <li>アクセスログ（IPアドレス、ブラウザ情報、アクセス日時）</li>
              <li>Google Analyticsによる利用統計データ</li>
              <li>決済時にStripeに提供される情報（メールアドレス、決済情報）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. 情報の利用目的</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>サービスの提供・改善</li>
              <li>利用状況の分析</li>
              <li>有料コンテンツの決済処理</li>
              <li>お問い合わせへの対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. 第三者への提供</h2>
            <p>
              当サービスは、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。ただし、以下のサービスを利用しており、それぞれのプライバシーポリシーに従って情報が処理されます。
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Google Analytics（アクセス解析）</li>
              <li>Google AdSense（広告配信）</li>
              <li>Stripe（決済処理）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Cookieの使用</h2>
            <p>
              当サービスは、Google AnalyticsおよびGoogle AdSenseにおいてCookieを使用しています。ユーザーはブラウザの設定によりCookieを無効にすることができますが、一部の機能が制限される場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. データの保護</h2>
            <p>
              当サービスは、収集した情報の漏洩・紛失・改ざんを防止するため、適切なセキュリティ対策を講じます。決済情報はStripeにより安全に処理され、当サービスのサーバーには保存されません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、以下の連絡先までご連絡ください。
            </p>
            <p className="mt-2">メール: vibe.palette.app@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
