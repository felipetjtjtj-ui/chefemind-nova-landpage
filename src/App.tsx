/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BackgroundScrollVideo } from './components/BackgroundScrollVideo';
import { Navbar } from './components/Navbar';
import { HeroQuantum } from './components/HeroQuantum';
import { QuantumSystemCore } from './components/QuantumSystemCore';
import { Ecosystem } from './components/Ecosystem';
import { DigitalMenuShowcase } from './components/DigitalMenuShowcase';
import { DashboardPreview } from './components/DashboardPreview';
import { ROISection } from './components/ROISection';
import { FAQSection } from './components/FAQSection';
import { GrandCTA } from './components/GrandCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-zinc-100 font-sans selection:bg-red-500 selection:text-white antialiased overflow-x-hidden">
      {/* Video Original de Fundo — Controlado pelo Mouse Scroll */}
      <BackgroundScrollVideo />

      {/* Fixed Navigation Bar */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero — Headline Quântica, Telemetria Instantânea e CTAs */}
        <HeroQuantum />

        {/* 2. Núcleo do Sistema — O fim do caos no WhatsApp + Tríade Autônoma (Conversão, Cardápio, Cozinha) */}
        <QuantumSystemCore />

        {/* 3. Teia do Ecossistema ChefeMind — Diagrama Interativo com Conexões em Tempo Real */}
        <Ecosystem />

        {/* 4. Cardápio Digital Oficial — Guriri Sushi em Modo Celular Interativo */}
        <DigitalMenuShowcase />

        {/* 4. Dashboard Operacional — Cockpit em Tempo Real com Pedidos e Financeiro */}
        <DashboardPreview />

        {/* 5. Calculadora de ROI — Simulador de Economia Sem Taxas de Marketplace */}
        <ROISection />

        {/* 6. FAQ Transparente — Sanando as Principais Objeções do Dono de Restaurante */}
        <FAQSection />

        {/* 7. Grand CTA — Acelerador de Faturamento e Onboarding VIP */}
        <GrandCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
