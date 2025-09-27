'use client';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: 'E-mail',
    description: 'Resposta em até 2 minutos',
    value: 'contato@arenahosting.com.br',
    action: 'mailto:contato@arenahosting.com.br',
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    icon: Phone,
    title: 'Telefone',
    description: 'Atendimento 24/7',
    value: '+55 (11) 9999-9999',
    action: 'tel:+551199999999',
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    icon: MessageSquare,
    title: 'Chat Online',
    description: 'Suporte instantâneo',
    value: 'Iniciar conversa',
    action: '#chat',
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Outros Canais</h2>
        <p className="text-[#B3B3B3]">
          Escolha o canal que preferir para entrar em contato conosco
        </p>
      </div>

      {contactMethods.map((method, index) => {
        const Icon = method.icon;
        return (
          <Card key={index} className="bg-[#1A1A1A] border-[#222222] p-6 card-hover">
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                <p className="text-sm text-[#B3B3B3] mb-2">{method.description}</p>
                <Button
                  variant="ghost"
                  className="text-[#00CFFF] hover:text-white hover:bg-[#00CFFF]/10 p-0 h-auto font-medium"
                  onClick={() => {
                    if (method.action.startsWith('mailto:') || method.action.startsWith('tel:')) {
                      window.location.href = method.action;
                    }
                  }}
                >
                  {method.value}
                </Button>
              </div>
            </div>
          </Card>
        );
      })}

      {/* Address */}
      <Card className="bg-[#1A1A1A] border-[#222222] p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF4D5A] rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Endereço</h3>
            <address className="text-[#B3B3B3] not-italic text-sm leading-relaxed">
              Av. Paulista, 1000<br />
              Bela Vista, São Paulo - SP<br />
              CEP: 01310-100<br />
              Brasil
            </address>
          </div>
        </div>
      </Card>
    </div>
  );
}