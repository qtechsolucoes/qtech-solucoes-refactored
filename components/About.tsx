// components/About.tsx

import { CheckCircle } from 'lucide-react'; // Importando um ícone para a lista

// --- LISTA DE TECNOLOGIAS ATUALIZADA ---
const technologies = [
  'React, Next.js, Vue.js, Angular',
  'Node.js, Python, Java',
  'Desenvolvimento Mobile com Flutter',
  'Bancos de Dados: PostgreSQL, MongoDB, Firebase, Supabase',
  'Implementação de sistemas com IA',
  'Landing Pages: WordPress, Wix, Webflow, bubble',
  'Sistemas para empresas, escolas, contabilidade, supermercados e muito mais!',
];

export function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen p-8 flex flex-col items-center justify-center relative z-10"
    >
      <h2 className="section-title animate-fade-in opacity-0">
        Sobre <span className="gradient-text">Nós</span>
      </h2>

      <div className="rounded-2xl shadow-neumorphic-out p-8 max-w-4xl text-lg space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
        <p className="text-text-secondary">
          Na QTech, somos apaixonados por tecnologia e impulsionados pela
          inovação. Como startup recém-criada, pretendemos criar soluções
          digitais que transformam negócios e impulsionam o sucesso de nossos
          clientes. Estamos prontos para enfrentar os desafios mais complexos.
        </p>
        <p className="text-text-secondary">
          <strong className="text-text-primary">Missão:</strong> Capacitar empresas com tecnologia de ponta,
          desenvolvendo soluções personalizadas que otimizem processos,
          melhorem a experiência do usuário e gerem resultados tangíveis.
        </p>
        <p className="text-text-secondary">
          <strong className="text-text-primary">Visão:</strong> Ser reconhecida como líder em inovação
          tecnológica, a escolha preferencial para empresas que buscam
          excelência e vanguarda em soluções digitais.
        </p>
        
        {/* --- ALTERAÇÃO DE ESPAÇAMENTO AQUI --- */}
        <h3 className="text-2xl font-semibold text-text-primary pt-4 mb-4">
          Tecnologias que dominamos:
        </h3>
        
        {/* A lista agora usa flexbox para melhor alinhamento dos ícones */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-text-secondary">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mr-3 mt-1" />
                <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}