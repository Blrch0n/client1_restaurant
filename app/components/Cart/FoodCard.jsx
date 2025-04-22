"use client";
import { IoAddCircleOutline } from "react-icons/io5";
import { useCart } from "../Cart/CartContext";
import toast from "react-hot-toast";
import Link from "next/link";

export default function FoodCard({ item }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.img,
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="flex flex-col font-roboto bg-white rounded-[8px] overflow-hidden shadow">
      <Link href={`/food/${item.id}`}>
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </Link>

      <div className="p-2.5 flex flex-col gap-[3px]">
        <h1 className="font-semibold text-[14px] text-[#333]">{item.name}</h1>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[14px] text-[#ff4301]">
            ${item.price}
          </span>

          <button
            onClick={handleAdd}
            className="relative w-6 h-6 disabled:opacity-50"
          >
            <IoAddCircleOutline
              className="absolute inset-0 w-full h-full 
                           text-gray-600 hover:text-gray-800 
                           transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
