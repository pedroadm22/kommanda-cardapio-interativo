// frontend/src/app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { Loader2 } from "lucide-react";

export default function RootPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Captura o parâmetro '?mesa=' da URL do QR Code
    const mesaParam = searchParams.get("mesa");

    if (mesaParam) {
      // Salva o número da mesa em um cookie por 1 dia
      // Altere os nomes das chaves de cookies dentro do useEffect:
      Cookies.set("kommanda_mesa", mesaParam, { expires: 1 });
      const userSession = Cookies.get("kommanda_user_session");
    }

    // 2. Verifica se o usuário já tem uma sessão ativa (Nome/WhatsApp)
    const userSession = Cookies.get("user_session");

    // 3. Tomada de decisão do fluxo
    setTimeout(() => {
      if (!userSession) {
        // Se é um cliente novo, vai se identificar no login
        router.push("/login");
      } else {
        // Se já está logado, vai direto para o cardápio comer!
        router.push("/menu");
      }
    }, 1000); // 1 segundo de splash screen apenas para dar um feedback visual fluido
  }, [router, searchParams]);

  return (
    // Altere a tag <main> para usar o fundo azul da marca:
    <main className="min-h-screen bg-accent-950 flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center animate-pulse">
        {/* Ícone Laranja */}
        <div className="w-24 h-24 bg-brand-500 rounded-pwa rotate-12 flex items-center justify-center shadow-2xl mb-6">
          <span className="text-white text-4xl font-black -rotate-12 italic">
            K!
          </span>
        </div>
        <h1 className="text-4xl font-black text-white italic tracking-tighter">
          KOMMANDA <span className="text-brand-500 font-bold">STORE</span>
        </h1>
        <p className="text-blue-200 text-sm mt-2 font-medium tracking-wide uppercase">
          Carregando cardápio digital...
        </p>
      </div>
    </main>
  );
}
