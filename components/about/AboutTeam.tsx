import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Carlos Silva',
    role: 'CEO & Founder',
    specialties: ['Estratégia', 'Liderança', 'Visão de Negócio'],
    bio: '15+ anos em tecnologia e hospedagem. Formado em Ciência da Computação pela USP.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    gradient: 'from-[#0052CC] to-[#00CFFF]'
  },
  {
    name: 'Ana Costa',
    role: 'CTO',
    specialties: ['Infraestrutura', 'DevOps', 'Segurança'],
    bio: 'Especialista em arquitetura de sistemas distribuídos e segurança em nuvem.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: '#',
      github: '#'
    },
    gradient: 'from-[#FF4D5A] to-[#FF6B00]'
  },
  {
    name: 'Rafael Santos',
    role: 'Head de Suporte',
    specialties: ['Suporte Técnico', 'Treinamento', 'Customer Success'],
    bio: 'Líder em experiência do cliente com foco em resolução rápida e eficiente.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    gradient: 'from-[#00CFFF] to-[#0052CC]'
  },
  {
    name: 'Mariana Lima',
    role: 'Head de Vendas',
    specialties: ['Vendas Consultivas', 'Relacionamento', 'Estratégia'],
    bio: 'Especialista em soluções personalizadas e crescimento de negócios.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      linkedin: '#',
      twitter: '#'
    },
    gradient: 'from-[#FF6B00] to-[#FF4D5A]'
  }
];

export function AboutTeam() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossa 
            <span className="text-gradient"> Equipe</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Conheça os profissionais especializados que tornam tudo isso possível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-[#1A1A1A] border-[#222222] p-8 card-hover group"
            >
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} p-1 group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#00CFFF] font-medium mb-3">{member.role}</p>
                    <p className="text-[#B3B3B3] text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-[#333333] text-[#B3B3B3] text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-[#B3B3B3] hover:text-[#00CFFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer fazer parte do time?
            </h3>
            <p className="text-[#B3B3B3] mb-6">
              Estamos sempre em busca de talentos apaixonados por tecnologia e excelência no atendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rh@arenahosting.com.br"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0052CC] to-[#00CFFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0052CC]/25 transition-all duration-300"
              >
                Enviar Currículo
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#0052CC] text-[#0052CC] font-semibold rounded-lg hover:bg-[#0052CC] hover:text-white transition-all duration-300"
              >
                Saber Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}