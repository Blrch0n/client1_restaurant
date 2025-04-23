import React from "react";
import categorydata from "@/app/data/category-data";

const MenuTypes = ({ foodType, setFoodType }) => {
  return (
    <div className="w-full h-fit flex flex-row overflow-x-auto scrollbar-hide gap-0">
      {categorydata.map((data, index) => (
        <button
          className="w-fit py-[7px] px-[15px] font-roboto text-[14px] flex-shrink-0 rounded-full duration-200 ease-in-out"
          key={index}
          onClick={() => setFoodType(data.type)}
          style={{
            backgroundColor: foodType === data.type ? "#ff4301" : "",
            color: foodType === data.type ? "white" : "#333",
          }}
        >
          {data.mongolian_name.charAt(0).toUpperCase() +
            data.mongolian_name.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
};

export default MenuTypes;
