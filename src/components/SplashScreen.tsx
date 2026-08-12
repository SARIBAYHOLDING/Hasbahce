import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-olive-900 text-cream-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background Subtle Glow Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-olive-700/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-earth-600/30 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Leaf Emblem */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-olive-600 to-olive-800 flex items-center justify-center shadow-glow border border-olive-500/40">
            <span className="text-5xl">🌿</span>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border border-dashed border-amber-500/40 rounded-full"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-cream-100 mb-2"
        >
          HASBAHÇE
        </motion.h1>
        
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-cream-300 font-medium mb-6"
        >
          Yöresel Ürünler & Doğal Yaşam
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm italic text-cream-200/90 mb-8 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 inline" />
          "Bahçeden Sofranıza Doğallık ve Tazelik"
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-olive-950/80 rounded-full overflow-hidden border border-olive-700/50 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 via-olive-400 to-olive-300 rounded-full"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <span className="mt-2 text-[10px] text-cream-400 font-mono tracking-wider">
          {loadingProgress}%
        </span>
      </div>
    </motion.div>
  );
};
