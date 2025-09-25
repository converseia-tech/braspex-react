import React, { useState } from 'react';
import { 
  FileText, 
  Settings, 
  Factory, 
  CheckCircle, 
  Truck, 
  Wrench,
  Clock
} from 'lucide-react';

const Fluxo = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6" />,
      emoji: "📋",
      title: "Recebimento do Projeto",
      shortTitle: "Projeto",
      content: {
        title: "Recebimento do Projeto Executivo",
        description: "Nossa equipe técnica realiza uma análise detalhada do projeto executivo para compreender todas as especificações, requisitos técnicos e particularidades da obra.",
        items: [
          "Análise completa do projeto hidráulico",
          "Identificação de pontos críticos",
          "Levantamento de materiais necessários",
          "Cronograma preliminar de execução"
        ],
        prazo: "2-3 dias úteis"
      }
    },
    {
      id: 2,
      icon: <Settings className="w-6 h-6" />,
      emoji: "🔧",
      title: "Compatibilização Técnica",
      shortTitle: "Compatibilização",
      content: {
        title: "Compatibilização Técnica e Detalhamento",
        description: "Desenvolvimento personalizado dos kits conforme as necessidades específicas do projeto, garantindo total compatibilidade com os sistemas prediais.",
        items: [
          "Compatibilização com outros sistemas",
          "Detalhamento técnico dos kits",
          "Especificação de materiais",
          "Aprovação do cliente"
        ],
        prazo: "3-5 dias úteis"
      }
    },
    {
      id: 3,
      icon: <Factory className="w-6 h-6" />,
      emoji: "🏭",
      title: "Produção em Fábrica",
      shortTitle: "Produção",
      content: {
        title: "Produção em Fábrica",
        description: "Fabricação dos kits em ambiente controlado, seguindo rigorosos padrões de qualidade e utilizando equipamentos de última geração.",
        items: [
          "Ambiente controlado de produção",
          "Equipamentos de alta precisão",
          "Controle de qualidade contínuo",
          "Rastreabilidade de componentes"
        ],
        prazo: "5-10 dias úteis"
      }
    },
    {
      id: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      emoji: "✅",
      title: "Teste de Qualidade",
      shortTitle: "Testes",
      content: {
        title: "Teste de Montagem e Checklist",
        description: "Verificação completa de todos os componentes e teste de montagem para garantir perfeito funcionamento antes da entrega.",
        items: [
          "Teste de pressão hidráulica",
          "Verificação de conexões",
          "Checklist de qualidade",
          "Documentação técnica"
        ],
        prazo: "1-2 dias úteis"
      }
    },
    {
      id: 5,
      icon: <Truck className="w-6 h-6" />,
      emoji: "🚚",
      title: "Entrega Rastreável",
      shortTitle: "Entrega",
      content: {
        title: "Entrega Rastreável e Pronta",
        description: "Kits prontos para instalação imediata, com embalagem adequada e sistema de rastreamento completo para acompanhamento da entrega.",
        items: [
          "Embalagem protegida e identificada",
          "Sistema de rastreamento",
          "Documentação completa",
          "Manual de instalação"
        ],
        prazo: "Conforme logística"
      }
    },
    {
      id: 6,
      icon: <Wrench className="w-6 h-6" />,
      emoji: "🛠️",
      title: "Suporte Técnico",
      shortTitle: "Suporte",
      content: {
        title: "Suporte Técnico na Obra",
        description: "Acompanhamento técnico especializado durante a instalação, quando necessário, garantindo a correta implementação dos kits.",
        items: [
          "Suporte técnico especializado",
          "Acompanhamento da instalação",
          "Resolução de dúvidas",
          "Garantia de funcionamento"
        ],
        prazo: "Sob demanda"
      }
    }
  ];

  const summaryCards = [
    {
      title: "Tempo Total do Processo",
      value: "12-20 dias úteis",
      description: "Do recebimento do projeto à entrega dos kits"
    },
    {
      title: "Economia de Tempo na Obra",
      value: "Até 70%",
      description: "Comparado aos métodos tradicionais"
    },
    {
      title: "Garantia de Qualidade",
      value: "100%",
      description: "Todos os kits testados em fábrica"
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep);

  return (
    <section id="fluxo" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Trabalhamos
          </h2>
          <div className="w-24 h-1 bg-[#FFD027] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nosso processo é estruturado para garantir máxima qualidade e eficiência em cada etapa. 
            Clique em cada etapa para conhecer os detalhes.
          </p>
        </div>

        {/* Interactive Flow */}
        <div className="mb-16">
          {/* Steps Navigation */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`group flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-[#005563] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-[#FFD027] text-[#005563]'
                      : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    <span className="text-xl font-bold">{step.id}</span>
                  </div>
                  <span className="text-sm font-medium text-center leading-tight">
                    {step.shortTitle}
                  </span>
                </button>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005563] to-[#007A8A] rounded-2xl flex items-center justify-center text-white">
                {currentStep.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {currentStep.content.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-4 h-4 text-[#FFD027]" />
                  <span className="text-[#005563] font-semibold">
                    {currentStep.content.prazo}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {currentStep.content.description}
            </p>
            
            <ul className="grid md:grid-cols-2 gap-3">
              {currentStep.content.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFD027] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {summaryCards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {card.title}
              </h4>
              <p className="text-3xl font-bold text-[#005563] mb-2">
                {card.value}
              </p>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fluxo;
