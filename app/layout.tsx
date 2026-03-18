import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Palette — あなたの審美世界観を診断",
  description:
    "12の質問に答えて、あなただけのカラーパレットとAesthetic（審美世界観）を発見しよう。",
  openGraph: {
    title: "Vibe Palette — あなたの審美世界観を診断",
    description: "12の質問に答えて、あなただけのカラーパレットを発見しよう。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Palette",
    description: "あなただけのカラーパレットとAestheticを診断",
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
      </head>
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
