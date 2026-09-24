import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/60 backdrop-blur-md border-t border-white/[0.07] py-16 px-4 sm:px-6 lg:px-8 text-zinc-500 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span className="font-['Outfit'] font-extrabold text-base tracking-tight text-white">
              CHEFE<span className="text-red-500 font-normal">MIND</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 text-center md:text-left">
            Construído com inteligência artificial para a gastronomia.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <a href="#produto" className="hover:text-white transition-colors">
            Produto
          </a>
          <a href="#painel" className="hover:text-white transition-colors">
            Painel
          </a>
          <a href="#cardapio-digital" className="hover:text-white transition-colors">
            Cardápio Digital
          </a>
          <a href="#como-funciona" className="hover:text-white transition-colors">
            Como funciona
          </a>
          <a href="#recursos" className="hover:text-white transition-colors">
            Recursos
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#demo" className="hover:text-white transition-colors">
            Demonstração
          </a>
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col items-center md:items-end gap-1 text-[11px] font-mono text-zinc-400">
          <div>© {new Date().getFullYear()} CHEFEMIND AI Inc. Todos os direitos reservados.</div>
          <div className="text-zinc-400">
            <span>Powered by Quantum Food AI Core</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
