import { Product } from "@/types";
import { Card, CardContent, CardTitle } from "../ui/card";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <Card className="">
      <CardContent>
        <div className="h-56">
          <img src={data.thumbnail} alt={data.title} className="h-full w-full object-cover rounded-md" />
        </div>
        <CardTitle className="py-2">{data.title}</CardTitle>
        <p>${data.price}</p>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
