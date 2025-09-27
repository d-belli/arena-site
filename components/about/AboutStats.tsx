import { Users, Server, Clock, Award, MapPin, Shield } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Clientes Ativos',
    description: 'Projetos hospedados com sucesso',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Server,
    number: '50,000+',
    label: 'Servidores',
    description: 'Infraestrutura robusta e confiável',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    icon: Clock,
    number: '99.9%',
    label: 'Uptime',
    description: 'Disponibilidade garantida',
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  },
  {
    icon: Award,
    number: '8+',
    label: 'Anos',
    description: 'De experiência no mercado',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]'
  },
  {
    icon: MapPin,
    number: '2',
    label: 'Países',
    description: 'Brasil e Estados Unidos',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Shield,
    number: '24/7',
    label: 'Suporte',
    description: 'Atendimento ininterrupto',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  }
];

export function AboutStats() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos 
            <span className="text-gradient"> Números</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Dados que comprovam nossa dedicação e excelência no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-8 text-center card-hover group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 tabular-nums">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-[#00CFFF] mb-2">
                  {stat.label}
                </div>
                <div className="text-[#B3B3B3] text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}