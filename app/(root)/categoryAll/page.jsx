"use client";
import categorydata from "@/app/data/category-data";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = () => {
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
        {categorydata.map((data, index) => (
          <Link href={`/category/${data.type}`} key={index}>
            <div className="flex-shrink-0 relative w-full h-[105px] cursor-pointer rounded-[8px] overflow-hidden">
              <img
                src={data.img}
                alt="Category"
                className="w-full h-full object-cover"
              />

              {/* Black overlay at 50% opacity */}
              <div className="absolute inset-0 bg-black/50" />

              <h3 className="absolute inset-0 font-semibold text-[20px] flex justify-center items-center font-berkshire-swash text-white">
                {data.type.charAt(0).toUpperCase() +
                  data.type.slice(1).toLowerCase()}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
