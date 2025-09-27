import { PlanGrid } from '@/components/hosting/PlanGrid';
import { ServiceHero } from '@/components/hosting/ServiceHero';
import { ServiceFeatures } from '@/components/hosting/ServiceFeatures';
import { Bot, Shield, Zap, Code, Database, Headphones } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospedagem de Bots - Discord, Telegram e Mais | ArenaHosting',
  description: 'Hospedagem especializada para bots Discord, Telegram, WhatsApp e outros. Uptime 24/7, suporte a Node.js, Python e mais.',
};

const plans = [
  {
    name: 'Bot Starter',
    price: 'R$ 9,99',
    period: '/mês',
    description: 'Ideal para bots pequenos e testes',
    features: [
      '512MB RAM',
      '1 vCPU',
      'SSD Ilimitado',
      'Node.js, Python, Java',
      'Uptime 99.9%',
      'MySQL Incluso',
      'Transferência Ilimitada',
      'Painel Pterodactyl',
      'Suporte 24/7'
    ],
    badge: 'Mais Econômico',
    gradient: 'from-[#00CFFF] to-[#0052CC]',
    link: 'https://financeiro.arenahosting.com.br/store/bot-discord/plano-basico'
  },
  {
    name: 'Bot Professional',
    price: 'R$ 14,99',
    period: '/mês',
    description: 'Para bots com médio volume de usuários',
    features: [
      '1GB RAM',
      '2 vCPU',
      'SSD Ilimitado',
      'Node.js, Python, Java',
      'Uptime 99.9%',
      'MySQL Incluso',
      'Transferência Ilimitada',
      'Painel Pterodactyl',
      'Suporte 24/7'
    ],
    badge: 'Recomendado',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]',
    link: 'https://financeiro.arenahosting.com.br/store/bot-discord/bot-discord-plano-plano-semi-profissional'
  },
  {
    name: 'Bot Enterprise',
    price: 'R$ 19,99',
    period: '/mês',
    description: 'Máximo desempenho para bots populares',
    features: [
      '2GB RAM',
      '2.5 vCPU',
      'SSD Ilimitado',
      'Node.js, Python, Java',
      'Uptime 99.9%',
      'MySQL Incluso',
      'Transferência Ilimitada',
      'Painel Pterodactyl',
      'Suporte 24/7'
    ],
    badge: 'Mais Poderoso',
    gradient: 'from-[#0052CC] to-[#00CFFF]',
    link: 'https://financeiro.arenahosting.com.br/store/bot-discord/plano-profissional'
  }
];

const features = [
  {
    icon: Bot,
    title: 'Multi-Plataforma',
    description: 'Suporte completo para Discord, Telegram, WhatsApp, Twitch e outras plataformas'
  },
  {
    icon: Shield,
    title: 'Sempre Online',
    description: 'Auto-restart automático e monitoramento 24/7 para garantir que seu bot nunca pare'
  },
  {
    icon: Code,
    title: 'Linguagens Suportadas',
    description: 'Node.js, Python, Java e LavaLink, caso precise de alguma linguagem específica, fale com nosso suporte'
  },
  {
    icon: Zap,
    title: 'Deploy Rápido',
    description: 'Deploy em segundos via Git, FTP ou painel web intuitivo'
  },
  {
    icon: Database,
    title: 'Banco de Dados Incluso',
    description: 'Todos os planos incluem MySQL para armazenar dados do seu bot'
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Equipe técnica especializada e Monitoramento 24/7 para ajudar com qualquer dúvida ou problema'
  }
];

export default function HospedagemBotsPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServiceHero
        title="Hospedagem de Bots"
        subtitle="Bots sempre online e performantes"
        description="Hospedagem especializada para bots Discord, Telegram, WhatsApp e mais. Infraestrutura otimizada com auto-restart, monitoramento 24/7 e suporte a todas as linguagens de programação."
        icon={Bot}
      />
      
      <PlanGrid plans={plans} />
      
      <ServiceFeatures
        title="Recursos Especializados"
        subtitle="Tudo que seu bot precisa para funcionar perfeitamente"
        features={features}
      />
    </div>
  );
}