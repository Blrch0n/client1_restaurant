"use client";
import { useCart } from "@/app/components/Cart/CartContext";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
const dataoffoods = [
  {
    img: "https://astylers.com/mobile/aaem/images/food1.jpg",
    id: 1,
    name: "Meat Mix Foliage",
    price: 32,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/food2.jpg",
    id: 2,
    name: "Delicous Fungus",
    price: 15,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/food3.jpg",
    id: 3,
    name: "Meat Sauce",
    price: 20,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/food4.jpg",
    id: 4,
    name: "Meat Salad",
    price: 20,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink1.jpg",
    id: 5,
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink2.jpg",
    id: 6,
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink3.jpg",
    id: 7,
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink4.jpg",
    id: 8,
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack1.jpg",
    id: 9,
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack2.jpg",
    id: 10,
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack3.jpg",
    id: 11,
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack4.jpg",
    id: 12,
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert1.jpg",
    id: 13,
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert2.jpg",
    id: 14,
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert3.jpg",
    id: 15,
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert4.jpg",
    id: 16,
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
];

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
    <section className="w-full flex text-black flex-col px-5 pb-5 pt-[80px] h-fit bg-white">
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
