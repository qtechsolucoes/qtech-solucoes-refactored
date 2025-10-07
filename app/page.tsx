import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact"; // 1. Importe o componente

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact /> {/* 2. Use o componente aqui, removendo o último div */}
    </main>
  );
}