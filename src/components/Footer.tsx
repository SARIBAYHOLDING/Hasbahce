import React from 'react';
import { PHONE_NUMBER } from '../utils/whatsapp';
import { MessageCircle, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-olive-950 text-cream-100 pt-16 pb-8 border-t border-olive-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-olive-900/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-olive-700 text-cream-50 flex items-center justify-center font-bold text-xl">
                🌿
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Hasbahçe Hatay Yöresel
              </span>
            </div>

            <p className="text-xs text-cream-300/80 leading-relaxed max-w-sm mb-6">
              Hatay / Hassa bahçelerimizden ve imalathanemizden kapınıza kadar uzanan katıksız doğallık. PET şişede sızma zeytinyağı, yoğurt bidonunda Halhalı kırma zeytin & sünme peynir, Hassa kuru incir ve taze çilek.
            </p>

            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Sipariş & Destek (0551 031 10 29)</span>
            </a>
          </div>

          {/* Quick Category Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm font-bold text-amber-500 uppercase tracking-wider mb-4">
              Hatay Yöresel Ürünlerimiz
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-300/90 font-medium">
              <li><a href="#catalog" className="hover:text-white transition-colors">🫒 Hatay Halhalı Taş Kırma Zeytin</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">🍾 PET Şişede Hatay Sızma Zeytinyağı</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">🧀 Yoğurt Bidonunda Hatay Sünme Peyniri</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">🍯 Hatay Hassa Dağ Kuru İnciri</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">🍓 Hatay Hassa Dalından Taze Çilek</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">🍇 Hatay Hassa Yayla Üzümü</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">🎁 Hatay Hassa Gurme Paketleri</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-bold text-amber-500 uppercase tracking-wider mb-4">
              İletişim & Adres
            </h4>
            <ul className="space-y-3 text-xs text-cream-300/90 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Adres:</strong> Hatay / Hassa Bahçelerimiz & İmalathanemiz, Hatay, Türkiye</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sipariş Hattı: <strong>0551 031 10 29</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: <strong>0551 031 10 29</strong> (Hassa / Hatay)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Mandate Branding Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400 font-medium">
          <p>© {new Date().getFullYear()} Hasbahçe Hatay Yöresel Ürünleri (Hassa/Hatay). Tüm Hakları Saklıdır.</p>

          {/* Mandatory Footer Branding */}
          <a
            href="https://saribayholding.github.io/Saribay-Yazilim/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-olive-900 border border-olive-800 hover:border-amber-500/50 text-cream-200 hover:text-white transition-all shadow-sm"
          >
            <span>Powered by</span>
            <strong className="text-amber-400 group-hover:underline">Sarıbay Yazılım</strong>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};
