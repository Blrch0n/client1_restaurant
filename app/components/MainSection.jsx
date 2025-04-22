import React from "react";
import PopularFoods from "./PopularFoods";
import Category from "./Category/Category";
import Menu from "./Menu/Menu";

const MainSection = () => {
  return (
    <section className="pt-16 bg-white text-black">
      <PopularFoods />
      <Category />
      <Menu />
    </section>
  );
};

export default MainSection;
