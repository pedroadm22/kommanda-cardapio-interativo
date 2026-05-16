// frontend/src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { User, Phone, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Recupera a mesa salva no cookie pela Splash Screen
  const mesa = Cookies.get("kachau_mesa") || "Não identificada";

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Por favor, preencha todos os campos para continuar.");
      return;
    }

    setLoading(false);

    // 1. Salva a sessão do usuário nos Cookies por 1 dia
    const sessionData = JSON.stringify({ name, phone });
    Cookies.set("user_session", sessionData, { expires: 1 });

    // 2. Redireciona o cliente direto para o cardápio
    router.push("/menu");
  };

  // Máscara simples para o telefone brasileiro (85) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between p-6">
      {/* Topo: Identificação da Mesa */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-black italic text-sm">K!</span>
          </div>
          <span className="font-bold text-dark-primary tracking-tight">
            Kommanda
          </span>
        </div>
        <div className="bg-accent-100 text-accent-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
          Mesa {mesa}
        </div>
      </div>

      {/* Meio: Formulário de Entrada */}
      <div className="my-auto max-w-sm w-full mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-dark-primary tracking-tight">
            Seja bem-vindo(a)! 👋
          </h2>
          <p className="text-dark-secondary text-sm">
            Insira seus dados para acessar o cardápio e realizar seus pedidos de
            forma rápida.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-dark-secondary uppercase tracking-wider">
              Seu Nome
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-4 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Ex: Pedro Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-pwa py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all shadow-sm text-dark-primary"
                required
              />
            </div>
          </div>

          {/* Campo WhatsApp */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-dark-secondary uppercase tracking-wider">
              WhatsApp
            </label>
            <div className="relative flex items-center">
              <Phone className="absolute left-4 text-gray-400" size={18} />
              <input
                type="tel"
                placeholder="(85) 99999-9999"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full bg-white border border-gray-200 rounded-pwa py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all shadow-sm text-dark-primary"
                required
              />
            </div>
          </div>

          {/* Botão de Entrar */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-white font-bold py-4 rounded-pwa shadow-md shadow-orange-500/10 flex items-center justify-center gap-2 transition-all mt-6 cursor-pointer"
          >
            {loading ? "Carregando..." : "Acessar Cardápio"}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>

      {/* Rodapé institucional discreto */}
      <div className="text-center pb-4">
        <p className="text-[11px] text-gray-400 font-medium">
          Ao continuar, você permite a identificação do seu pedido na cozinha.
        </p>
      </div>
    </main>
  );
}
