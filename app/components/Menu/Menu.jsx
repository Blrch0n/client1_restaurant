"use client";
import React, { useState } from "react";
import MenuTypes from "./MenuTypes";
import TypeOfFoods from "./TypeOfFoods";

const Menu = () => {
  const [foodType, setFoodType] = useState("Food");
  return (
    <div className="w-full h-fit px-5 flex flex-col gap-4 py-8 py bg-[#f5f5f5]">
      <h1 className="text-[18px] font-semibold font-berkshire-swash">Menu</h1>
      <div className="w-full fit flex flex-col gap-5">
        <MenuTypes foodType={foodType} setFoodType={setFoodType} />
        <TypeOfFoods foodType={foodType} />
      </div>
    </div>
  );
};

export default Menu;
