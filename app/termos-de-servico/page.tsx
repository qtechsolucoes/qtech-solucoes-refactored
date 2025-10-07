import Link from 'next/link';
import '../legal.css';

export default function TermosDeServico() {
  return (
     <main className="flex-grow w-full py-16 px-4">
         <div className="legal-container">
             <h1>Termos de Serviço</h1>
             <p>
                 <strong>Última atualização:</strong> 19 de junho de 2025
             </p>

             <h2>1. Visão Geral</h2>
             <p>
                 Estes Termos de Serviço (&quot;Termos&quot;) regem o seu acesso e uso do site
                 da QTech Soluções Tecnológicas (&quot;nós&quot;, &quot;nosso&quot;). Ao acessar ou usar
                 nosso site, você concorda em cumprir estes Termos. Se você não
                 concorda com qualquer parte dos termos, então você não pode acessar o
                 serviço.
             </p>

             {/* ... Cole o resto do seu conteúdo aqui ... */}

             <h2>7. Contato</h2>
             <p>
                 Se você tiver alguma dúvida sobre estes Termos, entre em contato
                 conosco pelo e-mail:{' '}
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