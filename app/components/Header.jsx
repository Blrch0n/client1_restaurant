import { FiMenu } from "react-icons/fi";
const Header = () => {
  return (
    <div className="w-full fixed top-0 z-10 h-fit text-white p-4 bg-[#ff4301] flex justify-between items-center">
      <h1 className="font-berkshire-swash text-3xl">Header</h1>
      <div className="w-fit h-fit flex items-center justify-center">
        <FiMenu size={25} />
      </div>
    </div>
  );
};

export default Header;
