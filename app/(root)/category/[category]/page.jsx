"use client";
import FoodCard from "@/app/components/Cart/FoodCard";
import dataoffoods from "@/app/data/menu-data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = () => {
  const { category } = useParams();
  return (
    <section className="w-full flex text-black flex-col px-5 pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
        </Link>
        <h1 className="text-lg font-roboto text-[#333]">
          Ангилал:
          <span className="text-[#ff4101] font-semibold">
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </span>
        </h1>
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-4 py-5 pb-7">
        {dataoffoods
          .filter((d) => d.type === category.toLowerCase())
          .map((d) => (
            <FoodCard key={d.id} item={d} />
          ))}
      </div>
    </section>
  );
};

export default Page;
