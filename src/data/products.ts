import type { Product } from '../types';

export const CATEGORIES = [
  { id: 'all', name: 'Tümü' },
  { id: 'zeytin', name: 'Zeytin & Zeytinyağı' },
  { id: 'peynir', name: 'Hatay Peynirleri' },
  { id: 'incir', name: 'Hassa Kuru İncir' },
  { id: 'cilek', name: 'Hassa Taze Çilek' },
  { id: 'uzum', name: 'Hatay Hassa Üzümü' },
  { id: 'paket', name: 'Hatay Özel Paketleri' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hatay-halhali-zeytin',
    name: 'Hatay Halhalı Taş Kırma Zeytin (Bidonda Salamura)',
    subtitle: 'Hatay Hassa bahçelerimizden, bidonda kaya tuzu ve salamura ile olgunlaşmış kırma zeytin',
    category: 'zeytin',
    categoryLabel: 'Hatay Zeytinleri',
    basePrice: 280,
    baseWeightLabel: '1 kg Bidon',
    image: '/images/ayvalik-zeytin.png',
    badge: 'Çok Satan',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Hatay Hassa ve etrafındaki asırlık Halhalı zeytin ağaçlarımızdan toplanıp taşlarla kırılan ve plastik yoğurt bidonlarında sadece deniz tuzu ve limontuzu katılarak salamura edilen %100 doğal Hatay kırma zeytini. Kıtır yapısı ve doğal aromasıyla eşsizdir.',
    origin: 'Hatay / Hassa',
    harvestYear: '2025/2026 Hatay Hasadı',
    benefits: [
      'Geleneksel bidonda doğal fermantasyon',
      'Hiçbir koruyucu veya kimyasal ağartıcı içermez',
      'Hatay Hassa yöresine özgü Halhalı zeytin çeşidi'
    ],
    storageTips: 'Güneş görmeyen serin yerde kendi salamura suyu içinde muhafaza ediniz.',
    inStock: true,
    weights: [
      { label: '500g Bidon', weightInGrams: 500, price: 150 },
      { label: '1 kg Bidon', weightInGrams: 1000, price: 280 },
      { label: '2 kg Bidon', weightInGrams: 2000, price: 540 },
      { label: '5 kg Köy Bidonu', weightInGrams: 5000, price: 1300 },
    ]
  },
  {
    id: 'hatay-sizma-zeytinyagi',
    name: 'Hatay Hassa Soğuk Sıkım Sızma Zeytinyağı (PET Şişe)',
    subtitle: 'Geleneksel 1.5L PET şişede max 0.3 asit, katkısız Hatay Hassa zeytinyağı',
    category: 'zeytin',
    categoryLabel: 'Hatay Zeytinyağı',
    basePrice: 420,
    baseWeightLabel: '1 Litre PET',
    image: '/images/zeytinyagi.png',
    badge: '100% Doğal',
    rating: 5.0,
    reviewsCount: 230,
    description: 'Hatay Hassa bahçelerimizdeki zeytinlerin erken hasat edilip taş değirmende soğuk sıkılmasıyla üretilmiştir. Köylerimizde alışılagelmiş şeffaf PET şişelerde ambalajlanıp gönderilir. Yüksek polifenol ve hafif geniz yakan taze rayhaya sahiptir.',
    origin: 'Hatay / Hassa',
    harvestYear: '2025 Erken Hasat',
    benefits: [
      'Asit oranı %0.3 altındadır',
      'Geleneksel pet şişe muhafazası',
      'Salata, humusa ve çiğ tüketime çok uygundur'
    ],
    storageTips: 'Işık görmeyen serin bir kilerde muhafaza ediniz.',
    inStock: true,
    weights: [
      { label: '500 ml PET', weightInGrams: 500, price: 230 },
      { label: '1 Litre PET', weightInGrams: 1000, price: 420 },
      { label: '2 Litre PET', weightInGrams: 2000, price: 810 },
      { label: '5 Litre PET Bidon', weightInGrams: 5000, price: 1950 },
    ]
  },
  {
    id: 'hatay-sunme-peyniri',
    name: 'Hatay Sünme & Sıkme Köy Peyniri (Yoğurt Bidonunda)',
    subtitle: 'Hatay Hassa yayla koyun-keçi sütü, plastik bidonda taze salamuralı',
    category: 'peynir',
    categoryLabel: 'Hatay Peynirleri',
    basePrice: 380,
    baseWeightLabel: '1 kg Bidon',
    image: '/images/tulum-peyniri.png',
    badge: 'Sınırlı Hasat',
    rating: 4.9,
    reviewsCount: 110,
    description: 'Hatay Hassa yaylalarında otlayan keçilerin ve koyunların taze sütünden şirden mayası ile tutturulup kaynar suda bastırılarak örülen geleneksel Hatay sünme peyniri. Yoğurt bidonları içerisinde salamura suyuyla gönderilir.',
    origin: 'Hatay / Hassa',
    harvestYear: 'Taze Köy Üretimi',
    benefits: [
      '%100 Köy sütü ve şirden mayası',
      'Künefe yapımına ve kahvaltıya mükemmel uyum',
      'Katkısız salamura ambalajı'
    ],
    storageTips: 'Buzdolabında kendi salamura suyu içinde saklayınız.',
    inStock: true,
    weights: [
      { label: '500g Bidon', weightInGrams: 500, price: 200 },
      { label: '1 kg Bidon', weightInGrams: 1000, price: 380 },
      { label: '2 kg Bidon', weightInGrams: 2000, price: 740 },
    ]
  },
  {
    id: 'hatay-hassa-incir',
    name: 'Hatay Hassa Dağ Kuru İnciri',
    subtitle: 'Amanos dağ eteklerinde güneşte kurutulmuş ballı ve ince kabuklu incir',
    category: 'incir',
    categoryLabel: 'Hassa Kuru İncir',
    basePrice: 340,
    baseWeightLabel: '1 kg Paket',
    image: '/images/kuru-incir.png',
    badge: '100% Doğal',
    rating: 4.9,
    reviewsCount: 185,
    description: 'Hatay Hassa yöresinin yüksek rakımlı Amanos dağı eteklerindeki organik incir bahçelerimizden toplanan ballı incirlerimiz. Hiçbir kimyasal beyazlatıcı uygulanmadan doğrudan güneşte serilerek kurutulur.',
    origin: 'Hatay / Hassa',
    harvestYear: '2025 Sonbahar Hasadı',
    benefits: [
      'Doğal şeker ve yüksek lif kaynağı',
      'Güneşte doğal kurutma',
      'Amanos dağlarının özel aroması'
    ],
    storageTips: 'Serin ve kuru yerde kapağı kapalı tutunuz.',
    inStock: true,
    weights: [
      { label: '500g Paket', weightInGrams: 500, price: 180 },
      { label: '1 kg Paket', weightInGrams: 1000, price: 340 },
      { label: '2 kg Bez Torba', weightInGrams: 2000, price: 650 },
      { label: '5 kg Kasa', weightInGrams: 5000, price: 1550 },
    ]
  },
  {
    id: 'hatay-hassa-cilek',
    name: 'Hatay Hassa Dalından Taze Çilek',
    subtitle: 'Meşhur Hassa çilek bahçelerimizden sabah çiğinde toplanan hormonsuz çilek',
    category: 'cilek',
    categoryLabel: 'Hassa Taze Çilek',
    basePrice: 160,
    baseWeightLabel: '1 kg Kasa',
    image: '/images/taze-cilek.png',
    badge: 'Yeni Ürün',
    rating: 4.8,
    reviewsCount: 96,
    description: 'Türkiye’nin ve Hatay’ın çilek ambarı olan Hassa ilçemizdeki bahçelerimizden sabahın ilk ışıklarıyla toplanan mis kokulu taze çileklerimiz. Korumalı özel şeffaf kaplarda aynı gün kargolanır.',
    origin: 'Hatay / Hassa',
    harvestYear: 'Günlük Taze Hasat',
    benefits: [
      'Hassa yöresinin tescilli tatlı çileği',
      'Doğal kokulu ve yoğun aromalı',
      'Aynı gün taze toplanır'
    ],
    storageTips: 'Buzdolabında meyve gözünde muhafaza edin.',
    inStock: true,
    weights: [
      { label: '500g Kap', weightInGrams: 500, price: 90 },
      { label: '1 kg Kasa', weightInGrams: 1000, price: 160 },
      { label: '2 kg Ahşap Sepet', weightInGrams: 2000, price: 300 },
    ]
  },
  {
    id: 'hatay-hassa-uzum',
    name: 'Hatay Hassa Yayla & Bağ Üzümü',
    subtitle: 'Hassa bağlarının meşhur çıtır ve yüksek şekerli yayla üzümü',
    category: 'uzum',
    categoryLabel: 'Hatay Hassa Üzümü',
    basePrice: 140,
    baseWeightLabel: '1 kg Paket',
    image: '/images/ege-uzumu.png',
    badge: '100% Doğal',
    rating: 4.8,
    reviewsCount: 88,
    description: 'Hatay Hassa bağlarında yetişen, güneşle tatlanan ince kabuklu, çıtır ve lezzetli Hassa üzümleri. Kimyasal tatlandırıcı olmadan doğal haliyle toplanır.',
    origin: 'Hatay / Hassa',
    harvestYear: 'Taze Sezon Hasadı',
    benefits: [
      'Hassa bağlarının lezzetli mahsulü',
      'Yüksek doğal glikoz ve enerji kaynağı',
      'Katkısız ve taze'
    ],
    storageTips: 'Buzdolabında muhafaza ediniz.',
    inStock: true,
    weights: [
      { label: '1 kg Paket', weightInGrams: 1000, price: 140 },
      { label: '2 kg Sepet', weightInGrams: 2000, price: 260 },
      { label: '5 kg Kasa', weightInGrams: 5000, price: 620 },
    ]
  },
  {
    id: 'hatay-gurme-paket',
    name: 'Hatay Hassa Yöresel Lezzet Paketi',
    subtitle: 'PET şişede zeytinyağı, bidonda Halhalı zeytin & peynir, Hassa inciri ve çileği',
    category: 'paket',
    categoryLabel: 'Hatay Paketleri',
    basePrice: 1150,
    baseWeightLabel: 'Ağırlık ~ 4.5 kg',
    image: '/images/kahvalti-paket.png',
    badge: 'Çok Satan',
    rating: 5.0,
    reviewsCount: 340,
    description: 'Hatay Hassa köyümüzün en meşhur mahsullerini tek paket avantajıyla sunuyoruz. İçerik: 1 kg Bidonda Halhalı Zeytin, 1 Litre PET Sızma Zeytinyağı, 1 kg Bidonda Hatay Sünme Peynir, 500g Hassa Kuru İncir, 1 kg Hassa Taze Çilek.',
    origin: 'Hatay / Hassa',
    harvestYear: 'Taze Köy Paketi',
    benefits: [
      '%15 Avantajlı Paket Fiyatı',
      'Geleneksel PET şişe ve bidon ambalajlı',
      'Tamamen Hatay Hassa bahçelerimizden'
    ],
    storageTips: 'Peynir ve zeytini buzdolabında, yağı serin yerde saklayınız.',
    inStock: true,
    weights: [
      { label: 'Standart Hatay Paket (~4.5 kg)', weightInGrams: 4500, price: 1150 },
      { label: 'Dublex Hassa Aile Paketi (~9 kg)', weightInGrams: 9000, price: 2150 },
    ]
  }
];
