export type AestheticId =
  | "dark-academia"
  | "cottagecore"
  | "y2k-cyber"
  | "coquette"
  | "midnight-luxe"
  | "wabi-sabi"
  | "neon-dystopia"
  | "clean-girl"
  | "fairycore"
  | "neo-mori"
  | "barbiecore"
  | "forest-witch"
  | "retro-futurism"
  | "quiet-luxury"
  | "kawaii-pastel"
  | "old-money";

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface AestheticType {
  id: AestheticId;
  name: string;
  subMood: string;
  nameJa: string;
  subMoodJa: string;
  description: string;
  palette: [ColorSwatch, ColorSwatch, ColorSwatch, ColorSwatch, ColorSwatch];
  shareText: string;
  celebrities: string[];
  keywords: string[];
  emoji: string;
}

export const AESTHETICS: Record<AestheticId, AestheticType> = {
  "dark-academia": {
    id: "dark-academia",
    name: "Dark Academia",
    subMood: "Midnight Scholar",
    nameJa: "ダーク・アカデミア",
    subMoodJa: "深夜の読書家",
    description:
      "あなたの世界観は、古書の香りと蝋燭の光が満ちる、知的で憂いのある空間。美しい詩の一節、深夜の図書館、インクのシミ——そういったものの中に、あなたは静かな喜びを見つける。感情の深さと知識への渇望が、あなたを唯一無二の存在にしている。",
    palette: [
      { name: "Ink Black", hex: "#1a1410" },
      { name: "Antique Gold", hex: "#c9a84c" },
      { name: "Dusty Beige", hex: "#d4c5a9" },
      { name: "Dark Olive", hex: "#4a4a2a" },
      { name: "Chocolate", hex: "#5c3317" },
    ],
    shareText:
      "ダーク・アカデミアでした📚 深夜の図書館が一番落ち着く人間です",
    celebrities: ["Emma Watson", "Timothée Chalamet", "Lana Del Rey"],
    keywords: ["古書", "図書館", "蝋燭", "詩", "哲学", "ツイード"],
    emoji: "📚",
  },
  cottagecore: {
    id: "cottagecore",
    name: "Cottagecore",
    subMood: "Wildflower Dreamer",
    nameJa: "コテージコア",
    subMoodJa: "花つみの午後",
    description:
      "あなたの世界観は、朝露に濡れた草原と手作りのパン、優しい日差しが窓から差し込むあの瞬間。自然と調和し、シンプルで温かなものに価値を見出す。忙しい現代から少し距離を置いて、土を耕し、花を活け、ゆったりとした時間の流れの中に幸せを感じるタイプ。",
    palette: [
      { name: "Milk White", hex: "#f5f0e8" },
      { name: "Sage Green", hex: "#87a878" },
      { name: "Dusty Rose", hex: "#d4a5a5" },
      { name: "Butter Yellow", hex: "#f0d080" },
      { name: "Earth Brown", hex: "#8b6550" },
    ],
    shareText:
      "コテージコアでした🌿 理想の休日は庭でジャム作り",
    celebrities: ["Taylor Swift", "Florence Pugh", "Billie Eilish (初期)"],
    keywords: ["野花", "手作りパン", "ガーデン", "リネン", "ピクニック", "陶器"],
    emoji: "🌿",
  },
  "y2k-cyber": {
    id: "y2k-cyber",
    name: "Y2K Cyber",
    subMood: "Chrome Butterfly",
    nameJa: "Y2Kサイバー",
    subMoodJa: "クロームの蝶",
    description:
      "あなたの世界観は、シルバーのボディコンと携帯電話の液晶画面が光るあの時代——夢と未来への期待が溢れていた2000年代のエネルギー。ノスタルジーと革新性を同時に持ち、自己表現においては大胆で実験的。古いものを新しく解釈する鋭いセンスの持ち主。",
    palette: [
      { name: "Chrome Silver", hex: "#c0c0c0" },
      { name: "Hot Pink", hex: "#ff69b4" },
      { name: "Electric Blue", hex: "#0080ff" },
      { name: "Pearl White", hex: "#f8f4ff" },
      { name: "Lime Green", hex: "#32cd32" },
    ],
    shareText:
      "Y2Kサイバーでした💿 ガラケー時代の未来感が正義",
    celebrities: ["Paris Hilton", "Dua Lipa", "Kim Petras"],
    keywords: ["クロップトップ", "バタフライ", "ハート型", "メタリック", "バブルレタリング"],
    emoji: "💿",
  },
  coquette: {
    id: "coquette",
    name: "Coquette",
    subMood: "Ribbon Doll",
    nameJa: "コケット",
    subMoodJa: "リボンの横顔",
    description:
      "あなたの世界観は、レースとリボンが揺れる柔らかな光の中にある。さりげなく可愛く、でも計算し尽くされた美しさ。甘さの中に芯の強さを隠し持つあなたは、自分の魅力を誰よりもよく知っている。フェミニンであることを武器に変える、したたかな可愛さの持ち主。",
    palette: [
      { name: "Blush Pink", hex: "#f4c2c2" },
      { name: "Cream Lace", hex: "#fff5ee" },
      { name: "Rose", hex: "#e8a0bf" },
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Dusty Mauve", hex: "#c9a0b5" },
    ],
    shareText:
      "コケットでした🎀 リボンとレース、計算された可愛さが私の武器",
    celebrities: ["Ariana Grande", "Jennie (BLACKPINK)", "Brigitte Bardot"],
    keywords: ["リボン", "レース", "フリル", "あざと可愛い", "ピンク", "パール"],
    emoji: "🎀",
  },
  "midnight-luxe": {
    id: "midnight-luxe",
    name: "Midnight Luxe",
    subMood: "Velvet Noir",
    nameJa: "ミッドナイト・グラム",
    subMoodJa: "ベルベットの夜",
    description:
      "あなたの世界観は、深夜のシャンパングラスとベルベットのカーテン、遠くから聞こえるジャズの音色。洗練された美意識と、夜の持つ特別な輝きをよく知っている。贅沢とは量ではなく質だと理解していて、選び抜かれたものだけに囲まれることで本当の豊かさを感じるタイプ。",
    palette: [
      { name: "Deep Navy", hex: "#0d1b2a" },
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Charcoal", hex: "#2f2f2f" },
      { name: "Gold", hex: "#d4af37" },
    ],
    shareText:
      "ミッドナイト・グラムでした🥂 深夜のシャンパンが似合う人間です",
    celebrities: ["Cate Blanchett", "Jay-Z", "Adele"],
    keywords: ["シャンパン", "ベルベット", "ジャズ", "深夜", "シルク", "高級感"],
    emoji: "🥂",
  },
  "wabi-sabi": {
    id: "wabi-sabi",
    name: "Wabi-Sabi",
    subMood: "Still Moon",
    nameJa: "侘び寂び",
    subMoodJa: "余白の美学",
    description:
      "あなたの世界観は、欠けた茶碗の美しさ、苔むした石、風化した木の質感——不完全さの中にある深い美。完璧である必要はないと知っていて、時間の流れが刻んだ跡に真の価値を見出す。静けさと余白の中で、本質だけが残る。",
    palette: [
      { name: "Raw Linen", hex: "#e8dcc8" },
      { name: "Aged Iron", hex: "#7a7570" },
      { name: "Pale Celadon", hex: "#cdd5c0" },
      { name: "Rust", hex: "#8b4513" },
      { name: "Dried Grass", hex: "#b5a07a" },
    ],
    shareText:
      "侘び寂びでした🍂 欠けた茶碗に美を見つけるタイプ",
    celebrities: ["Issey Miyake", "Leonard Cohen", "Wim Wenders"],
    keywords: ["陶器", "苔", "余白", "不完全", "木目", "侘び"],
    emoji: "🍂",
  },
  "neon-dystopia": {
    id: "neon-dystopia",
    name: "Neon Dystopia",
    subMood: "Neon Afterglow",
    nameJa: "サイバーネオン",
    subMoodJa: "ネオンの残像",
    description:
      "あなたの世界観は、雨に濡れた夜のアスファルトにネオンが反射し、データと人間の境界が曖昧になった近未来都市。表面の美しさと腐敗の混在を鋭く見抜き、そのカオスの中にリズムを見出す。反骨精神と美的感覚が同居している、複雑で魅力的な存在。",
    palette: [
      { name: "Neon Green", hex: "#39ff14" },
      { name: "Deep Purple", hex: "#1a0a2e" },
      { name: "Magenta", hex: "#ff00ff" },
      { name: "Void Black", hex: "#0a0a0a" },
      { name: "Steel Gray", hex: "#708090" },
    ],
    shareText:
      "サイバーネオンでした⚡ 雨のネオン街が最高に映える",
    celebrities: ["Grimes", "Aphex Twin", "Yolandi Visser"],
    keywords: ["サイバーパンク", "ネオン", "グリッチ", "ハッキング", "廃墟"],
    emoji: "⚡",
  },
  "clean-girl": {
    id: "clean-girl",
    name: "Clean Girl",
    subMood: "Glass Skin",
    nameJa: "クリーンガール",
    subMoodJa: "素肌のオーラ",
    description:
      "あなたの世界観は、何も足さず何も引かない完璧なバランス。ツヤ肌、スリックバック、ミニマルなアクセサリー——引き算の美学を極めた、洗練された素の輝き。頑張っていないように見えて実は一番手がかかっている、そんな「抜け感」の達人。清潔感と余裕が、あなたの最大の魅力。",
    palette: [
      { name: "Soft White", hex: "#f8f6f2" },
      { name: "Nude Beige", hex: "#e8d5c4" },
      { name: "Rosewood", hex: "#c9a9a6" },
      { name: "Warm Taupe", hex: "#b8a99a" },
      { name: "Clear Blue", hex: "#b8d4e3" },
    ],
    shareText:
      "クリーンガールでした✨ 引き算の美学、素肌のツヤが最強",
    celebrities: ["Hailey Bieber", "Zendaya", "Kōki"],
    keywords: ["ツヤ肌", "スリックバック", "ミニマル", "抜け感", "清潔感", "ヘルシー"],
    emoji: "✨",
  },
  fairycore: {
    id: "fairycore",
    name: "Fairycore",
    subMood: "Dewdrop Magic",
    nameJa: "フェアリーコア",
    subMoodJa: "月光のいたずら",
    description:
      "あなたの世界観は、夜明けの森で蜘蛛の巣に光る水滴、妖精の輪が咲く草地、月明かりのソナタ。日常の中に小さな魔法を見つける才能があり、想像力と繊細な美的センスで周囲をそっと魅了する。現実と幻想の境界を軽やかに行き来できる、稀有な存在。",
    palette: [
      { name: "Lavender", hex: "#b57bee" },
      { name: "Soft Pink", hex: "#f4b8c1" },
      { name: "Mist Green", hex: "#a8d5ba" },
      { name: "Pearl", hex: "#f0ede8" },
      { name: "Sky Blue", hex: "#aed9e0" },
    ],
    shareText:
      "フェアリーコアでした🧚 日常に小さな魔法を見つける天才",
    celebrities: ["Aurora (singer)", "Björk", "Simone Rocha"],
    keywords: ["妖精", "露", "キノコ", "月光", "蝶", "幻想的"],
    emoji: "🧚",
  },
  "neo-mori": {
    id: "neo-mori",
    name: "Neo Mori",
    subMood: "Linen Breeze",
    nameJa: "ネオ森ガール",
    subMoodJa: "木漏れ日のリネン",
    description:
      "あなたの世界観は、木漏れ日がリネンのワンピースを揺らす森の小道。令和に蘇った森ガールは、ただのナチュラル好きじゃない。デジタル社会の息苦しさを知った上で、あえて自然に還ることを選んだ意志のある柔らかさ。手触りと香りで世界を感じる、五感の住人。",
    palette: [
      { name: "Linen", hex: "#e8dcc8" },
      { name: "Moss", hex: "#7a9a6c" },
      { name: "Bark", hex: "#8b6f47" },
      { name: "Mist", hex: "#d4d9d2" },
      { name: "Fern", hex: "#4d7c5e" },
    ],
    shareText:
      "ネオ森ガールでした🌿 木漏れ日とリネン、五感で生きる人",
    celebrities: ["蒼井優", "Saoirse Ronan", "新垣結衣"],
    keywords: ["リネン", "木漏れ日", "森", "ナチュラル", "手作り", "お散歩"],
    emoji: "🍃",
  },
  barbiecore: {
    id: "barbiecore",
    name: "Barbiecore",
    subMood: "Dopamine Pop",
    nameJa: "バービーコア",
    subMoodJa: "ドーパミン・ポップ",
    description:
      "あなたの世界観は、ホットピンクのすべてが自己愛と喜びの宣言である世界。自分自身を全力で楽しむことを選び、その輝きで周りを照らすことを厭わない。表面的に見えるかもしれないが、その奥には「存在することを堂々と祝おう」という力強いメッセージがある。",
    palette: [
      { name: "Hot Pink", hex: "#ff69b4" },
      { name: "Fuchsia", hex: "#ff00aa" },
      { name: "Cream White", hex: "#fff8f0" },
      { name: "Gold Glitter", hex: "#ffd700" },
      { name: "Neon Yellow", hex: "#fff01f" },
    ],
    shareText:
      "バービーコアでした💖 ピンクは自己愛の色、全力で自分を祝う",
    celebrities: ["Margot Robbie", "Nicki Minaj", "Cardi B"],
    keywords: ["ホットピンク", "グリッター", "自己愛", "フェミニン", "パワー"],
    emoji: "💖",
  },
  "forest-witch": {
    id: "forest-witch",
    name: "Forest Witch",
    subMood: "Moonlit Grove",
    nameJa: "森の魔女",
    subMoodJa: "月夜の森",
    description:
      "あなたの世界観は、深い森の奥、何百年も生きた古木が囁く言葉、月の満ち欠けで時を知る暮らし。直感と自然界の知恵を深く信頼していて、目には見えない力の流れを感じ取れる。孤独を恐れず、むしろそこに力の源泉を見つける、神秘的な存在。",
    palette: [
      { name: "Forest Green", hex: "#2d5a27" },
      { name: "Midnight Purple", hex: "#2d1b69" },
      { name: "Mushroom", hex: "#a08060" },
      { name: "Bark Brown", hex: "#4a3520" },
      { name: "Obsidian", hex: "#1a1a2e" },
    ],
    shareText:
      "森の魔女でした🌙 月の満ち欠けで生きるタイプです",
    celebrities: ["Stevie Nicks", "Florence Welch", "Phoebe Bridgers"],
    keywords: ["月", "ハーブ", "水晶", "森", "タロット", "神秘"],
    emoji: "🌙",
  },
  "retro-futurism": {
    id: "retro-futurism",
    name: "Retro Futurism",
    subMood: "Film Memory",
    nameJa: "ネオレトロ",
    subMoodJa: "フィルムの記憶",
    description:
      "あなたの世界観は、60〜70年代が描いた「未来」——宇宙船型の家具、オレンジ色のスペーススーツ、カセットテープに録音された音楽。過去が持っていた未来への純粋な期待を愛していて、懐かしさと革新性が不思議に同居している。ノスタルジーを武器に現在を再発明する人。",
    palette: [
      { name: "Sunset Orange", hex: "#ff6b35" },
      { name: "Space Blue", hex: "#1a3a5c" },
      { name: "Cream Yellow", hex: "#f5e642" },
      { name: "Chrome", hex: "#d4d4d8" },
      { name: "Tape Red", hex: "#cc2200" },
    ],
    shareText:
      "ネオレトロでした🚀 60年代が夢見た未来に住みたい",
    celebrities: ["David Bowie", "Bruno Mars", "Pharrell Williams"],
    keywords: ["スペースエイジ", "カセット", "レトロ", "宇宙", "未来", "60年代"],
    emoji: "🚀",
  },
  "quiet-luxury": {
    id: "quiet-luxury",
    name: "Quiet Luxury",
    subMood: "Understated Elite",
    nameJa: "静かな贅沢",
    subMoodJa: "語らない品格",
    description:
      "あなたの世界観は、ロゴもブランドも主張しない、素材と仕立てだけが語る本物の贅沢。見た目の派手さより内側の充実を選ぶ確かな審美眼を持ち、騒がしい世界から少し距離を置いた静かな自信がある。本当に良いものは、声を上げずとも伝わると知っている。",
    palette: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Ivory", hex: "#fffff0" },
      { name: "Deep Navy", hex: "#1b2a4a" },
      { name: "Greige", hex: "#c4b09a" },
      { name: "Warm Taupe", hex: "#8b7d6b" },
    ],
    shareText:
      "静かな贅沢でした🤍 ロゴなし、素材で語る派",
    celebrities: ["Sofia Coppola", "The Row (designers)", "Gwyneth Paltrow"],
    keywords: ["カシミア", "リネン", "オールドマネー", "品格", "素材", "静寂"],
    emoji: "🤍",
  },
  "kawaii-pastel": {
    id: "kawaii-pastel",
    name: "Kawaii Pastel",
    subMood: "Sugar Cloud",
    nameJa: "ゆめかわ",
    subMoodJa: "わたあめの空",
    description:
      "あなたの世界観は、ふわふわのパステルカラーと丸いフォルム、可愛いものがすべて正義な優しい宇宙。無邪気さを失わずにいることの強さを知っていて、その明るさで周囲を自然と笑顔にする特別な力を持っている。かわいさとは美学であり、生き方そのもの。",
    palette: [
      { name: "Baby Pink", hex: "#ffb6c1" },
      { name: "Mint", hex: "#b5ead7" },
      { name: "Lavender", hex: "#c7b8ea" },
      { name: "Peach", hex: "#ffdab9" },
      { name: "White", hex: "#ffffff" },
    ],
    shareText:
      "ゆめかわでした🍭 かわいいは正義、それが生き方",
    celebrities: ["Kyary Pamyu Pamyu", "Ariana Grande", "Melanie Martinez"],
    keywords: ["パステル", "ふわふわ", "うさぎ", "マカロン", "ハート", "もこもこ"],
    emoji: "🍭",
  },
  "old-money": {
    id: "old-money",
    name: "Old Money",
    subMood: "Heritage Grace",
    nameJa: "オールドマネー",
    subMoodJa: "受け継ぐ品格",
    description:
      "あなたの世界観は、代々受け継がれてきたカシミアのセーターと、磨き込まれた革靴。新しいものを追いかけるのではなく、時間が証明した「本物」だけを選ぶ確かな目を持っている。ロゴで主張しない、血筋と教養が滲み出る品格。落ち着きの中に、揺るぎない自信がある。",
    palette: [
      { name: "Navy", hex: "#1b2a4a" },
      { name: "Ivory", hex: "#faf8f0" },
      { name: "Burgundy", hex: "#6b2737" },
      { name: "Forest", hex: "#2d4a3e" },
      { name: "Camel", hex: "#c19a6b" },
    ],
    shareText:
      "オールドマネーでした🏛️ ロゴなし、品格で語る",
    celebrities: ["Old Money TikTok", "Grace Kelly", "Kennedy家"],
    keywords: ["カシミア", "ネイビー", "品格", "教養", "オールドマネー", "ヘリテージ"],
    emoji: "🏛️",
  },
} as const;

export const AESTHETIC_LIST = Object.values(AESTHETICS);
