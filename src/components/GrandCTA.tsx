import React, { useState } from 'react';
import { Bot, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const GrandCTA: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="cta-final" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Intense Quantum Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-red-600/15 via-rose-600/10 to-amber-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Headline */}
        <h2 className="font-['Outfit'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          O futuro do seu restaurante{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
            não espera.
          </span>
        </h2>

        <p className="text-zinc-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Elimine o caos das mensagens no horário de pico, aumente suas vendas e ofereça uma experiência inesquecível para cada cliente.
        </p>

        {/* Quick Interest Form or Instant Activation */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/[0.12] backdrop-blur-2xl shadow-[0_0_80px_rgba(239,68,68,0.25)]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                  Nome do seu Restaurante ou Delivery
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Burger King / Pizzaria Bella Vista"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="text-left">
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                id="grand-cta-submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 hover:from-red-500 hover:to-rose-400 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Ativar ChefeMind Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Outfit'] text-2xl font-bold text-white">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Nossos arquitetos de IA entrarão em contato pelo WhatsApp fornecido em até 15 minutos para preparar a demonstração personalizada para o <strong className="text-white">{restaurantName}</strong>.
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-emerald-400">
                  Prioridade de atendimento confirmada.
                </span>
              </div>
            </div>
          )}

          {/* Guarantees Row */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Setup Guiado em 48h
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-red-400" />
              Sem fidelidade abusiva
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              API Oficial WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
