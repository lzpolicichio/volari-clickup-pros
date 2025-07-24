import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Calendar, Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Entre em Contato
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos conversar sobre seu projeto
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar novos níveis de produtividade. 
            Entre em contato e descubra como podemos transformar seus processos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-medium">
            <h4 className="text-2xl font-bold text-foreground mb-6">
              Solicite uma consultoria gratuita
            </h4>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Nome da empresa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cargo">Cargo</Label>
                <Input id="cargo" placeholder="Seu cargo na empresa" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensagem">Como podemos ajudar?</Label>
                <Textarea 
                  id="mensagem" 
                  placeholder="Conte-nos sobre seus desafios atuais e objetivos..."
                  rows={4}
                />
              </div>
              
              <Button variant="gradient" size="lg" className="w-full group">
                Enviar solicitação
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info & CTAs */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">WhatsApp Comercial</h5>
                    <p className="text-sm text-muted-foreground">Resposta em até 1 hora</p>
                  </div>
                </div>
                <Button variant="accent" className="w-full">
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">Agendar Reunião</h5>
                    <p className="text-sm text-muted-foreground">30 min de consultoria gratuita</p>
                  </div>
                </div>
                <Button variant="default" className="w-full">
                  Agendar chamada
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <h5 className="text-xl font-semibold text-foreground mb-6">
                Outras formas de contato
              </h5>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">(11) 3456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">contato@volari.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">São Paulo, SP - Brasil</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h6 className="font-semibold text-foreground mb-3">Horário de atendimento</h6>
                <p className="text-sm text-muted-foreground">
                  Segunda a sexta: 9h às 18h<br />
                  Sábado: 9h às 12h
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-primary text-white p-6 rounded-xl">
              <h5 className="font-semibold mb-3">Por que escolher a Volari?</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/90">
                <li>✓ Parceiros oficiais ClickUp</li>
                <li>✓ Mais de 500 empresas atendidas</li>
                <li>✓ Consultoria gratuita sem compromisso</li>
                <li>✓ Suporte em português</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;