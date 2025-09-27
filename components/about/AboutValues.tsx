import { Shield, Zap, Users, Trophy, Globe, Clock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Proteção avançada com monitoramento 24/7 e backups automáticos para garantir a integridade dos seus dados.',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Zap,
    title: 'Performance Excepcional',
    description: 'Infraestrutura otimizada com SSD NVMe, CDN global e cache inteligente para máxima velocidade.',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    icon: Users,
    title: 'Suporte Humanizado',
    description: 'Equipe especializada disponível 24/7 em português, com tempo médio de resposta inferior a 2 minutos.',
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  },
  {
    icon: Trophy,
    title: 'Excelência Comprovada',
    description: 'Mais de 8 anos no mercado com 99.9% de uptime e mais de 10.000 clientes satisfeitos.',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]'
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Datacenters estratégicos no Brasil e EUA para garantir baixa latência em qualquer lugar.',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Clock,
    title: 'Disponibilidade Total',
    description: 'Monitoramento contínuo e equipes de plantão para garantir que seus projetos estejam sempre online.',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  }
];

export function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D]">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            O que nos 
            <span className="text-gradient"> Move</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Nossos valores fundamentais guiam cada decisão e ação em nossa jornada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#222222] rounded-2xl p-8 card-hover group"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}