import React from "react";
const dataoftypes = ["Food", "Drink", "Snack", "Dessert"];

const MenuTypes = () => {
  return (
    <div className="w-full h-fit flex flex-row overflow-x-auto scrollbar-hide gap-0">
      {dataoftypes.map((data, index) => (
        <button className="w-[85px] flex-shrink-0" key={index}>
          {data}
        </button>
      ))}
    </div>
  );
};

export default MenuTypes;
