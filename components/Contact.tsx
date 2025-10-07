'use client';

import { useState } from 'react';
import { Linkedin, Instagram, LoaderCircle } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Falha ao enviar o email.');
      }
      
      setSubmitStatus({ message: 'Mensagem enviada com sucesso!', type: 'success' });
      (event.target as HTMLFormElement).reset();

    } catch (error) {
      if (error instanceof Error) {
        setSubmitStatus({ message: error.message, type: 'error' });
      } else {
        setSubmitStatus({ message: 'Ocorreu um erro inesperado. Tente novamente.', type: 'error' });
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contato"
      className="min-h-screen p-8 flex flex-col items-center justify-center relative z-10"
    >
      <h2 className="section-title animate-fade-in opacity-0">
        Entre em <span className="gradient-text">Contato</span>
      </h2>
      <div
        className="rounded-2xl shadow-neumorphic-out p-8 max-w-2xl w-full animate-fade-in opacity-0"
        style={{ animationDelay: '0.3s' }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-text-secondary text-sm font-bold mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="shadow-neumorphic-in appearance-none rounded-lg w-full py-3 px-4 bg-background text-text-primary leading-tight focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-text-secondary text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow-neumorphic-in appearance-none rounded-lg w-full py-3 px-4 bg-background text-text-primary leading-tight focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-text-secondary text-sm font-bold mb-2">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="shadow-neumorphic-in appearance-none rounded-lg w-full py-3 px-4 bg-background text-text-primary leading-tight focus:outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-bold py-3 px-8 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="animate-spin -ml-1 mr-3 h-5 w-5" />
                Enviando...
              </>
            ) : (
              'Enviar Mensagem'
            )}
          </button>
          {submitStatus && (
            <div
              className={`mt-4 p-3 rounded-lg text-center text-white ${
                submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
              role="alert"
            >
              {submitStatus.message}
            </div>
          )}
        </form>
        <div className="mt-8 text-center text-text-secondary">
          <p>Ou entre em contato diretamente:</p>
          <p className="mt-2 text-text-primary font-semibold break-all">
            qtechsolucoestecnologicas@gmail.com | (81) 99533-3433
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="https://www.linkedin.com/in/qtech-solu%C3%A7%C3%B5es-tecnol%C3%B3gicas-8a9869370/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full shadow-neumorphic-out transition-all duration-300 active:shadow-neumorphic-in" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-text-secondary" />
            </Link>
            <Link href="https://www.instagram.com/qtechsolucoestecnologicas" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full shadow-neumorphic-out transition-all duration-300 active:shadow-neumorphic-in" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-text-secondary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}