import { Users, Server, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Clientes Satisfeitos',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Server,
    number: '50,000+',
    label: 'Servidores Ativos',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    icon: Clock,
    number: '99.9%',
    label: 'Uptime Garantido',
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  },
  {
    icon: Award,
    number: '24/7',
    label: 'Suporte Premium',
    gradient: 'from-[#FF6B00] to-[#FF4D5A]'
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D]">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 tabular-nums">
                  {stat.number}
                </div>
                <div className="text-[#B3B3B3] font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}