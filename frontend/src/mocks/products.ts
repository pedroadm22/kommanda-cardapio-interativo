import { Category, Product } from "@/app/types";
import { ExtraItem, ExtraGroup } from '@/app/types';
import { ProductAssets } from "@/assets/products";

export const MOCK_EXTRAS: Record<string, ExtraItem> = {
  // --- Burgers ---
  bacon: { id: 'ex1', name: 'Bacon Crocante', price: 4.50 },
  cheese: { id: 'ex2', name: 'Queijo Cheddar', price: 3.00 },
  egg: { id: 'ex3', name: 'Ovo Frito', price: 2.50 },
  meat: { id: 'ex4', name: 'Blend Extra 160g', price: 12.00 },

  // --- Sobremesas ---
  nutella: { id: 'ex5', name: 'Calda de Nutella', price: 6.00 },
  kitkat: { id: 'ex6', name: 'KitKat Picado', price: 5.00 },
  ice_cream: { id: 'ex7', name: 'Bola de Sorvete', price: 7.50 },

  // --- Bebidas & Utensílios (Gratuitos) ---
  ice_lemon: { id: 'ex8', name: 'Gelo e Limão', price: 0 },
  straw: { id: 'ex9', name: 'Canudo Ecológico', price: 0 },
  napkin: { id: 'ex10', name: 'Guardanapos', price: 0 },
  ketchup: { id: 'ex11', name: 'Ketchup Sachê', price: 0 },
};

export const MOCK_EXTRA_GROUPS: Record<string, ExtraGroup> = {
  'burger-topping': {
    id: 'burger-topping',
    title: 'Turbine seu Lanche',
    description: 'Adicione itens extras para deixar seu burger do seu jeito.',
    min: 0,
    max: 4,
    items: [MOCK_EXTRAS.bacon, MOCK_EXTRAS.cheese, MOCK_EXTRAS.egg, MOCK_EXTRAS.meat]
  },
  'dessert-topping': {
    id: 'dessert-topping',
    title: 'Complementos',
    min: 0,
    max: 2,
    items: [MOCK_EXTRAS.nutella, MOCK_EXTRAS.kitkat, MOCK_EXTRAS.ice_cream]
  },
  'drink-options': {
    id: 'drink-options',
    title: 'Opções da Bebida',
    min: 0,
    max: 2,
    items: [MOCK_EXTRAS.ice_lemon, MOCK_EXTRAS.straw]
  },
  'service-kit': {
    id: 'service-kit',
    title: 'Precisa de talheres ou condimentos?',
    description: 'Selecione se desejar',
    min: 0,
    max: 5,
    items: [MOCK_EXTRAS.napkin, MOCK_EXTRAS.ketchup]
  }
};

export const MOCK_CATEGORIES: Category[] = [
  { 
    id: 'cat-1', 
    name: 'Burgers', 
    slug: 'burgers',
    icon: 'Beef'
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
    image: ProductAssets.burgerDuplo,
    categoryId: "cat-1",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p2",
    name: "Combo Sushi",
    description: "Combo com 20 peças de sushi variados, incluindo opções vegetarianas.",
    price: 59.9,
    image: ProductAssets.comboSushi,
    categoryId: "cat-2",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p3",
    name: "Coca-Cola Lata",
    description: "Lata de Coca-Cola 350ml.",
    price: 6.9,
    image: ProductAssets.cocaLata,
    categoryId: "cat-3",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p4",
    name: "Tiramisù Clássico",
    description: "Sobremesa italiana com camadas de biscoito embebido em café e creme de mascarpone.",
    price: 59.9,
    image: ProductAssets.tiramisu, 
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p5",
    name: "Milkshake de Morango",
    description: "Milkshake cremoso com pedaços de morango fresco.",
    price: 12.9,
    image: ProductAssets.milkshakeMorango, 
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p6",
    name: "Milkshake de Chocolate",
    description: "Milkshake cremoso com pedaços de chocolate fresco.",
    price: 12.9,
    image: ProductAssets.milkshakeChocolate, 
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p7",
    name: "Pudim de Leite Condensado",
    description: "Sobremesa brasileira com base de leite condensado e creme de leite.",
    price: 15.9,
    image: ProductAssets.pudim, 
    categoryId: "cat-4",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p8",
    name: "Suco de Laranja Natural",
    description: "Suco de laranja 100% natural.",
    price: 8.9,
    image: ProductAssets.sucoLaranja, 
    categoryId: "cat-3",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p9",
    name: "Suco de Manga Natural",
    description: "Suco de manga 100% natural.",
    price: 8.9,
    image: ProductAssets.sucoManga, 
    categoryId: "cat-3",
    isAvailable: true,
    featured: true,
  },
  {
    id: "p10",
    name: "Suco de Abacaxi Natural",
    description: "Suco de abacaxi 100% natural.",
    price: 8.9,
    image: ProductAssets.sucoAbacaxi, 
    categoryId: "cat-3",
    isAvailable: true,
    featured: true,
  },
];
