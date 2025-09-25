import React, { useState, useEffect } from 'react';
import { Zap, Target, Shield, Factory } from 'lucide-react';
import heroReference from '../assets/hero-reference.png';
import galpao from '../assets/galpao.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroReference,
      alt: "Vista aérea das instalações BRASPEX"
    },
    {
      image: galpao,
      alt: "Galpão BRASPEX"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Hero Banner with Slider */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#FFD027] scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#005563] text-white px-6 py-3 rounded-full mb-8 shadow-lg">
              <Factory className="w-5 h-5" />
              <span className="font-medium">Soluções Industrializadas</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando{' '}
              <span className="text-[#005563] relative">
                Instalações Prediais
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD027] rounded-full"></div>
              </span>
              <br />
              com Tecnologia e Qualidade
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A BRASPEX revoluciona o setor com kits industrializados sob medida, 
              reduzindo prazos em até <strong className="text-[#005563]">70%</strong> e garantindo máxima qualidade 
              através de processos controlados em fábrica.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD027] to-[#FFC107] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-[#005563]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalação Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Até 3x mais rápida que métodos convencionais.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD027] to-[#FFC107] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-[#005563]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisão Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Kits personalizados conforme projeto executivo.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD027] to-[#FFC107] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-[#005563]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualidade Garantida</h3>
              <p className="text-gray-600 leading-relaxed">
                Controle rigoroso e testes em ambiente fabril.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
