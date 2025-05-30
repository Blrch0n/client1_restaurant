"use client";
import React, { use, useEffect, useState } from "react";
import getRequest from "@/utils/getRequest";

const MenuTypes = ({ foodType, setFoodType, merchantid }) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading && merchantid) {
      getRequest({
        route: `category/merchant/${merchantid}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
    setFoodType(datas[0]?._id);
  }, [isLoading]);
  if (isLoading) return <div></div>;

  const filterData = [...datas];

  return (
    <div className="w-full h-fit flex flex-row overflow-x-auto scrollbar-hide gap-0">
      {filterData.map((data, index) => (
        <button
          key={index}
          onClick={() => setFoodType(data._id)}
          className="w-fit py-[7px] px-[15px] font-roboto text-[14px] flex-shrink-0 rounded-full duration-200 ease-in-out"
          style={{
            backgroundColor: foodType === data._id ? "#ff4301" : "",
            color: foodType === data._id ? "white" : "#333",
          }}
        >
          {data.title.charAt(0).toUpperCase() +
            data.title.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
};

export default MenuTypes;
