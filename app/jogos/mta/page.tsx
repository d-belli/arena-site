import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Gamepad2, Shield, Zap, Database, Settings, Headphones } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospedagem MTA SA - Servidores Premium | ArenaHosting',
  description: 'Servidores MTA SA otimizados com baixa latência, proteção DDoS e suporte especializado. Planos de 25 a 500 slots.',
};

const plans = [
  {
    name: 'Plano Dev',
    price: 'R$ 14,99',
    period: '/mês',
    description: 'Ideal para servidores em desenvolvimento',
    features: [
      '25 Slots',
      '1GB RAM',
      '1 vCPU',
      '5GB Armazenamento SSD',
      'MySQL Incluso',
      'Proteção DDoS',
      'Painel Pterodactyl',
      '1 Backup incluso',
      'Acelerador e Compactador',
      'Sistema Linux',
      'Ping Médio 10ms ~ 60ms',
      'Suporte 24/7'
    ],
    badge: 'Desenvolvimento',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: 'https://financeiro.arenahosting.com.br/store/ptero-mta/mtasa-br-25-slots-ptero'
  },
  {
    name: 'Plano Básico',
    price: 'R$ 19,99',
    period: '/mês',
    description: 'Para servidores de pequeno porte',
    features: [
      '50 Slots',
      '1GB RAM',
      '1 vCPU',
      '5GB Armazenamento SSD',
      'MySQL Incluso',
      'Proteção DDoS',
      'Painel Pterodactyl',
      '1 Backup incluso',
      'Acelerador e Compactador',
      'Sistema Linux',
      'Suporte 24/7'
    ],
    badge: 'Básico',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: 'https://financeiro.arenahosting.com.br/store/ptero-mta/mtasa-br-50-slots-ptero'
  },
  {
    name: 'Plano Médio',
    price: 'R$ 24,99',
    period: '/mês',
    description: 'Para servidores de médio porte',
    features: [
      '100 Slots',
      '2GB RAM',
      '1 vCPU',
      '5GB Armazenamento SSD',
      'MySQL Incluso',
      'Proteção DDoS',
      'Painel Pterodactyl',
      '1 Backup incluso',
      'Acelerador e Compactador',
      'Sistema Linux',
      'Suporte 24/7'
    ],
    badge: 'Médio',
    gradient: 'from-[#0052CC] to-[#00CFFF]', 
    link: 'https://financeiro.arenahosting.com.br/store/ptero-mta/mtasa-br-100-slots-ptero'
  },
  {
    name: 'Plano Avançado',
    price: 'R$ 34,99',
    period: '/mês',
    description: 'Para servidores de médio/grande porte',
    features: [
      '150 Slots',
      '3GB RAM',
      '2 vCPU',
      '5GB Armazenamento SSD',
      'MySQL Incluso',
      'Proteção DDoS',
      'Painel Pterodactyl',
      '2 Backup incluso',
      'Acelerador e Compactador',
      'Sistema Linux',
      'Suporte 24/7'
    ],
    badge: 'Avançado',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]',
    link: 'https://financeiro.arenahosting.com.br/store/ptero-mta/mtasa-br-150-slots-ptero'
  },
  {
    name: 'Plano Semi-Profissional',
    price: 'R$ 54,99',
    period: '/mês',
    description: 'Para servidores de grande porte',
    features: [
      '250 Slots',
      '3GB RAM',
      '3 vCPU',
      '5GB Armazenamento SSD',
      'MySQL Incluso',
      'Proteção DDoS',
      'Painel Pterodactyl',
      '3 Backup incluso',
      'Acelerador e Compactador',
      'Sistema Linux',
      'Suporte 24/7'
    ],
    badge: 'Semi-Pro',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: 'https://financeiro.arenahosting.com.br/store/ptero-mta/mtasa-br-250-slots-ptero'
  },
  {
    name: 'Plano Profissional',
    price: 'R$ 84,99',
    period: '/mês',
    description: 'Para projetos empresariais',
    features: [
      '500 Slots',
      '4GB RAM',
      '5 vCPU',
      '5GB Armazenamento SSD',
      'MySQL Incluso',
      'Proteção DDoS',
      'Painel Pterodactyl',
      '4 Backup incluso',
      'Acelerador e Compactador',
      'Sistema Linux',
      'Suporte 24/7'
    ],
    badge: 'Pro',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: 'https://financeiro.arenahosting.com.br/store/ptero-mta/mtasa-br-500-slots-ptero'
  }
];

const features = [
  {
    icon: Gamepad2,
    title: 'Otimização MTA',
    description: 'Servidores especificamente otimizados para Multi Theft Auto com configurações premium'
  },
  {
    icon: Shield,
    title: 'Proteção DDoS',
    description: 'Proteção avançada contra ataques DDoS específicos para servidores de jogos'
  },
  {
    icon: Zap,
    title: 'Ultra Performance',
    description: 'Processadores Intel Xeon e SSD NVMe para mínima latência e máxima performance'
  },
  {
    icon: Database,
    title: 'MySQL Otimizado',
    description: 'Banco de dados MySQL para armazenar dados do servidor com alta performance'
  },
  {
    icon: Settings,
    title: 'Painel Pterodactyl',
    description: 'Painel de controle intuitivo e com design moderno para gerenciar seu servidor facilmente'
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Equipe técnica com experiência em desenvolvimento e administração MTA'
  }
];

export default function JogosMTAPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Hospedagem MTA SA"
        subtitle="Servidores otimizados para Multi Theft Auto"
        description="Hospedagem especializada para servidores MTA com máxima performance, baixa latência e proteção DDoS. Infraestrutura otimizada especificamente para Multi Theft Auto com suporte técnico especializado."
        icon={Gamepad2}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos Especializados MTA"
        subtitle="Tudo que seu servidor MTA precisa para ser um sucesso"
        features={features}
      />
    </div>
  );
}