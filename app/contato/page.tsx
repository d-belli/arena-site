import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - ArenaHosting',
  description: 'Entre em contato com nossa equipe especializada. Suporte 24/7 para hospedagem de sites, servidores e jogos.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] border border-[#222222] rounded-full px-4 py-2 text-sm font-medium text-[#00CFFF] mb-6">
            <Mail className="w-4 h-4" />
            <span>Suporte 24/7 Disponível</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos 
            <span className="text-gradient"> Conversar?</span>
          </h1>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você a encontrar a solução perfeita para seu projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfo />
            {/* Quick Stats */}
            <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-6">Nossos Números</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Tempo Médio de Resposta</span>
                  <span className="text-[#00CFFF] font-semibold">{'< 2 minutos'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Taxa de Resolução</span>
                  <span className="text-[#00CFFF] font-semibold">98.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Satisfação do Cliente</span>
                  <span className="text-[#00CFFF] font-semibold">4.9/5.0</span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0052CC] to-[#00CFFF] rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Suporte Técnico</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Vendas</span>
                  <span className="text-white">8h às 22h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Comercial</span>
                  <span className="text-white">9h às 18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}