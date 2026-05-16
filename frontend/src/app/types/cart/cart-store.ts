import { CartItem } from "./cart-item";
import { Product } from "../product/product";

export interface CartState {
  cart: CartItem[];
}

export interface CartActions {
  addToCart: (product: Product, observations?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export type CartStore = CartState & CartActions;