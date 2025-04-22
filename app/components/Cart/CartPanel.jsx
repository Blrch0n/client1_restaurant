// components/CartPanel.jsx
import React from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "../Cart/CartContext";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

export default function CartPanel({ open, onClose }) {
  const {
    items,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

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
        className={`fixed inset-y-0 right-0 text-black w-full lg:w-[80vw] bg-white h-full p-4 overflow-y-auto 
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

        <div className="flex flex-col gap-4 px-[15px] border border-[#888] rounded-[5px] py-2.5">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex flex-col gap-5 items-start mb-3">
                <div className="w-full flex items-start justify-between">
                  <img
                    src={i.img}
                    alt={i.title}
                    className="w-20 h-12 rounded mr-2 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{i.title}</p>
                  </div>
                  <button
                    className="text-red-500"
                    onClick={() => {
                      removeFromCart(i.id);
                      toast.success(`${i.title} removed from cart`);
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="w-fit flex items-center justify-between">
                  <span className="w-20 mr-2">Price</span> ${i.price}
                </div>
                <div className="w-fit flex items-center justify-between">
                  <span className="w-20 mr-2">Quantity</span>
                  <div className="flex items-center w-fit gap-4">
                    <button
                      onClick={() => {
                        decreaseQuantity(i.id);
                        toast.success(`${i.title} quantity decreased`);
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#ff4301] text-white"
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => {
                        increaseQuantity(i.id);
                        toast.success(`${i.title} quantity increased`);
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#ff4301] text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex w-full h-fit flex-col gap-4 mt-2.5 px-[15px] border border-[#888] rounded-[5px] py-2.5">
          {items.length > 0 && (
            <div className="flex w-full flex-col items-start gap-2.5 pt-2">
              {items.map((i) => (
                <div key={i.id} className="flex w-full justify-between mb-2">
                  <span>{i.title}</span>
                  <span>${i.price}</span>
                </div>
              ))}
              <div className="flex w-full font-bold justify-between mb-2">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <button
                className="bg-[#ff4301] text-white p-2 rounded-full"
                onClick={() => {
                  onClose();
                  toast.success("Proceeding to checkout");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
