import { CheckCircle, TrendingUp, Clock, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "Centralização de Processos",
      description: "Unifique todas as operações em uma única plataforma intuitiva e poderosa.",
      stats: "90% redução de ferramentas"
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Aumento de Produtividade",
      description: "Otimize fluxos de trabalho e elimine gargalos com automações inteligentes.",
      stats: "40% mais eficiência"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Redução de Retrabalho",
      description: "Minimize erros e retrabalhos com processos claros e padronizados.",
      stats: "60% menos retrabalho"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Colaboração Aprimorada",
      description: "Melhore a comunicação e alinhamento entre equipes e departamentos.",
      stats: "85% melhora na comunicação"
    }
  ];

  const results = [
    { value: "500+", label: "Empresas transformadas" },
    { value: "40%", label: "Aumento médio de produtividade" },
    { value: "60%", label: "Redução de tempo em reuniões" },
    { value: "95%", label: "Taxa de satisfação dos clientes" }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Benefícios do ClickUp
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Resultados que transformam negócios
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como nossa implementação especializada do ClickUp pode revolucionar 
            a produtividade e eficiência da sua empresa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="mx-auto w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="text-2xl font-bold text-primary">
                {benefit.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-medium">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-foreground mb-4">
              Nossos resultados falam por si
            </h4>
            <p className="text-lg text-muted-foreground">
              Métricas reais de clientes que confiaram na Volari para sua transformação digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {result.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <div className="text-accent text-2xl font-bold mb-2">Implementação Rápida</div>
            <p className="text-muted-foreground">Setup completo em até 30 dias com nossa metodologia testada.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <div className="text-accent text-2xl font-bold mb-2">ROI Garantido</div>
            <p className="text-muted-foreground">Retorno sobre investimento mensurável em 90 dias ou menos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <div className="text-accent text-2xl font-bold mb-2">Suporte Contínuo</div>
            <p className="text-muted-foreground">Acompanhamento especializado para evolução constante.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;