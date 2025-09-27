import { DivideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
  const gradients = [
    'from-[#0052CC] to-[#00CFFF]',
    'from-[#FF4D5A] to-[#FF6B00]',
    'from-[#00CFFF] to-[#0052CC]',
    'from-[#FF6B00] to-[#FF4D5A]',
    'from-[#0052CC] to-[#00CFFF]',
    'from-[#FF4D5A] to-[#FF6B00]'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D]">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradient = gradients[index % gradients.length];
            
            return (
              <Card
                key={index}
                className="bg-[#0D0D0D] border-[#222222] p-6 card-hover group"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}