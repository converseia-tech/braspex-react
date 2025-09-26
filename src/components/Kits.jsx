import React, { useState } from 'react';
import { X } from 'lucide-react';
import kitsbraspex from '../assets/kitsbraspex.png';
import imagemppr from '../assets/imagemppr.jpg.png';
import imagempert from '../assets/imagempert.png';
import multicamadaairtecno from '../assets/multicamadaairtecno.png';
import chassismetalicos from '../assets/chassismetalicos.png';

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

  // Estrutura de dados reorganizada para destacar cada kit
  const kitCategories = [
    {
      id: "kit-agua",
      icon: "🔵",
      title: "Kits de Água Fria e Quente",
      description: "Soluções completas com sistemas PPR e PERT (PEX), garantindo eficiência e segurança para chuveiros e pontos de consumo.",
      items: [
        {
          image: imagemppr,
          title: "Kit Chuveiro Tê Misturador (PPR)",
          description: "Sistema PPR rígido unido por termofusão, ideal para controle de água quente e fria com máxima segurança contra vazamentos.",
          caption: "Kit Chuveiro Tê Misturador em PPR"
        },
        {
          image: imagemppr,
          title: "Kit Chuveiro Monocomando (PPR)",
          description: "Oferece controle moderno e simplificado de temperatura e vazão, com a robustez e durabilidade do sistema PPR.",
          caption: "Kit Chuveiro Monocomando em PPR"
        },
        {
          image: imagempert,
          title: "Kit Chuveiro Tê Misturador com Registro (PERT)",
          description: "Com a flexibilidade do sistema PERT (PEX), permite uma instalação rápida e segura para misturadores tradicionais.",
          caption: "Kit Chuveiro Tê Misturador com Registro em PERT"
        },
        {
            image: imagempert,
            title: "Kit Chuveiro Tê Monocomando com Registro (PERT)",
            description: "A solução ideal para controle preciso com um único comando, aliando design moderno à praticidade de instalação do PERT (PEX).",
            caption: "Kit Chuveiro Tê Monocomando com Registro em PERT"
        },
      ]
    },
    {
      id: "kit-ar",
      icon: "🟢",
      title: "Kits de Ar-Condicionado",
      description: "Solução com Multicamada AirTechno para sistemas de climatização, garantindo máxima eficiência energética e instalação simplificada.",
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
      description: "Estruturas robustas para chuveiros, aquecedores industriais e travessas, com acabamento premium e montagem precisa.",
      items: [
        {
          image: chassismetalicos,
          title: "Chassis Metálicos",
          description: "Estruturas para chuveiros, aquecedores e travessas industriais.",
          caption: "Chassis Metálicos Industriais"
        }
      ]
    }
  ];

  return (
    <>
      <section id="kits" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Kits Industrializados
            </h2>
            <div className="w-24 h-1 bg-[#FFD027] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Os kits industrializados da Braspex são conjuntos prontos para instalação, montados em fábrica com 
              alto padrão técnico. Cada linha de produto é desenvolvida de forma personalizada para garantir máxima eficiência e compatibilidade.
            </p>
          </div>

          {/* Kit Categories */}
          <div className="space-y-16">
            {kitCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Kit Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer flex flex-col"
                      onClick={() => openModal(item)}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 flex-grow">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
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
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <img
              src={modalImage.image}
              alt={modalImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6 bg-white">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {modalImage.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {modalImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Kits;