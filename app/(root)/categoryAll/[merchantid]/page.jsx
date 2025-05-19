"use client";
import categorydata from "@/app/data/category-data";
import apiData from "@/utils/apiData";
import getRequest from "@/utils/getRequest";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = ({merchantid}) => {
  const [datas , setDatas] =useState([])
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    if(isLoading){
      getRequest({route: `subcategory?user=${merchantid}` , setValue: setDatas , setIsLoading})
    }
  } ,[isLoading])

  return (
    <section className="w-full flex text-black flex-col px-5 pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
        </Link>
        <h1 className="text-lg font-berkshire-swash text-[#333]">
          Category:
          <span className="text-[#ff4101] font-semibold">All</span>
        </h1>
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-4 py-5 pb-7">
        {datas.map((data, index) => (
          <Link href={`/category/${data._id}`} key={index}>
            <div className="flex-shrink-0 relative w-full h-[105px] cursor-pointer rounded-[8px] overflow-hidden">
              <img
                src={data.file && apiData.file_api_url + data.file}
                alt="Category"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <h3 className="absolute inset-0 font-semibold text-[20px] flex justify-center items-center font-berkshire-swash text-white">
                {data.title.charAt(0).toUpperCase() +
                  data.title.slice(1).toLowerCase()}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
