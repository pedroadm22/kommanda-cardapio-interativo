'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="px-6 mt-6">
      <div className={`
        relative flex items-center transition-all duration-300
        ${isFocused ? 'scale-[1.02]' : 'scale-100'}
      `}>
        <Search 
          className={`absolute left-4 transition-colors duration-300 ${
            isFocused ? 'text-accent-600' : 'text-gray-400'
          }`} 
          size={20} 
        />
        <input 
          type="search" 
          placeholder="Buscar pratos ou bebidas..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full bg-white border border-gray-100 rounded-full py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all text-dark-primary font-medium placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}