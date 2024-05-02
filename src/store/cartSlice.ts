import { Product } from "@/types";

export interface CartSlice {
  product: Product[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: CartSlice = {
  product: [],
};
