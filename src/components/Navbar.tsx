import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { BrandLogo } from './BrandLogo';

const navItems: NavItem[] = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Cardápio Digital', href: '#cardapio-digital' },
  { label: 'Painel ao Vivo', href: '#painel' },
  { label: 'Calculadora ROI', href: '#roi' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050608]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-3 text-white no-underline focus:outline-none shrink-0"
        >
          <BrandLogo size="md" />
          <div className="flex flex-col">
            <span className="font-['Outfit'] font-extrabold tracking-tight text-lg sm:text-xl text-white leading-none whitespace-nowrap">
              CHEFE<span className="text-red-500 font-normal">MIND</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium tracking-normal mt-1 whitespace-nowrap">
              Inteligência para Restaurantes
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-links"
          className="hidden lg:flex items-center gap-1.5 rounded-full px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shrink-0"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-zinc-300 hover:text-white rounded-full transition-colors hover:bg-white/[0.08] whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#demo"
            id="nav-cta-btn"
            onClick={(e) => scrollToSection(e, '#demo')}
            className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Quero conhecer</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90 shrink-0" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/[0.1] shrink-0 cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b0e14]/98 border border-white/[0.12] backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-4 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/[0.08] mt-1">
            <a
              href="#demo"
              onClick={(e) => scrollToSection(e, '#demo')}
              className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-500 block shadow-lg shadow-red-600/30 whitespace-nowrap"
            >
              Quero conhecer o ChefeMind
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
