import React from 'react';
import { ArrowUp, Instagram, Linkedin } from 'lucide-react'; // Importe os ícones
import logoBraspex from '../assets/logo-braspex.png';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Nossos Kits', id: 'kits' },
    { label: 'Fluxo de Execução', id: 'fluxo' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <footer className="bg-[#005563] text-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src={logoBraspex} 
                  alt="BRASPEX Logo" 
                  className="h-16 w-auto bg-white p-2 rounded-lg shadow-md"
                />
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                A BRASPEX é especializada em soluções industrializadas para instalações prediais, 
                oferecendo kits personalizados que revolucionam a construção civil com qualidade, 
                agilidade e eficiência.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 mt-8">
                <h4 className="font-semibold">Siga-nos:</h4>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFD027] transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFD027] transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Navegação</h4>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/80 hover:text-[#FFD027] transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contato</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <span className="block text-sm text-white/60">E-mail</span>
                  <a 
                    href="mailto:email@braspex.com.br" 
                    className="hover:text-[#FFD027] transition-colors duration-300"
                  >
                    email@braspex.com.br
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-white/60">Telefone</span>
                  <a 
                    href="tel:+5581XXXXXXXX" 
                    className="hover:text-[#FFD027] transition-colors duration-300"
                  >
                    (81) XXXX-XXXX
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-white/60">Website</span>
                  <a 
                    href="https://www.braspex.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#FFD027] transition-colors duration-300"
                  >
                    www.braspex.com.br
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-white/60">Localização</span>
                  <span>Pernambuco, Brasil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-center md:text-left">
              &copy; 2024 BRASPEX. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <p className="text-white/70 text-sm">
                Desenvolvido com tecnologia React
              </p>
              
              <button
                onClick={scrollToTop}
                className="bg-[#FFD027] text-[#005563] p-3 rounded-full hover:bg-[#FFC107] transition-all duration-300 hover:scale-110 shadow-lg"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;