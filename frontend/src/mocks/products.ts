import { Product } from "@/types";
import { ProductAssets } from "@/assets/products";

export const MOCK_CATEGORIES: Category[] = [
  { 
    id: 'cat-1', 
    name: 'Burgers', 
    slug: 'burgers',
    icon: 'Beef' // Nome do ícone da Lucide que você pode usar no componente
  },
  { 
    id: 'cat-2', 
    name: 'Sushis', 
    slug: 'sushis',
    icon: 'Fish' 
  },
  { 
    id: 'cat-3', 
    name: 'Bebidas', 
    slug: 'bebidas',
    icon: 'Beer' 
  },
  { 
    id: 'cat-4', 
    name: 'Sobremesas', 
    slug: 'sobremesas',
    icon: 'IceCream' 
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Burger Brutal",
    description: "Pão brioche, 2 carnes de 160g e muito queijo.",
    price: 38.9,
    image: ProductAssets.burgerDuplo, // Uso profissional e tipado
    categoryId: "cat-1",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p2",
    name: "Combo Sushi",
    description: "Combo com 20 peças de sushi variados, incluindo opções vegetarianas.",
    price: 59.9,
    image: ProductAssets.comboSushi, // Uso profissional e tipado
    categoryId: "cat-2",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p3",
    name: "Coca-Cola Lata",
    description: "Lata de Coca-Cola 350ml.",
    price: 6.9,
    image: ProductAssets.cocaLata, // Uso profissional e tipado
    categoryId: "cat-3",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p4",
    name: "Tiramisù Clássico",
    description: "Sobremesa italiana com camadas de biscoito embebido em café e creme de mascarpone.",
    price: 59.9,
    image: ProductAssets.tiramisu, // Uso profissional e tipado
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p5",
    name: "Milkshake de Morango",
    description: "Milkshake cremoso com pedaços de morango fresco.",
    price: 12.9,
    image: ProductAssets.milkshakeMorango, // Uso profissional e tipado
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p6",
    name: "Milkshake de Chocolate",
    description: "Milkshake cremoso com pedaços de chocolate fresco.",
    price: 12.9,
    image: ProductAssets.milkshakeChocolate, // Uso profissional e tipado
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p7",
    name: "Pudim de Leite Condensado",
    description: "Sobremesa brasileira com base de leite condensado e creme de leite.",
    price: 15.9,
    image: ProductAssets.pudim, // Uso profissional e tipado
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
];
