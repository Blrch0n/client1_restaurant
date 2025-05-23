import React from "react";
import SimpleSlider from "./Slider";

const PopularFoods = ({ merchantid, tableid }) => {
  return (
    <div className="w-full h-fit overflow-hidden p-5">
      <SimpleSlider merchantid={merchantid} tableid={tableid} />
    </div>
  );
};

export default PopularFoods;
