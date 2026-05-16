import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Onde o Tailwind vai buscar as classes para compilar
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- ADICIONE ESTA PARTE ---
      fontFamily: {
        title: ['var(--font-title)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        price: ['var(--font-price)', 'monospace'],
      },
      // ---------------------------

      // 2. Customização da paleta de cores para bater com a marca
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316', // Laranja Kachau principal
          600: '#ea580c', // Laranja escuro para hover/active
          900: '#7c2d12',
        },
        dark: {
          primary: '#111827', // Cinza quase preto para textos principais
          secondary: '#4b5563', // Cinza intermediário
        }
      },
      // 3. Arredondados estilo App Nativo (Mobile-first)
      borderRadius: {
        'pwa': '1.25rem', // 20px para cards e botões grandes
      },
      // 4. Animações para micro-interações do app
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
};

export default config;