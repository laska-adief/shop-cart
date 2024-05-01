import { Product } from "@/types";

export interface CartSlice {
  product: Product[];
}

const initialState: CartSlice = {
  product: [],
};
