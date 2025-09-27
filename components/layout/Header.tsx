/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Gamepad2, Server, Users } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    title: "Hospedagens",
    icon: Globe,
    items: [
      {
        name: "Hospedagem de Sites",
        href: "/hospedagens/sites",
        description: "Sites rápidos e seguros",
      },
      {
        name: "Hospedagem de Bots",
        href: "/hospedagens/bots",
        description: "Bots Discord, Telegram e mais",
      },
      {
        name: "Hospedagem TeamSpeak",
        href: "/hospedagens/teamspeak",
        description: "Servidores de voz premium",
      },
    ],
  },
  {
    title: "Jogos",
    icon: Gamepad2,
    items: [
      {
        name: "MTA SA",
        href: "/jogos/mta",
        description: "Servidores MTA otimizados",
      },
      {
        name: "SAMP",
        href: "/jogos/samp",
        description: "Hospedagem SA-MP confiável",
      },
      {
        name: "OpenMP",
        href: "/jogos/openmp",
        description: "Nova geração OpenMP",
      },
    ],
  },
  {
    title: "Servidores",
    icon: Server,
    items: [
      {
        name: "VPS Brasil",
        href: "/servidores/vps-brasil",
        description: "Servidores virtuais no Brasil",
      },
      {
        name: "VPS FiveM",
        href: "/servidores/vps-fivem",
        description: "Otimizados para FiveM",
      },
      {
        name: "Servidor Dedicado",
        href: "/servidores/dedicado",
        description: "Máxima performance",
      },
    ],
  },
  {
    title: "Revendas",
    icon: Users,
    items: [
      {
        name: "Revenda de Bots",
        href: "/revendas/bots",
        description: "Revenda hospedagem de bots",
      },
      {
        name: "Revenda de Jogos",
        href: "/revendas/jogos",
        description: "Revenda servidores de jogos",
      },
      {
        name: "Revenda cPanel",
        href: "/revendas/cpanel",
        description: "Revenda hospedagem cPanel",
      },
    ],
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222222] bg-[#0D0D0D]/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo ArenaHosting"
            width={100}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((menu) => (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#1A1A1A] text-white">
                  <menu.icon className="w-4 h-4 mr-2" />
                  {menu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {menu.items.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1A1A1A] hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none text-white">
                            {item.name}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-[#B3B3B3]">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
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
            {menuItems.map((menu) => (
              <div key={menu.title} className="space-y-2">
                <h3 className="text-sm font-semibold text-[#B3B3B3] uppercase tracking-wider">
                  {menu.title}
                </h3>
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-white hover:text-[#00CFFF] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}

            <div className="pt-4 space-y-2">
              <Link href="/contato" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-[#1A1A1A]"
                >
                  Contato
                </Button>
              </Link>
              <Link href="/sobre" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-[#1A1A1A]"
                >
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
