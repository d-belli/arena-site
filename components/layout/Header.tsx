/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Server, Globe, Gamepad2, Package } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const hostingItems = [
  { title: 'Hospedagem de Sites', href: '/hospedagens/sites', description: 'Sites rápidos e seguros' },
  { title: 'Hospedagem de Bots', href: '/hospedagens/bots', description: 'Bots Discord, Telegram e mais' },
  { title: 'Hospedagem TeamSpeak', href: '/hospedagens/teamspeak', description: 'Servidores de voz premium' },
];

const gamesItems = [
  { title: 'MTA San Andreas', href: '/jogos/mta', description: 'Servidores MTA otimizados' },
  { title: 'SA-MP', href: '/jogos/samp', description: 'Hospedagem SA-MP confiável' },
  { title: 'OpenMP', href: '/jogos/openmp', description: 'Nova geração OpenMP' },
];

const serversItems = [
  { title: 'VPS Brasil', href: '/servidores/vps-brasil', description: 'Servidores virtuais no Brasil' },
  { title: 'VPS FiveM', href: '/servidores/vps-fivem', description: 'Otimizados para FiveM' },
  { title: 'Servidor Dedicado', href: '/servidores/dedicado', description: 'Máxima performance' },
];

const resellerItems = [
  { title: 'Revenda de Bots', href: '/revendas/bots', description: 'Revenda hospedagem de bots' },
  { title: 'Revenda de Jogos', href: '/revendas/jogos', description: 'Revenda servidores de jogos' },
  { title: 'Revenda cPanel', href: '/revendas/cpanel', description: 'Revenda hospedagem cPanel' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222222] bg-[#0D0D0D]/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Image src="/logo.png" alt="Logo ArenaHosting" width={100} height={40} className="h-10 w-auto" priority />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-[#1A1A1A] text-white">
                <Globe className="w-4 h-4 mr-2" />
                Hospedagens
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {hostingItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1A1A1A] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-white">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#B3B3B3]">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-[#1A1A1A] text-white">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Jogos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {gamesItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1A1A1A] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-white">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#B3B3B3]">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-[#1A1A1A] text-white">
                <Server className="w-4 h-4 mr-2" />
                Servidores
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {serversItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1A1A1A] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-white">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#B3B3B3]">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-[#1A1A1A] text-white">
                <Package className="w-4 h-4 mr-2" />
                Revendas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {resellerItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1A1A1A] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none text-white">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#B3B3B3]">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contato">
            <Button variant="ghost" className="text-white hover:bg-[#1A1A1A]">
              Contato
            </Button>
          </Link>
          <Link href="/sobre">
            <Button variant="ghost" className="text-white hover:bg-[#1A1A1A]">
              Sobre Nós
            </Button>
          </Link>
          <Button className="gradient-cta text-white font-semibold px-6">
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#222222] bg-[#0D0D0D]/95 backdrop-blur-md">
          <div className="container px-4 py-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#B3B3B3] uppercase tracking-wider">Hospedagens</h3>
              {hostingItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#B3B3B3] uppercase tracking-wider">Jogos</h3>
              {gamesItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#B3B3B3] uppercase tracking-wider">Servidores</h3>
              {serversItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#B3B3B3] uppercase tracking-wider">Revendas</h3>
              {resellerItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-4 space-y-2">
              <Link href="/contato" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#1A1A1A]">
                  Contato
                </Button>
              </Link>
              <Link href="/sobre" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#1A1A1A]">
                  Sobre Nós
                </Button>
              </Link>
              <Button className="w-full gradient-cta text-white font-semibold">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}