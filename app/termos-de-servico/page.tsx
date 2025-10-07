// app/termos-de-servico/page.tsx
import Link from 'next/link';
import '../legal.css';

export const metadata = {
  title: 'Termos de Serviço',
  description: 'Leia os termos de serviço que regem o uso do nosso site e a contratação de nossos serviços.',
};

export default function TermosDeServico() {
  const lastUpdated = "06 de outubro de 2025";

  return (
     <main className="flex-grow w-full py-16 px-4">
         <div className="legal-container">
             <h1>Termos de Serviço</h1>
             <p>
                 <strong>Última atualização:</strong> {lastUpdated}
             </p>

             <h2>1. Visão Geral e Aceitação dos Termos</h2>
             <p>
                 Estes Termos de Serviço (&quot;Termos&quot;) regem o seu acesso e uso do site
                 da QTech Soluções Tecnológicas (&quot;nós&quot;, &quot;nosso&quot;). Ao acessar ou usar
                 nosso site, você concorda em cumprir estes Termos e nossa Política de Privacidade. Se você não
                 concorda com qualquer parte dos termos, então você não pode acessar o
                 serviço.
             </p>

             <h2>2. Uso do Site</h2>
             <p>
                O acesso a este site é permitido em caráter temporário, e nos reservamos o direito de retirar ou alterar os serviços que oferecemos em nosso site sem aviso prévio. Você concorda em usar o site apenas para fins lícitos e de maneira que não infrinja os direitos de, ou restrinja ou iniba o uso e gozo do site por qualquer terceiro.
             </p>

             <h2>3. Propriedade Intelectual</h2>
             <p>
                Todo o conteúdo presente neste site, incluindo, mas não se limitando a, textos, gráficos, logos, ícones, imagens e o software utilizado, é de propriedade da QTech Soluções Tecnológicas ou de seus fornecedores de conteúdo e protegido pelas leis de direitos autorais. A compilação de todo o conteúdo neste site é de propriedade exclusiva da QTech Soluções Tecnológicas.
             </p>

            <h2>4. Nossos Serviços</h2>
            <p>
                As informações sobre nossos serviços (Desenvolvimento Web, Sistemas Personalizados, Inteligência Artificial, etc.) são fornecidas apenas para fins informativos. A contratação de qualquer serviço será regida por um contrato específico, que detalhará o escopo, os prazos, os custos e as responsabilidades de cada parte.
            </p>

             <h2>5. Limitação de Responsabilidade</h2>
             <p>
                O conteúdo do nosso site é fornecido &quot;como está&quot;, sem garantias de qualquer tipo. Em nenhuma circunstância a QTech Soluções Tecnológicas será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais que resultem do uso ou da incapacidade de usar o site.
             </p>

             <h2>6. Links para Sites de Terceiros</h2>
            <p>
                Nosso site pode conter links para sites de terceiros que não são de nossa propriedade ou controlados por nós (como LinkedIn ou GitHub). Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros.
            </p>

             <h2>7. Alterações nos Termos</h2>
             <p>
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. Todas as alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos Termos.
             </p>

             <h2>8. Legislação Aplicável</h2>
             <p>
                Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais localizados no estado de Pernambuco.
             </p>

             <h2>9. Contato</h2>
             <p>
                 Se você tiver alguma dúvida sobre estes Termos, entre em contato
                 conosco pelo e-mail: <strong>qtechsolucoestecnologicas@gmail.com</strong>.
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