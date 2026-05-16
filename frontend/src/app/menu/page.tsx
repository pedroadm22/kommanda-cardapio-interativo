"use client";

import { useState } from "react";
import { ProductCard } from "@/components/Menu/ProductCard";
import { CategoryBar } from "@/components/Menu/CategoryBar";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/mocks/products";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const currentCategory = MOCK_CATEGORIES.find(
      (c) => c.slug === activeCategory,
    );
    return (
      activeCategory === "all" || product.categoryId === currentCategory?.id
    );
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header Fixo/Topo */}
      <header className="bg-white px-6 pt-8 pb-6 rounded-b-[3rem] shadow-sm">
        <h1 className="text-2xl font-black text-gray-900">Cardápio</h1>
        <p className="text-gray-500 text-sm">Escolha seus favoritos</p>
      </header>

      {/* Categorias */}
      <section className="mt-6 px-4">
        <CategoryBar
          categories={MOCK_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      {/* Grid Dinâmico */}
      {/* Container principal da lista */}
      <section className="mt-8 px-4 max-w-2xl mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-xl font-bold text-gray-900">
            {activeCategory === "all" ? "Cardápio Completo" : activeCategory}
          </h2>
          <span className="text-xs font-bold text-gray-400 uppercase">
            {filteredProducts.length} itens
          </span>
        </div>

        {/* RENDERIZAÇÃO: Um embaixo do outro, ocupando a largura total */}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
