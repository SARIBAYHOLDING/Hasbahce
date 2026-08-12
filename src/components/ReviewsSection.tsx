import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-olive-700 bg-olive-100 px-4 py-1.5 rounded-full inline-block mb-3">
              Gerçek Müşteri Deneyimleri
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-olive-900">
              Müşterilerimiz Ne Diyor?
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-cream-200 shadow-sm">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
            <div>
              <span className="font-extrabold text-lg text-olive-900">4.9 / 5.0</span>
              <p className="text-[11px] font-semibold text-olive-800/70">500+ Mutlu Müşteri Değerlendirmesi</p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-cream-200 shadow-sm relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cream-200" />
              
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-olive-900/90 italic mb-6 leading-relaxed relative z-10">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-extrabold text-olive-900">{rev.author}</h4>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> Doğrulanmış Alıcı
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-olive-800/60 font-medium">{rev.city}</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-earth-600 bg-earth-100 px-2.5 py-1 rounded-lg">
                    {rev.productName}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
