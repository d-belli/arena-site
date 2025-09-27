import { Target, Eye, Heart } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="pt-20 pb-16">
      <div className="container px-4">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] border border-[#222222] rounded-full px-4 py-2 text-sm font-medium text-[#00CFFF] mb-6">
            <Heart className="w-4 h-4" />
            <span>Apaixonados por Tecnologia</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Sobre a
            <span className="text-gradient"> ArenaHosting</span>
          </h1>
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa brasileira especializada em soluções de hospedagem premium, 
            comprometida em oferecer a melhor experiência para nossos clientes há mais de 8 anos.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-8 card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#00CFFF] rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
            <p className="text-[#B3B3B3] leading-relaxed">
              Democratizar o acesso a soluções de hospedagem de alta qualidade, 
              oferecendo tecnologia de ponta com suporte humanizado e preços justos.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-8 card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF4D5A] to-[#FF6B00] rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
            <p className="text-[#B3B3B3] leading-relaxed">
              Ser reconhecida como a principal referência em hospedagem premium no Brasil, 
              liderando a inovação e excelência no atendimento ao cliente.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-8 card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#0052CC] rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
            <p className="text-[#B3B3B3] leading-relaxed">
              Transparência, inovação, excelência no atendimento e compromisso com o 
              sucesso de nossos clientes em todos os projetos.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Nossa História</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#B3B3B3] text-lg leading-relaxed mb-6">
                Fundada em 2016 por uma equipe de desenvolvedores e administradores de sistema apaixonados 
                por tecnologia, a ArenaHosting nasceu da necessidade de oferecer soluções de hospedagem 
                verdadeiramente confiáveis no mercado brasileiro.
              </p>
              <p className="text-[#B3B3B3] text-lg leading-relaxed mb-6">
                Começamos com um pequeno datacenter e grandes sonhos. Hoje, hospedamos mais de 10.000 
                clientes satisfeitos, com uma infraestrutura robusta que abrange datacenters no Brasil 
                e nos Estados Unidos, oferecendo soluções completas para todos os tipos de projetos.
              </p>
              <p className="text-[#B3B3B3] text-lg leading-relaxed">
                Nossa jornada é marcada por constante inovação, investimento em tecnologia de ponta e, 
                principalmente, pelo compromisso inabalável com a satisfação de nossos clientes. 
                Cada projeto hospedado conosco recebe a mesma dedicação e cuidado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}