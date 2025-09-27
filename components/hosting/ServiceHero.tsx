import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, DivideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

export function ServiceHero({ title, subtitle, description, icon: Icon }: ServiceHeroProps) {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0052CC]/20 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#00CFFF]/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] border border-[#222222] rounded-full px-4 py-2 text-sm font-medium text-[#00CFFF] mb-6">
              <Icon className="w-4 h-4" />
              <span>{subtitle}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {title}
            </h1>
            
            <p className="text-xl text-[#B3B3B3] leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}