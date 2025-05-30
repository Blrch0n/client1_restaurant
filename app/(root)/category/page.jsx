"use client";
import FoodCard from "@/app/components/Cart/FoodCard";
import dataoffoods from "@/app/data/menu-data";
import getRequest from "@/utils/getRequest";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const Page = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { merchantid, tableid } = useParams();

  useEffect(() => {
    if (isLoading) {
      getRequest({
        route: `subcategory?user=${merchantid}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [isLoading]);

  return (
    <section className="w-full flex text-black flex-col px-5 pt-[80px] h-fit bg-white">
      <h1 className="text-[18px] font-berkshire-swash text-[#333]">
        Дэд ангилал:<span>Бүгд</span>
      </h1>
      <div className="w-full h-fit grid grid-cols-2 gap-4 py-5 pb-7">
        {datas.map((d) => (
          <FoodCard key={d.id} item={d} />
        ))}
      </div>
    </section>
  );
};

export default Page;
