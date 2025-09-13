// src/components/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    product,
    selectedColorIndex = 0,
    selectedVariantIndex = 0
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColorIndex === selectedColorIndex &&
          item.selectedVariantIndex === selectedVariantIndex
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [
        ...prev,
        { product, selectedColorIndex, selectedVariantIndex, quantity: 1 },
      ];
    });
  };

  const removeFromCart = (
    productId,
    selectedColorIndex = 0,
    selectedVariantIndex = 0
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColorIndex === selectedColorIndex &&
            item.selectedVariantIndex === selectedVariantIndex
          )
      )
    );
  };

  const increaseQuantity = (
    productId,
    selectedColorIndex = 0,
    selectedVariantIndex = 0
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        item.selectedColorIndex === selectedColorIndex &&
        item.selectedVariantIndex === selectedVariantIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (
    productId,
    selectedColorIndex = 0,
    selectedVariantIndex = 0
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId &&
          item.selectedColorIndex === selectedColorIndex &&
          item.selectedVariantIndex === selectedVariantIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
