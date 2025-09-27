import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Gamepad2, Shield, Zap, Database, Settings, Headphones } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospedagem OpenMP - Nova Geração SA-MP | ArenaHosting',
  description: 'Servidores Open Multiplayer (OpenMP) de última geração. Performance superior ao SA-MP clássico com recursos modernos.',
};

const plans = [
  {
    name: 'OpenMP Basic',
    price: 'R$ 34,90',
    period: '/mês',
    description: 'Entrada no futuro do SA-MP',
    features: [
      '50 Slots',
      '2GB RAM',
      '2 vCPUs',
      'OpenMP Latest',
      'MySQL 8.0',
      'Proteção DDoS',
      'Painel Moderno'
    ],
    badge: 'Nova Geração',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: '/contratar/openmp-basic'
  },
  {
    name: 'OpenMP Standard',
    price: 'R$ 54,90',
    period: '/mês',
    description: 'Performance moderna otimizada',
    features: [
      '100 Slots',
      '4GB RAM',
      '3 vCPUs',
      'OpenMP Stable',
      'Database Premium',
      'DDoS Protection Pro',
      'Compatibility Layer',
      'Scripts Modernos'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/openmp-standard'
  },
  {
    name: 'OpenMP Professional',
    price: 'R$ 89,90',
    period: '/mês',
    description: 'Máximo aproveitamento OpenMP',
    features: [
      '200 Slots',
      '6GB RAM',
      '4 vCPUs',
      'Build Customizada',
      'Cluster Database',
      'SSD NVMe Premium',
      'Memory Optimization',
      'Plugin System',
      'Suporte Prioritário'
    ],
    badge: 'Pro',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/openmp-professional'
  },
  {
    name: 'OpenMP Ultimate',
    price: 'R$ 139,90',
    period: '/mês',
    description: 'Tecnologia de ponta OpenMP',
    features: [
      '400 Slots',
      '8GB RAM',
      '6 vCPUs',
      'OpenMP Edge',
      'Multi-Threading',
      'Advanced Scripting',
      'Real-time Analytics',
      'Custom Builds',
      'Development Support'
    ],
    badge: 'Ultimate',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: '/contratar/openmp-ultimate'
  },
  {
    name: 'OpenMP Enterprise',
    price: 'R$ 199,90',
    period: '/mês',
    description: 'Solução empresarial completa',
    features: [
      '800 Slots',
      '12GB RAM',
      '8 vCPUs',
      'Infraestrutura Dedicada',
      'Source Code Access',
      'Custom Features',
      'Priority Support',
      'Development Team',
      'SLA 99.99%'
    ],
    badge: 'Enterprise',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    name: 'OpenMP Extreme',
    price: 'R$ 299,90',
    period: '/mês',
    description: 'Máximo poder OpenMP',
    features: [
      '1000+ Slots',
      '16GB RAM',
      '12 vCPUs',
      'Dedicated Hardware',
      'Custom Engine Builds',
      'Advanced Networking',
      'Multi-Region Deploy',
      'Dedicated DevOps',
      'Full Source License'
    ],
    badge: 'Extreme',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/openmp-extreme'
  }
];

const features = [
  {
    icon: Gamepad2,
    title: 'OpenMP Nativo',
    description: 'Plataforma Open Multiplayer nativa com performance superior ao SA-MP tradicional'
  },
  {
    icon: Shield,
    title: 'Segurança Moderna',
    description: 'Sistema de segurança atualizado com proteção contra exploits modernos'
  },
  {
    icon: Zap,
    title: 'Performance Superior',
    description: 'Arquitetura otimizada com multi-threading e gerenciamento de memória aprimorado'
  },
  {
    icon: Database,
    title: 'Compatibilidade Total',
    description: 'Compatível com scripts SA-MP existentes e recursos modernos exclusivos'
  },
  {
    icon: Settings,
    title: 'API Avançada',
    description: 'API moderna com recursos avançados para desenvolvimento de gamemodes'
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Equipe técnica especializada na nova tecnologia OpenMP'
  }
];

export default function JogosOpenMPPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Hospedagem OpenMP"
        subtitle="Nova geração do San Andreas Multiplayer"
        description="Hospedagem especializada para Open Multiplayer (OpenMP), a evolução moderna do SA-MP. Performance superior, recursos avançados e total compatibilidade com scripts existentes."
        icon={Gamepad2}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos de Nova Geração"
        subtitle="Tecnologia moderna para servidores do futuro"
        features={features}
      />
    </div>
  );
}