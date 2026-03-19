export const SITE_URL = "https://prime-concept.co.jp";

export const NAV_LINKS = [
  { label: "サービス", href: "#service", hasSubmenu: true as const },
  { label: "会社案内", href: `${SITE_URL}/company/`, hasSubmenu: false as const },
  { label: "実績", href: `${SITE_URL}/works/`, hasSubmenu: false as const },
  { label: "ニュース", href: `${SITE_URL}/topix/`, hasSubmenu: false as const },
  { label: "リクルート", href: `${SITE_URL}/recruit/`, hasSubmenu: false as const },
] as const;

export const NAV_CTA_LINKS = [
  { label: "無料オンライン相談", href: `${SITE_URL}/topix/detail.php?id=418` },
  { label: "お問い合わせ", href: `${SITE_URL}/contact/` },
] as const;

export const SERVICE_MENU_ITEMS = [
  {
    title: "WEB集客サポート",
    subtitle: "Web customer support",
    href: `${SITE_URL}/service/yoyaku.php`,
    image: "/assets/home/bg_service01.webp",
    items: [
      {
        label: "WEB集客サポート",
        href: `${SITE_URL}/service/yoyaku.php`,
      },
      {
        label: "海外ホテルWEB集客サポート",
        href: `${SITE_URL}/service/oversea-yoyaku.php`,
      },
    ],
  },
  {
    title: "コンサルティング",
    subtitle: "Consulting",
    href: `${SITE_URL}/service/consulting.php`,
    image: "/assets/home/bg_service02.webp",
    items: [
      {
        label: "経営・運営・WEBコンサルティング",
        href: `${SITE_URL}/service/consulting.php`,
      },
      {
        label: "ホテル専門朝食コンサルティング",
        href: `${SITE_URL}/service/pbfc.php`,
      },
      {
        label: "新規開業サポートサービス",
        href: `${SITE_URL}/service/opening-support.php`,
      },
      {
        label: "ホテル・旅館再生 / 高付加価値化サービス",
        href: `${SITE_URL}/service/enhanced-revitalization.php`,
      },
      {
        label: "民泊コンサルティング＆運営受託",
        href: `${SITE_URL}/service/minpaku.php`,
      },
      {
        label: "海外ホテルコンサルティング",
        href: `${SITE_URL}/service/oversea.php`,
      },
    ],
  },
  {
    title: "SNS・WEBマーケティング",
    subtitle: "Markething",
    href: "https://www.ab-net.co.jp/service/sns.php",
    image: "/assets/home/bg_service03.webp",
    items: [
      {
        label: "Instagram運用代行",
        href: "https://www.ab-net.co.jp/service/sns.php",
      },
      {
        label: "アビリブインフルエンサー",
        href: "https://www.ab-net.co.jp/service/abilive-influencer.php",
      },
      {
        label: "WEB広告",
        href: "https://www.ab-net.co.jp/service/webmarketing.php",
      },
    ],
  },
  {
    title: "トレーニング",
    subtitle: "Training",
    href: `${SITE_URL}/service/training.php`,
    image: "/assets/home/bg_service04.webp",
    items: [
      {
        label: "接客トレーニング",
        href: `${SITE_URL}/service/training.php`,
      },
    ],
  },
  {
    title: "求人サービス",
    subtitle: "Recruit service",
    href: `${SITE_URL}/service/kyujin.php`,
    image: "/assets/home/bg_service05.webp",
    items: [
      {
        label: "観光・宿泊業界求人サポート",
        href: `${SITE_URL}/service/kyujin.php`,
      },
      {
        label: "ホテル・旅館向け特定技能外国⼈⼈材紹介事業",
        href: `${SITE_URL}/service/tokuteiginou.php`,
      },
    ],
  },
  {
    title: "ブランディングデザイン",
    subtitle: "Branding design",
    href: `${SITE_URL}/service/branding.php`,
    image: "/assets/home/bg_service06.webp",
    items: [
      {
        label: "ブランディングサービス",
        href: `${SITE_URL}/service/branding.php`,
      },
      {
        label: "フォトブランディング",
        href: `${SITE_URL}/service/branding.php#con_photoBrd`,
      },
      {
        label: "デザインソリューション",
        href: `${SITE_URL}/service/design.php`,
      },
      {
        label: "新規開業サポートサービス",
        href: `${SITE_URL}/service/opening-support.php`,
      },
    ],
  },
  {
    title: "インバウンド",
    subtitle: "Inbound",
    href: "https://inbound-lab.com/",
    image: "/assets/home/bg_service07.webp",
    items: [
      { label: "インバウンド対策", href: "https://inbound-lab.com/" },
      {
        label: "インバウンドサイト制作",
        href: `${SITE_URL}/service/multilingual-site.php`,
      },
      {
        label: "海外OTA集客代行サービス",
        href: `${SITE_URL}/service/ota.php`,
      },
      {
        label: "インバウンドプロモーション",
        href: `${SITE_URL}/service/inboundpr.php`,
      },
      { label: "多言語コミニュケーションツール", href: "https://prime-con.jp/" },
      {
        label: "デジタルマルチリンガルスタッフ",
        href: `${SITE_URL}/service/digital_staff.php`,
      },
    ],
  },
  {
    title: "地域活性化",
    subtitle: "Area",
    href: "https://www.ab-net.co.jp/service/regional-revitalization.php",
    image: "/assets/home/bg_service08.webp",
    items: [
      {
        label: "地域ブランディング・DX",
        href: "https://www.ab-net.co.jp/service/regional-revitalization.php",
      },
      {
        label: "補助金申請トータルサポート",
        href: `${SITE_URL}/service/hojyokin.php`,
      },
      {
        label: "クラウドファンディング支援",
        href: "https://www.ab-net.co.jp/service/crowdfunding.php",
      },
    ],
  },
  {
    title: "ツール",
    href: "https://prime-con.jp/",
    items: [
      {
        label: "多言語コミュニケーションツール abi-Concierge",
        href: "https://prime-con.jp/",
      },
    ],
  },
  {
    title: "自社メディア",
    href: "https://ryokankyujin.com/",
    items: [
      {
        label: "業界最大級の求人サイト ホテル・旅館求人コム",
        href: "https://ryokankyujin.com/",
      },
      {
        label: "一流旅館・ホテルの名産品をお届け 厳選 旅館&ホテルの玉手箱",
        href: "https://www.gensen-tamatebako.com/",
      },
    ],
  },
] as const;

export const STATS = [
  {
    label: "コンサルティング実績",
    prefix: "全国",
    value: "1000",
    suffix: "社以上",
  },
  {
    label: "デザイン実績",
    prefix: "",
    value: "3000",
    suffix: "件以上",
  },
  {
    label: "創業",
    prefix: "",
    value: "13",
    suffix: "年",
  },
] as const;

export const HERO = {
  eyebrow: "ホテル・旅館専門のコンサルティング会社「プライムコンセプト」",
  titleMain: "日本の観光を",
  titleAccent: "熱く",
  titleEnd: "する",
  ctaLabel: "無料（0円）WEBマーケティング診断",
  ctaHref: `${SITE_URL}/contact/`,
  noteHref: "https://note.com/prime_concept/",
} as const;

export const INTRO = {
  title: "日本No.1の観光業サポーター を目指して",
  description:
    "私たちはWebとテクノロジーを通し、旅館・ホテル・観光地の皆様にとって最高のパートナーであり続けます。",
} as const;

export const NEWS_CATEGORIES = [
  { label: "ALL", value: "all", href: `${SITE_URL}/topix/` },
  { label: "お知らせ", value: "news", href: `${SITE_URL}/topix/?c=5` },
  { label: "セミナー情報", value: "seminar", href: `${SITE_URL}/topix/?c=1` },
  { label: "コラム", value: "column", href: `${SITE_URL}/topix/?c=4` },
  { label: "スタッフブログ", value: "blog", href: `${SITE_URL}/topix/?c=6` },
] as const;

export const NEWS_ITEMS = [
  {
    date: "2026.03.12",
    category: "blog",
    categoryLabel: "スタッフブログ",
    title: "【ホテル・旅館】季節感で勝つ夏の戦略―。今から備える猛暑の年でも選ばれる宿へ",
    href: `${SITE_URL}/topix/detail.php?id=718`,
    image: "/assets/news/news01.jpg",
  },
  {
    date: "2026.03.05",
    category: "column",
    categoryLabel: "コラム",
    title: "【第369回】WEB集客最前線 (SEOからAEOへ？AI時代のWEB集客最前線)",
    href: `${SITE_URL}/topix/detail.php?id=717`,
    image: "/assets/news/news02.jpg",
  },
  {
    date: "2026.03.04",
    category: "blog",
    categoryLabel: "スタッフブログ",
    title: "【補助金】2026年春、宿泊事業者向け補助金の最新情報・予測について",
    href: `${SITE_URL}/topix/detail.php?id=716`,
    image: "/assets/news/news03.jpg",
  },
  {
    date: "2026.02.26",
    category: "blog",
    categoryLabel: "スタッフブログ",
    title: "【ホテル・旅館】返信ゼロの口コミが売上を下げる？知らないと損する口コミ返信のコツ",
    href: `${SITE_URL}/topix/detail.php?id=715`,
    image: "/assets/news/news04.jpg",
  },
  {
    date: "2026.02.19",
    category: "blog",
    categoryLabel: "スタッフブログ",
    title: "【ホテル・旅館】オーバーツーリズム時代にホテルができること｜ニュースに見る課題と具体策",
    href: `${SITE_URL}/topix/detail.php?id=714`,
    image: "/assets/news/news05.jpg",
  },
] as const;

export const PROMO_BANNERS = {
  large: [
    {
      src: "/assets/home/bn_pricon02.jpg",
      alt: "ホテル・旅館のインバウンド受入対策に！ホテル旅館の多言語コミュニケーションツール abi-Concierge",
      href: "https://prime-con.jp/",
    },
    {
      src: "/assets/home/bn_job_mid.jpg",
      alt: "掲載企業募集中！ 観光・宿泊業界の深刻な人材不足を解消",
      href: `${SITE_URL}/service/kyujin.php`,
    },
  ],
  small: [
    {
      src: "/assets/home/bn_news_mid.jpg",
      alt: "毎週コラム掲載中 観光経済新聞",
      href: `${SITE_URL}/topix/?c=4`,
    },
    {
      src: "/assets/home/bn_cre_mid.jpg",
      alt: "ホテル旅館の販促物のデザイン実績 約3000件",
      href: `${SITE_URL}/service/design.php`,
    },
    {
      src: "/assets/home/bn_branding_mid.jpg",
      alt: "ホテル・旅館・観光業界に特化したブランディングデザイン",
      href: "https://www.prime-brandingdesign.co.jp/",
    },
  ],
} as const;

export const REASON_SUMMARY = {
  heading: "様々な旅館・ホテル様から選ばれています",
  description:
    "北は北海道から南は沖縄まで、小規模の施設から大型旅館やホテルまで1,000施設以上のコンサルティング実績を持ち、サポート内容は多岐に渡ります。あらゆるお悩みを解決するトータルサポートで、御社の魅力を1人でも多くのお客様へ伝えます。",
  href: `${SITE_URL}/works/`,
} as const;

export const REASONS = [
  {
    title: "ホテル旅館の総合 コンサルティング",
    description:
      "弊社は全国の小規模の施設から大型旅館やホテルまで、13年に渡り1,000施設以上の運用実績がございます。最も得意とする集客支援やWEBコンサルティング支援を始めとして、運営改善、人材教育、接客講習など、あらゆるお悩みを解決するトータルサポートが可能です。",
    image: "/assets/reason/reason01.jpg",
  },
  {
    title: "観光特化",
    description:
      "全国の宿泊・観光業に特化したマーケティング・コンサルティング会社です。業界に特化していることで深い知見・ナレッジを積み重ねることができ、専門家としてより密な関係の構築、より質の高いコンサルティングサービスを提供することができます。",
    image: "/assets/reason/reason02.jpg",
  },
  {
    title: "WEBコンサルティング",
    description:
      "我々のもっとも得意とするWEBコンサルティング並びにWEBマーケティングは、今や宿泊業界における最重要ファクターとなっております。WEBマーケティングの成否が業績を左右すると言っても過言ではありません。",
    image: "/assets/reason/reason03.jpg",
  },
  {
    title: "スペシャリスト集団",
    description:
      "WEBコンサルティングのみならず、運営改善、人材教育、接客講習、人材派遣など、宿泊業、観光業に対するあらゆるサポートを実施しています。それを可能にしているのは各分野のスペシャリストが在籍する集団だからです。",
    image: "/assets/reason/reason04.jpg",
  },
] as const;

export const RECRUIT = {
  href: `${SITE_URL}/recruit/`,
  image: "/assets/home/bg_recruit.jpg",
  title: "RECRUIT",
  subtitle: "採用情報",
  ctaLabel: "DETAIL",
  tagline: "Life is a journey... Let's enjoy!",
  subTagline: "一人一人に挑戦して、夢を、楽しもう。",
} as const;

export const CONTACT_ACTIONS = [
  { label: "お問い合わせ", href: `${SITE_URL}/contact/`, inverse: true as const },
  {
    label: "パンフレットダウンロード",
    href: `${SITE_URL}/re_images/home/guide.pdf`,
    inverse: false as const,
  },
] as const;

export const CONTACT_FAQ = {
  label: "よくあるご質問",
  href: `${SITE_URL}/faq/`,
} as const;

export const REGIONAL_PHONES = [
  { region: "北海道地域のお客様", phone: "011-219-8387" },
  { region: "東北地域のお客様", phone: "022-797-1061" },
  { region: "関東地域のお客様", phone: "03-6265-6922" },
  { region: "中部地域のお客様", phone: "052-262-8051" },
  { region: "関西地域のお客様", phone: "06-6743-4255" },
  { region: "中四国地域のお客様", phone: "087-813-3712" },
  { region: "九州沖縄地域のお客様", phone: "092-409-9930" },
  { region: "人事採用関連・総務関連のお問い合わせ", phone: "092-409-9930" },
] as const;

export const CONTACT_INFO_CARDS = [
  {
    label: "相談無料",
    title: "無料オンライン相談",
    description: "全国どこでも相談できます！",
    href: `${SITE_URL}/topix/detail.php?id=418`,
    bullets: [
      "OTA入力の時間がない",
      "インバウンド対策をしたい",
      "施設の集客に課題がある 等",
      "旅館・ホテルに関する事をお聞きします。",
    ],
  },
  {
    label: "登録無料",
    title: "宿泊業・観光業のための メールマガジン",
    description: "宿泊業界ならではのお得な情報を毎月配信",
    href: `${SITE_URL}/mailmagazine/`,
    bullets: [
      "業界ニュース",
      "インバウンド",
      "セミナーのご案内",
      "制作実績",
    ],
  },
] as const;

export const BRAND_ROW = {
  tagline: "日本の観光を熱くする",
  noteHref: "https://note.com/prime_concept/",
} as const;

export const OFFICES = {
  headquarters: [
    {
      name: "東京本社 東日本コンサルティング本部",
      zip: "〒101-0061",
      address: "東京都千代田区神田三崎町2-18-5 水道橋BUSINESS CUBE 7F",
      tel: "03-6265-6922",
      fax: "050-3606-0095",
    },
    {
      name: "福岡本社 西日本コンサルティング本部",
      zip: "〒810-0801",
      address: "福岡県福岡市博多区中洲4−6−12 プラート中洲7F",
      tel: "092-409-9930",
      fax: "092-409-9674",
    },
  ],
  domestic: [
    {
      name: "北海道支店",
      zip: "〒064-0804",
      address: "北海道札幌市中央区南四条西1-15-2 栗林ビル8F",
      tel: "011-219-8387",
    },
    {
      name: "東北支店",
      zip: "〒980-0811",
      address: "宮城県仙台市青葉区一番町2-5-22 GC青葉通りプラザ9F",
      tel: "022-797-1061",
    },
    {
      name: "横浜支店",
      zip: "〒220-0011",
      address: "神奈川県横浜市西区高島1-2-5 横濱ゲートタワー3F",
      tel: "03-6265-6922",
    },
    {
      name: "甲信越支店",
      zip: "〒390-0874",
      address: "長野県松本市大手2-1-9 松本大手ビル2F",
      tel: "0263-39-7103",
    },
    {
      name: "中部支店",
      zip: "〒460-0008",
      address: "愛知県名古屋市中区栄5-28-12 名古屋若宮ビル11F",
      tel: "052-262-8051",
    },
    {
      name: "関西支店",
      zip: "〒530-0003",
      address: "大阪府大阪市北区堂島1-5-2 フェザービル5F",
      tel: "06-6743-4255",
    },
    {
      name: "四国支店",
      zip: "〒760-0062",
      address: "香川県高松市塩上町2-5-24 CABO高松ビル5F",
      tel: "087-813-3712",
    },
    {
      name: "九州支店",
      zip: "〒870-0021",
      address: "大分県大分市府内町1-1-15 府内センタービル5F",
      tel: "097-547-9305",
    },
    {
      name: "沖縄支店",
      zip: "〒900-0021",
      address: "沖縄県那覇市泉崎1-20-1 那覇オーパ3F",
      tel: "098-917-2140",
    },
    {
      name: "旅行事業部 プライムトラベル事務所",
      zip: "〒101-0061",
      address: "東京都千代田区神田三崎町2-18-5 水道橋BUSINESS CUBE 7F",
      tel: "03-6265-6922",
      fax: "050-3606-0095",
    },
  ],
  overseas: [
    {
      name: "ハノイオフィス",
      address: "8th Floor, TID Building, No.4 Lieu Giai Street, Ba Dinh District, Hanoi",
    },
    {
      name: "セブオフィス",
      address: "6th Floor, Mabuhay Tower Cebu IT Park, Jose Maria del Mar St., Lahug, Apas, Cebu City, Cebu",
    },
  ],
} as const;

export const GROUP_LOGOS = [
  {
    name: "abilive Co., Ltd.",
    url: "https://www.ab-net.co.jp/",
    image: "/assets/footer/logo_abilive.png",
    width: 140,
    height: 44,
  },
  {
    name: "Abilive Vietnam Co., Ltd.",
    url: "https://www.abilive.vn/",
    image: "/assets/footer/logo_vn.png",
    width: 144,
    height: 44,
  },
  {
    name: "株式会社プライムコンセプト",
    url: `${SITE_URL}/`,
    image: "/assets/footer/logo_pc_group.png",
    width: 140,
    height: 44,
  },
  {
    name: "プライムブランディングデザイン",
    url: "https://www.prime-brandingdesign.co.jp/",
    image: "/assets/footer/logo_pbd.png",
    width: 140,
    height: 44,
  },
  {
    name: "有限会社リンコムアソシエーツ",
    url: "http://www.lincom.co.jp/",
    image: "/assets/footer/logo_lincom.png",
    width: 140,
    height: 44,
  },
  {
    name: "株式会社ノングリッド",
    url: "https://non-grid.com/",
    image: "/assets/footer/logo_non-grid.png",
    width: 140,
    height: 44,
  },
] as const;

export const PRIVACY = {
  label: "[プライバシーポリシー]",
  href: `${SITE_URL}/privacy`,
  description:
    "株式会社プライムコンセプトは、プライバシーの重要性を認識し、その保護・管理を徹底いたします。",
} as const;
