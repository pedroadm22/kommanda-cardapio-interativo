'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div 
      onClick={() => addToCart(product)}
      className="group flex flex-row items-center gap-4 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98] w-full"
    >
      {/* Container da Imagem: Altura e Largura fixas em REM para não sumir */}
      <div className="relative w-24 h-24 min-w-[6rem] rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="96px"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Conteúdo: Ocupa o restante da largura */}
      <div className="flex flex-col flex-1 min-w-0">
        <header>
          <h4 className="text-lg font-bold text-gray-900 leading-tight truncate">
            {product.name}
          </h4>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1 leading-snug">
            {product.description}
          </p>
        </header>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-black text-emerald-600">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          
          <button 
            className="bg-emerald-600 text-white p-2 rounded-xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}