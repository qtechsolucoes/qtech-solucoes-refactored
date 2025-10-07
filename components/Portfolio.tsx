/* eslint-disable @next/next/no-img-element */
// components/Portfolio.tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, X, ZoomIn } from 'lucide-react';
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

  // --- ESTADO ATUALIZADO PARA O MODAL ---
  const [activeModal, setActiveModal] = useState<{ project: typeof projects[0]; imageIndex: number } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

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

  const openImage = (project: typeof projects[0], imageIndex: number) => {
    setActiveModal({ project, imageIndex });
    setIsZoomed(false);
  };

  const closeImage = () => {
    setActiveModal(null);
  };

  const toggleZoom = () => {
    setIsZoomed(prev => !prev);
  };

  // --- NOVA FUNÇÃO PARA NAVEGAÇÃO NO MODAL ---
  const handleModalNavigation = (direction: 'next' | 'prev') => {
    if (!activeModal) return;

    const { project, imageIndex } = activeModal;
    const totalImages = project.images.length;
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (imageIndex + 1) % totalImages;
    } else {
      nextIndex = (imageIndex - 1 + totalImages) % totalImages;
    }

    setActiveModal({ project, imageIndex: nextIndex });
    setIsZoomed(false); // Reseta o zoom ao trocar de imagem
  };


  return (
    <>
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
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  <div
                    className={`relative rounded-lg shadow-neumorphic-in overflow-hidden group ${
                      isMusilingo
                        ? 'w-full max-w-md mx-auto aspect-[9/16] lg:max-w-xs'
                        : 'w-full aspect-video'
                    }`}
                  >
                    {project.images.length > 0 ? (
                      project.images.map((image, slideIndex) => (
                        <div
                          key={slideIndex}
                          className="absolute w-full h-full transition-opacity duration-500 ease-in-out"
                          style={{ opacity: currentSlides[project.title] === slideIndex ? 1 : 0 }}
                        >
                          <button onClick={() => openImage(project, currentSlides[project.title])} className="w-full h-full relative">
                            <Image
                              src={image}
                              alt={`${project.title} - Imagem ${slideIndex + 1}`}
                              layout="fill"
                              objectFit="contain"
                              className="transition-all duration-300"
                            />
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn className="w-12 h-12 text-white" />
                            </div>
                          </button>
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
                          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-background/50 shadow-neumorphic-out-sm active:shadow-neumorphic-in-sm transition-all duration-300 z-10"
                          aria-label="Previous Slide"
                        >
                          <ChevronLeft className="h-6 w-6 text-text-primary" />
                        </button>
                        <button
                          onClick={() => handleSlide(project.title, 'next')}
                          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-background/50 shadow-neumorphic-out-sm active:shadow-neumorphic-in-sm transition-all duration-300 z-10"
                          aria-label="Next Slide"
                        >
                          <ChevronRight className="h-6 w-6 text-text-primary" />
                        </button>
                      </>
                    )}
                  </div>

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

      {/* --- MODAL COM NAVEGAÇÃO --- */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeImage}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            onClick={closeImage}
            aria-label="Fechar imagem"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Botão de Navegação: Anterior */}
          {activeModal.project.images.length > 1 && (
             <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50"
                onClick={(e) => { e.stopPropagation(); handleModalNavigation('prev'); }}
                aria-label="Imagem anterior"
            >
                <ChevronLeft className="w-12 h-12" />
            </button>
          )}

          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
                className={`relative transition-transform duration-300 ease-in-out ${isZoomed ? 'scale-150' : 'scale-100'} ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={toggleZoom}
            >
                <img
                    src={activeModal.project.images[activeModal.imageIndex]}
                    alt="Imagem ampliada"
                    className="max-w-[80vw] max-h-[90vh] rounded-lg object-contain"
                />
            </div>
          </div>
          
          {/* Botão de Navegação: Próximo */}
           {activeModal.project.images.length > 1 && (
             <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50"
                onClick={(e) => { e.stopPropagation(); handleModalNavigation('next'); }}
                aria-label="Próxima imagem"
            >
                <ChevronRight className="w-12 h-12" />
            </button>
          )}
        </div>
      )}
    </>
  );
}