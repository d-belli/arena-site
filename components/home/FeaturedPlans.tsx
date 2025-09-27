import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const featuredPlans = [
  {
    category: 'Hospedagem Web',
    title: 'Premium Sites',
    price: 'R$ 29,90',
    period: '/mês',
    description: 'Ideal para sites profissionais e e-commerce',
    features: [
      '50GB SSD NVMe',
      'Domínios Ilimitados', 
      'SSL Gratuito',
      'E-mails Ilimitados',
      'Backup Diário',
      'CDN Global'
    ],
    href: '/hospedagens/sites',
    badge: 'Mais Popular',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    category: 'Servidores VPS',
    title: 'VPS Brasil Pro',
    price: 'R$ 89,90',
    period: '/mês',
    description: 'Máxima performance para aplicações críticas',
    features: [
      '8GB RAM DDR4',
      '4 vCPUs',
      '200GB SSD NVMe',
      '10TB Tráfego',
      'IP Dedicado',
      'Root Access'
    ],
    href: '/servidores/vps-brasil',
    badge: 'Recomendado',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    category: 'Jogos',
    title: 'MTA Ultimate',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'Para servidores MTA de alto desempenho',
    features: [
      '12GB RAM DDR4',
      '6 vCPUs',
      '500 Slots',
      'DDoS Protection',
      'MySQL Incluso',
      'Painel Exclusivo'
    ],
    href: '/jogos/mta',
    badge: 'Premium',
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  }
];

export function FeaturedPlans() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Planos em 
            <span className="text-gradient"> Destaque</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Selecionamos os planos mais populares para cada tipo de projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPlans.map((plan, index) => (
            <Card
              key={index}
              className="bg-[#1A1A1A] border-[#222222] p-8 card-hover group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${plan.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="outline" className="border-[#00CFFF] text-[#00CFFF] bg-[#00CFFF]/10">
                    {plan.category}
                  </Badge>
                  <Badge className={`bg-gradient-to-r ${plan.gradient} text-white border-0`}>
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>

                {/* Plan title and price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-[#B3B3B3] text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-[#B3B3B3]">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#B3B3B3] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={plan.href}>
                  <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-current/25 text-white font-semibold py-3 transition-all duration-300 group-hover:scale-105`}>
                    Escolher Plano
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#B3B3B3] mb-6">
            Precisa de algo específico? Temos mais opções para você
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hospedagens/sites">
              <Button variant="outline" className="border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white">
                Ver Todos os Planos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}