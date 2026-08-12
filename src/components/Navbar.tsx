import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, Search, Menu, X, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/whatsapp';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const { totalItemsCount, favorites, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ürünlerimiz', href: '#catalog' },
    { name: 'Hikayemiz', href: '#story' },
    { name: 'Müşteri Yorumları', href: '#reviews' },
    { name: 'S.S.S.', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-organic py-3 border-b border-cream-200/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-olive-700 text-cream-50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-olive-900 group-hover:text-olive-700 transition-colors">
                Hasbahçe
              </span>
              <span className="text-[10px] tracking-widest text-earth-600 font-semibold uppercase -mt-1">
                Yöresel Ürünler
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-olive-900/80 hover:text-olive-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-full text-olive-800 hover:bg-cream-200/60 transition-colors"
              title="Ürün Ara"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Call Pill */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 transition-all text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>0551 031 10 29</span>
            </a>

            {/* Favorites Icon */}
            <div className="relative hidden sm:block">
              <a
                href="#catalog"
                className="p-2.5 rounded-full text-olive-800 hover:bg-cream-200/60 transition-colors block"
                title="Favorilerim"
              >
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </a>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-olive-700 text-cream-50 hover:bg-olive-800 transition-all shadow-md hover:shadow-organic-hover active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">Sepetim</span>
              <motion.span
                key={totalItemsCount}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center"
              >
                {totalItemsCount}
              </motion.span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-olive-900 hover:bg-cream-200/60"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-100/95 backdrop-blur-md border-b border-cream-200 px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-olive-900 py-1"
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Destek (0551 031 10 29)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
