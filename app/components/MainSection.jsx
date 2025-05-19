import React from "react";
import PopularFoods from "./PopularFoods";
import Category from "./Category/Category";
import Menu from "./Menu/Menu";

const MainSection = ({ tableid, merchantid }) => {
  return (
    <section className="pt-16 bg-white text-black">
      {/* <PopularFoods merchantid={merchantid} /> */}
      <Category merchantid={merchantid} tableid={tableid} />
      <Menu merchantid={merchantid} tableid={tableid} />
    </section>
  );
};

export default MainSection;
