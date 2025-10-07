// components/Portfolio.tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- DADOS DOS PROJETOS ---
const projects = [
  {
    title: 'AvaSystem',
    status: 'Concluído',
    images: [
      '/portfolio/AvaSystem_1.png',
      '/portfolio/AvaSystem_2.png',
      '/portfolio/AvaSystem_3.png',
      '/portfolio/AvaSystem_4.png',
      '/portfolio/AvaSystem_5.png',
      '/portfolio/AvaSystem_6.png',
    ],
    description:
      'Uma plataforma de avaliações educacionais robusta, projetada para funcionar de forma eficiente em ambientes com conectividade limitada. O sistema utiliza um servidor local com cache inteligente para distribuir provas a múltiplos dispositivos (Chromebooks) numa rede local, exigindo apenas uma única conexão à internet. Inclui um sistema de conteúdo adaptativo para alunos com necessidades especiais (TEA, TDAH, Down), painel de controlo para professores com análise de desempenho, e funcionalidades de segurança como bloqueio de provas por deteção de ruído.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'Supabase', 'HTML5', 'CSS3'],
  },
  {
    title: 'SMufl Renderer',
    status: 'Open Source',
    images: [
      '/portfolio/SMuFL_1.png',
    ],
    description:
      'Uma biblioteca de renderização para Flutter, especializada em notação musical. O SMufl Renderer implementa a especificação SMuFL (Standard Music Font Layout), permitindo que desenvolvedores de aplicações mobile desenhem partituras complexas de forma precisa e performática. A biblioteca lida com a renderização de uma vasta gama de glifos musicais, incluindo claves, notas, pausas, hastes, ligaduras, articulações e ornamentos, abstraindo a complexa lógica de posicionamento e espaçamento da tipografia musical.',
    technologies: ['Flutter', 'Dart', 'SMuFL'],
    githubUrl: 'https://github.com/qtechsolucoes/smufl_renderer',
  },
  {
    title: 'Musilingo',
    status: 'Em Desenvolvimento',
    images: [
       '/portfolio/musilingo_1.jpeg',
       '/portfolio/musilingo_2.jpeg',
       '/portfolio/musilingo_3.jpeg',
       '/portfolio/musilingo_4.jpeg',
    ],
    description:
      'Uma aplicação mobile inovadora para o ensino de teoria musical, combinando gamificação e inteligência artificial. O Musilingo oferece uma jornada de aprendizagem estruturada com lições, exercícios práticos de solfejo e perceção harmónica. O grande diferencial é a "Cecília", uma tutora de IA que oferece feedback em tempo real, analisa o desempenho do utilizador e gera partituras personalizadas. A aplicação também inclui funcionalidades sociais como duelos e ranking de amigos para aumentar o engajamento.',
    technologies: ['Flutter', 'Supabase', 'Python', 'Flask', 'IA Generativa', 'MIDI'],
  },
];

export function Portfolio() {
  const [currentSlides, setCurrentSlides] = useState<Record<string, number>>(
    projects.reduce((acc, proj) => ({ ...acc, [proj.title]: 0 }), {})
  );

  const handleSlide = (projectTitle: string, direction: 'next' | 'prev') => {
    const project = projects.find(p => p.title === projectTitle);
    if (!project || project.images.length === 0) return;

    setCurrentSlides(prev => {
      const current = prev[projectTitle];
      const total = project.images.length;
      let nextSlide;

      if (direction === 'next') {
        nextSlide = (current + 1) % total;
      } else {
        nextSlide = (current - 1 + total) % total;
      }

      return { ...prev, [projectTitle]: nextSlide };
    });
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen p-8 flex flex-col items-center justify-center relative z-10"
    >
      <h2 className="section-title animate-fade-in opacity-0">
        Nosso <span className="gradient-text">Portfólio</span>
      </h2>

      <div className="space-y-16 w-full max-w-5xl">
        {projects.map((project, index) => {
          const isMusilingo = project.title === 'Musilingo';

          return (
            <div
              key={project.title}
              className="rounded-2xl shadow-neumorphic-out p-8 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div
                className={
                  isMusilingo
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center' // Layout em grade para Musilingo
                    : 'flex flex-col gap-8' // Layout em coluna para os outros
                }
              >
                {/* Slideshow */}
                <div
                  className={`relative rounded-lg shadow-neumorphic-in overflow-hidden group ${
                    isMusilingo
                      ? 'w-full max-w-sm mx-auto aspect-[9/16]' // Estilo vertical para Musilingo
                      : 'w-full aspect-video' // Estilo horizontal para os outros
                  }`}
                >
                  {project.images.length > 0 ? (
                    project.images.map((image, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="absolute w-full h-full transition-opacity duration-500 ease-in-out"
                        style={{ opacity: currentSlides[project.title] === slideIndex ? 1 : 0 }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Imagem ${slideIndex + 1}`}
                          layout="fill"
                          objectFit="contain"
                          className="transition-all duration-300"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-full bg-background/50 flex items-center justify-center text-text-secondary">
                      <span>Imagens em breve</span>
                    </div>
                  )}

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handleSlide(project.title, 'prev')}
                        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-background/50 shadow-neumorphic-out-sm active:shadow-neumorphic-in-sm transition-all duration-300"
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft className="h-6 w-6 text-text-primary" />
                      </button>
                      <button
                        onClick={() => handleSlide(project.title, 'next')}
                        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-background/50 shadow-neumorphic-out-sm active:shadow-neumorphic-in-sm transition-all duration-300"
                        aria-label="Next Slide"
                      >
                        <ChevronRight className="h-6 w-6 text-text-primary" />
                      </button>
                    </>
                  )}
                </div>

                {/* Descrição do Projeto */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                      <h3 className="text-3xl font-bold text-text-primary">{project.title}</h3>
                      <span className={`text-xs font-bold py-1 px-3 rounded-full ${project.status === 'Em Desenvolvimento' ? 'bg-yellow-200 text-yellow-800' : project.status === 'Open Source' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                          {project.status}
                      </span>
                  </div>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-sm font-medium text-text-secondary bg-background py-1 px-3 rounded-full shadow-neumorphic-out-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Seção GitHub */}
      <div className="mt-16 text-center max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
        <p className="text-text-secondary mb-4">
          Nossa empresa possui projetos em desenvolvimento que requerem confidencialidade, por isso, os repositórios disponíveis em nosso GitHub são apenas aqueles gratuitos com licença MIT. O único será o SMuFL. Os demais são comerciais.
        </p>
        <Link
          href="https://github.com/qtechsolucoes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-primary font-bold py-3 px-8 rounded-full shadow-neumorphic-out transition-all duration-300 active:shadow-neumorphic-in"
        >
          <Github className="w-5 h-5" />
          <span>Ver Repositórios Públicos</span>
        </Link>
      </div>
    </section>
  );
}