import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Equipe Volari trabalhando com ClickUp" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transforme sua
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              produtividade
            </span>
            com o ClickUp
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas brasileiros em consultoria, implementação e suporte 
            da plataforma ClickUp. Parceiros oficiais para maximizar a eficiência do seu time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Fale com um especialista
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <MessageCircle className="mr-2 h-5 w-5" />
              Agende uma conversa
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm">Empresas atendidas</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm">Satisfação dos clientes</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-sm">Suporte ágil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;