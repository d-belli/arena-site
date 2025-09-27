import Link from "next/link";
import Image from "next/image";
import {
  Server,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#222222]">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo ArenaHosting" width={150} height={50} className="h-10 w-auto" priority />
            </div>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">
              Hospedagem premium com performance superior, uptime garantido e
              suporte especializado para todos os seus projetos.
            </p>
            <div className="flex space-x-4 justify-start">
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex justify-center mt-4">
              <iframe
                src="https://status.arenahosting.com.br/badge?theme=dark"
                width="250"
                height="30"
                frameBorder="0"
                scrolling="no"
                style={{ colorScheme: "normal" }}
              ></iframe>
            </div>
          </div>

          {/* Hospedagens */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Hospedagens</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hospedagens/sites"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  Hospedagem de Sites
                </Link>
              </li>
              <li>
                <Link
                  href="/hospedagens/bots"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  Hospedagem de Bots
                </Link>
              </li>
              <li>
                <Link
                  href="/hospedagens/teamspeak"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  Hospedagem TeamSpeak
                </Link>
              </li>
            </ul>
          </div>

          {/* Jogos & Servidores */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Jogos & Servidores</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/jogos/mta"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  MTA San Andreas
                </Link>
              </li>
              <li>
                <Link
                  href="/jogos/samp"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  SA-MP
                </Link>
              </li>
              <li>
                <Link
                  href="/jogos/openmp"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  OpenMP
                </Link>
              </li>
              <li>
                <Link
                  href="/servidores/vps-brasil"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  VPS Brasil
                </Link>
              </li>
              <li>
                <Link
                  href="/servidores/dedicado"
                  className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors text-sm"
                >
                  Servidor Dedicado
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-[#B3B3B3] text-sm">
                <Mail className="w-4 h-4" />
                <span>contato@arenahosting.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-[#B3B3B3] text-sm">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-2 text-[#B3B3B3] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contato"
                className="text-[#00CFFF] hover:text-white transition-colors text-sm font-medium"
              >
                Formulário de Contato →
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-8 mt-8 border-t border-[#222222] space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-[#B3B3B3]">
            <p>&copy; 2024 ArenaHosting. Todos os direitos reservados.</p>
            <div className="flex space-x-4">
              <Link
                href="/termos"
                className="hover:text-[#00CFFF] transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/privacidade"
                className="hover:text-[#00CFFF] transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/sobre"
                className="hover:text-[#00CFFF] transition-colors"
              >
                Sobre Nós
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
