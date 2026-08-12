import React from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';
import { MessageCircle, ArrowDown, ShieldCheck, Truck, Sparkles, Award } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/whatsapp';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100">
      {/* Three.js Interactive Particle & Leaf Background */}
      <HeroCanvas />

      {/* Subtle Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-olive-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-earth-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Organic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-100/90 border border-olive-300/80 text-olive-800 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Hatay / Hassa Bahçelerimizden Doğrudan</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-olive-900 leading-[1.15] mb-6"
            >
              Hatay Hassa'dan <br />
              <span className="gradient-text">Doğallık ve Tazelik</span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-olive-800/80 max-w-2xl font-normal leading-relaxed mb-8"
            >
              Hatay Hassa'nın meşhur Halhalı taş kırma zeytinleri, pet şişede soğuk sıkım sızma zeytinyağları, yoğurt bidonunda salamura sünme peynirleri, Amanos kuru incirleri ve dalından taze Hassa çilekleri katıksız olarak evinizde.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="#catalog"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-50 font-semibold text-base shadow-organic hover:shadow-organic-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Hatay Lezzetlerini Keşfedin</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </a>

              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp ile Hızlı Sipariş</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-cream-300/60 w-full"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-olive-600 shrink-0" />
                <span className="text-xs font-semibold text-olive-900">Hatay Hassa Mahsulü</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs font-semibold text-olive-900">Bidonda & Pet Şişede</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-earth-600 shrink-0" />
                <span className="text-xs font-semibold text-olive-900">Hızlı Köy Kargosu</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-olive-900">0551 031 10 29</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Visual Card / Floating Product Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative max-w-md w-full"
            >
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-olive-400 to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse-slow" />
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
                <img
                  src="/images/hero-bg.png"
                  alt="Hatay Hassa Doğal Köy Ürünleri"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Overlay Badge 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-6 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3"
                >
                  <span className="text-2xl">🍓</span>
                  <div>
                    <p className="text-[11px] uppercase font-bold text-olive-900">Hatay Hassa Hasadı</p>
                    <p className="text-xs font-semibold text-amber-600">Dalından Taze Çilek & Üzüm</p>
                  </div>
                </motion.div>

                {/* Floating Overlay Badge 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-6 left-6 glass-dark px-4 py-3 rounded-2xl shadow-xl border border-olive-400/30 flex items-center gap-3 text-white"
                >
                  <span className="text-2xl">🫒</span>
                  <div>
                    <p className="text-xs font-bold text-cream-100">Halhalı Zeytin & Pet Yağ</p>
                    <p className="text-[11px] text-cream-300 font-mono">Hatay / Hassa Köyünden</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
