import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
  gradient: string;
  link?: string;
}

interface PlanGridProps {
  plans: Plan[];
}

export function PlanGrid({ plans }: PlanGridProps) {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Escolha seu 
            <span className="text-gradient"> Plano</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Planos flexíveis para cada tipo de projeto e orçamento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-[#1A1A1A] border-[#222222] p-8 card-hover group relative overflow-hidden ${
                plan.badge === 'Mais Popular' || plan.badge === 'Recomendado' ? 'ring-2 ring-[#0052CC]/50 scale-105' : ''
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${plan.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                {/* Badge */}
                {plan.badge && (
                  <div className="flex justify-center mb-6">
                    <Badge className={`bg-gradient-to-r ${plan.gradient} text-white border-0`}>
                      <Star className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Plan title and price */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-[#B3B3B3] text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center space-x-2 mb-6">
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

                {/* CTA Buttons */}
                <div className="space-y-3">
                  {plan.link ? (
                    plan.link.startsWith('http') ? (
                      <a
                        href={plan.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full block`}
                      >
                        <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-current/25 text-white font-semibold py-3 transition-all duration-300 group-hover:scale-105`}>
                          Contratar Agora
                        </Button>
                      </a>
                    ) : (
                      <Link href={plan.link} className="w-full block">
                        <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-current/25 text-white font-semibold py-3 transition-all duration-300 group-hover:scale-105`}>
                          Contratar Agora
                        </Button>
                      </Link>
                    )
                  ) : (
                    <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-current/25 text-white font-semibold py-3 transition-all duration-300 group-hover:scale-105`}>
                      Contratar Agora
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-[#B3B3B3] mb-4">
            💳 Aceitamos PIX, Cartão de Crédito• 🔄 Cancelamento a qualquer momento
          </p>
          <p className="text-sm text-[#B3B3B3]">
            Todos os planos incluem: Suporte 24/7, Backup Automático e Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}