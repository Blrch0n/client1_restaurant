"use client";
import FoodCard from "@/app/components/Cart/FoodCard";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
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

  // if (!subcategory)
  //   return (
  //     <section className="w-full flex text-black flex-col pt-[80px] h-fit bg-white">
  //       <div className="w-full h-fit flex flex-row justify-between px-5 items-center">
  //         hello
  //       </div>
  //       <Footer />
  //     </section>
  //   );

  // if (isLoading) return <p>Ачааллаж байна...</p>;

  const subcategoryTitle =
    subdatas.find((e) => e._id === subcategory)?.title || "Тодорхойгүй";

  if (subcategoryTitle === "Тодорхойгүй")
    return (
      <section className="w-full flex text-black flex-col pt-[80px] h-screen bg-white">
        <Header tableid={tableid} merchantid={merchantid} />
        <div className="w-full h-screen flex flex-row justify-center px-5 items-center">
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

  const filteredFoods = datas.filter((d) => d.subcategory === subcategory);

  return (
    <section className="w-full flex text-black flex-col pt-[80px] h-fit bg-white">
      <Header tableid={tableid} merchantid={merchantid} />
      <div className="w-full h-fit flex flex-row justify-between px-5 items-center">
        <Link
          href={`/table/${tableid}/${merchantid}`}
          className="flex items-center gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
        </Link>
        <h1 className="text-lg font-roboto text-[#333]">
          Дэд ангилал:
          <span className="text-[#ff4101] font-semibold">
            {subcategoryTitle}
          </span>
        </h1>
      </div>

      <div className="w-full min-h-[80vh] h-fit grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4  gap-4 px-5 py-5 pb-7">
        {filteredFoods.length === 0 ? (
          <div className="col-span-full flex w-full h-full items-center justify-center text-center py-8 text-gray-500">
            Энэ дэд ангилалд хоол байхгүй байна.
          </div>
        ) : (
          filteredFoods.map((d) => (
            <FoodCard
              key={d._id}
              item={d}
              merchantid={merchantid}
              tableid={tableid}
            />
          ))
        )}
        {/* Uncomment this if you want to show all items */}

        {/* {datas
          .filter((d) => d.subcategory === subcategory)
          .map((d) => (
            <FoodCard
              key={d._id}
              item={d}
              merchantid={merchantid}
              tableid={tableid}
            />
          ))} */}
      </div>
      <Footer />
    </section>
  );
};

export default page;
