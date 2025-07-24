import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Volari</h3>
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Especialistas brasileiros em ClickUp. Transformamos a produtividade 
                de empresas através de consultoria, implementação e suporte personalizado.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>(11) 3456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>contato@volari.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#servicos" className="hover:text-accent transition-colors">
                    Consultoria ClickUp
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-accent transition-colors">
                    Implementação
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-accent transition-colors">
                    Treinamentos
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-accent transition-colors">
                    Suporte Técnico
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-accent transition-colors">
                    Automações
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Empresa</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#sobre" className="hover:text-accent transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-accent transition-colors">
                    Cases de sucesso
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-accent transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Receba dicas de produtividade
              </h4>
              <p className="text-white/80">
                Assine nossa newsletter e receba insights exclusivos sobre ClickUp e gestão de projetos.
              </p>
            </div>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent"
              />
              <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Volari. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Termos de Uso
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;