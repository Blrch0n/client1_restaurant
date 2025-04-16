import React from "react";
import MenuTypes from "./MenuTypes";
import TypeOfFoods from "./TypeOfFoods";

const Menu = () => {
  return (
    <div className="w-full h-fit px-5 py">
      <h1 className="font-berkshire-swash">Menu</h1>
      <div className="w-full fit flex flex-col gap-5">
        <MenuTypes />
        <TypeOfFoods />
      </div>
    </div>
  );
};

export default Menu;
