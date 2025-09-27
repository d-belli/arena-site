'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Show success toast
    toast.success('Mensagem enviada com sucesso! Retornaremos em breve.');

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <Card className="bg-[#1A1A1A] border-[#222222] p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Mensagem Enviada!</h3>
        <p className="text-[#B3B3B3] mb-6">
          Recebemos sua mensagem e nossa equipe entrará em contato em breve. 
          Tempo médio de resposta: menos de 2 minutos.
        </p>
        <div className="w-full bg-[#222222] rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full animate-pulse" style={{ width: '100%' }} />
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-[#1A1A1A] border-[#222222] p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Nome Completo *
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-[#222222] border-[#333333] text-white focus:border-[#0052CC]"
              placeholder="Seu nome completo"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              E-mail *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-[#222222] border-[#333333] text-white focus:border-[#0052CC]"
              placeholder="seu@email.com"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
              Categoria *
            </label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
              <SelectTrigger className="bg-[#222222] border-[#333333] text-white">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent className="bg-[#222222] border-[#333333]">
                <SelectItem value="suporte">Suporte Técnico</SelectItem>
                <SelectItem value="vendas">Vendas</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="financeiro">Financeiro</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
              Assunto *
            </label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="bg-[#222222] border-[#333333] text-white focus:border-[#0052CC]"
              placeholder="Assunto da sua mensagem"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Mensagem *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="bg-[#222222] border-[#333333] text-white focus:border-[#0052CC] min-h-[120px]"
            placeholder="Descreva como podemos ajudá-lo..."
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gradient-cta text-white font-semibold py-3 text-lg"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Enviando...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Enviar Mensagem</span>
            </div>
          )}
        </Button>

        <p className="text-sm text-[#B3B3B3] text-center">
          * Campos obrigatórios. Seus dados estão protegidos pela nossa política de privacidade.
        </p>
      </form>
    </Card>
  );
}