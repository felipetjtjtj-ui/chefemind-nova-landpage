import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, ShieldAlert, Award } from 'lucide-react';

export const ROISection: React.FC = () => {
  const [monthlyOrders, setMonthlyOrders] = useState(1200);
  const [ticketAverage, setTicketAverage] = useState(72);

  // Calculations:
  // 1. Peak recovery + drop reduction: +15% more finished orders
  const extraOrders = Math.round(monthlyOrders * 0.16);
  // 2. Ticket average boost from upsell: +18%
  const newTicketAverage = Math.round(ticketAverage * 1.18);
  // Extra revenue per month
  const additionalMonthlyRevenue = (extraOrders * newTicketAverage) + (monthlyOrders * (newTicketAverage - ticketAverage));
  // ChefeMind plan nominal benchmark
  const estimatedCost = 690;
  const roiMultiplier = (additionalMonthlyRevenue / estimatedCost).toFixed(1);

  return (
    <section id="roi" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Uma IA que não é custo.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              É uma máquina de faturamento.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            O ChefeMind se paga geralmente nos primeiros 10 a 14 dias de operação apenas eliminando pedidos abandonados e aplicando upsell inteligente.
          </p>
        </div>

        {/* Interactive ROI Simulator Box */}
        <div className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/[0.1] backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white">
                Simule o ganho do seu restaurante:
              </h3>

              {/* Slider 1: Monthly Orders */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-zinc-300">
                  <span>Pedidos mensais no delivery</span>
                  <span className="text-emerald-400 font-bold">{monthlyOrders.toLocaleString('pt-BR')} pedidos/mês</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="5000"
                  step="50"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                  <span>300</span>
                  <span>2.500</span>
                  <span>5.000+</span>
                </div>
              </div>

              {/* Slider 2: Average Ticket */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-zinc-300">
                  <span>Ticket Médio Atual</span>
                  <span className="text-emerald-400 font-bold">R$ {ticketAverage},00</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="180"
                  step="5"
                  value={ticketAverage}
                  onChange={(e) => setTicketAverage(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                  <span>R$ 35</span>
                  <span>R$ 100</span>
                  <span>R$ 180+</span>
                </div>
              </div>

              {/* 4 Pillars Bullet Points */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mais pedidos atendidos simultaneamente no pico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Reativação automática de clientes inativos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Aumento médio de +18% no ticket com upsell</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Erros e cancelamentos manuais reduzidos a zero</span>
                </div>
              </div>
            </div>

            {/* Simulated Return Card */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-b from-emerald-950/30 to-zinc-900/60 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] text-center flex flex-col items-center justify-center">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2">
                Faturamento Adicional Estimado / Mês
              </span>

              <div className="font-['Outfit'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                + R$ {additionalMonthlyRevenue.toLocaleString('pt-BR')},00
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mb-6">
                <Award className="w-3.5 h-3.5" />
                <span>ROI ESTIMADO: {roiMultiplier}x O VALOR DA PLATAFORMA</span>
              </div>

              <div className="w-full grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-left">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">Pedidos Extras</span>
                  <span className="font-['Outfit'] text-lg font-bold text-white">+{extraOrders}/mês</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-left">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">Novo Ticket</span>
                  <span className="font-['Outfit'] text-lg font-bold text-emerald-400">R$ {newTicketAverage},00</span>
                </div>
              </div>

              <a
                href="#demo"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Garantir Essa Receita Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
