import React, { useState } from 'react';
import type { Product, WeightOption } from '../types';
import { useCart } from '../context/CartContext';
import { Star, Heart, ShoppingBag, Check, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, favorites, toggleFavorite, setSelectedProductForModal } = useCart();
  
  // Default to first weight variant or 1kg variant if present
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(
    product.weights[1] || product.weights[0]
  );
  
  const [isAdded, setIsAdded] = useState(false);
  const isFav = favorites.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-organic-hover transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Product Image Header Container */}
      <div className="relative aspect-square w-full bg-cream-100 overflow-hidden cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => setSelectedProductForModal(product)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm text-white ${
                product.badge === 'Çok Satan'
                  ? 'bg-amber-500'
                  : product.badge === '100% Doğal'
                  ? 'bg-olive-600'
                  : product.badge === 'Sınırlı Hasat'
                  ? 'bg-earth-600'
                  : 'bg-emerald-600'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Favorite Heart Action */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-10 shadow-sm ${
            isFav
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-olive-800 hover:bg-white hover:text-red-500'
          }`}
          title="Favorilere Ekle"
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Button Hover Overlay */}
        <div
          onClick={() => setSelectedProductForModal(product)}
          className="absolute inset-0 bg-olive-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
        >
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-olive-900 text-xs font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
            <Eye className="w-4 h-4 text-olive-700" />
            <span>Hızlı İncele</span>
          </button>
        </div>
      </div>

      {/* Product Content Info */}
      <div className="flex flex-col flex-1 p-5">
        
        {/* Rating & Origin */}
        <div className="flex items-center justify-between text-xs text-olive-800/70 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="font-bold text-olive-900">{product.rating}</span>
            <span>({product.reviewsCount})</span>
          </div>
          <span className="text-[11px] font-semibold text-earth-600 bg-earth-100 px-2 py-0.5 rounded-md">
            {product.origin}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3
          onClick={() => setSelectedProductForModal(product)}
          className="font-serif text-lg font-bold text-olive-900 group-hover:text-olive-700 transition-colors cursor-pointer line-clamp-1 mb-1"
        >
          {product.name}
        </h3>
        
        <p className="text-xs text-olive-800/75 line-clamp-2 min-h-[32px] mb-4">
          {product.subtitle}
        </p>

        {/* Weight Selector Dropdown */}
        <div className="mt-auto pt-3 border-t border-cream-200/70">
          <div className="flex items-center justify-between mb-3">
            <label className="text-[11px] font-bold text-olive-800 uppercase tracking-wider">
              Miktar Seçin:
            </label>
            
            <select
              value={selectedWeight.label}
              onChange={(e) => {
                const found = product.weights.find((w) => w.label === e.target.value);
                if (found) setSelectedWeight(found);
              }}
              className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-xs font-semibold text-olive-900 focus:outline-none focus:border-olive-500 cursor-pointer"
            >
              {product.weights.map((w) => (
                <option key={w.label} value={w.label}>
                  {w.label} - ₺{w.price}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic Price & Sepete Ekle Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-wider text-olive-800/60">
                Fiyat ({selectedWeight.label}):
              </span>
              <span className="text-xl font-extrabold text-olive-900">
                ₺{selectedWeight.price.toLocaleString('tr-TR')}
              </span>
            </div>

            {/* Micro-animated Add to Cart Button */}
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-olive-700 hover:bg-olive-800 text-cream-50'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Eklendi!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Sepete Ekle</span>
                </>
              )}
            </motion.button>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
