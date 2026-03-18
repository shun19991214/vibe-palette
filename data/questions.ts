export interface AxisScores {
  darkLight: number;      // dark(-) ←→ light(+)
  naturalArtificial: number; // natural(-) ←→ artificial(+)
  pastFuture: number;     // past(-) ←→ future(+)
  quietBold: number;      // quiet(-) ←→ bold(+)
}

export interface Choice {
  id: string;
  text: string;
  emoji: string;
  scores: AxisScores;
}

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  type: "text" | "image" | "color";
  choices: [Choice, Choice, Choice, Choice];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "理想の週末の朝、どこで目覚めたい？",
    type: "text",
    choices: [
      {
        id: "1a",
        text: "古い石造りの建物、窓の外は霧がかかった庭",
        emoji: "🏛️",
        scores: { darkLight: -2, naturalArtificial: -1, pastFuture: -2, quietBold: -1 },
      },
      {
        id: "1b",
        text: "小さな木造コテージ、鳥のさえずりで目が覚める",
        emoji: "🏡",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "1c",
        text: "高層ビルの最上階、眼下に広がる夜明けの都市",
        emoji: "🌆",
        scores: { darkLight: -1, naturalArtificial: 2, pastFuture: 1, quietBold: 1 },
      },
      {
        id: "1d",
        text: "砂漠のグランピング、オレンジ色の地平線が広がる",
        emoji: "🏕️",
        scores: { darkLight: 1, naturalArtificial: -1, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    id: 2,
    text: "本棚に必ず置いておきたい1冊は？",
    type: "text",
    choices: [
      {
        id: "2a",
        text: "ボロボロになるまで読んだ詩集",
        emoji: "📜",
        scores: { darkLight: -1, naturalArtificial: -1, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "2b",
        text: "植物図鑑か手作り料理のレシピ本",
        emoji: "🌿",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "2c",
        text: "未来のテクノロジーを描いたSF小説",
        emoji: "🤖",
        scores: { darkLight: 0, naturalArtificial: 2, pastFuture: 2, quietBold: 0 },
      },
      {
        id: "2d",
        text: "アートブックか写真集",
        emoji: "🎨",
        scores: { darkLight: -1, naturalArtificial: 0, pastFuture: 0, quietBold: 2 },
      },
    ],
  },
  {
    id: 3,
    text: "自分の部屋に絶対置きたいアイテムは？",
    type: "text",
    choices: [
      {
        id: "3a",
        text: "アンティークの木製デスクと真鍮のランプ",
        emoji: "🕯️",
        scores: { darkLight: -2, naturalArtificial: -1, pastFuture: -2, quietBold: -1 },
      },
      {
        id: "3b",
        text: "無数の観葉植物とドライフラワー",
        emoji: "🌱",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "3c",
        text: "最新のテックガジェットとLEDライト",
        emoji: "💡",
        scores: { darkLight: 0, naturalArtificial: 2, pastFuture: 2, quietBold: 1 },
      },
      {
        id: "3d",
        text: "ミラーとカラフルな小物がたくさん",
        emoji: "✨",
        scores: { darkLight: 2, naturalArtificial: 1, pastFuture: 0, quietBold: 2 },
      },
    ],
  },
  {
    id: 4,
    text: "音楽を聴くなら、どんな場面で？",
    type: "text",
    choices: [
      {
        id: "4a",
        text: "雨の夜、ヘッドフォンで一人じっくり",
        emoji: "🎧",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "4b",
        text: "外でピクニックしながら、風と一緒に",
        emoji: "🎵",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: 0, quietBold: -1 },
      },
      {
        id: "4c",
        text: "クラブやライブ、人混みの中で体で感じる",
        emoji: "🎤",
        scores: { darkLight: 0, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "4d",
        text: "カフェやドライブ、BGMとして流す",
        emoji: "☕",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    id: 5,
    text: "直感で選んで。一番惹かれる色は？",
    type: "color",
    choices: [
      {
        id: "5a",
        text: "深いネイビーやバーガンディ、ダークカラー",
        emoji: "🎨",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "5b",
        text: "セージグリーンや土っぽいアースカラー",
        emoji: "🌿",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "5c",
        text: "ホットピンクやネオン系の鮮やか色",
        emoji: "💗",
        scores: { darkLight: 2, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "5d",
        text: "アイボリーやグレージュ、くすみ系",
        emoji: "🤍",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: -2 },
      },
    ],
  },
  {
    id: 6,
    text: "SNSに投稿するとしたら、どんな写真？",
    type: "text",
    choices: [
      {
        id: "6a",
        text: "モノクロか暗めのフィルター、芸術的な構図",
        emoji: "📷",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "6b",
        text: "自然の中で撮った明るい写真、ほぼ加工なし",
        emoji: "🌸",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: 0 },
      },
      {
        id: "6c",
        text: "完璧に作り込んだ映えコーデやセットアップ",
        emoji: "📱",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "6d",
        text: "あまり投稿しない。見る専か厳選した1枚だけ",
        emoji: "👁️",
        scores: { darkLight: -1, naturalArtificial: 0, pastFuture: 0, quietBold: -2 },
      },
    ],
  },
  {
    id: 7,
    text: "完璧なデートプランを考えるなら？",
    type: "text",
    choices: [
      {
        id: "7a",
        text: "美術館 → 古いジャズバー → 深夜まで語り合う",
        emoji: "🖼️",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "7b",
        text: "ファーマーズマーケット → 公園でピクニック → 夕暮れ散歩",
        emoji: "🧺",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "7c",
        text: "トレンドのレストラン → バー → おしゃれな夜景スポット",
        emoji: "🍸",
        scores: { darkLight: 0, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "7d",
        text: "海辺をドライブ → 夕日を見ながら語る",
        emoji: "🌅",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    id: 8,
    text: "好きな香りに近いのは？",
    type: "text",
    choices: [
      {
        id: "8a",
        text: "古い本、革、木のスモーキーな香り",
        emoji: "📚",
        scores: { darkLight: -2, naturalArtificial: -1, pastFuture: -2, quietBold: -2 },
      },
      {
        id: "8b",
        text: "土の香り、ハーブ、雨上がりの草",
        emoji: "🌧️",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "8c",
        text: "フレッシュな柑橘、クリーンでモダンな香水",
        emoji: "🍋",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 0 },
      },
      {
        id: "8d",
        text: "甘いお菓子、バニラ、フローラル",
        emoji: "🌸",
        scores: { darkLight: 2, naturalArtificial: 0, pastFuture: 0, quietBold: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "もし今日1日、完全に自由な時間があったら？",
    type: "text",
    choices: [
      {
        id: "9a",
        text: "一人で本を読むか、何か書くか、創作する",
        emoji: "✍️",
        scores: { darkLight: -1, naturalArtificial: -1, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "9b",
        text: "庭仕事か料理か、手を使う作業をずっとやる",
        emoji: "🌻",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "9c",
        text: "友達と出かけるか、何か新しいことを体験する",
        emoji: "🎉",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "9d",
        text: "旅か散歩か、どこか遠くまで歩いていく",
        emoji: "🗺️",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    id: 10,
    text: "ファッションで大切にしていることは？",
    type: "text",
    choices: [
      {
        id: "10a",
        text: "素材と仕立て。ロゴより質で選ぶ",
        emoji: "🧥",
        scores: { darkLight: -1, naturalArtificial: -1, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "10b",
        text: "自然素材、リネン、オーガニックコットン",
        emoji: "👗",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "10c",
        text: "トレンドを取り入れ、個性を最大限に表現",
        emoji: "👠",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "10d",
        text: "着心地と機能性。でも美しさも妥協しない",
        emoji: "🎒",
        scores: { darkLight: 0, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    id: 11,
    text: "理想の食事はどんなシーン？",
    type: "text",
    choices: [
      {
        id: "11a",
        text: "深夜のビストロ、ワインと長い会話",
        emoji: "🍷",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: 0 },
      },
      {
        id: "11b",
        text: "庭でとれた野菜で作った料理を外で食べる",
        emoji: "🥗",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "11c",
        text: "インスタ映えするおしゃれなカフェかレストラン",
        emoji: "🍰",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 0, quietBold: 2 },
      },
      {
        id: "11d",
        text: "旅先で偶然見つけた地元の屋台やマーケット",
        emoji: "🌮",
        scores: { darkLight: 0, naturalArtificial: -1, pastFuture: 0, quietBold: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "自分を一番表す言葉はどれ？",
    type: "text",
    choices: [
      {
        id: "12a",
        text: "深い・内省的・複雑",
        emoji: "🌑",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "12b",
        text: "穏やか・温かい・素直",
        emoji: "☀️",
        scores: { darkLight: 2, naturalArtificial: -1, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "12c",
        text: "大胆・情熱的・表現豊か",
        emoji: "🔥",
        scores: { darkLight: 0, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "12d",
        text: "自由・好奇心旺盛・開かれた",
        emoji: "🌈",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 1, quietBold: 1 },
      },
    ],
  },
];
