"use client";
import { useCart } from "@/app/components/Cart/CartContext";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import getRequest from "@/utils/getRequest";
import apiData from "@/utils/apiData";

const Page = () => {
  const { food } = useParams(); 
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (food) {
      getRequest({
        route: `product/${food}`,
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [food]);

  const handleAdd = () => {
    if (!datas) return;
    addToCart({
      id: datas._id,
      title: datas.title,
      price: datas.price,
      img: apiData.file_api_url + datas.cover,
    });
    toast.success(`${datas.title} нэмэгдлээ.`);
  };

  if (isLoading || !datas) return <p>Уншиж байна...</p>;

  return (
    <section className="w-full flex font-roboto text-black flex-col px-5 pb-5 pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-col">
        <Link
          href={`/category/${datas.subcategory}`}
          className="flex items-center mb-4 gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101]" />
          <h1 className="text-[16px] text-[#333]">Буцах</h1>
        </Link>
        <img
          src={apiData.file_api_url + datas.cover}
          alt={datas.name}
          className="w-full rounded-[8px] h-auto md:w-[20vw]"
        />
        <div className="w-full h-fit flex gap-2 flex-col">
          <span className="bg-[#ff4301] text-[13px] text-white px-2.5 rounded w-fit mt-4">
            <p>
              {datas.subcategory.charAt(0).toUpperCase() +
                datas.subcategory.slice(1).toLowerCase()}
            </p>
          </span>
          <h1 className="text-[16px] text-[#333] font-bold">
             {datas.title}
          </h1>
          <p className="text-lg text-[#ff4301] font-semibold">
            {new Intl.NumberFormat("en-US").format(datas.price)}₮
          </p>
          <p className="text-base text-[#888] text-[13px]">
            {datas.description || "Тайлбар алга байна."}
          </p>
          <button
            onClick={handleAdd}
            className="bg-[#ff4101] text-white w-fit py-[4px] px-[15px] text-[12px] rounded-full mt-4"
          >
            Сагсруу нэмэх
          </button>
        </div>
      </div>
    </section>
  );
};


export default Page;
