"use client";
import { IoAddCircleOutline } from "react-icons/io5";
import { useCart } from "../Cart/CartContext";
import toast from "react-hot-toast";
import Link from "next/link";
import apiData from "@/utils/apiData";

export default function FoodCard({ item, merchantid, tableid }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: item._id,
      title: item.title,
      price: item.price,
      img: apiData.file_api_url + item.cover,
    });
    toast.success("Бүтээгдэхүүн сагсанд нэмэгдлээ!");
  };

  return (
    <div className="flex flex-col h-fit font-roboto bg-white rounded-[8px] overflow-hidden shadow">
      <Link href={`/table/${tableid}/${merchantid}/food/${item._id}`}>
        <img
          src={item.cover && apiData.file_api_url + item.cover}
          alt={item.title}
          className="w-full h-32 object-cover"
        />
      </Link>

      <div className="p-2.5 flex flex-col w-full h-full justify-between gap-[3px]">
        <h1 className="font-semibold text-[14px] text-[#333]">{item.title}</h1>
        <div className="flex w-full h-full justify-between items-end">
          <span className="font-semibold text-[14px] text-[#ff4301]">
            {new Intl.NumberFormat("en-US").format(item.price)}₮
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
