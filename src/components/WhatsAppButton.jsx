import React from 'react';
import { MessageSquare } from 'lucide-react'; // Ícone para o WhatsApp

const WhatsAppButton = () => {
  // Substitua 'SEUNUMERO' pelo número de WhatsApp da sua empresa
  // Ex: 5581999998888 (código do país + DDD + número)
  const phoneNumber = 'SEUNUMERO';
  const message = 'Olá! Gostaria de solicitar uma cotação.';
  const whatsappUrl = `https://wa.me/$81986431000?text=Olá,_gostaria_de_um_orçamento.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      title="Fale Conosco pelo WhatsApp"
    >
      <MessageSquare className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;