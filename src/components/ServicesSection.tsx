import { Button } from "@/components/ui/button";
import { Lightbulb, Settings, GraduationCap, Headphones, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Consultoria Personalizada",
      description: "Análise completa dos seus processos atuais e desenho de fluxos otimizados para o ClickUp.",
      features: ["Mapeamento de processos", "Definição de estruturas", "Otimização de workflows"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Implementação Técnica",
      description: "Configuração completa da plataforma de acordo com as necessidades específicas da sua empresa.",
      features: ["Setup completo", "Integrações", "Automações avançadas"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Treinamentos e Onboarding",
      description: "Capacitação completa das equipes para aproveitamento máximo da plataforma.",
      features: ["Treinamento de usuários", "Material didático", "Sessões práticas"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte Estratégico",
      description: "Acompanhamento contínuo para garantir a evolução e otimização constante dos processos.",
      features: ["Suporte técnico", "Otimizações periódicas", "Consultoria contínua"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Nossos Serviços
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas em ClickUp
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Da consultoria inicial ao suporte contínuo, oferecemos um ecossistema completo 
            para maximizar o potencial do ClickUp na sua organização.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Services Grid */}
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white border border-border rounded-xl hover:shadow-medium transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-light rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="relative">
            <img 
              src={servicesImage} 
              alt="Ilustração de serviços Volari" 
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-section p-8 rounded-2xl">
          <h4 className="text-2xl font-bold text-foreground mb-4">
            Pronto para transformar sua produtividade?
          </h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como podemos ajudar sua empresa 
            a alcançar novos níveis de eficiência com o ClickUp.
          </p>
          <Button variant="gradient" size="lg" className="group">
            Solicitar consultoria gratuita
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;