import React from "react";
const dataoftypes = ["Food", "Drink", "Snack", "Dessert"];

const MenuTypes = ({ foodType, setFoodType }) => {
  return (
    <div className="w-full h-fit flex flex-row overflow-x-auto scrollbar-hide gap-0">
      {dataoftypes.map((data, index) => (
        <button
          className="w-[85px] flex-shrink-0 rounded-full duration-200 ease-in-out"
          key={index}
          onClick={() => setFoodType(data)}
          style={{
            backgroundColor: foodType === data ? "#ff4301" : "white",
            color: foodType === data ? "white" : "#000000",
          }}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default MenuTypes;
