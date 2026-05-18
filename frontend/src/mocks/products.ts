import { Category, Product, ExtraItem, ExtraGroup } from "@/app/types";
import { ProductAssets } from "@/assets/products";

// --- EXTRAS ---
export const MOCK_EXTRAS: Record<string, ExtraItem> = {
  bacon: { id: "ext_bacon", name: "Bacon Crocante", price: 4.5 },
  cheese: { id: "ext_cheese", name: "Queijo Cheddar", price: 3.0 },
  egg: { id: "ext_egg", name: "Ovo Frito", price: 2.5 },
  meat: { id: "ext_meat", name: "Blend Extra 160g", price: 12.0 },
  nutella: { id: "ext_nutella", name: "Calda de Nutella", price: 6.0 },
  kitkat: { id: "ext_kitkat", name: "KitKat Picado", price: 5.0 },
  ice_cream: { id: "ext_icecream", name: "Bola de Sorvete", price: 7.5 },
  ice_lemon: { id: "ext_ice_lemon", name: "Gelo e Limão", price: 0 },
  straw: { id: "ext_straw", name: "Canudo Ecológico", price: 0 },
  napkin: { id: "ext_napkin", name: "Guardanapos", price: 0 },
  ketchup: { id: "ext_ketchup", name: "Ketchup Sachê", price: 0 },
};

// --- GRUPOS DE EXTRAS ---
export const MOCK_EXTRA_GROUPS: Record<string, ExtraGroup> = {
  "grp_burger_topping": {
    id: "grp_burger_topping",
    title: "Turbine seu Lanche",
    min: 0, max: 4,
    items: [MOCK_EXTRAS.bacon, MOCK_EXTRAS.cheese, MOCK_EXTRAS.egg, MOCK_EXTRAS.meat],
  },
  "grp_dessert_topping": {
    id: "grp_dessert_topping",
    title: "Complementos",
    min: 0, max: 2,
    items: [MOCK_EXTRAS.nutella, MOCK_EXTRAS.kitkat, MOCK_EXTRAS.ice_cream],
  },
  "grp_drink_options": {
    id: "grp_drink_options",
    title: "Opções da Bebida",
    min: 0, max: 2,
    items: [MOCK_EXTRAS.ice_lemon, MOCK_EXTRAS.straw],
  },
  "grp_service_kit": {
    id: "grp_service_kit",
    title: "Utensílios e Condimentos",
    min: 0, max: 5,
    items: [MOCK_EXTRAS.napkin, MOCK_EXTRAS.ketchup],
  },
};

// --- CATEGORIAS (IDs Sincronizados) ---
export const MOCK_CATEGORIES: Category[] = [
  { id: "cat_burgers", name: "Burgers", slug: "burgers", icon: "Beef" },
  { id: "cat_sushis", name: "Sushis", slug: "sushis", icon: "Fish" },
  { id: "cat_drinks", name: "Bebidas", slug: "bebidas", icon: "Beer" },
  { id: "cat_desserts", name: "Sobremesas", slug: "sobremesas", icon: "IceCream" },
];

// --- PRODUTOS COMPLETOS ---
export const MOCK_PRODUCTS: Product[] = [
  // CATEGORIA: BURGERS
  {
    id: "prod_burger_brutal",
    name: "Burger Brutal",
    description: "Pão brioche, 2 carnes de 160g e muito queijo.",
    price: 38.9,
    image: ProductAssets.burgerDuplo,
    categoryId: "cat_burgers",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_burger_topping", "grp_service_kit"]
  },
  {
    id: "prod_chicken_deluxe",
    name: "Burger Chicken Crispy Deluxe",
    description: "Pão brioche, frango crispy, alface, tomate e maionese especial.",
    price: 38.9,
    image: ProductAssets.burgerChickerCrispy,
    categoryId: "cat_burgers",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_burger_topping", "grp_service_kit"]
  },
  {
    id: "prod_truffle_funghi",
    name: "Trufa & Funghi Premium",
    description: "Blend 180g, Gruyère, mix de cogumelos trufados, tomate confit e repolho roxo.",
    price: 49.9,
    image: ProductAssets.burgerDuplo, // Use o asset correto aqui se tiver um específico
    categoryId: "cat_burgers",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_burger_topping", "grp_service_kit"],
  },

  // CATEGORIA: SUSHIS
  {
    id: "prod_combo_sushi",
    name: "Combo Sushi",
    description: "Combo com 20 peças de sushi variados, incluindo opções vegetarianas.",
    price: 59.9,
    image: ProductAssets.comboSushi,
    categoryId: "cat_sushis",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_service_kit"]
  },

  // CATEGORIA: SOBREMESAS
  {
    id: "prod_tiramisu",
    name: "Tiramisù Clássico",
    description: "Sobremesa italiana com camadas de biscoito embebido em café e creme de mascarpone.",
    price: 59.9,
    image: ProductAssets.tiramisu,
    categoryId: "cat_desserts",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_dessert_topping"]
  },
  {
    id: "prod_shake_morango",
    name: "Milkshake de Morango",
    description: "Milkshake cremoso com pedaços de morango fresco.",
    price: 12.9,
    image: ProductAssets.milkshakeMorango,
    categoryId: "cat_desserts",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_dessert_topping"]
  },
  {
    id: "prod_shake_chocolate",
    name: "Milkshake de Chocolate",
    description: "Milkshake cremoso com pedaços de chocolate fresco.",
    price: 12.9,
    image: ProductAssets.milkshakeChocolate,
    categoryId: "cat_desserts",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_dessert_topping"]
  },
  {
    id: "prod_pudim",
    name: "Pudim de Leite Condensado",
    description: "Sobremesa brasileira com base de leite condensado e creme de leite.",
    price: 15.9,
    image: ProductAssets.pudim,
    categoryId: "cat_desserts",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_dessert_topping"]
  },

  // CATEGORIA: BEBIDAS
  {
    id: "prod_coca_lata",
    name: "Coca-Cola Lata",
    description: "Lata de Coca-Cola 350ml.",
    price: 6.9,
    image: ProductAssets.cocaLata,
    categoryId: "cat_drinks",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_drink_options", "grp_service_kit"]
  },
  {
    id: "prod_suco_laranja",
    name: "Suco de Laranja Natural",
    description: "Suco de laranja 100% natural.",
    price: 8.9,
    image: ProductAssets.sucoLaranja,
    categoryId: "cat_drinks",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_drink_options", "grp_service_kit"]
  },
  {
    id: "prod_suco_manga",
    name: "Suco de Manga Natural",
    description: "Suco de manga 100% natural.",
    price: 8.9,
    image: ProductAssets.sucoManga,
    categoryId: "cat_drinks",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_drink_options", "grp_service_kit"]
  },
  {
    id: "prod_suco_abacaxi",
    name: "Suco de Abacaxi Natural",
    description: "Suco de abacaxi 100% natural.",
    price: 8.9,
    image: ProductAssets.sucoAbacaxi,
    categoryId: "cat_drinks",
    isAvailable: true,
    featured: true,
    extraGroups: ["grp_drink_options", "grp_service_kit"]
  },
];