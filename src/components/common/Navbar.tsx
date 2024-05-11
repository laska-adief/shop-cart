import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.product.length);
  return (
    <div className="shadow-md h-14 py-4 px-8 flex items-center bg-white sticky top-0 left-0 z-10">
      <div className="flex-2 w-full text-center">
        <h1 className="font-bold">Shop Cart</h1>
      </div>
      <div className="flex-1 w-full relative">
        <ShoppingCart />
        <div className="absolute -top-[8px] -right-[10px] bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
          <p className="text-xs text-white">1</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
