"use client";
import { useCart } from "@/app/components/Cart/CartContext";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import getRequest from "@/utils/getRequest";
import apiData from "@/utils/apiData";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const page = () => {
  const { tableid, merchantid, id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (merchantid && id) {
      getRequest({
        route: `product/${id}?user=${merchantid}`,
        setValue: setItem,
        setIsLoading,
      });
    }
  }, [merchantid, id]);

  console.log("laoding", id);

  if (isLoading)
    return (
      <section className="w-full h-screen items-center justify-center flex font-roboto text-black flex-col px-5 pb-5 pt-[80px] bg-white">
        <svg
          className="mr-3 size-10 animate-spin"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </section>
    );
  if (!item) return <p>Бүтээгдэхүүн олдсонгүй.</p>;

  const handleAdd = () => {
    addToCart({
      id: item._id,
      title: item.title,
      price: item.price,
      img: apiData.file_api_url + item.cover,
    });
    toast.success("Бүтээгдэхүүн сагсанд нэмэгдлээ!");
  };

  return (
    <>
      <Header tableid={tableid} merchantid={merchantid} />
      <section className="w-full h-fit min-h-[80vh] flex font-roboto text-black flex-col px-5 pb-5 pt-[80px] bg-white">
        <Link
          href={`/table/${tableid}/${merchantid}`}
          className="flex items-center mb-4 gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101]" />
          <span className="text-[16px] text-[#333]">Буцах</span>
        </Link>

        <img
          src={apiData.file_api_url + item.cover}
          alt={item.title}
          className="w-full rounded-[8px] h-auto md:w-[20vw]"
        />
        <div className="mt-4 space-y-2">
          <h1 className="text-xl font-bold text-[#333]">{item.title}</h1>
          <p className="text-lg text-[#ff4301] font-semibold">
            {new Intl.NumberFormat("en-US").format(item.price)}₮
          </p>
          <p className="text-sm text-[#888]">
            {item.description || "Тайлбар алга."}
          </p>
          <button
            onClick={handleAdd}
            className="mt-4 bg-[#ff4101] text-white py-2 px-4 rounded-full"
          >
            Сагсруу нэмэх
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
