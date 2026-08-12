export interface WeightOption {
  label: string;           // e.g. "500g", "1 kg", "2 kg", "5 kg"
  weightInGrams: number;   // e.g. 500, 1000, 2000, 5000
  price: number;           // Calculated price for this specific weight
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'zeytin' | 'peynir' | 'incir' | 'cilek' | 'uzum' | 'paket';
  categoryLabel: string;
  basePrice: number;
  baseWeightLabel: string;
  image: string;
  badge?: '100% Doğal' | 'Sınırlı Hasat' | 'Yeni Ürün' | 'Çok Satan' | 'Özel Hasat';
  rating: number;
  reviewsCount: number;
  description: string;
  origin: string;
  harvestYear: string;
  benefits: string[];
  storageTips: string;
  weights: WeightOption[];
  inStock: boolean;
}

export interface CartItem {
  cartItemId: string;     // product.id + '-' + weight.label
  product: Product;
  selectedWeight: WeightOption;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  address: string;
  note: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  comment: string;
  productName: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
