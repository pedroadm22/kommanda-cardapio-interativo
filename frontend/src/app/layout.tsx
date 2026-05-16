import { Bricolage_Grotesque, Instrument_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Fonte para Títulos
const fontTitle = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['800'], // Bem pesada para os nomes
});

// Fonte para Descrições
const fontBody = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
});

// Fonte para Preços
const fontPrice = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-price',
  weight: ['700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fontTitle.variable} ${fontBody.variable} ${fontPrice.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900 font-body">
        {children}
      </body>
    </html>
  );
}