import categorydata from "@/app/data/category-data";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full flex text-black flex-col items-center pt-[80px] h-fit bg-white">
      <h1 className="text-center">Category</h1>
      <div className="w-full h-fit grid grid-cols-2 gap-4 p-5 pb-7">
        {categorydata.map((data, index) => (
          <Link href={`/category/${data.type}`} key={index}>
            <div className="flex-shrink-0 relative w-full h-[105px] cursor-pointer rounded-[8px] overflow-hidden">
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
    </section>
  );
};

export default Page;
