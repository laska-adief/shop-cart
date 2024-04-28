import { Product } from "@/types";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <Card className="">
      <CardContent>
        <div className="h-56">
          <img src={data.thumbnail} alt={data.title} className="h-full w-full object-cover rounded-md" />
        </div>
        <div className="flex justify-between py-4">
          <CardTitle className="">{data.title}</CardTitle>
          <CardDescription className="font-medium text-lg pl-4">${data.price}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
