import { PlanGrid } from "@/components/hosting/PlanGrid";
import { ServiceHero } from "@/components/hosting/ServiceHero";
import { ServiceFeatures } from "@/components/hosting/ServiceFeatures";
import { Globe, Shield, Zap, Headphones, Database, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospedagem de Sites Premium - ArenaHosting",
  description:
    "Hospedagem de sites rápida, segura e confiável. SSL grátis, domínio incluso e suporte 24/7. Planos a partir de R$ 9,90/mês.",
};

const plans = [
  {
    name: "Plano Simples",
    price: "R$ 14,99",
    period: "/mês",
    description: "Ideal para sites pessoais e pequenos projetos",
    features: [
      "10GB SSD NVMe",
      "1 Site/Domínio",
      "Subdomínios Ilimitados",
      "3 Contas de E-mail",
      "SSL Grátis",
      "Backup Semanal",
      "Suporte 24/7",
      "Liberação imediata",
    ],
    badge: "Mais Econômico",
    gradient: "from-[#00CFFF] to-[#0052CC]",
    link: "https://financeiro.arenahosting.com.br/store/cpanel/plano-basico",
  },
  {
    name: "Plano Médio",
    price: "R$ 34,99",
    period: "/mês",
    description: "Para sites comerciais e blogs profissionais",
    features: [
      "15GB SSD NVMe",
      "3 Site/Domínio",
      "Subdomínios Ilimitados",
      "5 Contas de E-mail",
      "SSL Grátis",
      "Ferramenta de criação de sites",
      "Instalador automático de apps",
      "Backup Semanal",
      "Suporte 24/7",
      "Liberação imediata",
    ],
    badge: "Recomendado",
    gradient: "from-[#FF4D5A] to-[#FF6B00]",
    link: "https://financeiro.arenahosting.com.br/store/cpanel/plano-semi-profissional",
  },
  {
    name: "Plano Plus",
    price: "R$ 49,99",
    period: "/mês",
    description: "Máximo desempenho para e-commerce e portais",
    features: [
      "20GB SSD NVMe",
      "Site/Domínio Ilimitados",
      "Subdomínios Ilimitados",
      "Contas de E-mail Ilimitadas",
      "SSL Grátis",
      "Ferramenta de criação de sites",
      "Instalador automático de apps",
      "Backup Semanal",
      "Suporte 24/7",
      "Liberação imediata",
    ],
    badge: "Mais Avançado",
    gradient: "from-[#0052CC] to-[#00CFFF]", 
    link: "https://financeiro.arenahosting.com.br/store/cpanel/plano-profissional-1",
  },
];

const features = [
  {
    icon: Shield,
    title: "Proteção Avançada",
    description:
      "Todos os planos incluem proteção DDoS e firewall robusto",
  },
  {
    icon: Shield,
    title: "SSL Gratuito",
    description:
      "Certificado SSL Let's Encrypt instalado automaticamente em todos os sites",
  },
  {
    icon: Zap,
    title: "SSD NVMe",
    description:
      "Armazenamento ultra-rápido para máxima performance do seu site",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description:
      "Equipe técnica 24/7 especializada em WordPress, PrestaShop e mais",
  },
  {
    icon: Database,
    title: "Backup Automático",
    description: "Backups diários automáticos com restore em um clique",
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    description: "Garantia de disponibilidade com SLA e monitoramento 24/7",
  },
];

export default function HospedagemSitesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Hospedagem de Sites Premium"
        subtitle="Sites rápidos, seguros e sempre online"
        description="A hospedagem perfeita para seu site WordPress, e-commerce ou portal corporativo. Performance garantida com SSD NVMe, SSL gratuito e suporte especializado."
        icon={Globe}
      />

      <PlanGrid plans={plans} />

      <ServiceFeatures
        title="Recursos Inclusos"
        subtitle="Tudo que você precisa para um site profissional"
        features={features}
      />
    </div>
  );
}
