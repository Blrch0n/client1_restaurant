"use client";
import React, { use, useEffect, useState } from "react";
import getRequest from "@/utils/getRequest";

const SubMenuTypes = ({
  subFoodType,
  foodType,
  setSubFoodType,
  merchantid,
}) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterData = datas.filter((data) => data.category === foodType);

  // Fetch data only once when component mounts or merchantid changes
  useEffect(() => {
    if (merchantid) {
      setIsLoading(true);
      getRequest({
        route: `subcategory/merchant/${merchantid}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [merchantid]);

  useEffect(() => {
    if (filterData.length > 0) {
      const isCurrentSubTypeValid = filterData.some(
        (item) => item._id === subFoodType
      );

      if (!isCurrentSubTypeValid) {
        setSubFoodType(filterData[0]._id);
      }
    }
  }, [filterData, foodType, subFoodType, setSubFoodType]);

  if (isLoading) return <div></div>;

  return (
    <div className="w-full h-fit flex flex-row overflow-x-auto scrollbar-hide gap-0">
      {filterData.map((data, index) => (
        <button
          key={index}
          onClick={() => setSubFoodType(data._id)}
          className="w-fit py-[7px] px-[15px] font-roboto text-[14px] flex-shrink-0 rounded-full duration-200 ease-in-out"
          style={{
            backgroundColor: subFoodType === data._id ? "#ff4301" : "",
            color: subFoodType === data._id ? "white" : "#333",
          }}
        >
          {data.title.charAt(0).toUpperCase() +
            data.title.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
};

export default SubMenuTypes;
// This code defines a React component that fetches and displays menu types for a merchant.
