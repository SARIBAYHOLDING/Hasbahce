import type { Review, FAQItem } from '../types';

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Hasan Can',
    city: 'Hatay, Antakya',
    rating: 5,
    comment: 'Hatay Hassa zeytinyağını pet şişede görünce hemen sipariş verdim. Tam çocukluğumda köyde içtiğimiz o katkısız halhalı zeytinyağı tadı! Taş kırma zeytinin çıtırlığı da muazzam.',
    productName: 'Hatay Hassa Sızma Zeytinyağı',
    date: '2 gün önce',
    verified: true
  },
  {
    id: '2',
    author: 'Emine Yıldız',
    city: 'Gaziantep, Şahinbey',
    rating: 5,
    comment: 'Yoğurt bidonunda gelen Hatay sünme peyniri ve zeytini o kadar taze ki salamura suyu dahi mis gibi kokuyor. WhatsApp üzerinden kolayca sipariş verdim, 1 günde Hassa’dan ulaştı.',
    productName: 'Hatay Sünme Köy Peyniri',
    date: '5 gün önce',
    verified: true
  },
  {
    id: '3',
    author: 'Mustafa Polat',
    city: 'Adana, Seyhan',
    rating: 5,
    comment: 'Hassa çileklerini ve kuru incirini paket olarak aldık. İncirler bal gibi tatlı, çilekler dalından yeni koparılmış gibi kıpkırmızı. Hatay lezzetlerini arayanlara kesinlikle tavsiye ederim.',
    productName: 'Hatay Hassa Yöresel Lezzet Paketi',
    date: '1 hafta önce',
    verified: true
  },
  {
    id: '4',
    author: 'Fatma Şahin',
    city: 'İstanbul, Üsküdar',
    rating: 5,
    comment: 'Hatay Hassa bağ üzümü ve halhalı zeytini harikaydı. PET şişedeki yağın genzi tatlı tatlı yakan rayhası kalitesini gösteriyor.',
    productName: 'Hatay Halhalı Taş Kırma Zeytin',
    date: '3 gün önce',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Ürünler nereden ve nasıl kargolanıyor?',
    answer: 'Tüm ürünlerimiz doğrudan Hatay / Hassa ilçemizdeki bahçelerimizden ve imalathanelerimizden toplanır. Köy geleneklerimize uygun biçimde pet şişe ve yoğurt bidonlarında salamura edilerek soğuk zincir ambalajıyla kargolanır.'
  },
  {
    question: 'Sipariş ve ödeme süreci nasıl işliyor?',
    answer: 'Sitenin akıllı sepetinde ürünlerinizi ve adresinizi girdikten sonra "Siparişi WhatsApp ile Gönder" butonuna bastığınızda sipariş detayınız 05510311029 WhatsApp hattımıza iletilir. Temsilcimiz Kapıda Ödeme veya Havale/EFT bilgilerini ileterek siparişinizi onaylar.'
  },
  {
    question: 'Kargo ücreti ne kadar?',
    answer: '₺750 ve üzeri tüm Hatay yöresel alışverişlerinizde kargo tamamen ücretsizdir! ₺750 altındaki siparişlerinizde sabit ₺50 kargo ücreti eklenir.'
  },
  {
    question: 'Pet şişe ve bidon ambalajlar sızdırma yapar mı?',
    answer: 'Pet şişe ve yoğurt bidonlarımız özel sızdırmaz emniyet kapakları ve koruyucu dış kutu ile paketlenmektedir. Türkiye’nin her yerine sorunsuz ulaştırılmaktadır.'
  }
];
