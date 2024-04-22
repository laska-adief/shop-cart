import { ShoppingCart } from "lucide-react";

const navbar = () => {
  return (
    <div className="shadow-md h-14 py-4 px-8 flex">
      <div className="flex-2 w-full text-center">
        <h1 className="font-bold">Shop Cart</h1>
      </div>
      <div className="flex-1 w-full">
        <ShoppingCart />
      </div>
    </div>
  );
};
export default navbar;
