import React, { useState } from "react";
import { IoAddCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { useCart } from "../Cart/CartContext";
import toast from "react-hot-toast";

export default function FoodCard({ item }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e) => {
    // 1) prevent parent onClick from also firing
    e.stopPropagation();
    console.log("clicked");

    // 2) block if we're already in our 200ms “justAdded” window
    if (justAdded) return;

    // 3) do the add
    addToCart({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.img,
    });

    toast.success(`${item.name} added to cart`);

    // 4) show the checkmark briefly
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 200);
  };

  return (
    <div className="flex flex-col bg-white rounded-[8px] overflow-hidden shadow">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-32 object-cover"
      />

      <div className="p-2.5 flex flex-col gap-[3px]">
        <h1 className="font-semibold text-[14px] text-[#333]">{item.name}</h1>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[14px] text-[#ff4301]">
            ${item.price}
          </span>

          {/* only this button handles clicks now */}
          <button
            onClick={handleAdd}
            disabled={justAdded}
            className="relative w-6 h-6 disabled:opacity-50"
          >
            {justAdded ? (
              <IoCheckmarkCircleOutline
                className="absolute inset-0 w-full h-full  
                           text-green-500 transition-transform 
                           duration-200 transform scale-125"
              />
            ) : (
              <IoAddCircleOutline
                className="absolute inset-0 w-full h-full 
                           text-gray-600 hover:text-gray-800 
                           transition-transform duration-200"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
