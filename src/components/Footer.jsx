import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import logoBraspexDark from '../assets/logo-braspex-dark.png'; // Usaremos esta versão do logo

const Footer = () => {
  return (
    <footer className="bg-[#005563] text-white py-16">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Coluna 1: Logo e Descrição */}
        <div className="col-span-1 md:col-span-2">
          <img 
            src={logoBraspexDark} // Usando a versão escura que se destaca no fundo azul
            alt="BRASPEX Logo" 
            className="h-20 w-auto mb-6" // Ajustado o tamanho da logo no rodapé
          />
          <p className="text-gray-300 leading-relaxed max-w-md">
            A Braspex é uma empresa líder na industrialização de kits hidráulicos e sistemas de climatização,
            comprometida com a inovação, qualidade e sustentabilidade.
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div>
          <h4 className="text-xl font-bold text-[#FFD027] mb-6">Contato</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-gray-400" />
              <a href="mailto:contato@braspex.com" className="hover:text-white transition-colors">contato@braspex.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-gray-400" />
              <a href="tel:+5581986431000" className="hover:text-white transition-colors">+55 (81) 98643-1000</a>
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-1" />
              <span>
                Rua Dr. Arthur Gonçalves, 260<br/>
                Boa Viagem, Recife - PE<br/>
                CEP: 51020-090
              </span>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h4 className="text-xl font-bold text-[#FFD027] mb-6">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/braspexoficial/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD027] transition-colors">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/@braspexoficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD027] transition-colors">
              <Youtube className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/braspexoficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD027] transition-colors">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/company/braspex/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD027] transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Braspex. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Desenvolvido por Converseia.Tech</p>
      </div>
    </footer>
  );
};

export default Footer;