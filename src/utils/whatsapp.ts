import type { CartItem, CustomerInfo } from '../types';

export const PHONE_NUMBER = '905510311029'; // 05510311029 in international format

export const generateWhatsAppOrderUrl = (
  cartItems: CartItem[],
  totalPrice: number,
  customerInfo: CustomerInfo
): string => {
  const itemsText = cartItems
    .map(
      (item) =>
        `• ${item.quantity}x ${item.product.name} (${item.selectedWeight.label}) - ₺${item.selectedWeight.price * item.quantity}`
    )
    .join('\n');

  const noteLine = customerInfo.note.trim()
    ? customerInfo.note.trim()
    : 'Belirtilmedi';

  const message = 
`🌿 *HASBAHÇE YÖRESEL ÜRÜNLER - YENİ SİPARİŞ*
--------------------------------------
👤 *Müşteri Bilgileri:*
• Ad Soyad: ${customerInfo.fullName}
• Telefon: ${customerInfo.phone}
• Adres: ${customerInfo.address}

🛒 *Sipariş Detayı:*
${itemsText}

💵 *Toplam Tutar:* ₺${totalPrice.toLocaleString('tr-TR')} TL
📝 *Not:* ${noteLine}
--------------------------------------
Siparişimi onaylamak ve ödeme/kargo detaylarını görüşmek istiyorum.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};

export const generateQuickProductWhatsAppUrl = (productName: string, weightLabel: string, price: number): string => {
  const message = `Merhaba Hasbahçe! 🌿 *${productName} (${weightLabel}) - ₺${price}* hakkında sipariş vermek ve bilgi almak istiyorum.`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
