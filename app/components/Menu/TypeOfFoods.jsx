"use client";
import FoodCard from "../Cart/FoodCard";
import { useEffect, useState } from "react";
import getRequest from "@/utils/getRequest";

const TypeOfFoods = ({ foodType, merchantid, tableid }) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading && merchantid) {
      getRequest({
        route: `product?user=${merchantid}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [isLoading]);

  if (isLoading)
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <svg
          className="mr-3 size-10 animate-spin"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );

  const filteredFoods = datas.filter((d) => d.subcategory === foodType);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredFoods.length === 0 ? (
        <div className="col-span-full text-center py-28 text-gray-500">
          Энэ ангилалд хоол байхгүй байна.
        </div>
      ) : (
        filteredFoods.map((d) => (
          <FoodCard
            key={d._id}
            item={d}
            merchantid={merchantid}
            tableid={tableid}
          />
        ))
      )}
    </div>
  );
};

export default TypeOfFoods;
