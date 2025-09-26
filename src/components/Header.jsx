import React from 'react';
import { PlayCircle } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';
import logoBraspex from '../assets/logo-braspex.png'; // Garanta que esta é a logo que você quer maior

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
          className="mx-auto mb-8 h-32 md:h-40 w-auto" // AQUI A LOGO FOI AUMENTADA
        />
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Soluções Industrializadas