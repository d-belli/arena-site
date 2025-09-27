import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Server, Shield, Gamepad2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VPS FiveM - Servidores Otimizados para GTA V | ArenaHosting',
  description: 'VPS especializados para FiveM com configuração otimizada, suporte a mods e performance premium.',
};

const plans = [
  {
    name: 'FiveM Starter',
    price: 'R$ 89,90',
    period: '/mês',
    description: 'Perfeito para começar no FiveM',
    features: [
      '8GB RAM DDR4',
      '4 vCPUs',
      '100GB SSD NVMe',
      'FiveM Pré-instalado',
      '32 Slots Recomendados',
      'MySQL Incluso',
      'Painel FiveM'
    ],
    badge: 'Iniciante',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: '/contratar/fivem-starter'
  },
  {
    name: 'FiveM Professional',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'Para servidores estabelecidos',
    features: [
      '12GB RAM DDR4',
      '6 vCPUs',
      '200GB SSD NVMe',
      'FiveM Optimized',
      '64 Slots Recomendados',
      'Database Premium',
      'Mod Manager',
      'Anti-Cheat Integrado'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/fivem-professional'
  },
  {
    name: 'FiveM Enterprise',
    price: 'R$ 249,90',
    period: '/mês',
    description: 'Máxima performance FiveM',
    features: [
      '16GB RAM DDR4',
      '8 vCPUs',
      '400GB SSD NVMe',
      'FiveM Enterprise',
      '128 Slots Recomendados',
      'Cluster Database',
      'Resource Manager',
      'DDoS Protection',
      'Suporte Prioritário'
    ],
    badge: 'Enterprise',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/fivem-enterprise'
  }
];

const features = [
  {
    icon: Gamepad2,
    title: 'Otimização FiveM',
    description: 'Configuração específica para FiveM com ajustes de performance e compatibilidade'
  },
  {
    icon: Shield,
    title: 'Anti-Cheat Integrado',
    description: 'Sistema anti-cheat avançado para manter seu servidor protegido'
  },
  {
    icon: Server,
    title: 'Hardware Dedicado',
    description: 'Recursos dedicados com prioridade para máxima estabilidade'
  }
];

export default function VPSFiveMPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="VPS FiveM Otimizado"
        subtitle="Servidores especializados para GTA V"
        description="VPS otimizados especificamente para FiveM com configuração premium, anti-cheat integrado e suporte especializado."
        icon={Gamepad2}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos FiveM"
        subtitle="Tudo que seu servidor FiveM precisa"
        features={features}
      />
    </div>
  );
}