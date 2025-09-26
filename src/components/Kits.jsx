import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import kitsbraspex from '../assets/kitsbraspex.png';
import imagemppr from '../assets/imagemppr.jpg.png';
import imagempert from '../assets/imagempert.png';
import multicamadaairtecno from '../assets/multicamadaairtecno.png';
import chassismetalicos from '../assets/chassismetalicos.png';
import kitsCozinha from '../assets/kits-cozinha.png'; // 1. Importe a nova imagem aqui

const Kits = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  const kitCategories = [
    {
      id: "kit-agua",
      icon: "🔵",
      title: "Kits de Água Fria e Quente",
      description: "Soluções completas com sistemas PPR e PERT (PEX), garantindo eficiência e segurança para chuveiros e pontos de consumo.",
      items: [
        {
          image: imagemppr,
          title: "Sistema PPR",
          description: "Sistema rígido unido por termofusão, ideal para pontos de consumo que exigem máxima segurança e durabilidade. Suas juntas se tornam uma peça única, eliminando o risco de vazamentos.",
          caption: "Kits em PPR - Polipropileno Copolímero Random",
          variations: ["Kit Chuveiro Tê Misturador", "Kit Chuveiro Monocomando"]
        },
        {
          image: imagempert,
          title: "Sistema PERT (PEX)",
          description: "Sistema flexível que agiliza a instalação e reduz o número de conexões. Ideal para obras que buscam produtividade e versatilidade em instalações de água quente e fria.",
          caption: "Kits em PERT - Polyethylene of Raised Temperature",
          variations: ["Kit Chuveiro Tê Misturador com Registro", "Kit Chuveiro Tê Monocomando com Registro"]
        }
      ]
    },
    // 2. NOVA CATEGORIA ADICIONADA ABAIXO
    {
      id: "kit-cozinha-gas",
      icon: "🔥",
      title: "Kits para Cozinha e Gás",
      description: "Soluções industrializadas para pontos de consumo na cozinha, incluindo aquecedores e distribuição de gás, com a mesma garantia de qualidade e segurança.",
      items: [
        {
          image: kitsCozinha,
          title: "Kit Aquecedor e Pontos da Cozinha",
          description: "Sistema completo para alimentação do aquecedor de passagem e pontos de água quente e fria da cozinha.",
          caption: "Kit Aquecedor e Pontos da Cozinha"
        },
        {
          image: kitsCozinha,
          title: "Kit Aquecedor, Cozinha e Ponto de Gás",
          description: "Solução integrada que inclui a distribuição de gás para o fogão, otimizando a instalação e garantindo total compatibilidade.",
          caption: "Kit Aquecedor, Pontos da Cozinha e Ponto de Gás"
        },
        {
          image: kitsCozinha,
          title: "Kit Travessa para Cozinha",
          description: "Componente pré-fabricado para a distribuição organizada dos pontos de água na parede da cozinha.",
          caption: "Kit Travessa para Cozinha"
        }
      ]
    },
    {
      id: "kit-ar",
      icon: "🟢",
      title: "Kits de Ar-Condicionado",
      items: [
        {
          image: multicamadaairtecno,
          title: "AirTechno Multicamada",
          description: "Para máquinas de 9000 Btus até 48000 Btus (com bitolas de 14mm a 20 mm).",
          caption: "Kit AirTechno - Sistema Multicamada"
        }
      ]
    },
    {
      id: "kit-chassis",
      icon: "⚙️",
      title: "Chassis Metálicos Industriais",
      items: [
        {
          image: chassismetalicos,
          title: "Chassis Metálicos",
          description: "Estruturas para chuveiros, aquecedores e travessas industriais, com acabamento premium e montagem precisa.",
          caption: "Chassis Metálicos Industriais"
        }
      ]
    }
  ];

  return (
    <>
      <section id="kits" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossos Kits Industrializados</h2>
            <div className="w-24 h-1 bg-[#FFD027] mx-auto rounded-full mb-8"></div>
          </div>

          <div className="space-y-20">
            {kitCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  {category.description && (
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{category.description}</p>
                  )}
                </div>

                <div className="space-y-12">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row items-center">
                      <div className="w-full md:w-1/2 cursor-pointer" onClick={() => openModal(item)}>
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="w-full md:w-1/2 p-8">
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                        {item.variations && (
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">Modelos Disponíveis:</h5>
                            <ul className="space-y-2">
                              {item.variations.map((variation, vIndex) => (
                                <li key={vIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-[#005563]" />
                                  <span className="text-gray-700">{variation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200">
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <img src={modalImage.image} alt={modalImage.title} className="w-full h-auto max-h-[80vh] object-contain" />
            <div className="p-6 bg-white border-t">
              <h4 className="text-xl font-bold text-gray-900">{modalImage.caption}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Kits;