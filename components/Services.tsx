import { CodeXml, Database, BrainCircuit, MonitorSmartphone } from 'lucide-react';

const servicesData = [
  {
    icon: <CodeXml className="w-12 h-12" strokeWidth={1.5} />,
    title: "Desenvolvimento Web",
    description: "Criação de websites responsivos e performáticos, do marketing ao e-commerce.",
  },
  {
    icon: <Database className="w-12 h-12" strokeWidth={1.5} />,
    title: "Sistemas Personalizados",
    description: "Soluções sob medida para otimizar processos e gerenciar dados complexos.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12" strokeWidth={1.5} />,
    title: "Inteligência Artificial",
    description: "Implementação de IA para automação, análise preditiva e otimização de negócios.",
  },
  {
    icon: <MonitorSmartphone className="w-12 h-12" strokeWidth={1.5} />,
    title: "Softwares Sob Demanda",
    description: "Desenvolvimento de aplicativos desktop e mobile para necessidades específicas.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="min-h-screen p-8 flex flex-col items-center justify-center relative z-10"
    >
      <h2 className="section-title animate-fade-in opacity-0">
        Nossos <span className="gradient-text">Serviços</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-neumorphic-out p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 animate-fade-in opacity-0"
            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            <div className="w-24 h-24 rounded-full shadow-neumorphic-in flex items-center justify-center mb-6 text-primary">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}