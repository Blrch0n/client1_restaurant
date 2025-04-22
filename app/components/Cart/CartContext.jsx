"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (newItem) => {
    setItems((curr) => {
      const idx = curr.findIndex((i) => i.id === newItem.id);
      if (idx > -1) {
        const updated = [...curr];
        updated[idx].quantity += 1;
        return updated;
      } else {
        return [...curr, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setItems((curr) => curr.filter((i) => i.id !== id));
  };

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
