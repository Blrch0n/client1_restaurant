import React from "react";
import PopularFoods from "./PopularFoods";
import Category from "./Category";
import Menu from "./Menu/Menu";
import Review from "./Review";

const MainSection = () => {
  return (
    <section>
      <PopularFoods />
      <Category />
      <Menu />
      <Review />
    </section>
  );
};

export default MainSection;
