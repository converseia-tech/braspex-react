import React, { useState, useEffect } from 'react';
import { Zap, Target, Shield, Factory, PlusCircle, MinusCircle } from 'lucide-react';
import heroReference from '../assets/hero-reference.png';
import galpao from '../assets/galpao.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  const slides = [
    { image: heroReference, alt: "Vista aérea das instalações BRASPEX" },
    { image: galpao, alt: "Galpão BRASPEX" }
  ];

  const featureCards = [
    {
      icon: <Zap className="w-8 h-8 text-[#005563]" />,
      title: "Instalação Rápida",
      initialText: "Até 3x mais rápida que métodos convencionais.",
      detailedText: "Nosso propósito é transformar a maneira como as instalações são executadas em campo, oferecendo produtos industrializados sob medida, com montagem simplificada, controle de qualidade em fábrica e rastreabilidade total de componentes."
    },
    {
      icon: <Target className="w-8 h-8 text-[#005563]" />,
      title: "Precisão Total",
      initialText: "Kits personalizados conforme projeto executivo.",
      detailedText: "Na Braspex, unimos engenharia, tecnologia e produção em série para oferecer soluções personalizadas que aumentam a produtividade dos canteiros de obras, reduzem perdas e falhas, e garantem melhor desempenho nos prazos de execução."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#005563]" />,
      title: "Qualidade Garantida",
      initialText: "Controle rigoroso e testes em ambiente fabril.",
      detailedText: "Prezamos pela qualidade em cada etapa para garantir a excelência dos nossos produtos, desde a matéria-prima até a entrega final, com testes e verificações rigorosas."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <>
      {/* Hero Banner com Slider e Texto */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Imagens do Slider */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        {/* Overlay para Contraste */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Conteúdo do Hero */}
        <div className="relative z-10 p-5">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 border border-white/30">
              <Factory className="w-5 h-5" />
              <span className="font-medium">Líder em Construções Industriais</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
              Transformando <span className="text-[#FFD027] relative">Instalações Prediais</span>
              <br />
              com Tecnologia e Qualidade
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              A BRASPEX revoluciona o setor com kits industrializados sob medida, 
              reduzindo prazos em até <strong className="text-[#FFD027]">70%</strong> e garantindo máxima qualidade 
              através de processos controlados em fábrica.
            </p>
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#FFD027] scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Seção de Vantagens (Cards) */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 cursor-pointer p-8 flex flex-col"
                onClick={() => handleCardClick(index)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD027] to-[#FFC107] rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>
                  {activeCard === index 
                    ? <MinusCircle className="w-7 h-7 text-gray-400" />
                    : <PlusCircle className="w-7 h-7 text-gray-400" />
                  }
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                
                <div className="relative overflow-hidden transition-all duration-500 ease-in-out">
                  {/* Texto visível */}
                  <div className={`transition-opacity duration-300 ${activeCard === index ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
                    <p className="text-gray-600 leading-relaxed">{card.initialText}</p>
                  </div>
                  {/* Texto revelado */}
                  <div className={`transition-opacity duration-300 ${activeCard === index ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                    <p className="text-gray-700 leading-relaxed">{card.detailedText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;