'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Preços', href: '#precos' },
  { name: 'Contato', href: '#contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="#home" className="flex items-center space-x-4">
          <div className="p-1 rounded-full shadow-neumorphic-out">
             <Image
                 src="/logo_image.png"
                 alt="Logo QTech"
                 width={56}
                 height={56}
                 className="w-14 h-14 rounded-full"
             />
          </div>
          {/* --- ALTERAÇÃO AQUI --- */}
          <span className="text-xl sm:text-2xl font-bold hidden sm:inline">
            <span className="text-text-primary">QTech </span>
            <span className="gradient-text">Soluções</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center p-2 rounded-full shadow-neumorphic-out-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 px-5 rounded-full transition-all duration-300 text-text-secondary hover:text-primary active:shadow-neumorphic-in-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full md:hidden transition-all duration-300 shadow-neumorphic-out active:shadow-neumorphic-in"
          aria-label="Abrir menu de navegação"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-text-primary" /> : <Menu className="w-6 h-6 text-text-primary" />}
        </button>
      </div>

     <div
       className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-out ${
         isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
       }`}
     >
       <nav className="container mx-auto p-4">
         <ul className="flex flex-col items-center bg-background rounded-2xl shadow-neumorphic-out p-4 space-y-2">
           {navLinks.map((link) => (
             <li key={link.name} className="w-full">
               <Link
                 href={link.href}
                 onClick={() => setIsMenuOpen(false)}
                 className="block text-xl text-center font-medium py-3 rounded-xl transition-all duration-300 text-text-secondary hover:text-primary hover:shadow-neumorphic-in-sm w-full"
               >
                 {link.name}
               </Link>
             </li>
           ))}
         </ul>
       </nav>
     </div>
    </header>
  );
}