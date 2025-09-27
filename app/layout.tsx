import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArenaHosting - Hospedagem Premium de Servidores',
  description: 'Hospedagem profissional de sites, bots, jogos e servidores dedicados. Performance superior, uptime garantido e suporte especializado.',
  keywords: 'hospedagem, servidores, VPS, dedicado, MTA, SAMP, TeamSpeak, bots',
  authors: [{ name: 'ArenaHosting' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0052CC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-[#0D0D0D] text-white antialiased flex flex-col min-h-screen justify-center items-center`}>
        <Header />
        <main className="flex-1 w-full flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}