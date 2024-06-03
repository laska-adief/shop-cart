import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getAllProducts = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      if (data?.products) {
        setIsLoading(false);
        setProducts(data.products);
      } else {
        setIsLoading(false);
      }
    };

    getAllProducts();
  }, []);

  return !isLoading ? (
    <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap gap-4 justify-start m-auto">
      {products.map((product: Product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  ) : (
    <div className="h-20 w-full flex items-center justify-center">Loading...</div>
  );
};

export default Products;
