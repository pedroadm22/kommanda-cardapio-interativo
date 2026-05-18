'use client';
import { Bell, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export function HeaderActions() {
  const cartItems = useCartStore((state) => state.cart?.length || 0);

  return (
    <div className="flex items-center gap-3">
      <button className="relative p-3 bg-gray-50 rounded-pwa text-gray-600 active:scale-90 transition-transform">
        <Bell size={24} />
        <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
      </button>

      <button className="relative flex items-center gap-2 p-3 bg-brand-500 text-white rounded-pwa shadow-lg shadow-brand-100 active:scale-95 transition-all">
        <ShoppingBag size={24} />
        {cartItems > 0 && (
          <span className="font-price text-xs font-bold bg-white text-brand-600 w-5 h-5 flex items-center justify-center rounded-full animate-bounce-short">
            {cartItems}
          </span>
        )}
      </button>
    </div>
  );
}