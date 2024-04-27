import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    };

    getAllProducts();
  }, []);

  return (
    <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-wrap gap-4 justify-start m-auto">
      {products.map((product: Product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
