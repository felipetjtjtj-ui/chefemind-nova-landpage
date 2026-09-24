import React from 'react';
import { 
  Zap, 
  MessageSquare, 
  UtensilsCrossed, 
  Printer, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Check, 
  X as CloseIcon, 
  ArrowRight,
  Flame,
  Radio,
  Cpu
} from 'lucide-react';

export const QuantumSystemCore: React.FC = () => {
  return (
    <section id="como-funciona" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06080d] border-t border-white/[0.08] overflow-hidden">
      {/* Background Cybernetic Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header: Punchy & Futuristic */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Seu cliente com fome{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              não espera 10 minutos.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Elimine as mensagens acumuladas no horário de pico e garanta um atendimento imediato onde o cliente pede rápido e a comanda já sai impressa na sua cozinha.
          </p>
        </div>

        {/* 1. Confronto Direto (Dor vs Solução: Por que você perde dinheiro hoje) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {/* Card: O Jeito Antigo */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0e1118]/80 border border-red-500/20 relative overflow-hidden backdrop-blur-md animate-float-2 will-change-transform">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-red-500/10 border-l border-b border-red-500/30 text-red-400 font-mono text-[11px] font-bold">
              // O JEITO ANTIGO
            </div>
            
            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              Onde seu restaurante perde dinheiro:
            </h3>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CloseIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Demora de 10 a 20 min para responder:</strong> O cliente não espera e pede no concorrente ou no iFood.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CloseIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Até 27% de comissão para marketplaces:</strong> Você trabalha o mês inteiro para deixar um quarto do faturamento com terceiros.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CloseIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Erros em comandas e estresse na cozinha:</strong> Atendente esquece a observação "sem cebola", prato volta e o cliente reclama.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CloseIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Nenhum upsell nos pedidos:</strong> Funcionário cansado não oferece bebida, sobremesa ou combo extra.
                </div>
              </li>
            </ul>
          </div>

          {/* Card: Com o ChefeMind */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111724]/90 to-[#0c1018]/90 border border-emerald-500/30 relative overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.1)] animate-float-1 will-change-transform">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-emerald-500/20 border-l border-b border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              // COM CHEFEMIND
            </div>

            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              Máxima velocidade, apenas 5% de taxa:
            </h3>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Resposta imediata em 0.8s:</strong> Nenhum cliente fica no vácuo. Conversão instantânea no calor da fome.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Apenas 5% de taxa e PIX direto:</strong> Esqueça os 27% dos marketplaces. 95% do valor das vendas cai direto na sua conta bancária.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Impressão automática na cozinha:</strong> O pedido fecha e a comanda térmica já sai impressa com todas as observações.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">+34% de faturamento com upsell:</strong> A IA sugere acompanhamentos estratégicos para cada item com naturalidade.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. A Tríade Autônoma (3 Pilares Poderosos em Grid Futurista) */}
        <div className="text-center mb-10">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
            // TELEMETRIA DO SISTEMA
          </div>
          <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white">
            3 motores integrados em uma única plataforma
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilar 1: Atendimento IA */}
          <div className="p-7 rounded-3xl bg-[#0c1017] border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group animate-float-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)] will-change-transform">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="font-mono text-[11px] text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  01 // CONVERSAÇÃO
                </span>
              </div>

              <h4 className="font-bold text-white text-lg mb-2">
                Atendente Neural WhatsApp
              </h4>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Escuta áudios longos, compreende gírias e sotaques regionais, tira dúvidas de pratos e atende 1.000 clientes ao mesmo tempo sem fila de espera.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Latência 0.8s
              </span>
              <span>Áudio & Texto</span>
            </div>
          </div>

          {/* Pilar 2: Cardápio Digital */}
          <div className="p-7 rounded-3xl bg-[#0c1017] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group animate-float-2 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] will-change-transform">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="font-mono text-[11px] text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  02 // CARDÁPIO PWA
                </span>
              </div>

              <h4 className="font-bold text-white text-lg mb-2">
                Cardápio Digital sem App
              </h4>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Abre em 0.5s no navegador ou direto no WhatsApp. Fotos atraentes em alta definição, customização de ingredientes e checkout PIX com taxa fixa de 5%.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Apenas 5% de Taxa
              </span>
              <span>PWA Instantâneo</span>
            </div>
          </div>

          {/* Pilar 3: Cozinha e Operação */}
          <div className="p-7 rounded-3xl bg-[#0c1017] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group animate-float-3 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] will-change-transform">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="font-mono text-[11px] text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  03 // PRODUÇÃO
                </span>
              </div>

              <h4 className="font-bold text-white text-lg mb-2">
                Comanda Direta na Cozinha
              </h4>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Impressão térmica imediata com separação de itens por praça (cozinha / sushi bar). Atualização automática de status para o cliente e motoboy.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Sincronia Total
              </span>
              <span>Impressão Térmica</span>
            </div>
          </div>
        </div>

        {/* Action Bar / Direct Navigation */}
        <div className="mt-14 p-5 rounded-2xl bg-[#0b0e14] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Veja a tecnologia em ação no seu próprio ritmo</div>
              <div className="text-xs text-zinc-400">Navegue pelo cardápio digital oficial ou confira o painel operacional abaixo</div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#cardapio-digital"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              <span>Ver Cardápio Oficial Guriri</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
