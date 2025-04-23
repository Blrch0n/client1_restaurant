"use client";
import { useCart } from "@/app/components/Cart/CartContext";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import dataoffoods from "@/app/data/menu-data";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = () => {
  const { food } = useParams();
  const id = Number(food);
  const firstMatch = dataoffoods.find((d) => d.id === id);
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();

    addToCart({
      id: firstMatch.id,
      title: firstMatch.name,
      mongolian_name: firstMatch.mongolian_name,
      price: firstMatch.price,
      img: firstMatch.img,
    });

    toast.success(`${firstMatch.mongolian_name} нэмэгдлээ.`);
  };
  return (
    <section className="w-full flex font-roboto text-black flex-col px-5 pb-5 pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-col">
        <Link
          href={`/category/${firstMatch.type}`}
          className="flex items-center mb-4 gap-2"
        >
          <IoMdArrowRoundBack className="text-[20px] text-[#ff4101] cursor-pointer" />
          <h1 className="text-[16px] text-[#333]">Буцах</h1>
        </Link>
        <img
          src={firstMatch.img}
          alt="img"
          className="w-full rounded-[8px] h-auto"
        />
        <div className="w-full h-fit flex gap-2 flex-col">
          <span className="bg-[#ff4301] text-[13px] text-white px-2.5 rounded w-fit mt-4">
            <p>
              {firstMatch.type.charAt(0).toUpperCase() +
                firstMatch.type.slice(1).toLowerCase()}
            </p>
          </span>
          <h1 className="text-[16px] text-[#333] font-bold">
            {firstMatch.mongolian_name}
          </h1>
          <p className="text-lg text-[#ff4301] font-semibold">
            {new Intl.NumberFormat("en-US").format(firstMatch.price)}₮
          </p>

          <p className="text-base text-[#888] text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            ducimus, dolor aperiam impedit, sapiente natus magni eaque, optio
            quae aliquid saepe.
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
