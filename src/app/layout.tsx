import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Footer } from '@/components/layout/Footer';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tunja Conecta',
  description: 'Visualizador de obras públicas en Tunja',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen">
          <ClientLayout />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
