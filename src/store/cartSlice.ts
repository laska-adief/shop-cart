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
  reducers: {},
});
