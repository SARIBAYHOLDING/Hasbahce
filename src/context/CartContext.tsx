import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, WeightOption, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, selectedWeight: WeightOption, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  totalPrice: number;
  totalWeightGrams: number;
  totalItemsCount: number;
  freeShippingThreshold: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (p: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('hasbahce_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('hasbahce_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const freeShippingThreshold = 750;

  useEffect(() => {
    localStorage.setItem('hasbahce_cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('hasbahce_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const addToCart = (product: Product, selectedWeight: WeightOption, quantity: number = 1) => {
    const cartItemId = `${product.id}-${selectedWeight.label}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { cartItemId, product, selectedWeight, quantity }];
      }
    });

    showToast(`🛒 "${product.name} (${selectedWeight.label})" sepete eklendi!`);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Favorilerden çıkarıldı');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('❤️ Favorilere eklendi!');
        return [...prev, productId];
      }
    });
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.selectedWeight.price * item.quantity,
    0
  );

  const totalWeightGrams = items.reduce(
    (sum, item) => sum + item.selectedWeight.weightInGrams * item.quantity,
    0
  );

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        favorites,
        toggleFavorite,
        totalPrice,
        totalWeightGrams,
        totalItemsCount,
        freeShippingThreshold,
        toastMessage,
        showToast,
        selectedProductForModal,
        setSelectedProductForModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
