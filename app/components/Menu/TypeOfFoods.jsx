const dataoffoods = [
  {
    img: "https://astylers.com/mobile/aaem/images/food1.jpg",
    name: "Meat Mix Foliage",
    price: 32,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/food2.jpg",
    name: "Delicous Fungus",
    price: 15,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/food3.jpg",
    name: "Meat Sauce",
    price: 20,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/food4.jpg",
    name: "Meat Salad",
    price: 20,
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink1.jpg",
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink2.jpg",
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink3.jpg",
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/drink4.jpg",
    name: "Fresh Juice",
    price: 20,
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack1.jpg",
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack2.jpg",
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack3.jpg",
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/snack4.jpg",
    name: "Fried Pumpkin",
    price: 20,
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert1.jpg",
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert2.jpg",
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert3.jpg",
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/dessert4.jpg",
    name: "Pandan Bread",
    price: 20,
    type: "dessert",
  },
];
const TypeOfFoods = ({ foodType }) => {
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-6">
      {dataoffoods
        .filter((data) => data.type === foodType.toLowerCase())
        .map((data, index) => (
          <div
            className="w-full h-fit flex flex-col rounded-[8px] overflow-hidden"
            key={index}
          >
            <img src={data.img} alt="image" />
            <div className="w-full h-fit flex flex-col gap-2">
              <h1>Meat Mix Foliage</h1>
              <h1>${data.price}</h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TypeOfFoods;
