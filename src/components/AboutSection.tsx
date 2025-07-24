import { Shield, Users, Zap, Target } from "lucide-react";
import aboutImage from "@/assets/about-section.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Parceria Oficial",
      description: "Certificados ClickUp com acesso direto ao suporte técnico e melhores práticas"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atendimento Local",
      description: "Equipe brasileira especializada que entende as necessidades do mercado nacional"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Implementação Ágil",
      description: "Metodologia testada para deployment rápido e adoção eficiente pelas equipes"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Resultados Mensuráveis",
      description: "Foco em métricas concretas de produtividade e ROI para sua organização"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Sobre a Volari
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Especialistas em transformação digital
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Volari é uma empresa brasileira especializada na implementação e consultoria 
                da plataforma ClickUp. Nossa missão é transformar a forma como as empresas 
                gerenciam seus projetos e processos, proporcionando maior eficiência e resultados 
                concretos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary-light rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Parceiro Oficial ClickUp</h4>
                  <p className="text-sm text-muted-foreground">
                    Certificação e treinamento direto com a equipe ClickUp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Equipe Volari analisando dashboards" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute top-8 right-8 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;