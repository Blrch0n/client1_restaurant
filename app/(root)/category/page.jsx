import FoodCard from "@/app/components/Cart/FoodCard";
import dataoffoods from "@/app/data/menu-data";
const Page = () => {
  return (
    <section className="w-full flex text-black flex-col px-5 pt-[80px] h-fit bg-white">
      <h1 className="text-[18px] font-berkshire-swash text-[#333]">
        Category:<span>All</span>
      </h1>
      <div className="w-full h-fit grid grid-cols-2 gap-4 py-5 pb-7">
        {dataoffoods.map((d) => (
          <FoodCard key={d.id} item={d} />
        ))}
      </div>
    </section>
  );
};

export default Page;
