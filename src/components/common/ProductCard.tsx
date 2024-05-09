import { Product } from "@/types";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";

const ProductCard = ({ data }: { data: Product }) => {
  const dispatch = useDispatch();

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
        <Button>
          <ShoppingCart className="mr-2 h-5" />
          Add Cart
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
