import React from "react";
import PopularFoods from "./PopularFoods";
import Category from "./Category";
import Menu from "./Menu/Menu";

const MainSection = () => {
  return (
    <section className="pt-16">
      <PopularFoods />
      <Category />
      <Menu />
    </section>
  );
};

export default MainSection;
