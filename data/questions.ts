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
  // === Q1-3: キャッチー・直感・ビジュアル系（掴み） ===

  {
    // Q1: 色の直感選択 — 一番軽くて楽しい問いを最初に
    id: 1,
    text: "直感で選んで。今の気分に近い色は？",
    subtext: "考えすぎないでね",
    type: "color",
    choices: [
      {
        id: "1a",
        text: "ボルドー、ミッドナイトブルー",
        emoji: "🍷",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "1b",
        text: "セージグリーン、ベージュ",
        emoji: "🌿",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "1c",
        text: "ホットピンク、エレクトリックブルー",
        emoji: "💜",
        scores: { darkLight: 2, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "1d",
        text: "アイボリー、くすみラベンダー",
        emoji: "🤍",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: -2 },
      },
    ],
  },
  {
    // Q2: 画像的に想像しやすい場所 — 世界観に一気に引き込む
    id: 2,
    text: "この中で「住みたい」と思う場所は？",
    subtext: "現実的じゃなくてOK",
    type: "image",
    choices: [
      {
        id: "2a",
        text: "キャンドルが灯る古い図書室",
        emoji: "🕯️",
        scores: { darkLight: -2, naturalArtificial: -1, pastFuture: -2, quietBold: -1 },
      },
      {
        id: "2b",
        text: "花に囲まれた小さなコテージ",
        emoji: "🌷",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "2c",
        text: "ネオンが光る都会のロフト",
        emoji: "🌃",
        scores: { darkLight: -1, naturalArtificial: 2, pastFuture: 1, quietBold: 1 },
      },
      {
        id: "2d",
        text: "海が見える白い部屋",
        emoji: "🐚",
        scores: { darkLight: 1, naturalArtificial: -1, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    // Q3: プレイリスト — 音楽は全年齢で盛り上がるテーマ
    id: 3,
    text: "あなたの「最強プレイリスト」の雰囲気は？",
    type: "text",
    choices: [
      {
        id: "3a",
        text: "深夜に聴きたいダークで美しい曲",
        emoji: "🖤",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "3b",
        text: "晴れた日の散歩に合うアコースティック",
        emoji: "🌻",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: 0, quietBold: -1 },
      },
      {
        id: "3c",
        text: "テンション爆上げのダンスミュージック",
        emoji: "🪩",
        scores: { darkLight: 0, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "3d",
        text: "おしゃれカフェで流れてそうなチル系",
        emoji: "☕",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 0, quietBold: 0 },
      },
    ],
  },

  // === Q4-8: ライフスタイル・行動系（ストーリーに入り込む） ===

  {
    // Q4: SNS — Z世代にとって最も身近な自己表現
    id: 4,
    text: "あなたのインスタのフィードはどんな雰囲気？",
    type: "text",
    choices: [
      {
        id: "4a",
        text: "ダークトーン、フィルム風、ムーディー",
        emoji: "📷",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "4b",
        text: "ナチュラル、加工少なめ、光がきれい",
        emoji: "🌸",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: 0 },
      },
      {
        id: "4c",
        text: "カラフル、映え重視、作り込み系",
        emoji: "📱",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "4d",
        text: "ミニマル、統一感ある、厳選された投稿",
        emoji: "🤎",
        scores: { darkLight: -1, naturalArtificial: 0, pastFuture: 0, quietBold: -2 },
      },
    ],
  },
  {
    // Q5: 推し活切り口 — 10代後半~20代に超刺さるテーマ
    id: 5,
    text: "推しがいるとしたら、どうやって応援する？",
    subtext: "アイドル・キャラ・スポーツ、何でもOK",
    type: "text",
    choices: [
      {
        id: "5a",
        text: "考察や感想を深く書いて沼に沈む",
        emoji: "📝",
        scores: { darkLight: -1, naturalArtificial: -1, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "5b",
        text: "手作りグッズやファンアートで愛を表現",
        emoji: "🎀",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "5c",
        text: "現場全通！ライブもイベントも全力",
        emoji: "🎤",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "5d",
        text: "こっそり応援、自分の中で大切にしたい",
        emoji: "🫧",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    // Q6: おでかけシチュエーション — デートに限定しない
    id: 6,
    text: "友達と遊ぶなら、どこに行きたい？",
    type: "text",
    choices: [
      {
        id: "6a",
        text: "古着屋巡り→雰囲気のいい喫茶店",
        emoji: "🏚️",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "6b",
        text: "お花見やピクニック→手作りお菓子持参",
        emoji: "🧁",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "6c",
        text: "新しくできた話題のスポットをはしご",
        emoji: "🍹",
        scores: { darkLight: 0, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "6d",
        text: "行き先決めずにぶらぶら、流れに任せる",
        emoji: "🌀",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    // Q7: 好きな香り — 若い女性に身近な表現に変更
    id: 7,
    text: "惹かれるのはどんな香り？",
    type: "text",
    choices: [
      {
        id: "7a",
        text: "ウッディ、ムスク、少しスパイシー",
        emoji: "🌙",
        scores: { darkLight: -2, naturalArtificial: -1, pastFuture: -2, quietBold: -2 },
      },
      {
        id: "7b",
        text: "ハーブ、ラベンダー、石けんの香り",
        emoji: "🫧",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "7c",
        text: "フルーティー、甘すぎない爽やか系",
        emoji: "🍑",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 0 },
      },
      {
        id: "7d",
        text: "バニラ、金木犀、甘くてふわっとした系",
        emoji: "🍰",
        scores: { darkLight: 2, naturalArtificial: 0, pastFuture: 0, quietBold: 1 },
      },
    ],
  },
  {
    // Q8: 部屋のこだわり — 具体的かつ可愛いアイテムに
    id: 8,
    text: "自分の部屋に絶対欲しいものは？",
    type: "image",
    choices: [
      {
        id: "8a",
        text: "間接照明とアンティーク小物",
        emoji: "🕯️",
        scores: { darkLight: -2, naturalArtificial: -1, pastFuture: -2, quietBold: -1 },
      },
      {
        id: "8b",
        text: "ドライフラワーと手作りのもの",
        emoji: "🌾",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "8c",
        text: "LEDテープライトと推しのグッズ",
        emoji: "💡",
        scores: { darkLight: 0, naturalArtificial: 2, pastFuture: 2, quietBold: 1 },
      },
      {
        id: "8d",
        text: "ミラーとお気に入りのコスメ",
        emoji: "💄",
        scores: { darkLight: 2, naturalArtificial: 1, pastFuture: 0, quietBold: 2 },
      },
    ],
  },

  // === Q9-12: 内面・価値観系（深掘り） ===

  {
    // Q9: ファッション — 若い世代の言葉で
    id: 9,
    text: "服を選ぶとき、一番大事にしてるのは？",
    type: "text",
    choices: [
      {
        id: "9a",
        text: "雰囲気と世界観。自分の「らしさ」が出るか",
        emoji: "🧥",
        scores: { darkLight: -1, naturalArtificial: -1, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "9b",
        text: "着心地と素材感。ずっと触っていたい服",
        emoji: "🧶",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "9c",
        text: "トレンド感！今っぽくて周りと差がつくもの",
        emoji: "👠",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "9d",
        text: "シンプルで何にでも合う、迷わない服",
        emoji: "🤍",
        scores: { darkLight: 0, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    // Q10: 休日の過ごし方 — 具体的で身近に
    id: 10,
    text: "最高の休日の過ごし方は？",
    type: "text",
    choices: [
      {
        id: "10a",
        text: "一人で映画・読書・創作、没頭する時間",
        emoji: "🎬",
        scores: { darkLight: -1, naturalArtificial: -1, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "10b",
        text: "お菓子作り、模様替え、のんびり丁寧な暮らし",
        emoji: "🧁",
        scores: { darkLight: 0, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "10c",
        text: "友達とカフェ巡り、ショッピング、ポップアップ",
        emoji: "🛍️",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "10d",
        text: "知らない街をぶらぶら、気になったお店に入る",
        emoji: "🚶‍♀️",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 0, quietBold: 0 },
      },
    ],
  },
  {
    // Q11: ごはんの好み — お酒なしで若い世代に寄せる
    id: 11,
    text: "テンション上がるごはんのシチュは？",
    type: "text",
    choices: [
      {
        id: "11a",
        text: "薄暗い雰囲気のいいお店で、ゆっくり味わう",
        emoji: "🕯️",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: 0 },
      },
      {
        id: "11b",
        text: "おうちで手作り、好きな人と食べる",
        emoji: "🍳",
        scores: { darkLight: 1, naturalArtificial: -2, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "11c",
        text: "映えカフェで可愛いスイーツ、写真も撮る",
        emoji: "🍰",
        scores: { darkLight: 1, naturalArtificial: 1, pastFuture: 0, quietBold: 2 },
      },
      {
        id: "11d",
        text: "旅先で見つけたローカルなお店、冒険感ある",
        emoji: "🌮",
        scores: { darkLight: 0, naturalArtificial: -1, pastFuture: 0, quietBold: 1 },
      },
    ],
  },
  {
    // Q12: 最後は自己認識で締め — ストレートに聞く
    id: 12,
    text: "友達から言われてうれしい言葉は？",
    subtext: "自分をどう見てほしい？",
    type: "text",
    choices: [
      {
        id: "12a",
        text: "「なんか独特の世界観あるよね」",
        emoji: "🌑",
        scores: { darkLight: -2, naturalArtificial: 0, pastFuture: -1, quietBold: -2 },
      },
      {
        id: "12b",
        text: "「一緒にいると落ち着く、癒される」",
        emoji: "☀️",
        scores: { darkLight: 2, naturalArtificial: -1, pastFuture: -1, quietBold: -1 },
      },
      {
        id: "12c",
        text: "「いつもおしゃれ、センスいい！」",
        emoji: "🔥",
        scores: { darkLight: 0, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
      },
      {
        id: "12d",
        text: "「自由で楽しそう、自分らしくてうらやましい」",
        emoji: "🌈",
        scores: { darkLight: 1, naturalArtificial: 0, pastFuture: 1, quietBold: 1 },
      },
    ],
  },
];
