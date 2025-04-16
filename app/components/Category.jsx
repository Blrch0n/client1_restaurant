import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const categorydata = [
  {
    img: "https://astylers.com/mobile/aaem/images/category1.jpg",
    type: "food",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/category3.jpg",
    type: "drink",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/category2.jpg",
    type: "snack",
  },
  {
    img: "https://astylers.com/mobile/aaem/images/category4.jpg",
    type: "dessert",
  },
];

const Category = () => {
  return (
    <div className="w-full h-fit p-5 pb-7 flex flex-col gap-3">
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <h1 className="font-berkshire-swash">Category</h1>
        <a href="/" className="text-[#ff4101] flex flex-row items-center">
          See All <MdOutlineKeyboardArrowRight />
        </a>
      </div>
      <div className="w-full h-fit flex overflow-x-auto whitespace-nowrap space-x-4">
        {categorydata.map((data, index) => (
          <div
            className="flex-shrink-0 relative flex w-[144px] items-center h-[70px]  cursor-pointer"
            key={index}
          >
            <img
              src={data.img}
              alt="Category"
              className="w-full h-full absolute inset-0 bg-center bg-cover object-cover rounded-[8px]"
            />
            <h3 className="text-4xl absolute w-full h-full flex justify-center items-center font-berkshire-swash text-white">
              {data.type}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
