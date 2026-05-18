'use client';

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg text-dark-primary active:scale-90 transition-transform ${className}`}
      aria-label="Voltar"
    >
      <ChevronLeft size={28} />
    </button>
  );
}