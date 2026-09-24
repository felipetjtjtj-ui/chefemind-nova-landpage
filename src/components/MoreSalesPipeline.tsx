import React from 'react';
import { TrendingUp, ShoppingCart, DollarSign, Clock, Target, ArrowUpRight, CheckCircle } from 'lucide-react';
import { SalesPipelineStage } from '../types';

const pipelineStages: SalesPipelineStage[] = [
  {
    id: 's1',
    metric: '+31%',
    label: 'Recuperação de Carrinho',
    description: 'Clientes que pararam no meio da escolha recebem uma mensagem empática de resgate em até 7 minutos.',
    conversionBoost: '3 em cada 10 retornam e concluem',
    accentColor: '#ef4444',
  },
  {
    id: 's2',
    metric: '+28%',
    label: 'Aumento de Ticket Médio',
    description: 'Sugestões certeiras de adicionais (bacon extra, bebidas geladas, sobremesas) no exato momento da decisão.',
    conversionBoost: 'Média de +R$ 16,80 por pedido',
    accentColor: '#f59e0b',
  },
  {
    id: 's3',
    metric: '94%',
    label: 'Queda na Desistência por Demora',
    description: 'Tempo de primeira resposta cai de 14 minutos para 0.8 segundos. Ninguém mais fica esperando no vácuo.',
    conversionBoost: 'Zero perda de clientes com fome',
    accentColor: '#10b981',
  },
  {
    id: 's4',
    metric: '4.2x',
    label: 'ROI em Campanhas Segmentadas',
    description: 'Mensagens enviadas no dia e horário em que aquele perfil específico mais tem probabilidade de comprar.',
    conversionBoost: 'Engajamento 5x maior que broadcast genérico',
    accentColor: '#8b5cf6',
  },
];

export const MoreSalesPipeline: React.FC = () => {
  return (
    <section id="resultados" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ALAVANCAGEM DE RECEITA COMPROVADA</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Como o ChefeMind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              multiplica seu faturamento.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Não é só velocidade no atendimento. É uma esteira matemática de conversão que extrai mais receita de cada contato que entra no seu WhatsApp.
          </p>
        </div>

        {/* 4 Conversion Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pipelineStages.map((stage) => (
            <div
              key={stage.id}
              className="relative p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <div className="font-['Outfit'] font-black text-4xl sm:text-5xl text-emerald-400 mb-3 tracking-tight">
                  {stage.metric}
                </div>

                <h3 className="font-['Outfit'] text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {stage.label}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400/90 font-medium">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{stage.conversionBoost}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Case in point: The 24h Revenue Funnel Flow */}
        <div className="p-8 rounded-3xl bg-zinc-950/90 border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider block mb-2">
                FLUXO DE CAIXA EM TEMPO REAL
              </span>
              <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-3">
                O cliente manda um "oi" às 23h30. Seu restaurante ainda fatura?
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Com o ChefeMind, pedidos da madrugada, agendamentos para o dia seguinte e dúvidas sobre o cardápio são processados e convertidos sem precisar de atendentes humanos de plantão.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Tempo de Resposta</span>
                <span className="font-['Outfit'] text-2xl font-bold text-white">0.8 seg</span>
                <span className="text-[10px] text-emerald-400 block mt-1">24h / 7 dias</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Capacidade</span>
                <span className="font-['Outfit'] text-2xl font-bold text-white">Ilimitada</span>
                <span className="text-[10px] text-cyan-400 block mt-1">Simultânea</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Retenção de Clientes</span>
                <span className="font-['Outfit'] text-2xl font-bold text-white">88.4%</span>
                <span className="text-[10px] text-red-400 block mt-1">Satisfação Máxima</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
