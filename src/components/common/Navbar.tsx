import { RootState } from "@/store/store";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Product } from "@/types";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.product);
  return (
    <div className="shadow-md h-14 py-4 px-8 flex items-center bg-white sticky top-0 left-0 z-10">
      <div className="flex-2 w-full text-center">
        <h1 className="font-bold">Shop Cart</h1>
      </div>
      <Popover>
        <PopoverTrigger>
          <div className="flex-1 w-full relative">
            <ShoppingCart />
            {cart.length > 0 && (
              <div className="absolute -top-[8px] -right-[10px] bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
                <p className="text-xs text-white">{cart.length}</p>
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80 max-h-[400px] overflow-y-auto bg-slate-100 mt-6 mr-3 p-4 rounded-sm shadow-2xl">
          <div className="flex flex-col gap-4">
            {cart.length > 0 &&
              cart.map((product: Product) => (
                <div key={product.id} className="flex gap-4 bg-white p-2 rounded-md shadow-sm">
                  <div className="h-12 w-12">
                    <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover rounded-md" />
                  </div>
                  <div className="w-full flex gap-2 items-center justify-between">
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p>${product.price}</p>
                      <p>Quantity : {product.quantity}</p>
                    </div>
                    <div className="w-6 h-6 cursor-pointer text-red-500">
                      <Trash2 />
                    </div>
                  </div>
                </div>
              ))}

            {cart.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-6">
                <ShoppingCart className="w-20 h-20" />
                <p className="text-lg">Your Cart is Empty</p>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default Navbar;
