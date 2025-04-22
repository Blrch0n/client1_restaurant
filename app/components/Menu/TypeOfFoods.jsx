import dataoffoods from "@/app/data/menu-data";
import FoodCard from "../Cart/FoodCard";

const TypeOfFoods = ({ foodType }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dataoffoods
        .filter((d) => d.type === foodType.toLowerCase())
        .map((d) => (
          <FoodCard key={d.id} item={d} />
        ))}
    </div>
  );
};

export default TypeOfFoods;
