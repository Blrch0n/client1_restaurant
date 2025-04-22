"use client";
import FoodCard from "@/app/components/Cart/FoodCard";
import dataoffoods from "@/app/data/menu-data";
import { useParams } from "next/navigation";

const Page = () => {
  const { food } = useParams();
  return (
    <section className="w-full flex text-black flex-col px-5 pt-[80px] h-fit bg-white">
      <h1 className="">Food:{food}</h1>
      <div className="w-full h-fit grid grid-cols-2 gap-4 py-5 pb-7">
        {dataoffoods
          .filter((d) => d.type === food.toLowerCase())
          .map((d) => (
            <FoodCard key={d.id} item={d} />
          ))}
      </div>
    </section>
  );
};

export default Page;
