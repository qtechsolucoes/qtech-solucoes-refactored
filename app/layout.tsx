// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "QTech Soluções Tecnológicas: Inovação e Expertise Digital",
    template: "%s | QTech Soluções Tecnológicas",
  },
  description: "Especialistas em desenvolvimento de software. Criamos sites responsivos, sistemas personalizados, IA e softwares sob demanda para impulsionar o seu negócio.",
  metadataBase: new URL("https://www.qtechsolucoestecnologicas.com"),
  verification: {
    google: "Jcf9ZHkGvj_QsCmo4QRMt5Gvh5JY83mUf8NqlCrVA2o",
  },
  // --- CORREÇÃO DO FAVICON AQUI ---
  icons: {
    icon: '/favicon.ico', // Ícone padrão
    apple: '/logo_image.png', // Ícone para dispositivos Apple
    shortcut: '/logo_image.png', // Ícone de atalho
  },
  openGraph: {
    title: "QTech Soluções Tecnológicas: Inovação e Expertise Digital",
    description: "Desenvolvemos soluções web, sistemas personalizados, IA e softwares sob demanda.",
    url: "https://www.qtechsolucoestecnologicas.com",
    siteName: "QTech Soluções Tecnológicas",
    images: [{ url: "/logo_image.png", width: 512, height: 512 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QTech Soluções Tecnológicas: Inovação e Expertise Digital",
    description: "Desenvolvemos soluções web, sistemas personalizados, IA e softwares sob demanda.",
    images: ["/logo_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "QTech Soluções Tecnológicas",
              "image": "https://www.qtechsolucoestecnologicas.com/logo_image.png",
              "url": "https://www.qtechsolucoestecnologicas.com",
              "telephone": "+5581995333433",
              "email": "qtechsolucoestecnologicas@gmail.com",
              "description": "Empresa de desenvolvimento de software especializada em soluções web, sistemas personalizados e inteligência artificial.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Recife",
                "addressRegion": "PE",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.linkedin.com/in/qtech-solu%C3%A7%C3%B5es-tecnol%C3%B3gicas-8a9869370/",
                "https://www.instagram.com/qtechsolucoestecnologicas/"
              ],
            }),
          }}
        />
        
        <NeuralNetworkBackground />

        <div className="relative z-10 flex flex-col flex-grow w-full">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        <FloatingButtons />
      </body>
    </html>
  );
}