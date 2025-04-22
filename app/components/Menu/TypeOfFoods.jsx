import FoodCard from "../Cart/FoodCard";

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
const TypeOfFoods = ({ foodType }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {dataoffoods
        .filter((d) => d.type === foodType.toLowerCase())
        .map((d) => (
          <FoodCard key={d.id} item={d} />
        ))}
    </div>
  );
};

export default TypeOfFoods;
