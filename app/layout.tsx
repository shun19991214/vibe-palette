import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Vibe Palette — あなたの審美世界観を診断",
  description:
    "12の質問に答えて、あなただけのカラーパレットとAesthetic（審美世界観）を発見しよう。",
  metadataBase: new URL("https://vibe-palette-taupe.vercel.app"),
  verification: {
    google: "vITEJAZ7yHyz6c1xxxIy5VArDqxzKtG9XVo9W3gYAYc",
  },
  openGraph: {
    title: "Vibe Palette — あなたの審美世界観を診断",
    description: "12の質問に答えて、あなただけのカラーパレットを発見しよう。",
    type: "website",
    locale: "ja_JP",
    url: "https://vibe-palette-taupe.vercel.app",
    siteName: "Vibe Palette",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Palette",
    description: "あなただけのカラーパレットとAestheticを診断",
    site: "@vibepalette",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7124944646519570"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-neutral-950 text-white antialiased flex flex-col">
        <GoogleAnalytics />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-neutral-800 py-10 px-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-500">
              <div>
                <h3 className="text-neutral-300 font-semibold mb-2">Vibe Palette</h3>
                <p className="leading-relaxed">
                  12の質問に答えて、あなただけのカラーパレットと審美世界観（Aesthetic）を診断するサービスです。無料診断のほか、詳細パーソナリティレポート（¥80）を提供しています。
                </p>
              </div>
              <div>
                <h3 className="text-neutral-300 font-semibold mb-2">お問い合わせ</h3>
                <p>vibe.palette.app@gmail.com</p>
              </div>
              <div>
                <h3 className="text-neutral-300 font-semibold mb-2">ポリシー</h3>
                <nav className="flex flex-col gap-1">
                  <Link href="/legal/privacy" className="hover:text-neutral-300 transition-colors">プライバシーポリシー</Link>
                  <Link href="/legal/terms" className="hover:text-neutral-300 transition-colors">利用規約</Link>
                  <Link href="/legal/commercial" className="hover:text-neutral-300 transition-colors">特定商取引法に基づく表記</Link>
                </nav>
              </div>
            </div>
            <div className="text-center text-xs text-neutral-600 pt-4 border-t border-neutral-800">
              © 2026 Vibe Palette. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
