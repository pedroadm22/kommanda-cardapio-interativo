import { StaticImageData } from 'next/image';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData; // Aceita URL ou Import Local
  categoryId: string;
  isAvailable: boolean;
  featured?: boolean;
  extraGroups?: string[];
}