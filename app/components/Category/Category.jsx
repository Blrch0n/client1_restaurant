import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import categorydata from "@/app/data/category-data";
import Link from "next/link";

const Category = () => {
  return (
    <div className="w-full h-fit p-5 pb-7 flex flex-col gap-3">
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <h1 className="font-berkshire-swash font-semibold text-[18px]">
          Category
        </h1>
        <a
          href="/categoryAll"
          className="text-[#ff4101] flex flex-row items-center"
        >
          See All <MdOutlineKeyboardArrowRight />
        </a>
      </div>
      <div className="w-full h-fit flex overflow-x-auto whitespace-nowrap space-x-4">
        {categorydata.map((data, index) => (
          <Link href={`/foods/${data.type}`} key={index}>
            <div className="flex-shrink-0 relative w-[144px] h-[70px] cursor-pointer rounded-[8px] overflow-hidden">
              <img
                src={data.img}
                alt="Category"
                className="w-full h-full object-cover"
              />

              {/* Black overlay at 50% opacity */}
              <div className="absolute inset-0 bg-black/50" />

              <h3 className="absolute inset-0 font-semibold text-[20px] flex justify-center items-center font-berkshire-swash text-white">
                {data.type}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
