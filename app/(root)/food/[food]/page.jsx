"use client";
import { useCart } from "@/app/components/Cart/CartContext";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import dataoffoods from "@/app/data/menu-data";

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
      price: firstMatch.price,
      img: firstMatch.img,
    });

    toast.success(`${firstMatch.name} added to cart`);
  };
  return (
    <section className="w-full flex font-roboto text-black flex-col px-5 pb-5 pt-[80px] h-fit bg-white">
      <div className="w-full h-fit flex flex-col">
        <img
          src={firstMatch.img}
          alt="img"
          className="w-full rounded-[8px] h-auto"
        />
        <div className="w-full h-fit flex gap-2 flex-col">
          <span className="bg-[#ff4301] text-white px-2 rounded w-fit mt-4">
            <p>{firstMatch.type}</p>
          </span>
          <h1 className="text-2xl font-bold">{firstMatch.name}</h1>
          <p className="text-lg font-semibold">Price: ${firstMatch.price}</p>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            ducimus, dolor aperiam impedit, sapiente natus magni eaque, optio
            quae aliquid saepe.
          </p>
          <button
            onClick={handleAdd}
            className="bg-[#ff4101] text-white w-fit py-1 px-4 rounded-full mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
