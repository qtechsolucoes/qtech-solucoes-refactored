// components/Pricing.tsx

import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'A partir de R$500,00',
    features: [
      'Website Institucional (Para preços com domínio e hospedagem, consultar valores)',
      'Design Responsivo',
      'Otimização SEO Básica',
      'Suporte por Email',
    ],
    highlight: false,
  },
  {
    name: 'Padrão',
    price: 'A partir de R$ 1000,00',
    features: [
      'Tudo do Básico',
      'Sistema de Gerenciamento de Conteúdo',
      'Integração de Blog',
      'Formulário de Contato Avançado',
      'Suporte Prioritário',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'A partir de R$ 2000,00',
    features: [
      'Tudo do Padrão',
      'Desenvolvimento de E-commerce ou Sistema Personalizado',
      'Integração de IA (Básica)',
      'Consultoria Estratégica',
      'Suporte 24/7',
    ],
    highlight: false,
  },
  // --- NOVO PLANO ADICIONADO AQUI ---
  {
    name: 'Desktop & Mobile',
    price: 'A partir de R$ 3000,00',
    features: [
      'Tudo do Premium',
      'Aplicativos Nativos (iOS/Android) ou Híbridos (Flutter)',
      'Sistemas Desktop (Windows, macOS, Linux)',
      'Integrações Avançadas e APIs',
      'Suporte e Manutenção Contínua',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section
      id="precos"
      className="min-h-screen p-8 flex flex-col items-center justify-center relative z-10"
    >
      <h2 className="section-title animate-fade-in opacity-0">
        Nossos <span className="gradient-text">Planos</span>
      </h2>
      {/* --- LAYOUT DO GRID ALTERADO AQUI --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 flex flex-col transition-all duration-300 animate-fade-in opacity-0 ${
              plan.highlight
                ? 'shadow-neumorphic-out scale-105'
                : 'shadow-neumorphic-out hover:-translate-y-2'
            }`}
             style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            <h3 className="text-3xl font-bold mb-4 text-center text-text-primary">
              {plan.name}
            </h3>
            <p className="text-4xl font-extrabold text-center mb-6 gradient-text">
              {plan.price}
            </p>
            <ul className="text-text-secondary space-y-3 flex-grow">
              {plan.features.map((feature, featIndex) => (
                <li key={featIndex} className="flex items-start">
                  <div className="w-6 h-6 rounded-full shadow-neumorphic-in-sm flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                     <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}