import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { CustomerInfo } from '../types';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';
import { X, Trash2, ShoppingBag, Truck, MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const SmartCartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalWeightGrams,
    freeShippingThreshold,
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    address: '',
    note: '',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isCartOpen) return null;

  // Weight display string (g vs kg)
  const formattedWeight =
    totalWeightGrams >= 1000
      ? `${(totalWeightGrams / 1000).toFixed(1)} kg`
      : `${totalWeightGrams} g`;

  // Free shipping progress
  const isFreeShipping = totalPrice >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);
  const freeShippingProgress = Math.min(100, (totalPrice / freeShippingThreshold) * 100);

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerInfo.fullName.trim()) {
      setErrorMsg('Lütfen Ad Soyad giriniz.');
      return;
    }
    if (!customerInfo.phone.trim()) {
      setErrorMsg('Lütfen Telefon numaranızı giriniz.');
      return;
    }
    if (!customerInfo.address.trim()) {
      setErrorMsg('Lütfen Açık Teslimat Adresinizi giriniz.');
      return;
    }

    setErrorMsg(null);

    // Trigger celebratory confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#43682b', '#d97706', '#8c532b', '#82a036'],
    });

    const whatsappUrl = generateWhatsAppOrderUrl(items, totalPrice, customerInfo);

    // Open WhatsApp URL in new tab or direct application
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 300);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-olive-950/60 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-5 bg-cream-100 border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-olive-700 text-cream-50 flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-olive-900">
                    Sipariş Sepetim
                  </h2>
                  <p className="text-[11px] font-semibold text-olive-800/70">
                    {items.length} Farklı Mahsul ({formattedWeight})
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-cream-200 text-olive-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Bar */}
            <div className="bg-olive-50 p-3.5 px-5 border-b border-olive-100">
              <div className="flex items-center justify-between text-xs font-bold text-olive-900 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-olive-600" />
                  {isFreeShipping
                    ? '🎉 Tebrikler! Kargo Ücretsiz!'
                    : `₺${remainingForFreeShipping.toLocaleString('tr-TR')} daha ekleyin, Kargo BEDAVA!`}
                </span>
                <span>{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-olive-500 to-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Body */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-cream-100 flex items-center justify-center mb-4 text-3xl">
                  🛒
                </div>
                <h3 className="font-serif text-xl font-bold text-olive-900 mb-2">
                  Sepetiniz Henüz Boş
                </h3>
                <p className="text-xs text-olive-800/70 max-w-xs mb-6">
                  Hasbahçe'nin eşsiz doğal zeytin, peynir, incir ve meyvelerini keşfetmek için kataloğumuza göz atın.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 rounded-full bg-olive-700 text-cream-50 text-xs font-bold shadow-md hover:bg-olive-800 transition-all"
                >
                  Ürünleri İncele
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                
                {/* Cart Items List */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <motion.div
                      layout
                      key={item.cartItemId}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50/80 border border-cream-200/80 shadow-sm"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover border border-cream-200"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-olive-900 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-earth-600 font-semibold">
                          Gramaj: {item.selectedWeight.label}
                        </p>
                        <p className="text-xs font-extrabold text-olive-900 mt-0.5">
                          ₺{(item.selectedWeight.price * item.quantity).toLocaleString('tr-TR')}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-white border border-cream-300 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="w-6 h-6 rounded text-xs font-bold text-olive-900 hover:bg-cream-100 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-extrabold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="w-6 h-6 rounded text-xs font-bold text-olive-900 hover:bg-cream-100 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="p-1.5 text-cream-400 hover:text-red-600 transition-colors"
                        title="Ürünü Çıkar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Customer Checkout Form */}
                <div className="pt-4 border-t border-cream-200">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-olive-900 mb-3 flex items-center gap-1.5">
                    <span>📋 Müşteri & Teslimat Bilgileri</span>
                  </h3>

                  {errorMsg && (
                    <div className="mb-3 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleWhatsAppCheckout} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={customerInfo.fullName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                        placeholder="Adınız Soyadınız *"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs font-medium text-olive-900 focus:outline-none focus:border-olive-600 transition-all placeholder:text-olive-800/40"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        placeholder="Telefon Numarası (05XX...) *"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs font-medium text-olive-900 focus:outline-none focus:border-olive-600 transition-all placeholder:text-olive-800/40"
                      />
                    </div>

                    <div>
                      <textarea
                        required
                        rows={2}
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        placeholder="Açık Teslimat Adresiniz (İl, İlçe, Mahalle, Sokak, No) *"
                        className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs font-medium text-olive-900 focus:outline-none focus:border-olive-600 transition-all placeholder:text-olive-800/40 resize-none"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        value={customerInfo.note}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, note: e.target.value })}
                        placeholder="Sipariş Notu (Örn: Hediye paketi, az tuzlu zeytin)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs font-medium text-olive-900 focus:outline-none focus:border-olive-600 transition-all placeholder:text-olive-800/40"
                      />
                    </div>

                    {/* Summary & WhatsApp Submit */}
                    <div className="pt-3 border-t border-cream-200">
                      <div className="flex items-center justify-between text-xs text-olive-800/80 mb-1">
                        <span>Toplam Ağırlık:</span>
                        <span className="font-bold text-olive-900">{formattedWeight}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-olive-800/80 mb-3">
                        <span>Kargo Ücreti:</span>
                        <span className="font-bold text-olive-900">
                          {isFreeShipping ? 'ÜCRETSİZ' : '₺50'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-base font-extrabold text-olive-900 mb-4 pt-2 border-t border-cream-200">
                        <span>Genel Toplam:</span>
                        <span className="text-xl text-olive-800">
                          ₺{(totalPrice + (isFreeShipping ? 0 : 50)).toLocaleString('tr-TR')}
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all transform active:scale-98"
                      >
                        <MessageCircle className="w-5 h-5 fill-white" />
                        <span>Siparişi WhatsApp ile Gönder</span>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </button>
                      
                      <p className="text-[10px] text-center text-olive-800/60 mt-2 font-medium">
                        * Kredi kartı gerekmez. WhatsApp temsilcimiz 05510311029 üzerinden siparişinizi onaylayacaktır.
                      </p>
                    </div>

                  </form>
                </div>

              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
