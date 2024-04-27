import axios from "axios";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data);
    };

    getAllProducts();
  }, []);

  return <div>Products</div>;
};

export default Products;
