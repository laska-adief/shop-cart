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

  return <div>Products</div>;
};

export default Products;
