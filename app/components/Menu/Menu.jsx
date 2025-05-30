"use client";
import React, { useState } from "react";
import MenuTypes from "./MenuTypes";
import TypeOfFoods from "./TypeOfFoods";
import SubMenuTypes from "./SubMenuTypes";

const Menu = ({ merchantid, tableid }) => {
  const [foodType, setFoodType] = useState("");
  const [subFoodType, setSubFoodType] = useState("");

  return (
    <div
      className="w-full h-fit px-5 flex flex-col gap-4 py-8 py bg-[#f5f5f5]"
      style={{ height: foodType ? "auto" : "100vh" }}
    >
      <h1 className="text-[18px] font-semibold font-berkshire-swash">Menu</h1>
      <div className="w-full fit flex flex-col gap-5">
        <MenuTypes
          merchantid={merchantid}
          foodType={foodType}
          setFoodType={setFoodType}
        />
        <SubMenuTypes
          merchantid={merchantid}
          foodType={foodType}
          subFoodType={subFoodType}
          setSubFoodType={setSubFoodType}
        />
        <TypeOfFoods
          foodType={foodType}
          subFoodType={subFoodType}
          merchantid={merchantid}
          tableid={tableid}
        />
      </div>
    </div>
  );
};

export default Menu;
