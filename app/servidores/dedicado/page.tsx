import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Server, Shield, Zap, Database, Settings, Award, Clock, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servidor Dedicado - Máxima Performance | ArenaHosting',
  description: 'Servidores dedicados com hardware premium, conectividade de alta velocidade e suporte 24/7. Máximo controle e performance.',
};

const plans = [
  {
    name: 'Dedicated Entry',
    price: 'R$ 399,90',
    period: '/mês',
    description: 'Entrada no mundo dedicado',
    features: [
      'Intel Xeon E3-1230v6',
      '16GB RAM DDR4',
      '1TB SSD',
      '1Gbps Port',
      'IP Dedicado',
      'IPMI Access',
      'Hardware RAID'
    ],
    badge: 'Starter',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: '/contratar/dedicated-entry'
  },
  {
    name: 'Dedicated Standard',
    price: 'R$ 599,90',
    period: '/mês',
    description: 'Performance equilibrada',
    features: [
      'Intel Xeon E5-2630v4',
      '32GB RAM DDR4',
      '2x 1TB SSD RAID1',
      '1Gbps Port',
      'Multiple IPs',
      'Remote Management',
      'Backup Storage',
      'OS Installation'
    ],
    badge: 'Popular',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/dedicated-standard'
  },
  {
    name: 'Dedicated Professional',
    price: 'R$ 899,90',
    period: '/mês',
    description: 'Alto desempenho garantido',
    features: [
      'Intel Xeon Gold 6248',
      '64GB RAM DDR4',
      '4x 1TB NVMe RAID10',
      '10Gbps Port',
      'Subnet /29',
      'Hardware Firewall',
      'Managed Support',
      'Custom Configuration',
      'SLA 99.9%'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/dedicated-professional'
  },
  {
    name: 'Dedicated Enterprise',
    price: 'R$ 1.299,90',
    period: '/mês',
    description: 'Para aplicações críticas',
    features: [
      'Intel Xeon Platinum 8280',
      '128GB RAM DDR4',
      '8x 2TB NVMe RAID10',
      '10Gbps Redundant',
      'Multiple Subnets',
      'Advanced Firewall',
      'White Glove Support',
      'Custom Hardware',
      'SLA 99.99%'
    ],
    badge: 'Enterprise',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: '/contratar/dedicated-enterprise'
  },
  {
    name: 'Dedicated Ultimate',
    price: 'R$ 1.899,90',
    period: '/mês',
    description: 'Máxima performance disponível',
    features: [
      'Dual Intel Xeon Platinum',
      '256GB RAM DDR4',
      '16x 4TB NVMe',
      '100Gbps Port',
      'BGP Routing',
      'Load Balancer Hardware',
      'Dedicated Support Team',
      'Custom Architecture',
      'SLA 99.999%'
    ],
    badge: 'Ultimate',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/dedicated-ultimate'
  },
  {
    name: 'Dedicated GPU',
    price: 'R$ 2.499,90',
    period: '/mês',
    description: 'Processamento GPU intensivo',
    features: [
      'Dual Intel Xeon Gold',
      '128GB RAM DDR4',
      '4x NVIDIA RTX 4090',
      '8x 2TB NVMe',
      '25Gbps Network',
      'GPU Optimization',
      'ML/AI Ready',
      'Dedicated Engineer',
      'Custom Cooling'
    ],
    badge: 'GPU Power',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: '/contratar/dedicated-gpu'
  },
  {
    name: 'Dedicated HPC',
    price: 'R$ 3.299,90',
    period: '/mês',
    description: 'High Performance Computing',
    features: [
      'AMD EPYC 7763',
      '512GB RAM DDR4',
      '32x 8TB NVMe',
      '200Gbps InfiniBand',
      'Cluster Ready',
      'Parallel Computing',
      'Scientific Computing',
      'Research Support',
      'Custom Solutions'
    ],
    badge: 'HPC',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: '/contratar/dedicated-hpc'
  },
  {
    name: 'Dedicated Custom',
    price: 'Sob Consulta',
    period: '',
    description: 'Solução personalizada',
    features: [
      'Hardware Customizado',
      'RAM até 1TB',
      'Storage Personalizado',
      'Network Customizada',
      'Configuração Única',
      'Suporte Exclusivo',
      'SLA Personalizado',
      'Projeto Sob Medida',
      'Consultoria Inclusa'
    ],
    badge: 'Custom',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: '/contratar/dedicated-custom'
  }
];

const features = [
  {
    icon: Server,
    title: 'Hardware Premium',
    description: 'Processadores Intel Xeon de última geração, RAM DDR4 ECC e storage NVMe de alto desempenho'
  },
  {
    icon: Shield,
    title: 'Segurança Máxima',
    description: 'Firewall dedicado, proteção DDoS avançada e isolamento físico completo'
  },
  {
    icon: Zap,
    title: 'Performance Extrema',
    description: 'Recursos 100% dedicados sem compartilhamento, garantindo máxima performance'
  },
  {
    icon: Database,
    title: 'Storage Premium',
    description: 'SSD NVMe em RAID para máxima velocidade e redundância de dados'
  },
  {
    icon: Settings,
    title: 'Controle Total',
    description: 'Acesso IPMI, console remoto e liberdade para customizar hardware e software'
  },
  {
    icon: Award,
    title: 'SLA Premium',
    description: 'Garantia de uptime até 99.999% com compensação por indisponibilidade'
  },
  {
    icon: Clock,
    title: 'Suporte 24/7',
    description: 'Suporte técnico especializado 24/7 com NOC dedicado e tempo de resposta prioritário'
  },
  {
    icon: Globe,
    title: 'Conectividade Premium',
    description: 'Links redundantes com múltiplos ISPs e BGP para máxima disponibilidade'
  }
];

export default function ServidorDedicadoPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Servidor Dedicado Premium"
        subtitle="Máxima performance e controle total"
        description="Servidores dedicados com hardware de última geração, conectividade premium e suporte especializado. Recursos 100% dedicados para seus projetos mais exigentes."
        icon={Server}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos Dedicados Premium"
        subtitle="Infraestrutura de classe enterprise para máxima performance"
        features={features}
      />
    </div>
  );
}