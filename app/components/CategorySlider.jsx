"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
            margin: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full h-48 bg-white text-black"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            onClick={() => sliderRef.current?.slickNext()}
            className="flex justify-center items-center h-48 bg-gray-100 cursor-pointer"
          >
            <h3 className="text-4xl">{num}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
