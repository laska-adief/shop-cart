import { Product } from "@/types";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addCart } from "@/store/cartSlice";
import { toast } from "react-toastify";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";

const ProductCard = ({ data }: { data: Product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleSetQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const valueInt = parseInt(value);
      setQuantity(valueInt);
    }
  };

  const handleAddToCart = (data: Product) => {
    dispatch(addCart(data));
    toast(`${data.title} added to cart!`, {});
  };

  return (
    <Card className="">
      <CardContent>
        <div className="h-56">
          <img src={data.thumbnail} alt={data.title} className="h-full w-full object-cover rounded-md" />
        </div>
        <div className="flex justify-between py-4 h-20">
          <CardTitle className="text-lg">{data.title}</CardTitle>
          <CardDescription className="font-medium text-lg pl-4">${data.price}</CardDescription>
        </div>
        <div className="flex items-center gap-2 flex-col md:flex-row">
          <div className="flex items-center gap-4">
            <Button>
              <Minus />
            </Button>
            <Input className="w-full text-center" value={quantity} onChange={handleSetQuantity} />
            <Button>
              <Plus />
            </Button>
          </div>
          <Button onClick={() => handleAddToCart(data)} className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5" />
            Add Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
