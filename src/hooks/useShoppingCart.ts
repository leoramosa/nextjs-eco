import { create } from "zustand";

type Store = {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
};

const saveArrayToLocalStorage = (array: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(array));
};

export const useShoppingCart = create<Store>()((set) => ({
  cart: (() => {
    if (typeof window === "undefined") {
      return [];
    }

    const cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }

    return [];
  })(),
  addToCart: (cartItem: CartItem) =>
    set((state) => {
      const currentCart = state.cart;
      const itemIndex = currentCart.findIndex(
        (item) => item.id === cartItem.id
      ); // Encuentra el índice del producto en el carrito actual

      if (itemIndex !== -1) {
        // Si el producto ya existe en el carrito, actualiza la cantidad
        const updatedCart = [...currentCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + cartItem.quantity, // Suma la nueva cantidad a la existente
        };
        saveArrayToLocalStorage(updatedCart);
        return { cart: updatedCart };
      }

      // Si el producto no está en el carrito, agrégalo
      const newCart = [...currentCart, cartItem];
      saveArrayToLocalStorage(newCart);
      return { cart: newCart };
    }),
  removeCartItem: (cartItem: CartItem) =>
    set((state) => {
      const currentCart = state.cart;
      const newCart = currentCart.filter((item) => item.id !== cartItem.id);
      saveArrayToLocalStorage(newCart);
      return { cart: newCart };
    }),
}));
