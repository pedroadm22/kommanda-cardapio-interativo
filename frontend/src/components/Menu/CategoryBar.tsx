'use client';

import { Category } from '@/app/types';

interface CategoryBarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export function CategoryBar({ categories, activeCategory, onCategoryChange }: CategoryBarProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {/* Opção "Todos" */}
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
          activeCategory === 'all' 
            ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30' 
            : 'bg-white text-gray-400 border border-gray-100'
        }`}
      >
        Todos
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
            activeCategory === category.slug 
              ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30' 
              : 'bg-white text-gray-400 border border-gray-100'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}