import React from "react";
import categorydata from "@/app/data/category-data";

const MenuTypes = ({ foodType, setFoodType }) => {
  return (
    <div className="w-full h-fit flex flex-row overflow-x-auto scrollbar-hide gap-0">
      {categorydata.map((data, index) => (
        <button
          className="w-[85px] py-1.5 font-roboto text-[14px] flex-shrink-0 rounded-full duration-200 ease-in-out"
          key={index}
          onClick={() => setFoodType(data.type)}
          style={{
            backgroundColor: foodType === data.type ? "#ff4301" : "",
            color: foodType === data.type ? "white" : "#000000",
          }}
        >
          {data.type}
        </button>
      ))}
    </div>
  );
};

export default MenuTypes;
