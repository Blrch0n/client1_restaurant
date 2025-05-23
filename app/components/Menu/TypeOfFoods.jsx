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

  if (isLoading) return <p>Ачааллаж байна...</p>;

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
