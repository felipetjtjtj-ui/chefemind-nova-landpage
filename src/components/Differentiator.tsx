import React, { useState } from 'react';
import { Bot, XCircle, CheckCircle2, MessageSquare, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const Differentiator: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      userQuery: 'Queria meia frango com catupiry e meia quatro queijos bem passada, mas sem orégano.',
      traditionalResponse: 'Opção não reconhecida. Digite 1 para Ver Cardápio, 2 para Fazer Pedido, 3 para Falar com Atendente.',
      chefemindResponse: 'Com certeza! Anotei aqui: Meia Frango c/ Catupiry + Meia 4 Queijos, bem assadinha e sem orégano nenhum. Deseja adicionar borda recheada?',
      tag: 'Personalização Extrema',
    },
    {
      userQuery: 'Manda o mesmo de sexta passada!',
      traditionalResponse: 'Por favor, digite o número do item desejado de acordo com o nosso catálogo em PDF.',
      chefemindResponse: 'Opa, Lucas! Foi 1x Smash Burger Duplo com bacon crocante e Maionese da Casa + Coca Zero. Mando no endereço da Rua das Acácias?',
      tag: 'Memória & Histórico',
    },
    {
      userQuery: '[Áudio de 15 segundos]: Fala mestre, tô com pressa aqui no trampo, manda um executivo de filé com fritas pra viagem.',
      traditionalResponse: 'Não aceitamos mensagens de voz. Por favor, envie uma mensagem de texto.',
      chefemindResponse: 'Ouvido e entendido! Prato Executivo de Filé Mignon c/ Fritas embalado para viagem. Vai ficar pronto em 18 min. Pode ser no Pix?',
      tag: 'Áudio para Pedido em 0.8s',
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-4">
            <span>LINGUAGEM NATURAL VS. ROBÔS ENGESSADOS</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            IA que conversa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              como gente.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Seus clientes não querem conversar com uma árvore de decisão do século passado. Eles querem ser atendidos rápido, com respeito e atenção aos detalhes.
          </p>
        </div>

        {/* Example Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {examples.map((ex, i) => (
            <button
              key={ex.tag}
              onClick={() => setSelectedExample(i)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                selectedExample === i
                  ? 'bg-white text-zinc-950 border-white shadow-lg shadow-white/10'
                  : 'bg-white/[0.03] text-zinc-400 border-white/[0.07] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {ex.tag}
            </button>
          ))}
        </div>

        {/* Customer Input Box */}
        <div className="max-w-3xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-xs shrink-0">
            CL
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
              Mensagem real do cliente
            </div>
            <p className="text-white text-sm sm:text-base font-medium">
              "{examples[selectedExample].userQuery}"
            </p>
          </div>
        </div>

        {/* Comparison Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Chatbot Card */}
          <div className="relative p-7 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-400">
                  <XCircle className="w-5 h-5 text-zinc-500" />
                  <span className="font-['Outfit'] font-bold text-sm uppercase tracking-wider">
                    Chatbot Tradicional
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  ENGESSADO
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-400 leading-relaxed font-mono mb-6">
                "{examples[selectedExample].traditionalResponse}"
              </div>

              <ul className="space-y-3 text-xs text-zinc-400">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                  <span>Obriga o cliente a digitar números e navegar menus</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                  <span>Não entende áudios nem gírias</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                  <span>Gera atrito e frustração logo no primeiro contato</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
              Taxa de abandono média: 38%
            </div>
          </div>

          {/* ChefeMind Quantum AI Card */}
          <div className="relative p-7 rounded-3xl bg-gradient-to-b from-red-950/20 to-zinc-950/90 border border-red-500/30 backdrop-blur-md shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col justify-between">
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-red-600 text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-red-600/40">
              PRÓXIMA GERAÇÃO
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/20">
                <div className="flex items-center gap-2.5 text-white">
                  <div className="p-1.5 rounded-lg bg-red-600/20 text-red-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="font-['Outfit'] font-bold text-sm tracking-wider">
                    ChefeMind AI
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  RESPOSTA EM 0.8S
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-red-950/30 border border-red-500/30 text-sm text-zinc-100 leading-relaxed mb-6 font-sans">
                "{examples[selectedExample].chefemindResponse}"
              </div>

              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Compreensão semântica total de qualquer modificação</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transcreve e responde áudios com extrema agilidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Upsell e confirmação de pagamento com 1 clique</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-red-500/20 text-[11px] font-mono text-emerald-400 font-semibold flex items-center justify-between">
              <span>Conversão de conversas: 89%</span>
              <span>Zero atrito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
