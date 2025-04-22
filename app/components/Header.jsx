"use client";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "./Cart/CartContext";
import CartPanel from "./Cart/CartPanel";
import Link from "next/link";
const Header = () => {
  const { totalCount } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 z-10 h-fit text-white p-4 bg-[#ff4301] flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2">
        <h1 className="font-berkshire-swash text-3xl">Header</h1>
      </Link>
      <div className="relative">
        <button onClick={() => setOpen((o) => !o)} className="relative">
          <FiShoppingCart size={24} />
          {totalCount > 0 && (
            <span
              className="absolute -top-1 -right-1 bg-white text-red-600 
                             rounded-full text-xs w-5 h-5 flex items-center justify-center"
            >
              {totalCount}
            </span>
          )}
        </button>

        {/* pass open to panel */}
        <CartPanel open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default Header;
