import React, { useState } from 'react';
import { MessageSquareWarning, Clock, AlertTriangle, Users, Flame, UserX, TrendingDown, ArrowUpRight } from 'lucide-react';
import { ProblemItem } from '../types';

const problems: ProblemItem[] = [
  {
    id: 'p1',
    title: 'Mensagens acumuladas',
    description: 'No pico do almoço ou jantar, dezenas de clientes mandam mensagem simultaneamente e ficam sem retorno.',
    stat: '+47 msgs',
    impact: 'Fila de espera caótica',
    iconName: 'MessageSquareWarning',
  },
  {
    id: 'p2',
    title: 'Clientes esperando mais de 15min',
    description: 'A fome não espera. Um atraso de 10 minutos é o suficiente para o cliente abrir o concorrente no iFood.',
    stat: '18 min',
    impact: 'Tempo médio sem IA',
    iconName: 'Clock',
  },
  {
    id: 'p3',
    title: 'Pedidos perdidos e errados',
    description: 'Anotações em papel ou WhatsApp digitadas incorretamente geram retrabalho, cancelamentos e prejuízo direto.',
    stat: '12%',
    impact: 'Índice de erro manual',
    iconName: 'AlertTriangle',
  },
  {
    id: 'p4',
    title: 'Atendimento lento em horários de pico',
    description: 'Quando o salão e o delivery bombam juntos, o atendente não dá conta de responder com gentileza e agilidade.',
    stat: '3.4x',
    impact: 'Sobrecarga nos fins de semana',
    iconName: 'Flame',
  },
  {
    id: 'p5',
    title: 'Equipe exausta e sobrecarregada',
    description: 'Funcionários passam horas respondendo "Qual a chave pix?" e "Qual o cardápio?" em vez de focar no cliente.',
    stat: '85%',
    impact: 'Perguntas repetitivas',
    iconName: 'Users',
  },
  {
    id: 'p6',
    title: 'Abandono silencioso de conversas',
    description: 'O cliente para de responder sem você saber por quê. A maioria desistiu por falta de resposta instantânea.',
    stat: '31%',
    impact: 'Taxa de desistência',
    iconName: 'UserX',
  },
];

export const ProblemSection: React.FC = () => {
  const [dailyConversations, setDailyConversations] = useState(80);
  const [avgTicket, setAvgTicket] = useState(65);

  // Calculate estimated lost revenue due to 25% average drop-off
  const estimatedLostOrdersPerMonth = Math.round(dailyConversations * 30 * 0.22);
  const estimatedLostMoney = estimatedLostOrdersPerMonth * avgTicket;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'MessageSquareWarning':
        return <MessageSquareWarning className="w-5 h-5 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-red-400" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-rose-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-yellow-400" />;
      default:
        return <UserX className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="problema" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background Quantum Fog */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            O GARGALO SILENCIOSO DO SEU DELIVERY
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Enquanto você espera,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">
              seu concorrente vende.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            No mercado gastronômico atual, o tempo de resposta é a métrica mais valiosa. Uma resposta que demora 5 minutos corta suas chances de fechamento pela metade.
          </p>
        </div>

        {/* 6 Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((prob) => (
            <div
              key={prob.id}
              className="group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] hover:border-red-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                  {renderIcon(prob.iconName)}
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm font-bold text-red-400">
                    {prob.stat}
                  </span>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                    {prob.impact}
                  </span>
                </div>
              </div>

              <h3 className="font-['Outfit'] text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                {prob.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Loss Calculator Simulator */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-2">
                <TrendingDown className="w-4 h-4" />
                SIMULADOR DE IMPACTO FINANCEIRO
              </div>
              <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-3">
                Quanto dinheiro seu restaurante deixa na mesa todo mês?
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Ajuste suas estimativas para ver quanto o abandono por demora no WhatsApp pode estar custando ao seu caixa.
              </p>

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>Conversas diárias no WhatsApp</span>
                    <span className="text-red-400 font-bold">{dailyConversations} msgs/dia</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="400"
                    value={dailyConversations}
                    onChange={(e) => setDailyConversations(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>Ticket Médio por Pedido</span>
                    <span className="text-red-400 font-bold">R$ {avgTicket},00</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="180"
                    step="5"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Result Card */}
            <div className="w-full lg:w-80 p-6 rounded-2xl bg-black/60 border border-red-500/20 text-center flex flex-col items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.15)]">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                Estimativa de Vendas Perdidas
              </span>
              <div className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-red-400 mb-2">
                R$ {estimatedLostMoney.toLocaleString('pt-BR')},00
              </div>
              <span className="text-xs text-zinc-400 mb-4">
                ~ {estimatedLostOrdersPerMonth} pedidos abandonados/mês
              </span>

              <a
                href="#demo"
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shadow-lg shadow-red-600/30"
              >
                <span>Recuperar com ChefeMind</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
