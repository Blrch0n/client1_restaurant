"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Load from localStorage on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("cart");
        if (stored) {
          setItems(JSON.parse(stored));
        }
      } catch (error) {
        console.error("Failed to load cart from localStorage", error);
      }
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("cart", JSON.stringify(items));
      } catch (error) {
        console.error("Failed to save cart to localStorage", error);
      }
    }
  }, [items]);

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

  // ← NEW: bump quantity by 1 for the given id
  const increaseQuantity = (id) => {
    setItems((curr) =>
      curr.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }; // :contentReference[oaicite:0]{index=0}

  // ← NEW: subtract 1, and if it hits 0 filter it out
  const decreaseQuantity = (id) => {
    setItems((curr) =>
      curr
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  }; // :contentReference[oaicite:1]{index=1}

  const removeFromCart = (id) => {
    setItems((curr) => curr.filter((i) => i.id !== id));
  };

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalCount,
        totalPrice,
      }}
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
