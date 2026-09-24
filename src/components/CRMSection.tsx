import React, { useState } from 'react';
import { Database, UserCheck, Calendar, Heart, Clock, Award, Zap, Send, Gift, History } from 'lucide-react';

export const CRMSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'campaigns' | 'insights'>('profile');
  const [simulatedMessageSent, setSimulatedMessageSent] = useState(false);

  const handleSendSmartReactivation = () => {
    setSimulatedMessageSent(true);
    setTimeout(() => setSimulatedMessageSent(false), 3000);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>MEMÓRIA HIPER-PERSONALIZADA</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Histórico que se transforma em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-red-500">
              inteligência comercial.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Cada cliente tem um perfil dinâmico com preferências, histórico de compras e hábitos. O ChefeMind sabe exatamente quando e o que oferecer para gerar recompra.
          </p>
        </div>

        {/* CRM Dashboard Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-950/80 border border-white/[0.1] backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          {/* Top Bar Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-3 text-xs font-mono text-zinc-400">CHEFEMIND // CRM COGNITIVO</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  activeTab === 'profile' ? 'bg-white text-zinc-950' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Perfil do Cliente
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  activeTab === 'campaigns' ? 'bg-white text-zinc-950' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Campanhas Automáticas
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  activeTab === 'insights' ? 'bg-white text-zinc-950' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Insights de Consumo
              </button>
            </div>
          </div>

          {/* Profile View */}
          {activeTab === 'profile' && (
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Customer Badge & Quick Stats */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-rose-500 to-red-500 p-0.5 mb-4 shadow-xl">
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center font-['Outfit'] font-black text-2xl text-white">
                    CG
                  </div>
                  <span className="absolute bottom-1 right-1 p-1 rounded-full bg-emerald-500 ring-4 ring-zinc-950">
                    <UserCheck className="w-3 h-3 text-white" />
                  </span>
                </div>

                <h3 className="font-['Outfit'] text-lg font-bold text-white mb-1">
                  Camila Guimarães
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-6">
                  <Award className="w-3.5 h-3.5 text-purple-400" />
                  CLIENTE VIP RECORRENTE
                </span>

                <div className="w-full grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Total Pedidos</span>
                    <span className="font-['Outfit'] text-lg font-bold text-white">24</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">LTV Total</span>
                    <span className="font-['Outfit'] text-lg font-bold text-emerald-400">R$ 1.840</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Frequência</span>
                    <span className="font-['Outfit'] text-xs font-bold text-zinc-200">1x a cada 4d</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Canal</span>
                    <span className="font-['Outfit'] text-xs font-bold text-emerald-400">WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Preferences, Timeline & AI Actions */}
              <div className="lg:col-span-8 space-y-6">
                {/* Preferences Pill Box */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-semibold mb-3">
                    <Heart className="w-4 h-4 text-red-400" />
                    PREFERÊNCIAS MEMORIZADAS PELA IA
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
                      Molho de Alho artesanal extra
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
                      Coca-Cola Zero gelada
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
                      Ponto da carne: Ao ponto para bem
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-xs">
                      🚫 NUNCA adicionar picles
                    </span>
                  </div>
                </div>

                {/* Last Order & Next Prediction */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      ÚLTIMO PEDIDO (HÁ 3 DIAS)
                    </div>
                    <div className="text-sm font-semibold text-white">
                      1x Smash Duplo Bacon + Fritas
                    </div>
                    <span className="text-xs text-zinc-500">Sexta-feira às 21:14 • R$ 74,00</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      ANIVERSÁRIO CADASTRADO
                    </div>
                    <div className="text-sm font-semibold text-white">
                      14 de Outubro
                    </div>
                    <span className="text-xs text-purple-300">Gatilho de Sobremesa Grátis Ativo</span>
                  </div>
                </div>

                {/* Interactive AI Automation Trigger */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 to-red-950/30 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-bold mb-1">
                      <Zap className="w-3.5 h-3.5 text-purple-400" />
                      GATILHO DE REATIVAÇÃO RECOMENDADO
                    </div>
                    <p className="text-xs text-zinc-300">
                      "Camila costuma pedir às sextas. Mandar mensagem sugerindo o Smash habitual com 10% off?"
                    </p>
                  </div>

                  <button
                    onClick={handleSendSmartReactivation}
                    disabled={simulatedMessageSent}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold whitespace-nowrap transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 shrink-0"
                  >
                    {simulatedMessageSent ? (
                      <>
                        <Gift className="w-4 h-4 text-emerald-300 animate-bounce" />
                        <span>Mensagem Enviada!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Disparar com 1 Clique</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Campaigns View */}
          {activeTab === 'campaigns' && (
            <div className="pt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Resgate de Clientes Inativos (+25 dias sem pedir)</h4>
                  <p className="text-xs text-zinc-400">Envia voucher personalizado com os pratos favoritos do cliente.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">ATIVA</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Aniversariantes da Semana</h4>
                  <p className="text-xs text-zinc-400">Parabeniza o cliente e oferece sobremesa de cortesia no próximo pedido.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">ATIVA</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Chuva de Domingo (Dias de Baixo Movimento)</h4>
                  <p className="text-xs text-zinc-400">Ativa frete grátis apenas para clientes fiéis em horários calmos.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">ATIVA</span>
              </div>
            </div>
          )}

          {/* Insights View */}
          {activeTab === 'insights' && (
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xs font-mono text-zinc-500 uppercase">Taxa de Recompra</span>
                <div className="font-['Outfit'] text-3xl font-extrabold text-emerald-400 my-1">+41%</div>
                <span className="text-xs text-zinc-400">Com mensagens no timing certo</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xs font-mono text-zinc-500 uppercase">Aumento de Ticket</span>
                <div className="font-['Outfit'] text-3xl font-extrabold text-red-400 my-1">+28%</div>
                <span className="text-xs text-zinc-400">Upsell inteligente de sobremesas</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xs font-mono text-zinc-500 uppercase">Tempo Médio Economizado</span>
                <div className="font-['Outfit'] text-3xl font-extrabold text-purple-400 my-1">4.5h/dia</div>
                <span className="text-xs text-zinc-400">Sem digitação manual de cadastros</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
