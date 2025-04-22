// components/CartPanel.jsx
import React from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "../Cart/CartContext";

export default function CartPanel({ open, onClose }) {
  const { items, totalPrice, removeFromCart } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 
                  ${
                    open
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        className={`relative ml-auto text-black w-80 bg-white h-full p-4 overflow-y-auto 
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((i) => (
            <div key={i.id} className="flex items-center mb-3">
              <img
                src={i.img}
                alt={i.title}
                className="w-12 h-12 rounded mr-2 object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{i.title}</p>
                <p>
                  ${i.price} × {i.quantity}
                </p>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(i.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {items.length > 0 && (
          <div className="mt-4 border-t pt-2">
            <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
