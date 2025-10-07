// components/NeuralNetworkBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Movimento mais lento
        this.vy = (Math.random() - 0.5) * 0.5; // Movimento mais lento
        this.radius = Math.random() * 1.5;
        // Alterna entre a cor primária (azul) e a cor de texto (preto/cinza)
        this.color = Math.random() > 0.5 ? 'rgba(0, 191, 255, 0.5)' : 'rgba(52, 58, 64, 0.5)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // --- OPACIDADE REDUZIDA AQUI ---
        ctx.fillStyle = this.color; // Usa a cor definida (azul ou preto) com 50% de opacidade
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      // --- OPACIDADE GERAL DAS LINHAS REDUZIDA AQUI ---
      const maxOpacity = 0.35; // Reduzimos a opacidade máxima das linhas para 35%

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const distance = Math.sqrt(
            (particles[i].x - particles[j].x) ** 2 +
            (particles[i].y - particles[j].y) ** 2
          );

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Usa a cor de texto secundária (cinza) para as linhas, com opacidade reduzida
            ctx.strokeStyle = `rgba(108, 117, 125, ${(1 - distance / 120) * maxOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
         resizeCanvas();
         init();
    }

    window.addEventListener('resize', handleResize);
    
    resizeCanvas();
    init();
    animate();

    return () => {
     window.removeEventListener('resize', handleResize);
     cancelAnimationFrame(animationFrameId);
    }

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}