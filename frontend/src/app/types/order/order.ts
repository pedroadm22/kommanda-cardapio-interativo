import { CartItem } from "../cart/cart-item";
import { OrderStatus } from "./status";

export interface Order {
  id: string;
  mesa: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}