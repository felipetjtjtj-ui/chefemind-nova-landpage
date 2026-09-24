import React from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export const HeroQuantum: React.FC = () => {
  const scrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-quantum-section"
      className="relative w-full min-h-[92vh] bg-transparent pt-32 pb-20 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Ambient subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] rounded-full bg-gradient-to-b from-red-600/10 via-rose-600/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="font-['Outfit'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl mb-6">
          Nunca mais perca clientes por{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
            demora no WhatsApp.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-10">
          Atenda em segundos, anote pedidos sem erros e envie direto para a cozinha — mesmo nas noites mais movimentadas.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#cardapio-digital"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#cardapio-digital');
            }}
            id="hero-primary-cta"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-base shadow-[0_4px_25px_rgba(239,68,68,0.45)] hover:shadow-[0_6px_35px_rgba(239,68,68,0.7)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <span>Ver Cardápio Guriri ao Vivo</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>

          <a
            href="#como-funciona"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#como-funciona');
            }}
            id="hero-secondary-cta"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-black/60 hover:bg-white/10 text-zinc-200 hover:text-white font-medium text-base border border-white/20 backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer whitespace-nowrap"
          >
            <Play className="w-4 h-4 text-red-400 fill-red-400 shrink-0" />
            <span>Como Funciona o Sistema</span>
          </a>
        </div>

        {/* Scroll down indicator */}
        <div className="flex flex-col items-center gap-1.5 mt-10 animate-bounce opacity-80">
          <span className="text-xs text-zinc-400 font-medium">
            Role para ver mais
          </span>
          <ChevronDown className="w-4 h-4 text-red-400" />
        </div>
      </div>
    </section>
  );
};
