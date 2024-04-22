import { ShoppingCart } from "lucide-react";

const navbar = () => {
  return (
    <div className="shadow-md h-14 py-4 px-8 flex">
      <div className="flex-2 w-full text-center">
        <h1 className="font-bold">Shop Cart</h1>
      </div>
      <div className="flex-1 w-full relative">
        <ShoppingCart />
        <div className="absolute -top-[5px] -right-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center">
          <p className="text-xs text-white">1</p>
        </div>
      </div>
    </div>
  );
};
export default navbar;
