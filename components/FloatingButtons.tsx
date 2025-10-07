// components/FloatingButtons.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Botão do WhatsApp */}
      <Link
        href="https://wa.me/5581995333433"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-neumorphic-out transition-all duration-300 active:shadow-neumorphic-in z-50 animate-bounce-slow"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-text-primary" />
      </Link>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 p-4 rounded-full shadow-neumorphic-out transition-all duration-300 active:shadow-neumorphic-in z-50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6 text-text-primary" />
      </button>
    </>
  );
}