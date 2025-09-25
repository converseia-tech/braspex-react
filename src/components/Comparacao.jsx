import React, { useState, useEffect, useRef } from 'react';
import comparacaoImg from '../assets/comparacao-tradicionalxprazo.png';

const Comparacao = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const chartData = [
    {
      label: "Economia de mão de obra",
      value: 40,
      color: "bg-gradient-to-r from-green-400 to-green-600"
    },
    {
      label: "Menos dias no cronograma",
      value: 10,
      color: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    {
      label: "Redução de perdas",
      value: 80,
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600"
    },
    {
      label: "Menos retrabalho",
      value: 90,
      color: "bg-gradient-to-r from-red-400 to-red-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comparação de Prazo
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            <span className="text-gray-600">TRADICIONAL</span>
            <span className="mx-4 text-[#FFD027] font-bold">VS</span>
            <span className="text-[#005563]">KITS BRASPEX</span>
          </h3>
          <div className="w-24 h-1 bg-[#FFD027] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Chart */}
        <div className="mb-16">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {chartData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.label}
                  </h4>
                  <span className="text-2xl font-bold text-[#005563]">
                    {item.value}%
                  </span>
                </div>
                
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${item.value}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Comparison */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <img
              src={comparacaoImg}
              alt="Comparação visual entre instalação tradicional e Kits BRASPEX"
              className="max-w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Os Kits BRASPEX revolucionam a construção civil com processos industrializados 
              que garantem maior eficiência, qualidade superior e redução significativa de custos e prazos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparacao;
