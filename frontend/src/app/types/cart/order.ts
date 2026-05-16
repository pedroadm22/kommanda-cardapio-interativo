export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'DELIVERED' | 'CANCELED';

export interface Order {
  id: string;
  userId: string;
  mesa: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
}