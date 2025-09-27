import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Server, Shield, Zap, Database, Settings, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VPS Brasil - Servidores Virtuais Premium | ArenaHosting',
  description: 'VPS no Brasil com SSD NVMe, alta performance e suporte 24/7. Planos flexíveis de 1GB a 32GB RAM.',
};

const plans = [
  {
    name: 'VPS Micro',
    price: 'R$ 29,90',
    period: '/mês',
    description: 'Ideal para projetos pequenos',
    features: [
      '1GB RAM DDR4',
      '1 vCPU',
      '25GB SSD NVMe',
      '1TB Tráfego',
      'IP Dedicado',
      'Root Access'
    ],
    badge: 'Econômico',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: '/contratar/vps-micro'
  },
  {
    name: 'VPS Basic',
    price: 'R$ 49,90',
    period: '/mês',
    description: 'Para aplicações médias',
    features: [
      '2GB RAM DDR4',
      '2 vCPUs',
      '50GB SSD NVMe',
      '2TB Tráfego',
      'IP Dedicado',
      'Painel Plesk',
      'Backup Semanal'
    ],
    badge: 'Popular',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/vps-basic'
  },
  {
    name: 'VPS Standard',
    price: 'R$ 89,90',
    period: '/mês',
    description: 'Equilibrio perfeito',
    features: [
      '4GB RAM DDR4',
      '3 vCPUs',
      '100GB SSD NVMe',
      '5TB Tráfego',
      'IP Dedicado',
      'Plesk Premium',
      'Backup Diário',
      'Snapshot Gratuito'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/vps-standard'
  },
  {
    name: 'VPS Professional',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'Alta performance garantida',
    features: [
      '8GB RAM DDR4',
      '4 vCPUs',
      '200GB SSD NVMe',
      '10TB Tráfego',
      'IP Dedicado',
      'Managed Support',
      'Auto-Backup',
      'Load Balancer',
      'Monitoramento 24/7'
    ],
    badge: 'Pro',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: '/contratar/vps-professional'
  },
  {
    name: 'VPS Enterprise',
    price: 'R$ 249,90',
    period: '/mês',
    description: 'Para projetos críticos',
    features: [
      '16GB RAM DDR4',
      '6 vCPUs',
      '400GB SSD NVMe',
      'Tráfego Ilimitado',
      'Multiple IPs',
      'Gerenciamento Completo',
      'Backup Redundante',
      'Firewall Avançado',
      'SLA 99.99%'
    ],
    badge: 'Enterprise',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/vps-enterprise'
  },
  {
    name: 'VPS Ultimate',
    price: 'R$ 399,90',
    period: '/mês',
    description: 'Máximo poder computacional',
    features: [
      '32GB RAM DDR4',
      '8 vCPUs',
      '800GB SSD NVMe',
      'Tráfego Ilimitado',
      'IPs Dedicados',
      'White Glove Support',
      'Cluster Backup',
      'DDoS Protection Premium',
      'Gerente de Conta'
    ],
    badge: 'Ultimate',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/vps-ultimate'
  }
];

const features = [
  {
    icon: Server,
    title: 'Hardware Premium',
    description: 'Servidores Intel Xeon com SSD NVMe para máxima performance e confiabilidade'
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Firewall configurável, proteção DDoS e isolamento completo entre VPS'
  },
  {
    icon: Zap,
    title: 'Deploy Instantâneo',
    description: 'Seu VPS ativo em menos de 60 segundos com OS pré-configurados'
  },
  {
    icon: Database,
    title: 'Backup Automático',
    description: 'Snapshots automáticos e backups incrementais para proteção total'
  },
  {
    icon: Settings,
    title: 'Root Access',
    description: 'Controle total com acesso root e liberdade para instalar qualquer software'
  },
  {
    icon: Globe,
    title: 'Localização Brasil',
    description: 'Datacenters em São Paulo para menor latência e melhor performance'
  }
];

export default function VPSBrasilPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="VPS Brasil Premium"
        subtitle="Servidores virtuais de alta performance"
        description="VPS no Brasil com SSD NVMe, processadores Intel Xeon e conectividade premium. Controle total, performance garantida e suporte especializado 24/7."
        icon={Server}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos Premium VPS"
        subtitle="Tecnologia de ponta para seus projetos mais exigentes"
        features={features}
      />
    </div>
  );
}