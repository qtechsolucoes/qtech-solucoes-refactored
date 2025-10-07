import Link from 'next/link';
import '../legal.css';

export default function PoliticaDePrivacidade() {
  return (
    // Adicionamos um espaçamento vertical e garantimos que o container centralize
    <main className="flex-grow w-full py-16 px-4">
      <div className="legal-container">
        <h1>Política de Privacidade</h1>
        <p>
          <strong>Última atualização:</strong> 19 de junho de 2025
        </p>

        <h2>1. Quais dados coletamos?</h2>
        <p>
          Coletamos dados fornecidos diretamente por você através do nosso
          formulário de contato (Nome, E-mail, Mensagem) e dados coletados
          automaticamente, como informações do navegador e endereço IP, para
          melhorar sua experiência.
        </p>

        {/* ... Cole o resto do seu conteúdo aqui ... */}

        <h2>7. Contato</h2>
        <p>
          Se tiver dúvidas, entre em contato:{' '}
          <strong>qtechsolucoestecnologicas@gmail.com</strong>.
        </p>

        <div className="text-center">
             <Link href="/" className="back-link">
                 Voltar para a página inicial
             </Link>
        </div>
      </div>
    </main>
  );
}