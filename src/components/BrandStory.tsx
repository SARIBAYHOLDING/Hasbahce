import React from 'react';
import { motion } from 'framer-motion';
import { Sun, HeartHandshake, ThermometerSnowflake, Sparkles } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const storyFeatures = [
    {
      icon: <Sun className="w-8 h-8 text-amber-600" />,
      title: 'Hatay Hassa İlçesi Bereketi',
      desc: 'Amanos dağlarının eteklerindeki Hassa ilçesi bahçelerimizden Halhalı zeytinlerimizi, incir ve meşhur Hassa çileklerimizi özenle topluyoruz.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-olive-600" />,
      title: 'Yoğurt Bidonunda & Pet Şişede Katkısız',
      desc: 'Hassa ilçemizin geleneksel yöntemlerine bağlı kalarak zeytinyağlarımızı şeffaf pet şişelere, zeytin ve peynirlerimizi kaya tuzlu yoğurt bidonlarına basıyoruz.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: 'Taş Değirmen Soğuk Sıkım',
      desc: 'Erken hasat Hatay zeytinlerimizi 24°C altında sıkıp antioksidan ve polifenol değerini koruyarak pet şişelere dolduruyoruz.',
    },
    {
      icon: <ThermometerSnowflake className="w-8 h-8 text-earth-600" />,
      title: 'Hatay Hassa’dan Güvenli Teslimat',
      desc: 'Siparişlerinizi Hatay Hassa ilçemizdeki imalathanemizden sızdırmaz ambalajlı ve buz korumalı olarak Türkiye’nin 81 iline gönderiyoruz.',
    },
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-cream-100 via-white to-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-earth-600 bg-earth-100 px-4 py-1.5 rounded-full inline-block mb-3">
            Bahçelerimizden Sofranıza
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-olive-900 mb-4">
            Neden Hatay Hassa Hasbahçe?
          </h2>
          <p className="text-sm sm:text-base text-olive-800/80 leading-relaxed">
            Biz Hatay'ın güzel Hassa ilçesinin bereketli topraklarını, ilçemizdeki yerel üreticilerimizin pet şişelere ve yoğurt bidonlarına basarak hazırladığı o samimi, saf ve katkısız Hatay lezzetlerini tüm Türkiye ile buluşturuyoruz.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {storyFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-cream-200 shadow-sm hover:shadow-organic-hover transition-all duration-300 flex flex-col items-start group"
            >
              <div className="p-4 rounded-2xl bg-cream-100 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-olive-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-olive-800/75 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
