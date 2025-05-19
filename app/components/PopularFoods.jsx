import React from "react";
import SimpleSlider from "./Slider";

const PopularFoods = ({merchantid}) => {
  return (
    <div className="w-full h-fit overflow-hidden p-5">
      <SimpleSlider merchantid={merchantid}/>
    </div>
  );
};

export default PopularFoods;
