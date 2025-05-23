"use client";
import Footer from "@/app/components/Footer";
import categorydata from "@/app/data/category-data";
import apiData from "@/utils/apiData";
import getRequest from "@/utils/getRequest";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const { merchantid, tableid } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getRequest({
        route: `subcategory?user=${merchantid}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [isLoading]);

  return (
    <section className="w-full flex text-black flex-col pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-row px-5 justify-between items-center">
        <Link
          href={`/table/${tableid}/${merchantid}`}
          className="flex items-center gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
        </Link>
        <h1 className="text-lg font-berkshire-swash text-[#333]">
          Ангилал:
          <span className="text-[#ff4101] font-semibold">Бүгд</span>
        </h1>
      </div>
      <div className="w-full min-h-screen h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 px-5 gap-4 py-5 pb-7">
        {datas.map((data, index) => (
          <Link
            href={`/table/${tableid}/${merchantid}/subcategory/${data._id}`}
            key={index}
          >
            <div className="flex-shrink-0 relative w-full h-[150px] cursor-pointer rounded-[8px] overflow-hidden">
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
      <Footer />
    </section>
  );
};

export default Page;
