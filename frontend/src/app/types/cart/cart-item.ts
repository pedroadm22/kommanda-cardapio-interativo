import { Product } from "../product/product";

export interface CartItem {
  id: string;            // Gerado no front (ex: produtoId + timestamp ou hash de observações)
  product: Product;      // Referência completa do produto
  quantity: number;      // Quantidade escolhida
  observations?: string; // Ex: "Sem cebola", "Bem passado"
  addedAt: string;       // ISO Date para controle de ordenação se necessário
}