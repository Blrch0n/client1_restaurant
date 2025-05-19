"use client";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import getRequest from "@/utils/getRequest";
import apiData from "@/utils/apiData";

const Category = ({ merchantid, tableid }) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getRequest({
        route: `subcategory?user=${merchantid}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [isLoading, merchantid]);

  return (
    <div className="w-full h-fit p-5 pb-7 flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-berkshire-swash text-[#333] font-semibold text-[18px]">
          Ангилал
        </h1>
        <Link
          href={`/table/${tableid}/${merchantid}/subcategory`}
          className="text-[#ff4101] text-[14px] flex items-center font-roboto"
        >
          Бүгдийг үзэх <MdOutlineKeyboardArrowRight />
        </Link>
      </div>

      <div className="w-full flex overflow-x-auto whitespace-nowrap space-x-4">
        {datas.map((data, index) => (
          <Link href={`/table/${tableid}/${merchantid}/subcategory/${data._id}`} key={index}>
            <div className="flex-shrink-0 relative w-[144px] h-[70px] lg:h-[105px] lg:w-[210px] cursor-pointer rounded-[8px] overflow-hidden">
              {data.file && (
                <img
                  src={apiData.file_api_url + data.file}
                  alt="Category"
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/50" />
              <h3 className="absolute inset-0 font-semibold text-[20px] flex justify-center items-center font-berkshire-swash text-white">
                {data.title.charAt(0).toUpperCase() +
                  data.title.slice(1).toLowerCase()}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
