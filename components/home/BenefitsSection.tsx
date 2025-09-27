import { Shield, Zap, HeartHandshake, Cog, Globe, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Proteção DDoS, firewall inteligente e SSL gratuito para todos os planos.',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Zap,
    title: 'Performance Extrema',
    description: 'SSD NVMe, CDN global e cache otimizado para máxima velocidade.',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    icon: HeartHandshake,
    title: 'Suporte 24/7',
    description: 'Equipe especializada disponível todos os dias, em português.',
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  },
  {
    icon: Cog,
    title: 'Facilidade Total',
    description: 'Painel intuitivo, instalação automática e backups diários.',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]'
  },
  {
    icon: Globe,
    title: 'Infraestrutura Global',
    description: 'Datacenters no Brasil e EUA para menor latência.',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Lock,
    title: 'Privacidade Total',
    description: 'Seus dados protegidos com criptografia de ponta a ponta.',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Por que escolher a
            <span className="text-gradient"> ArenaHosting?</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Oferecemos muito mais que hospedagem. Somos seu parceiro para o sucesso digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-[#1A1A1A] border-[#222222] p-6 card-hover group"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}