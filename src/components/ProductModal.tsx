import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { WeightOption } from '../types';
import { X, Star, CheckCircle, ShieldCheck, ShoppingBag, MessageCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateQuickProductWhatsAppUrl } from '../utils/whatsapp';

export const ProductModal: React.FC = () => {
  const { selectedProductForModal, setSelectedProductForModal, addToCart } = useCart();
  
  if (!selectedProductForModal) return null;
  const product = selectedProductForModal;

  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(
    product.weights[1] || product.weights[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const whatsappUrl = generateQuickProductWhatsAppUrl(product.name, selectedWeight.label, selectedWeight.price * quantity);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProductForModal(null)}
          className="fixed inset-0 bg-olive-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-cream-200 my-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProductForModal(null)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-olive-900 hover:bg-cream-100 transition-colors shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            
            {/* Left Image Section */}
            <div className="md:col-span-6 bg-cream-100 relative min-h-[320px] md:min-h-full flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-h-[400px] object-cover rounded-2xl shadow-md"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-semibold text-olive-900 glass-panel px-4 py-2 rounded-xl">
                <span>📍 Menşei: {product.origin}</span>
                <span>🌾 Hasat: {product.harvestYear}</span>
              </div>
            </div>

            {/* Right Info & Actions Section */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-earth-600 uppercase tracking-wider">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-xs text-olive-900 font-bold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-olive-800/60 font-normal">({product.reviewsCount} değerlendirme)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-olive-900 mb-3">
                {product.name}
              </h2>
              
              <p className="text-xs sm:text-sm text-olive-800/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Natural Benefits Checklist */}
              <div className="mb-6 bg-cream-50 p-4 rounded-2xl border border-cream-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-olive-900 mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-olive-600" />
                  Öne Çıkan Özellikler & Faydalar
                </h4>
                <ul className="space-y-1.5">
                  {product.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-olive-800">
                      <CheckCircle className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Storage Tip */}
              <div className="mb-6 flex items-start gap-2.5 text-xs text-earth-700 bg-earth-100/60 p-3 rounded-xl">
                <Info className="w-4 h-4 text-earth-600 shrink-0 mt-0.5" />
                <p><strong>Saklama Önerisi:</strong> {product.storageTips}</p>
              </div>

              {/* Weight & Quantity Controls */}
              <div className="mt-auto pt-4 border-t border-cream-200">
                <div className="flex flex-col gap-3 mb-4">
                  <label className="text-xs font-bold text-olive-900 uppercase tracking-wider">
                    Gramaj / Ambalaj Seçimi:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.weights.map((w) => (
                      <button
                        key={w.label}
                        onClick={() => setSelectedWeight(w)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                          selectedWeight.label === w.label
                            ? 'bg-olive-700 text-white border-olive-700 shadow-sm'
                            : 'bg-white text-olive-900 border-cream-300 hover:border-olive-400'
                        }`}
                      >
                        <div>{w.label}</div>
                        <div className="text-[11px] opacity-90">₺{w.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart Controls */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-cream-300 rounded-xl bg-cream-50 p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-lg font-bold text-olive-900 hover:bg-cream-200 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-extrabold text-sm text-olive-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 rounded-lg font-bold text-olive-900 hover:bg-cream-200 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-col ml-auto text-right">
                    <span className="text-[10px] text-olive-800/60 font-bold uppercase">Toplam Fiyat</span>
                    <span className="text-2xl font-extrabold text-olive-900">
                      ₺{(selectedWeight.price * quantity).toLocaleString('tr-TR')}
                    </span>
                  </div>
                </div>

                {/* Buttons: Sepete Ekle & WhatsApp Soru */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-olive-700 hover:bg-olive-800 text-cream-50 shadow-md'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isAdded ? 'Sepete Eklendi!' : 'Sepete Ekle'}</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp İle Sor</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
