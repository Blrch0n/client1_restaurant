const Category = () => {
  return (
    <div className="w-full h-fit p-5">
      <h1 className="font-berkshire-swash">Category</h1>
      <div className="w-full h-fit flex overflow-x-auto whitespace-nowrap space-x-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="flex-shrink-0 flex w-[300px] items-center h-48 bg-gray-100 cursor-pointer"
          >
            <h3 className="text-4xl">{num}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
