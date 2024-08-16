import { create } from "zustand";

type Store = {
  cart: CartItem[];
  addTocCart: (cartItem: CartItem) => void;
};

export const useShoppingCart = create<Store>()((set) => ({
  cart: [],
  addTocCart: (cartItem: CartItem) => {
    set((state) => ({ cart: [...state.cart, cartItem] }));
  },
}));
