import React from 'react';
import { CATEGORIES } from '../data/products';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  resultsCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  resultsCount,
}) => {
  return (
    <div className="w-full mb-10">
      
      {/* Category Pills Slider */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-olive-700 text-cream-50 shadow-md scale-105'
                  : 'bg-white/80 text-olive-900/80 hover:bg-cream-200/80 border border-cream-200/80'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-olive-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.id === 'all' && '🌿'}
                {cat.id === 'zeytin' && '🫒'}
                {cat.id === 'peynir' && '🧀'}
                {cat.id === 'incir' && '🍯'}
                {cat.id === 'cilek' && '🍓'}
                {cat.id === 'uzum' && '🍇'}
                {cat.id === 'paket' && '🎁'}
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 bg-white/70 p-4 rounded-2xl border border-cream-200 shadow-sm backdrop-blur-sm">
        
        {/* Search Input Field */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-600" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Zeytin, peynir, incir veya çilek ara..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-cream-50 border border-cream-200 text-xs sm:text-sm font-medium text-olive-900 focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-200 transition-all placeholder:text-olive-800/40"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-olive-600 hover:text-olive-900"
            >
              Temizle
            </button>
          )}
        </div>

        {/* Results Counter & Sort Dropdown */}
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
          <span className="text-xs font-medium text-olive-800/70">
            <strong>{resultsCount}</strong> mahsul listeleniyor
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-olive-700" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 rounded-xl bg-cream-50 border border-cream-200 text-xs font-semibold text-olive-900 focus:outline-none focus:border-olive-500 transition-all cursor-pointer"
            >
              <option value="recommended">Önerilen Sıralama</option>
              <option value="price-low">Fiyat: Düşükten Yükseğe</option>
              <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
              <option value="rating">En Çok Beğenilenler</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};
