'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Product } from '@/app/types';
import { useCartStore } from '@/store/useCartStore';

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    /* 1. O Link envolve o card para permitir a navegação para a página de detalhes */
    <Link href={`/product/${product.id}`} className="block w-full">
      <div 
        className="group flex flex-row items-center gap-4 p-4 bg-white rounded-pwa border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
      >
        {/* 2. Container da Imagem com tamanho fixo (Resolve o erro de altura 0) */}
        <div className="relative w-24 h-24 min-w-4 rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="96px"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* 3. Conteúdo Textual com fontes diferenciadas */}
        <div className="flex flex-col flex-1 min-w-0">
          <header>
            <h4 className="font-title text-xl text-dark-primary leading-tight truncate tracking-tight">
              {product.name}
            </h4>
            <p className="font-body text-sm text-dark-secondary line-clamp-2 mt-1 leading-snug">
              {product.description}
            </p>
          </header>

          <div className="flex items-center justify-between mt-3">
            {/* Fonte de Preço específica */}
            <span className="font-price text-xl font-bold text-emerald-600">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            
            {/* Botão de Adição Rápida */}
            <button 
              onClick={(e) => {
                e.preventDefault(); // Impede que o clique no botão abra a página de detalhes
                addToCart(product);
              }}
              className="bg-brand-500 text-white p-2 rounded-xl shadow-lg shadow-brand-100 hover:bg-brand-600 transition-colors"
            >
              <Plus className="w-5 h-5" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}