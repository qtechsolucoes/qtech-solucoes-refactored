import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-88px)] text-center px-8 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slide-in-up opacity-0">
          <span className="gradient-text">Inovação e Expertise</span>
          <br />
          <span className="text-text-primary">para o Futuro Digital.</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-text-secondary animate-slide-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Desenvolvemos soluções web, sistemas personalizados, IA e softwares
          sob demanda para transformar e impulsionar o seu negócio.
        </p>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <Link
            href="#servicos"
            className="inline-flex items-center gap-2 text-white font-bold text-lg py-4 px-8 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Conheça Nossos Serviços</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}