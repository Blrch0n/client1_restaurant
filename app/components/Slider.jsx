"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiData from "@/utils/apiData";
import axios from "axios";

const mockSliderData = [
  {
    title: "Special Offer",
    description: "Алдаж болохгүй! Хямдралтай бүтээгдэхүүн",
    image: "/foodimage.jpg",
    button_label: "Яг одоо захиал",
  },
  {
    title: "New Collection",
    description: "Алдаж болохгүй! Хямдралтай бүтээгдэхүүн",
    image: "/foodimage.jpg",
    button_label: "Яг одоо захиал",
  },
  {
    title: "Limited Edition",
    description: "Алдаж болохгүй! Хямдралтай бүтээгдэхүүн",
    image: "/foodimage.jpg",
    button_label: "Яг одоо захиал",
  },
];

export default function SimpleSlider({ merchantid, tableid }) {
  const sliderRef = useRef(null);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      // For development/testing
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${apiData.api_url}slider/merchant/${merchantid}`
          );
          setDatas(response.data.data);
        } catch (error) {
          console.error("Error fetching slider data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [isLoading]);

  if (isLoading)
    return (
      <div className="w-full h-[230px] sm:h-[300px] lg:h-[500px] bg-white flex items-center justify-center">
        <svg
          className="mr-3 size-10 animate-spin"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

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
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => sliderRef.current?.slickNext()}
              className="relative w-full h-[230px] sm:h-[300px] lg:h-[500px] cursor-pointer rounded-[8px] overflow-hidden"
            >
              <img
                className="absolute inset-0 bg-cover bg-center"
                src={data.image && apiData.file_api_url + data.image}
              />
              {/* <img
                src={data.image && apiData.file_api_url + data.image}
                alt=""
              /> */}

              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 h-full text-white text-center px-6">
                <h1 className=" font-berkshire-swash text-2xl font-bold">
                  {data.title}
                </h1>
                <p className="text-[13px] font-roboto">{data.description}</p>
                <button className="mt-2 font-roboto rounded-full bg-[#ff4301] text-[12px] px-3 py-1 text-white">
                  {/* {data.button_label} */} Яг одоо захиал
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
