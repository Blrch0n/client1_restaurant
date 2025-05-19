"use client";
import FoodCard from "@/app/components/Cart/FoodCard";
import Footer from "@/app/components/Footer";
import getRequest from "@/utils/getRequest";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const page = () => {
  const { subcategory, merchantid, tableid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [subdatas, setSubdatas] = useState([]);

  useEffect(() => {
    if (merchantid) {
      Promise.all([
        getRequest({
          route: `product?user=${merchantid}`,
          setValue: setDatas,
          setIsLoading,
        }),
        getRequest({
          route: `subcategory?user=${merchantid}`,
          setValue: setSubdatas,
          setIsLoading,
        }),
      ]).finally(() => setIsLoading(false));
    }
  }, [merchantid]);

  if (!subcategory) return <p>Ачааллаж байна...</p>;

  const subcategoryTitle =
    subdatas.find((e) => e._id === subcategory)?.title || "Тодорхойгүй";

  return (
    <section className="w-full flex text-black flex-col pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-row justify-between px-5 items-center">
        <Link
          href={`/table/${tableid}/${merchantid}`}
          className="flex items-center gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
        </Link>
        <h1 className="text-lg font-roboto text-[#333]">
          Ангилал:{" "}
          <span className="text-[#ff4101] font-semibold">
            {subcategoryTitle}
          </span>
        </h1>
      </div>

      <div className="w-full min-h-screen h-fit grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4  gap-4 px-5 py-5 pb-7">
        {datas
          .filter((d) => d.subcategory === subcategory)
          .map((d) => (
            <FoodCard
              key={d._id}
              item={d}
              merchantid={merchantid}
              tableid={tableid}
            />
          ))}
      </div>
      <Footer />
    </section>
  );
};

export default page;
