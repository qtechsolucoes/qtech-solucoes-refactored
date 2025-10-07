// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // O rodapé tem uma sombra interna no topo para demarcar o seu espaço
    <footer className="w-full bg-background text-text-secondary py-8 text-center mt-auto shadow-[inset_0_4px_8px_rgba(209,217,230,0.7)]">
      <div className="container mx-auto px-4">
        <p>
          © {currentYear} QTech Soluções Tecnológicas. Todos os direitos
          reservados.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link
            href="/politica-de-privacidade"
            className="hover:text-text-primary transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos-de-servico"
            className="hover:text-text-primary transition-colors"
          >
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}