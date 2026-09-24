import React, { useState } from 'react';
import { Pizza, Utensils, Cake, Beef, Fish, Store, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { NicheItem } from '../types';

const niches: NicheItem[] = [
  {
    id: 'burgers',
    title: 'Hamburguerias',
    description: 'Gestão de pontos da carne, dezenas de adicionais (bacon, queijo em dobro, molho artesanal) e combos com batatas.',
    exampleDialogue: 'Cliente: "Manda o smash duplo bem tostado com bacon extra e sem picles." -> Pedido fechado em 20 segundos.',
    benefit: '+32% em adicionais e combos',
    iconName: 'Beef',
  },
  {
    id: 'pizzas',
    title: 'Pizzarias',
    description: 'Pizzas meio a meio, até 4 sabores, bordas vulcânicas recheadas, massas finas e observações específicas de corte.',
    exampleDialogue: 'Cliente: "Meia portuguesa sem cebola e meia calabresa com borda de catupiry." -> Sem erro de sabor.',
    benefit: 'Zero confusão em pedidos meio a meio',
    iconName: 'Pizza',
  },
  {
    id: 'japones',
    title: 'Restaurantes Japoneses',
    description: 'Combinados especiais, trocas de peças, observações de gergelim, molho tarê extra, wasabi e hashis ecológicos.',
    exampleDialogue: 'Cliente: "Troca os niguiris de kani por salmão maçaricado?" -> Calculado e cobrado com perfeição.',
    benefit: 'Precisão na troca de peças e adicionais',
    iconName: 'Fish',
  },
  {
    id: 'docerias',
    title: 'Docerias & Confeitarias',
    description: 'Agendamento de encomendas de bolos de aniversário, centos de doces finos, datas e horários exatos de retirada.',
    exampleDialogue: 'Cliente: "Preciso de um bolo de brigadeiro de 2kg pro sábado às 16h." -> Reserva e sinal Pix confirmados.',
    benefit: 'Agendamento sem conflito de horário',
    iconName: 'Cake',
  },
  {
    id: 'marmitas',
    title: 'Marmitarias & Comida Caseira',
    description: 'Atualização rápida do cardápio do dia, escolha de guarnições (arroz branco/integral, feijão preto/carioca) e combos semanais.',
    exampleDialogue: 'Cliente: "Qual o executivo de hoje?" -> ChefeMind envia o prato com foto e botão de fechar pedido.',
    benefit: 'Disparo de cardápio do dia às 10h45',
    iconName: 'Utensils',
  },
  {
    id: 'franquias',
    title: 'Redes & Franquias',
    description: 'Roteamento automático pelo CEP do cliente para a unidade mais próxima, com relatórios globais para a franqueadora.',
    exampleDialogue: 'Cliente em SP ou RJ fala no mesmo número central -> Pedido direcionado para a loja da região.',
    benefit: 'Multi-loja unificada num só WhatsApp',
    iconName: 'Store',
  },
];

export const NichesSection: React.FC = () => {
  const [activeNicheId, setActiveNicheId] = useState(niches[0].id);
  const activeNiche = niches.find((n) => n.id === activeNicheId) || niches[0];

  const getNicheIcon = (name: string) => {
    switch (name) {
      case 'Beef': return <Beef className="w-5 h-5 text-red-400" />;
      case 'Pizza': return <Pizza className="w-5 h-5 text-amber-400" />;
      case 'Fish': return <Fish className="w-5 h-5 text-cyan-400" />;
      case 'Cake': return <Cake className="w-5 h-5 text-pink-400" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-emerald-400" />;
      case 'Store': return <Store className="w-5 h-5 text-purple-400" />;
      default: return <Utensils className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-4">
            <span>VERSATILIDADE OPERACIONAL</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Projetado sob medida para o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">
              ritmo de cada cozinha.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            De hamburguerias artesanais a redes com dezenas de lojas, o ChefeMind se molda ao vocabulário, regras e cardápio da sua marca.
          </p>
        </div>

        {/* 6 Niches Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {niches.map((n) => {
            const isSelected = n.id === activeNicheId;
            return (
              <button
                key={n.id}
                onClick={() => setActiveNicheId(n.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white text-zinc-950 border-white shadow-xl shadow-white/10 scale-105'
                    : 'bg-white/[0.03] text-zinc-400 border-white/[0.07] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {getNicheIcon(n.iconName)}
                <span>{n.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Niche Showcase Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/[0.1] backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                {getNicheIcon(activeNiche.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider block">
                  ESPECIALIZAÇÃO GASTRONÔMICA
                </span>
                <h3 className="font-['Outfit'] text-2xl font-bold text-white">
                  {activeNiche.title}
                </h3>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>{activeNiche.benefit}</span>
            </div>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {activeNiche.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Exemplo de interação real
                </span>
                <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                  {activeNiche.exampleDialogue}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
            <span>Configuração do cardápio feita em menos de 48 horas</span>
            <a
              href="#demo"
              className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1"
            >
              <span>Testar no seu nicho</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
