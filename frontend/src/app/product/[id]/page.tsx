"use client";

import Image from "next/image";
import { ChevronLeft, Minus, Plus, Zap } from "lucide-react";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();

  // Simulando a busca do produto pelo ID
  const product = MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* 1. IMAGEM SUPERIOR COM BOTÃO VOLTAR */}
      <section className="relative w-full h-[40vh] min-h-75 overflow-hidden">
        <Link
          href="/menu"
          className="absolute top-12 left-6 z-10 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg text-dark-primary active:scale-90 transition-transform"
        >
          <ChevronLeft size={28} />
        </Link>
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
      </section>

      {/* 2. INFORMAÇÕES BÁSICAS */}
      <section className="px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-t-[3rem] pt-8">
          <h1 className="font-title text-4xl text-dark-primary leading-none tracking-tighter">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mt-4">
            <span className="font-price text-3xl text-emerald-600 font-bold">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {/* Benefício Pix */}
            <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
              <Zap size={14} fill="currentColor" />
              <span>-5% NO PIX</span>
            </div>
          </div>

          <p className="font-body text-gray-500 mt-4 leading-relaxed text-base">
            {product.description}
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-100 mx-6" />

      {/* 3. ESCOLHA DE ADICIONAIS */}
      <section className="px-6">
        <h3 className="font-title text-xl text-dark-primary mb-4 uppercase italic">
          Turbine seu {product.name.split(" ")[0]}
        </h3>

        {/* Lista de Adicionais Exemplo */}
        <div className="space-y-3">
          {[
            { name: "Bacon Extra", price: 4.5 },
            { name: "Cheddar Cremoso", price: 3.0 },
            { name: "Hambúrguer 160g", price: 12.0 },
          ].map((addon, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-pwa border border-gray-50 bg-gray-50/50"
            >
              <div className="flex flex-col">
                <span className="font-body font-bold text-dark-primary">
                  {addon.name}
                </span>
                <span className="font-price text-sm text-emerald-600">
                  +{" "}
                  {addon.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <button className="bg-white border border-gray-200 p-1.5 rounded-lg text-brand-500 active:bg-brand-50">
                <Plus size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BARRA FIXA DE QUANTIDADE E COMPRA */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 p-6 flex items-center justify-between gap-4 z-50">
        <div className="flex items-center bg-gray-100 rounded-2xl p-1">
          <button className="p-3 text-gray-400">
            <Minus size={20} />
          </button>
          <span className="px-4 font-price font-bold text-xl">1</span>
          <button className="p-3 text-brand-500">
            <Plus size={20} />
          </button>
        </div>

        <button className="flex-1 bg-brand-500 text-white font-title text-lg py-4 rounded-2xl shadow-xl shadow-brand-100 active:scale-[0.97] transition-all">
          ADICIONAR AO PEDIDO
        </button>
      </footer>
    </main>
  );
}
