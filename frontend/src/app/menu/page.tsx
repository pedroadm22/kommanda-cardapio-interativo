"use client";

import { useState, useMemo } from "react";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "@/mocks/products";
import { Header } from "@/components/Menu/Header";
import { CategoryBar } from "@/components/Menu/CategoryBar";
import { ProductCard } from "@/components/Menu/ProductCard";

export default function ProductsPage() {
  // 1. O estado agora guarda o SLUG (começa em 'all' ou no slug da primeira categoria)
  const [activeSlug, setActiveSlug] = useState('all');

  // 2. Filtro inteligente
  const filteredProducts = useMemo(() => {
    // Se for 'all', retorna tudo
    if (activeSlug === 'all') return MOCK_PRODUCTS;

    // Caso contrário, filtramos:
    return MOCK_PRODUCTS.filter((product) => {
      // Buscamos a categoria do produto para saber o slug dela
      const category = MOCK_CATEGORIES.find(c => c.id === product.categoryId);
      return category?.slug === activeSlug;
    });
  }, [activeSlug]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-4"> 
        <CategoryBar 
          categories={MOCK_CATEGORIES} 
          activeCategory={activeSlug} 
          onCategoryChange={setActiveSlug} 
        />
      </div>

      <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}