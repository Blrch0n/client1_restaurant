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
    button_label: "Дэлгэрэнгүй",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/slider2.jpg",
    title: "Welcome to Aaem",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quos?",
    button_label: "Дэлгэрэнгүй",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/slider3.jpg",
    title: "Welcome to Aaem",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quos?",
    button_label: "Дэлгэрэнгүй",
  },
];

// Custom Next arrow
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", right: 16, zIndex: 2 }}
    onClick={onClick}
  />
);

// Custom Prev arrow
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", left: 16, zIndex: 2 }}
    onClick={onClick}
  />
);

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // === autoplay settings ===
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true,

    // === custom arrows ===
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,

    // === custom dots styling ===
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: 8, width: "100%" }}>
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
    customPaging: () => <button className="dot" />,
  };

  return (
    <div
      style={{ position: "relative" }}
      className="rounded-[8px] overflow-hidden"
    >
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full h-[230px] sm:h-[300px] lg:h-[500px] bg-white text-black"
      >
        {sliderData.map((data, index) => (
          <div
            key={index}
            onClick={() => sliderRef.current?.slickNext()}
            className="relative w-full h-[230px] sm:h-[300px] lg:h-[500px] cursor-pointer rounded-[8px] overflow-hidden"
          >
            {/* background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${data.img})` }}
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            {/* content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 h-full text-white text-center px-6">
              <h1 className=" font-berkshire-swash text-2xl font-bold">
                {data.title}
              </h1>
              <p className="text-[13px] font-roboto">{data.paragraph}</p>
              <button className="mt-2 font-roboto rounded-full bg-[#ff4301] text-[12px] px-3 py-1 text-white">
                {data.button_label}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
