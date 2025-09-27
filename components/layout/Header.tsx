'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Server, Globe, Gamepad2, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Hospedagens',
      icon: Globe,
      items: [
        { name: 'Hospedagem de Sites', href: '/hospedagens/sites' },
        { name: 'Hospedagem de Bots', href: '/hospedagens/bots' },
        { name: 'Hospedagem TeamSpeak', href: '/hospedagens/teamspeak' },
      ]
    },
    {
      title: 'Jogos',
      icon: Gamepad2,
      items: [
        { name: 'MTA SA', href: '/jogos/mta' },
        { name: 'SAMP', href: '/jogos/samp' },
        { name: 'OpenMP', href: '/jogos/openmp' },
      ]
    },
    {
      title: 'Servidores',
      icon: Server,
      items: [
        { name: 'VPS Brasil', href: '/servidores/vps-brasil' },
        { name: 'VPS FiveM', href: '/servidores/vps-fivem' },
        { name: 'Servidor Dedicado', href: '/servidores/dedicado' },
      ]
    },
    {
      title: 'Revendas',
      icon: Users,
      items: [
        { name: 'Revenda de Bots', href: '/revendas/bots' },
        { name: 'Revenda de Jogos', href: '/revendas/jogos' },
        { name: 'Revenda cPanel', href: '/revendas/cpanel' },
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#333333]' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 cta-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Server className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-[#00CFFF] transition-colors">
              Arena Hosting
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-[#00CFFF] transition-colors py-2">
                  <menu.icon className="w-4 h-4" />
                  <span className="font-medium">{menu.title}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {activeDropdown === menu.title && (
                  <div className="absolute top-full left-0 w-64 mt-2 card-dark rounded-lg shadow-2xl border border-[#333333] py-2 animate-fade-in">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-[#B3B3B3] hover:text-white hover:bg-[#222222] transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/sobre" className="text-white hover:text-[#00CFFF] transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-white hover:text-[#00CFFF] transition-colors font-medium">
              Contato
            </Link>
            
            <Link
              href="/contato"
              className="cta-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#00CFFF] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden card-dark mt-4 rounded-lg border border-[#333333] animate-fade-in">
            <div className="py-4">
              {menuItems.map((menu) => (
                <div key={menu.title} className="mb-4">
                  <div className="flex items-center space-x-2 px-4 py-2 text-white font-medium">
                    <menu.icon className="w-4 h-4" />
                    <span>{menu.title}</span>
                  </div>
                  <div className="pl-8">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-[#B3B3B3] hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="border-t border-[#333333] pt-4 px-4">
                <Link
                  href="/sobre"
                  className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="/contato"
                  className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                <Link
                  href="/contato"
                  className="inline-block mt-4 cta-gradient text-white px-6 py-2 rounded-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Começar Agora
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;