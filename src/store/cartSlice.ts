import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartSlice {
  product: Product[];
}

const initialState: CartSlice = {
  product: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const cartProduct = state.product;
      const findProduct = cartProduct.find((product: Product) => product.id === action.payload.id);
      let tempProduct: Product;
      if (findProduct) {
        cartProduct.filter((product: Product) => (product.id === findProduct.id ? { ...product, quantity: product.quantity++ } : product));
      } else {
        tempProduct = { ...action.payload, quantity: 1 };
        cartProduct.push(tempProduct);
      }
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
