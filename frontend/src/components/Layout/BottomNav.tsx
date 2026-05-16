// frontend/src/components/Layout/BottomNav.tsx
'use client';

import { Utensils, ShoppingBag, History, Heart, ScanQrCode } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();
  
  // Ligação real com o estado global do carrinho
  const totalItems = useCartStore((state) => state.getTotalItems());

  // Função para verificar se a rota está ativa e mudar a cor do ícone
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pt-3 pb-6 flex justify-between items-end z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      
      {/* Menu: Cardápio */}
      <Link href="/menu" className={`flex flex-col items-center flex-1 gap-1 transition-colors ${isActive('/menu') ? 'text-brand-500' : 'text-gray-400'}`}>
        <Utensils size={24} />
        <span className="text-[10px] font-bold">Cardápio</span>
      </Link>

      {/* Menu: Pedidos */}
      <Link href="/orders" className={`flex flex-col items-center flex-1 gap-1 transition-colors ${isActive('/orders') ? 'text-brand-500' : 'text-gray-400'}`}>
        <History size={24} />
        <span className="text-[10px] font-bold">Pedidos</span>
      </Link>
      
      {/* Botão Central: Scan/Home (Destaque Laranja) */}
      <div className="relative -top-6 flex items-center justify-center flex-1">
        <Link 
          href="/" 
          className="w-16 h-16 bg-brand-500 hover:bg-brand-600 rounded-full flex items-center justify-center shadow-xl shadow-brand-500/30 text-white active:scale-95 transition-all cursor-pointer border-4 border-white"
        >
          <ScanQrCode size={30} strokeWidth={2.5} />
        </Link>
      </div>
      
      {/* Menu: Favoritos */}
      <button className="flex flex-col items-center text-gray-400 flex-1 gap-1 group active:scale-95 transition-all">
        <Heart size={24} />
        <span className="text-[10px] font-bold">Favoritos</span>
      </button>
      
      {/* Menu: Sacola (Com contador real em Azul) */}
      <Link href="/cart" className={`flex flex-col items-center flex-1 gap-1 transition-colors relative ${isActive('/cart') ? 'text-brand-500' : 'text-gray-400'}`}>
        {totalItems > 0 && (
          <div className="absolute -top-1.5 -right-1.5 bg-accent-600 text-white text-[10px] min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center font-black shadow-md shadow-accent-600/20 animate-bounce-short">
            {totalItems}
          </div>
        )}
        <ShoppingBag size={24} />
        <span className="text-[10px] font-bold">Sacola</span>
      </Link>

    </nav>
  );
}