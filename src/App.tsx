import React, { useState, useEffect, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { SmartCartDrawer } from './components/SmartCartDrawer';
import { BrandStory } from './components/BrandStory';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';
import { PRODUCTS } from './data/products';
import { PHONE_NUMBER } from './utils/whatsapp';
import { MessageCircle, Sparkles } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

const MainContent: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.basePrice - a.basePrice);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSearchTrigger = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 text-olive-900 font-sans relative">
      
      {/* Intro Animated Splash Loader */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Sticky Header Navbar */}
      <Navbar onSearchClick={handleSearchTrigger} />

      {/* Hero Banner Section */}
      <HeroSection />

      {/* Product Catalog Section */}
      <section id="catalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-olive-700 bg-olive-100 px-4 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Taze & Geleneksel Hasat
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-olive-900 mb-3">
            Yöresel Lezzet Kataloğumuz
          </h2>
          <p className="text-xs sm:text-sm text-olive-800/80 max-w-xl">
            İstediğiniz gramaj ve ambalajı seçin, sepetinize ekleyin ve WhatsApp üzerinden tek tıkla doğrudan sipariş verin.
          </p>
        </div>

        {/* Filter Controls */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultsCount={filteredProducts.length}
        />

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-200 p-8 shadow-sm">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-2">Aradığınız Ürün Bulunamadı</h3>
            <p className="text-xs text-olive-800/70 mb-4">Arama terimini değiştirebilir veya tüm kategorileri listeleyebilirsiniz.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-olive-700 text-cream-50 text-xs font-bold"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Brand Story Narrative */}
      <BrandStory />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal />
      <SmartCartDrawer />
      <ToastNotification />

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href={`https://wa.me/${PHONE_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xl transition-all transform hover:scale-105 active:scale-95 group border-2 border-white/80"
        title="WhatsApp ile 7/24 İletişime Geçin"
      >
        <MessageCircle className="w-5 h-5 fill-white animate-pulse" />
        <span className="hidden md:inline">WhatsApp Hızlı Sipariş</span>
      </a>

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
};

export default App;
