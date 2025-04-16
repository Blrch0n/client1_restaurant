"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    img: "https://astylers.com/mobile/aaem/images/slider1.jpg",
    title: "Welcome to Aaem",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quos?",
    button_label: "Read More",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/slider2.jpg",
    title: "Welcome to Aaem",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quos?",
    button_label: "Read More",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/slider3.jpg",
    title: "Welcome to Aaem",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quos?",
    button_label: "Read More",
  },
];

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "8px", width: "100%" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
            margin: 0,
          }}
          className="custom-dots"
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => <button className="dot"></button>,
  };

  return (
    <div
      style={{ position: "relative" }}
      className="rounded-[8px] overflow-hidden"
    >
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full h-[230px] bg-white text-black"
      >
        {sliderData.map((data, index) => (
          <div
            className="relative w-full h-[230px] cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}
            key={index}
          >
            <div
              className="absolute inset-0 z-10 bg-[#000000ea]"
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative px-6 z-20 gap-2.5 flex flex-col items-center justify-center h-full text-white text-center">
              <h1 className="text-lg font-berkshire-swash font-bold">
                {data.title}
              </h1>
              <p className="text-sm">{data.paragraph}</p>
              <button className="bg-[#ff4301] text-white px-3 py-1 rounded-full mt-2">
                {data.button_label}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
