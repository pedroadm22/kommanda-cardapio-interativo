import { Product } from '../product';
import { ExtraItem } from '../extras';

export interface CartItem extends Product {
  cartId: string;       // ID único da instância no carrinho
  quantity: number;
  selectedExtras: ExtraItem[];
  totalItemPrice: number; // (Preço Base + Extras) * Quantidade
}