// app/politica-de-privacidade/page.tsx
import Link from 'next/link';
import '../legal.css';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Conheça nossa política de privacidade e como lidamos com os dados coletados em nosso site.',
};

export default function PoliticaDePrivacidade() {
  const lastUpdated = "06 de outubro de 2025";

  return (
    <main className="flex-grow w-full py-16 px-4">
      <div className="legal-container">
        <h1>Política de Privacidade</h1>
        <p>
          <strong>Última atualização:</strong> {lastUpdated}
        </p>

        <h2>1. Introdução</h2>
        <p>
          A sua privacidade é importante para nós. É política da QTech Soluções Tecnológicas (&quot;nós&quot;, &quot;nosso&quot;) respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Link href="/" className='text-primary hover:underline'>qtechsolucoestecnologicas.com</Link>, e outros sites que possuímos e operamos.
        </p>

        <h2>2. Quais dados coletamos e por quê?</h2>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p>Os tipos de dados que coletamos incluem:</p>
        <ul>
            <li>
                <strong>Dados Fornecidos Diretamente:</strong> Ao utilizar nosso formulário de contato, coletamos seu <strong>nome</strong>, <strong>e-mail</strong> e a <strong>mensagem</strong> que você nos envia. Utilizamos esses dados exclusivamente para responder à sua solicitação ou consulta.
            </li>
            <li>
                <strong>Dados Coletados Automaticamente:</strong> Podemos coletar dados técnicos sobre seu navegador, dispositivo e endereço IP para fins de análise de tráfego, segurança e melhoria da sua experiência em nosso site.
            </li>
        </ul>

        <h2>3. Como usamos seus dados?</h2>
        <p>
            Utilizamos os dados coletados para as seguintes finalidades:
        </p>
        <ul>
            <li>Para nos comunicarmos com você, respondendo suas dúvidas e solicitações enviadas através do formulário de contato;</li>
            <li>Para personalizar e melhorar nosso site e serviços;</li>
            <li>Para garantir a segurança do nosso site e prevenir fraudes;</li>
            <li>Para cumprir obrigações legais.</li>
        </ul>

        <h2>4. Compartilhamento de dados</h2>
        <p>
            Não compartilhamos suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Os e-mails enviados através do nosso formulário de contato são processados pela plataforma Resend, que atua como nosso provedor de serviços de e-mail transacional. Não vendemos seus dados para terceiros.
        </p>

        <h2>5. Armazenamento e Segurança</h2>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>

        <h2>6. Seus Direitos (LGPD)</h2>
        <p>
          Você tem o direito, de acordo com a Lei Geral de Proteção de Dados (LGPD), de acessar, corrigir, anonimizar, bloquear ou eliminar seus dados pessoais. Para exercer seus direitos, entre em contato conosco através do e-mail fornecido abaixo.
        </p>
        
        <h2>7. Política de Cookies</h2>
        <p>
          Nosso site pode utilizar cookies para melhorar a experiência de navegação. Cookies são pequenos arquivos de texto armazenados no seu dispositivo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade de algumas partes do nosso site.
        </p>

        <h2>8. Alterações na Política de Privacidade</h2>
        <p>
            Esta política pode ser atualizada a qualquer momento. Recomendamos que você a revise periodicamente para se manter informado sobre como estamos protegendo suas informações.
        </p>

        <h2>9. Contato</h2>
        <p>
          Se tiver dúvidas sobre como lidamos com seus dados e informações pessoais, entre em contato conosco pelo e-mail: <strong>qtechsolucoestecnologicas@gmail.com</strong>.
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