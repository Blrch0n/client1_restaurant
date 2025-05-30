"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
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

  if (isLoading)
    return (
      <section className="w-full flex text-black flex-col pt-[80px] h-fit bg-white">
        <Header tableid={tableid} merchantid={merchantid} />
        <div className="w-full flex flex-row px-5 h-screen justify-center items-center">
          <svg
            className="mr-3 size-10 animate-spin"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <Footer />
      </section>
    );

  return (
    <section className="w-full flex text-black flex-col pt-[80px] h-fit bg-white">
      <Header tableid={tableid} merchantid={merchantid} />
      <div className="w-full h-fit flex flex-row px-5 justify-between items-center">
        <Link
          href={`/table/${tableid}/${merchantid}`}
          className="flex items-center gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
        </Link>
        <h1 className="text-lg font-berkshire-swash text-[#333]">
          Дэд ангилал:
          <span className="text-[#ff4101] font-semibold">Бүгд</span>
        </h1>
      </div>
      <div className="w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 px-5 gap-4 py-5 pb-7">
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
