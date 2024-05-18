import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
        <PopoverContent className="w-80 bg-white mt-6 mr-3 p-4 rounded-sm shadow-2xl">
          Place content for the popover here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa amet deleniti
          doloremque, suscipit modi dignissimos officiis nobis, esse doloribus, eaque exercitationem minus mollitia optio? In libero totam
          cumque non!
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default Navbar;
