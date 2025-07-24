import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO",
      company: "TechCorp",
      content: "A Volari transformou completamente nossa gestão de projetos. Em 3 meses, aumentamos nossa produtividade em 45% e reduzimos drasticamente o tempo gasto em reuniões de alinhamento.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor de Operações",
      company: "InovaSoft",
      content: "Implementação impecável e suporte excepcional. Nossa equipe adotou o ClickUp rapidamente graças ao treinamento personalizado da Volari. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente de Projetos",
      company: "CreativeAgency",
      content: "O que mais impressiona na Volari é o conhecimento profundo da plataforma e a capacidade de adaptar as funcionalidades às nossas necessidades específicas.",
      rating: 5
    }
  ];

  const logos = [
    "TechCorp", "InovaSoft", "CreativeAgency", "DataFlow", "SmartSolutions", "NextGen"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Depoimentos
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram sua produtividade com nossa consultoria especializada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-section p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary/30 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-muted-foreground mb-8">
            Empresas que confiam na Volari
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-secondary rounded-lg font-semibold text-muted-foreground hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary text-white p-8 lg:p-12 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projetos Implementados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30 dias</div>
              <div className="text-primary-foreground/80">Implementação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;