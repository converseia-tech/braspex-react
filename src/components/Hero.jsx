import React from 'react';
import { PlayCircle } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';
import logoBraspex from '../assets/logo-braspex.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 96; // Ajuste para a altura do header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white text-center px-5 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto">
        <img 
          src={logoBraspex} 
          alt="BRASPEX Logo" 
          className="mx-auto mb-8 h-32 md:h-40 w-auto"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Soluções Industrializadas para Construção Civil
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up delay-200">
          Transformamos projetos em realidade com kits hidráulicos e sistemas de climatização de alta performance.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-[#FFD027] text-[#005563] px-8 py-4 rounded-lg font-bold text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD027]/40 transition-all duration-300"
          >
            Solicitar Cotação
          </button>
          <button 
            onClick={() => window.open('https://www.youtube.com/@braspexoficial', '_blank')} // Link corrigido para o canal
            className="flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#005563] transition-all duration-300"
          >
            <PlayCircle className="w-6 h-6 mr-3" />
            Ver Vídeo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;