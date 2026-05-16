// src/store/useCartStore.ts
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore, Product, CartItem } from '@/types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product: Product, observations?: string) => {
        set((state) => {
          // No padrão sênior, verificamos se o mesmo produto COM a mesma observação já existe
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id && item.observations === observations
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item === existingItem
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          const newItem: CartItem = {
            id: `${product.id}-${Date.now()}`, // ID único para o item na sacola
            product,
            quantity: 1,
            observations,
            addedAt: new Date().toISOString(),
          };

          return { cart: [...state.cart, newItem] };
        });
      },

      removeFromCart: (cartItemId: string) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== cartItemId),
        }));
      },

      updateQuantity: (cartItemId: string, quantity: number) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === cartItemId 
              ? { ...item, quantity: Math.max(0, quantity) } 
              : item
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.product.price * item.quantity, 
          0
        );
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'kommanda-storage',
    }
  )
);