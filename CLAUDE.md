# Vibe Palette - 開発メモ

## プロジェクト概要
- 審美世界観（Aesthetic）を診断する静的Webアプリ
- Next.js 14 + Tailwind CSS + Vercel
- 全コンテンツは開発時にAIで事前生成（ランニングコストほぼゼロ）

## デプロイ
- ホスティング: Vercel（無料枠）
- リポジトリ: https://github.com/shun19991214/vibe-palette
- 本番URL: https://vibe-palette-taupe.vercel.app
- `git push` で自動デプロイ

## 収益化

### Google AdSense
- クライアントID: `ca-pub-7124944646519570`
- `<script>` タグを `app/layout.tsx` の `<head>` 内に直接配置（Next.jsの `Script` コンポーネントではAdSenseクローラーが検出できない）

### Stripe
- 商品: Vibe Palette 詳細レポート（¥80）
- 商品ID: `prod_UAeRCoSS0xfkJr`
- Payment Links を使用（バックエンド不要）

### Stripe審査を通すために必要なもの
1. **フッターに以下を明記する**
   - ビジネス名
   - 商品・サービスの説明（具体的な価格を含む）
   - 連絡先メールアドレス
2. **法的ページを用意する**（`/legal/` 以下）
   - プライバシーポリシー（`/legal/privacy`）
   - 利用規約（`/legal/terms`）
   - 特定商取引法に基づく表記（`/legal/commercial`）
3. **サイトのURLとStripeに登録したビジネス情報が一致している必要がある**
4. AdSenseコードは `<head>` に直接 `<script>` タグで配置する（`next/script` の `Script` コンポーネントだとクローラーが検出できない場合がある）

## アナリティクス
- Google Analytics: `G-BDMJ2KBNY8`
- Search Console認証: `vITEJAZ7yHyz6c1xxxIy5VArDqxzKtG9XVo9W3gYAYc`

## 連絡先
- サポートメール: vibe.palette.app@gmail.com
