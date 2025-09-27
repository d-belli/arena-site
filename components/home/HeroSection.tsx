import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0052CC]/20 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#00CFFF]/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#FF4D5A]/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] border border-[#222222] rounded-full px-4 py-2 text-sm font-medium text-[#00CFFF] mb-6">
              <Shield className="w-4 h-4" />
              <span>99.9% de Uptime Garantido</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Hospedagem Premium 
              <span className="text-gradient block mt-2">
                Para o Futuro
              </span>
            </h1>
            
            <p className="text-xl text-[#B3B3B3] leading-relaxed max-w-2xl mx-auto">
              Performance superior, segurança avançada e suporte especializado. 
              Hospede seus projetos com a confiança que você merece.
            </p>
          </div>

          <div className="animate-fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center items-center">
            <br></br>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-delayed">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00CFFF] rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Ultra Rápido</h3>
                <p className="text-sm text-[#B3B3B3]">SSD NVMe de alta performance</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D5A] to-[#FF6B00] rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Segurança Total</h3>
                <p className="text-sm text-[#B3B3B3]">Proteção DDoS e SSL gratuito</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-end">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00CFFF] to-[#0052CC] rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Global</h3>
                <p className="text-sm text-[#B3B3B3]">Datacenters no Brasil e EUA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}