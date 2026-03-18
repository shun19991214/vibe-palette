import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Vibe Palette — あなたの審美世界観を診断",
  description:
    "12の質問に答えて、あなただけのカラーパレットとAesthetic（審美世界観）を発見しよう。",
  metadataBase: new URL("https://vibe-palette-taupe.vercel.app"),
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
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
