export type AestheticId =
  | "dark-academia"
  | "cottagecore"
  | "y2k-cyber"
  | "solarpunk"
  | "midnight-luxe"
  | "wabi-sabi"
  | "neon-dystopia"
  | "coastal-grandmother"
  | "fairycore"
  | "industrial-minimalist"
  | "barbiecore"
  | "forest-witch"
  | "retro-futurism"
  | "quiet-luxury"
  | "kawaii-pastel"
  | "nomad-earth";

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
    subMood: "Melancholic Scholar",
    nameJa: "ダーク・アカデミア",
    subMoodJa: "憂鬱な学者",
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
      "私のVibe Paletteは「ダーク・アカデミア」でした📚 古書の香りと深夜の知的な語らい、そんな世界観があなたのもの。",
    celebrities: ["Emma Watson", "Timothée Chalamet", "Lana Del Rey"],
    keywords: ["古書", "図書館", "蝋燭", "詩", "哲学", "ツイード"],
    emoji: "📚",
  },
  cottagecore: {
    id: "cottagecore",
    name: "Cottagecore",
    subMood: "Wildflower Dreamer",
    nameJa: "コテージコア",
    subMoodJa: "野の花の夢想家",
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
      "私のVibe Paletteは「コテージコア」でした🌿 朝露と野の花、手作りの温もりがあなたの世界観。",
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
      "私のVibe Paletteは「Y2Kサイバー」でした💿 シルバーと未来への期待、大胆な自己表現があなたのエネルギー。",
    celebrities: ["Paris Hilton", "Dua Lipa", "Kim Petras"],
    keywords: ["クロップトップ", "バタフライ", "ハート型", "メタリック", "バブルレタリング"],
    emoji: "💿",
  },
  solarpunk: {
    id: "solarpunk",
    name: "Solarpunk",
    subMood: "Verdant Utopia",
    nameJa: "ソーラーパンク",
    subMoodJa: "緑の理想郷",
    description:
      "あなたの世界観は、太陽光パネルが緑に覆われた建物に組み込まれ、テクノロジーと自然が美しく共存する未来都市。希望と行動力を兼ね備え、より良い世界を実際に作ろうとする創造的な実践者。美しさと倫理性は矛盾しないと信じている。",
    palette: [
      { name: "Terra Cotta", hex: "#c1651a" },
      { name: "Mint Green", hex: "#98e4c8" },
      { name: "Sunflower", hex: "#ffd700" },
      { name: "Sky Blue", hex: "#87ceeb" },
      { name: "Moss Green", hex: "#4a7c4e" },
    ],
    shareText:
      "私のVibe Paletteは「ソーラーパンク」でした🌱 自然とテクノロジーの共存、希望に満ちた未来があなたの世界観。",
    celebrities: ["Greta Thunberg", "Hayao Miyazaki", "Bjork"],
    keywords: ["太陽光", "植物壁", "コミュニティ", "循環", "持続可能性"],
    emoji: "🌱",
  },
  "midnight-luxe": {
    id: "midnight-luxe",
    name: "Midnight Luxe",
    subMood: "Velvet Noir",
    nameJa: "ミッドナイト・ラックス",
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
      "私のVibe Paletteは「ミッドナイト・ラックス」でした🥂 深夜のシャンパンとベルベットの輝き、洗練された美意識があなたのもの。",
    celebrities: ["Cate Blanchett", "Jay-Z", "Adele"],
    keywords: ["シャンパン", "ベルベット", "ジャズ", "深夜", "シルク", "高級感"],
    emoji: "🥂",
  },
  "wabi-sabi": {
    id: "wabi-sabi",
    name: "Wabi-Sabi",
    subMood: "Still Water",
    nameJa: "侘び寂び",
    subMoodJa: "静水",
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
      "私のVibe Paletteは「侘び寂び」でした🍂 不完全さの中にある美、静けさと余白があなたの世界観。",
    celebrities: ["Issey Miyake", "Leonard Cohen", "Wim Wenders"],
    keywords: ["陶器", "苔", "余白", "不完全", "木目", "侘び"],
    emoji: "🍂",
  },
  "neon-dystopia": {
    id: "neon-dystopia",
    name: "Neon Dystopia",
    subMood: "Electric Glitch",
    nameJa: "ネオン・ディストピア",
    subMoodJa: "エレクトリック・グリッチ",
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
      "私のVibe Paletteは「ネオン・ディストピア」でした⚡ 雨のネオン街と電子の鼓動、反骨精神があなたのエネルギー。",
    celebrities: ["Grimes", "Aphex Twin", "Yolandi Visser"],
    keywords: ["サイバーパンク", "ネオン", "グリッチ", "ハッキング", "廃墟"],
    emoji: "⚡",
  },
  "coastal-grandmother": {
    id: "coastal-grandmother",
    name: "Coastal Grandmother",
    subMood: "Sea Glass Morning",
    nameJa: "コースタル・グランドマザー",
    subMoodJa: "シーグラスの朝",
    description:
      "あなたの世界観は、海辺の白い家、リネンのカーテンが風に揺れる朝、シーグラスを集めながら波打ち際を歩くゆったりとした午後。成熟した穏やかさの中に洗練がある。人生の良いものをゆっくり味わうことを知っていて、その余裕が自然と周囲を温かくする。",
    palette: [
      { name: "Sand Beige", hex: "#e8d5b7" },
      { name: "Ocean Blue", hex: "#4a90a4" },
      { name: "Sea Glass", hex: "#9cc5a1" },
      { name: "Warm White", hex: "#faf8f5" },
      { name: "Coral Pink", hex: "#e8938a" },
    ],
    shareText:
      "私のVibe Paletteは「コースタル・グランドマザー」でした🌊 海辺の朝とリネン、成熟した穏やかさがあなたの世界観。",
    celebrities: ["Diane Keaton", "Ina Garten", "Nancy Meyers"],
    keywords: ["海辺", "リネン", "シーグラス", "ランチ", "白い家", "穏やか"],
    emoji: "🌊",
  },
  fairycore: {
    id: "fairycore",
    name: "Fairycore",
    subMood: "Dewdrop Magic",
    nameJa: "フェアリーコア",
    subMoodJa: "露の魔法",
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
      "私のVibe Paletteは「フェアリーコア」でした🧚 朝露の魔法と妖精の輪、繊細な幻想があなたの世界観。",
    celebrities: ["Aurora (singer)", "Björk", "Simone Rocha"],
    keywords: ["妖精", "露", "キノコ", "月光", "蝶", "幻想的"],
    emoji: "🧚",
  },
  "industrial-minimalist": {
    id: "industrial-minimalist",
    name: "Industrial Minimalist",
    subMood: "Raw Concrete",
    nameJa: "インダストリアル・ミニマリスト",
    subMoodJa: "生コンクリート",
    description:
      "あなたの世界観は、打ちっぱなしのコンクリートと剥き出しの鉄骨、機能だけが形を決める潔さ。余分なものを削ぎ落とした先に、真の美しさが宿ると信じている。感情的になるよりも思考する方が得意で、複雑な問題を構造として捉える鋭い知性の持ち主。",
    palette: [
      { name: "Concrete", hex: "#a8a9ad" },
      { name: "Off Black", hex: "#1c1c1e" },
      { name: "Rust Orange", hex: "#b7472a" },
      { name: "Steel Blue", hex: "#4a7c9e" },
      { name: "Warm White", hex: "#f5f5f0" },
    ],
    shareText:
      "私のVibe Paletteは「インダストリアル・ミニマリスト」でした🏗️ コンクリートの潔さと削ぎ落とされた美、知性があなたの世界観。",
    celebrities: ["Tadao Ando", "Dieter Rams", "Jony Ive"],
    keywords: ["コンクリート", "鉄骨", "ミニマル", "機能美", "構造", "余白"],
    emoji: "🏗️",
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
      "私のVibe Paletteは「バービーコア」でした💖 ホットピンクの自己愛と喜び、存在を祝うエネルギーがあなたのもの。",
    celebrities: ["Margot Robbie", "Nicki Minaj", "Cardi B"],
    keywords: ["ホットピンク", "グリッター", "自己愛", "フェミニン", "パワー"],
    emoji: "💖",
  },
  "forest-witch": {
    id: "forest-witch",
    name: "Forest Witch",
    subMood: "Ancient Grove",
    nameJa: "フォレスト・ウィッチ",
    subMoodJa: "古代の森",
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
      "私のVibe Paletteは「フォレスト・ウィッチ」でした🌙 古代の森の知恵と月の魔法、神秘的な直感があなたの世界観。",
    celebrities: ["Stevie Nicks", "Florence Welch", "Phoebe Bridgers"],
    keywords: ["月", "ハーブ", "水晶", "森", "タロット", "神秘"],
    emoji: "🌙",
  },
  "retro-futurism": {
    id: "retro-futurism",
    name: "Retro Futurism",
    subMood: "Analog Dreams",
    nameJa: "レトロ・フューチャリズム",
    subMoodJa: "アナログの夢",
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
      "私のVibe Paletteは「レトロ・フューチャリズム」でした🚀 過去が夢見た未来、ノスタルジーと革新性があなたの世界観。",
    celebrities: ["David Bowie", "Bruno Mars", "Pharrell Williams"],
    keywords: ["スペースエイジ", "カセット", "レトロ", "宇宙", "未来", "60年代"],
    emoji: "🚀",
  },
  "quiet-luxury": {
    id: "quiet-luxury",
    name: "Quiet Luxury",
    subMood: "Understated Elite",
    nameJa: "クワイエット・ラグジュアリー",
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
      "私のVibe Paletteは「クワイエット・ラグジュアリー」でした🤍 語らない品格と素材の美、静かな自信があなたの世界観。",
    celebrities: ["Sofia Coppola", "The Row (designers)", "Gwyneth Paltrow"],
    keywords: ["カシミア", "リネン", "オールドマネー", "品格", "素材", "静寂"],
    emoji: "🤍",
  },
  "kawaii-pastel": {
    id: "kawaii-pastel",
    name: "Kawaii Pastel",
    subMood: "Sugar Cloud",
    nameJa: "かわいいパステル",
    subMoodJa: "砂糖の雲",
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
      "私のVibe Paletteは「かわいいパステル」でした🍭 ふわふわのパステルと無邪気な輝き、かわいさが生き方のあなたへ。",
    celebrities: ["Kyary Pamyu Pamyu", "Ariana Grande", "Melanie Martinez"],
    keywords: ["パステル", "ふわふわ", "うさぎ", "マカロン", "ハート", "もこもこ"],
    emoji: "🍭",
  },
  "nomad-earth": {
    id: "nomad-earth",
    name: "Nomad Earth",
    subMood: "Desert Wind",
    nameJa: "ノマド・アース",
    subMoodJa: "砂漠の風",
    description:
      "あなたの世界観は、赤土の大地と広大な空、焚き火の煙が夜空に溶けていく瞬間。どこかに根を下ろすより、風と共に移動し続けることに本当の自分を感じる。どんな文化にも馴染み、どんな人とも繋がれる開かれた心と、孤独でいられる強さを同時に持っている。",
    palette: [
      { name: "Terra Cotta", hex: "#c1651a" },
      { name: "Sandstone", hex: "#d4a96a" },
      { name: "Olive", hex: "#6b7c47" },
      { name: "Burnt Orange", hex: "#cc5500" },
      { name: "Dune Beige", hex: "#e8d5b0" },
    ],
    shareText:
      "私のVibe Paletteは「ノマド・アース」でした🏜️ 赤土の大地と砂漠の風、自由に移動する魂があなたの世界観。",
    celebrities: ["Yves Saint Laurent", "Isabella Blow", "Nan Goldin"],
    keywords: ["砂漠", "焚き火", "遊牧民", "旅", "大地", "テント"],
    emoji: "🏜️",
  },
} as const;

export const AESTHETIC_LIST = Object.values(AESTHETICS);
