import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Mic, Shield, Users, Settings, Headphones, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospedagem TeamSpeak - Servidores de Voz Premium | ArenaHosting',
  description: 'Servidores TeamSpeak 3 de alta qualidade com baixa latência, proteção DDoS e suporte 24/7. Planos de 100 a 500 slots.',
};

const plans = [
  {
    name: 'Plano Básico',
    price: 'R$ 9,99',
    period: '/mês',
    description: 'Perfeito para grupos pequenos',
    features: [
      '100 Slots',
      'Permissões Pré-editadas',
      'Localização Brasil',
      'Anti-DDoS Básico',
      'Datacenter Brasileiro',
      'Suporte 24/7',
      'Proteção Anti-DDoS Gamer'
    ],
    badge: 'Econômico',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: 'https://financeiro.arenahosting.com.br/store/teamspeak/ts-br-plano-01'
  },
  {
    name: 'Plano Essencial',
    price: 'R$ 14,99',
    period: '/mês',
    description: 'Ideal para comunidades médias',
    features: [
      '150 Slots',
      'Permissões Pré-editadas',
      'Localização Brasil',
      'Anti-DDoS Básico',
      'Datacenter Brasileiro',
      'Suporte 24/7',
      'Proteção Anti-DDoS Gamer'
    ],
    badge: 'Mais Popular',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: 'https://financeiro.arenahosting.com.br/store/teamspeak/ts-br-plano-02'
  },
  {
    name: 'Plano Standard',
    price: 'R$ 19,99',
    period: '/mês',
    description: 'Para grandes comunidades e clãs',
    features: [
      '200 Slots',
      'Permissões Pré-editadas',
      'Localização Brasil',
      'Anti-DDoS Básico',
      'Datacenter Brasileiro',
      'Suporte 24/7',
      'Proteção Anti-DDoS Gamer'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: 'https://financeiro.arenahosting.com.br/store/teamspeak/ts-br-plano-03'
  },
  {
    name: 'Plano Ultimate',
    price: 'R$ 24,99',
    period: '/mês',
    description: 'Máximo desempenho profissional',
    features: [
      '250 Slots',
      'Permissões Pré-editadas',
      'Localização Brasil',
      'Anti-DDoS Básico',
      'Datacenter Brasileiro',
      'Suporte 24/7',
      'Proteção Anti-DDoS Gamer'
    ],
    badge: 'Profissional',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: 'https://financeiro.arenahosting.com.br/store/teamspeak/ts-br-plano-04'
  },
  {
    name: 'Plano Premium Plus',
    price: 'R$ 34,99',
    period: '/mês',
    description: 'Para organizações e empresas',
    features: [
      '500 Slots',
      'Permissões Pré-editadas',
      'Localização Brasil',
      'Anti-DDoS Básico',
      'Datacenter Brasileiro',
      'Suporte 24/7',
      'Proteção Anti-DDoS Gamer'
    ],
    badge: 'Enterprise',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: 'https://financeiro.arenahosting.com.br/store/teamspeak/ts-br-plano-05'
  }
];

const features = [
  {
    icon: Mic,
    title: 'Alta Qualidade de Áudio',
    description: 'Codec Opus premium e baixa latência para comunicação cristalina'
  },
  {
    icon: Shield,
    title: 'Proteção DDoS',
    description: 'Proteção avançada contra ataques DDoS e alta disponibilidade'
  },
  {
    icon: Users,
    title: 'Gerenciamento Avançado',
    description: 'Sistema completo de permissões e grupos de usuários'
  },
  {
    icon: Settings,
    title: 'Configuração Flexível',
    description: 'Configurações personalizáveis e plugins para suas necessidades'
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Equipe técnica especializada em TeamSpeak 3 e comunicação'
  },
  {
    icon: Award,
    title: 'Uptime Garantido',
    description: '99.9% de disponibilidade com SLA e monitoramento contínuo'
  }
];

export default function HospedagemTeamSpeakPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Hospedagem TeamSpeak"
        subtitle="Servidores de voz premium"
        description="Servidores TeamSpeak 3 de alta qualidade com baixa latência, proteção DDoS e configuração personalizada. Ideal para games, comunidades e empresas que precisam de comunicação por voz confiável."
        icon={Mic}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos Premium"
        subtitle="Tudo que você precisa para uma comunicação perfeita"
        features={features}
      />
    </div>
  );
}