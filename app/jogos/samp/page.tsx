import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Gamepad2, Shield, Zap, Database, Settings, Headphones } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospedagem SA-MP - Servidores San Andreas Premium | ArenaHosting',
  description: 'Servidores SA-MP confiáveis com baixa latência, proteção DDoS e configuração otimizada. Planos de 50 a 1000 slots.',
};

const plans = [
  {
    name: 'SA-MP Starter',
    price: 'R$ 24,90',
    period: '/mês',
    description: 'Perfeito para começar no SA-MP',
    features: [
      '50 Slots',
      '1GB RAM',
      '1 vCPU',
      'MySQL Básico',
      'Proteção DDoS',
      'Painel Web',
      'Backup Semanal'
    ],
    badge: 'Iniciante',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: '/contratar/samp-starter'
  },
  {
    name: 'SA-MP Basic',
    price: 'R$ 39,90',
    period: '/mês',
    description: 'Para servidores em crescimento',
    features: [
      '100 Slots',
      '2GB RAM',
      '2 vCPUs',
      'MySQL Otimizado',
      'DDoS Protection',
      'Sampctl Incluso',
      'Backup Diário',
      'Filterscripts'
    ],
    badge: 'Popular',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/samp-basic'
  },
  {
    name: 'SA-MP Standard',
    price: 'R$ 64,90',
    period: '/mês',
    description: 'Melhor custo-benefício',
    features: [
      '200 Slots',
      '4GB RAM',
      '3 vCPUs',
      'Database Dedicado',
      'Proteção Avançada',
      'Painel Customizado',
      'Auto-restart',
      'Gamemodes Premium',
      'Suporte Prioritário'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/samp-standard'
  },
  {
    name: 'SA-MP Professional',
    price: 'R$ 99,90',
    period: '/mês',
    description: 'Para servidores estabelecidos',
    features: [
      '300 Slots',
      '6GB RAM',
      '4 vCPUs',
      'Cluster MySQL',
      'SSD NVMe',
      'Redis Cache',
      'Monitoramento 24/7',
      'Scripts Exclusivos',
      'Otimização Completa'
    ],
    badge: 'Pro',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: '/contratar/samp-professional'
  },
  {
    name: 'SA-MP Ultimate',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'Máxima performance SA-MP',
    features: [
      '500 Slots',
      '10GB RAM',
      '6 vCPUs',
      'Database Premium',
      'Servidor Dedicado',
      'CDN Integrado',
      'Load Balancer',
      'Configuração Elite',
      'Gerente de Conta'
    ],
    badge: 'Ultimate',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/samp-ultimate'
  },
  {
    name: 'SA-MP Enterprise',
    price: 'R$ 249,90',
    period: '/mês',
    description: 'Solução empresarial completa',
    features: [
      '1000 Slots',
      '16GB RAM',
      '8 vCPUs',
      'Infraestrutura Exclusiva',
      'Multi-Localização',
      'API Completa',
      'Analytics Premium',
      'Suporte Dedicado 24/7',
      'SLA 99.99%'
    ],
    badge: 'Enterprise',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/samp-enterprise'
  }
];

const features = [
  {
    icon: Gamepad2,
    title: 'Otimização SA-MP',
    description: 'Configuração específica para San Andreas Multiplayer com gamemode e filterscripts otimizados'
  },
  {
    icon: Shield,
    title: 'Anti-Cheat Integrado',
    description: 'Sistema anti-cheat avançado e proteção DDoS específica para servidores SA-MP'
  },
  {
    icon: Zap,
    title: 'Performance Premium',
    description: 'Servidores Intel Xeon com SSD NVMe para eliminar lag e garantir fluidez'
  },
  {
    icon: Database,
    title: 'MySQL Configurado',
    description: 'Banco MySQL pré-configurado com otimizações para sistemas SA-MP'
  },
  {
    icon: Settings,
    title: 'Painel SA-MP',
    description: 'Painel de controle específico com funções administrativas para SA-MP'
  },
  {
    icon: Headphones,
    title: 'Suporte SA-MP',
    description: 'Equipe especializada em desenvolvimento e configuração de servidores SA-MP'
  }
];

export default function JogosSAMPPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Hospedagem SA-MP"
        subtitle="Servidores San Andreas Multiplayer"
        description="Hospedagem especializada para SA-MP com performance otimizada, anti-cheat integrado e suporte técnico especializado. Infraestrutura dedicada para oferecer a melhor experiência aos seus jogadores."
        icon={Gamepad2}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos Especializados SA-MP"
        subtitle="Tudo que seu servidor SA-MP precisa para se destacar"
        features={features}
      />
    </div>
  );
}