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
            key={index}
            onClick={() => sliderRef.current?.slickNext()}
            className="relative w-full h-[230px] cursor-pointer rounded-[8px] overflow-hidden"
          >
            {/* 1. Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${data.img})` }}
            />

            {/* 2. Black overlay at 50% */}
            <div className="absolute inset-0 bg-black/50" />

            {/* 3. Slide content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
              <h1 className="text-lg font-berkshire-swash font-bold">
                {data.title}
              </h1>
              <p className="text-sm">{data.paragraph}</p>
              <button className="mt-2 rounded-full bg-[#ff4301] px-3 py-1 text-white">
                {data.button_label}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
