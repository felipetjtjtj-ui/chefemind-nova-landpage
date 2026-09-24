import React, { useState } from 'react';
import { MessageSquare, BrainCircuit, ClipboardCheck, DollarSign, ArrowRight, Zap, Check } from 'lucide-react';
import { HowItWorksStep } from '../types';

const steps: HowItWorksStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Cliente chama',
    subtitle: 'Qualquer hora, qualquer canal',
    description: 'O cliente envia uma mensagem no WhatsApp do seu restaurante por texto ou áudio natural.',
    quantumPulse: 'Abertura de canal neural',
    icon: 'MessageSquare',
    badge: 'ENTRADA DE CONVERSA',
  },
  {
    step: '02',
    number: '02',
    title: 'ChefeMind entende',
    subtitle: 'Zero menus robóticos',
    description: 'A IA interpreta contexto, histórico, preferências, intolerâncias e esclarece dúvidas instantaneamente.',
    quantumPulse: 'Processamento semântico 0.8s',
    icon: 'BrainCircuit',
    badge: 'COGNIÇÃO EM TEMPO REAL',
  },
  {
    step: '03',
    number: '03',
    title: 'Pedido é organizado',
    subtitle: 'Comanda perfeita sem erro',
    description: 'Gera comanda padronizada, calcula frete por endereço exato e gera link de pagamento Pix ou cartão.',
    quantumPulse: 'Sincronização com KDS',
    icon: 'ClipboardCheck',
    badge: 'AUTOMAÇÃO OPERACIONAL',
  },
  {
    step: '04',
    number: '04',
    title: 'Restaurante vende',
    subtitle: 'Faturamento no piloto automático',
    description: 'Comanda cai na cozinha, motoboy é acionado e o cliente entra automaticamente no CRM para recompra.',
    quantumPulse: 'Conversão & Fidelização',
    icon: 'DollarSign',
    badge: 'ESCALA DE VENDAS',
  },
];

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-red-400" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-amber-400" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-cyan-400" />;
      default:
        return <Zap className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="como-funciona" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background Quantum Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            FLUXO OPERACIONAL CONTÍNUO
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Como o ChefeMind orquestra{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">
              suas vendas em 4 etapas.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Uma linha de montagem quântica: da primeira mensagem do cliente até a comida quentinha entregue na porta.
          </p>
        </div>

        {/* Quantum Connecting Track (Desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-emerald-500/30 via-red-500/50 to-cyan-500/30" />
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-red-500/20 blur-sm" />
        </div>

        {/* 4 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={item.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer group relative p-6 sm:p-7 rounded-3xl transition-all duration-300 backdrop-blur-md border ${
                  isActive
                    ? 'bg-white/[0.05] border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.25)] -translate-y-2'
                    : 'bg-white/[0.02] border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.03]'
                }`}
              >
                {/* Step Tag & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Outfit'] font-black text-3xl sm:text-4xl text-zinc-600 group-hover:text-red-400 transition-colors">
                    {item.number}
                  </span>
                  <div className={`p-3 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-red-500/20 border-red-500/40 shadow-lg shadow-red-500/30'
                      : 'bg-white/[0.04] border-white/[0.06]'
                  }`}>
                    {getIcon(item.icon)}
                  </div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold mb-1">
                  {item.badge}
                </div>

                <h3 className="font-['Outfit'] text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>

                <span className="block text-xs text-zinc-400 mb-3 font-medium">
                  {item.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Quantum Pulse Sub-tag */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-red-400 animate-ping' : 'bg-zinc-600'}`} />
                  <span>{item.quantumPulse}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
