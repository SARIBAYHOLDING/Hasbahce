import React from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl bg-olive-900 text-cream-50 font-bold text-xs shadow-2xl border border-olive-700 flex items-center gap-3 backdrop-blur-md"
        >
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
