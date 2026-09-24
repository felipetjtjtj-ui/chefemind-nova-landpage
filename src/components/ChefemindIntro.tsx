import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCheck,
  Zap,
  BrainCircuit,
  RefreshCw,
  Send,
  UtensilsCrossed,
  BadgeCheck,
  Phone,
  Video,
  Mic,
  Smile,
  Paperclip,
  MapPin,
  Clock,
  Play,
  Pause,
  Volume2
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const ChefemindIntro: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [audioMode, setAudioMode] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Progressive, humanized conversational sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (activeStep === 0) {
      timer = setTimeout(() => {
        setIsTyping(true);
        setActiveStep(1);
      }, 1200);
    } else if (activeStep === 1) {
      timer = setTimeout(() => {
        setIsTyping(false);
        setActiveStep(2);
      }, 2000);
    } else if (activeStep === 2) {
      timer = setTimeout(() => {
        setActiveStep(3);
      }, 3000);
    } else if (activeStep === 3) {
      timer = setTimeout(() => {
        setIsTyping(true);
        setActiveStep(4);
      }, 1000);
    } else if (activeStep === 4) {
      timer = setTimeout(() => {
        setIsTyping(false);
        setActiveStep(5);
      }, 2000);
    } else if (activeStep === 5) {
      timer = setTimeout(() => {
        setActiveStep(0);
        setIsTyping(false);
      }, 9000);
    }

    return () => clearTimeout(timer);
  }, [activeStep]);

  // Auto-scroll chat gracefully when steps progress
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [activeStep, isTyping]);

  const handleRestart = () => {
    setActiveStep(0);
    setIsTyping(false);
    setIsPlayingAudio(false);
  };

  return (
    <section id="produto" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Explanations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wide">
              <span>Inteligência Contextual Gastronômica</span>
            </div>

            <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Não é apenas um chatbot.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                É o seu melhor garçom digital.
              </span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              O ChefeMind compreende o contexto de cada cliente, atende com calor humano natural e converte conversas espontâneas em pedidos finalizados no seu sistema em segundos.
            </p>

            {/* Core Capability Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    Memória de Preferências e Histórico
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Reconhece o cliente pelo nome, lembra que ele ama borda de Catupiry, não come cebola e sugere sua bebida favorita automaticamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    Conversação Humana e Compreensão de Áudio
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Zero menus numéricos robóticos. Entende gírias, frases soltas e até mensagens de voz no WhatsApp com transcrição neural imediata.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    Sugestões e Upsell Inteligente
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Oferece sobremesas, bebidas e adicionais no momento oportuno, elevando o ticket médio em até 34% de forma empática e sutil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic WhatsApp Dark-Themed Simulation */}
          <div className="lg:col-span-6">
            {/* Format Toggle Pill */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-zinc-400">Simulação ao vivo no WhatsApp</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#111622]/90 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => { setAudioMode(false); handleRestart(); }}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                    !audioMode ? 'bg-[#00a884] text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Mensagem de Texto
                </button>
                <button
                  type="button"
                  onClick={() => { setAudioMode(true); handleRestart(); }}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
                    audioMode ? 'bg-[#00a884] text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Mic className="w-3 h-3" />
                  <span>Áudio de Voz</span>
                </button>
              </div>
            </div>

            {/* Smartphone Outer Shell */}
            <div className="relative mx-auto max-w-[430px] rounded-[38px] bg-[#0c1317] border-[3px] border-[#222e35] shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(0,168,132,0.1)] overflow-hidden ring-1 ring-white/15">
              {/* Phone Top Speaker & Camera Notch */}
              <div className="pt-2 px-6 pb-1 bg-[#202c33] flex items-center justify-between text-[11px] font-semibold text-zinc-300 select-none">
                <span>20:42</span>
                <div className="w-20 h-4 rounded-full bg-black/40 mx-auto flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700/50 mr-1.5" />
                  <div className="w-8 h-1 rounded-full bg-zinc-800" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span className="text-[10px]">5G</span>
                  <div className="w-4 h-2.5 rounded-sm border border-zinc-300 p-0.5 flex items-center">
                    <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* WhatsApp Header Bar */}
              <div className="px-4 py-3 bg-[#202c33] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <BrandLogo size="md" className="ring-2 ring-emerald-500/30" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#202c33]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-['Outfit'] font-bold text-sm text-[#e9edef] tracking-tight">
                        ChefeMind Delivery
                      </span>
                      <span title="Conta Comercial Verificada">
                        <BadgeCheck className="w-4 h-4 text-emerald-400 fill-emerald-500/20 shrink-0" />
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8696a0] flex items-center gap-1.5 mt-0.5">
                      {isTyping ? (
                        <span className="text-emerald-400 font-medium flex items-center gap-1">
                          <span>digitando</span>
                          <span className="inline-flex gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-bounce" />
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                          </span>
                        </span>
                      ) : (
                        <span className="text-zinc-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span>Conta comercial • Online</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.12] transition-colors"
                    title="Reiniciar demonstração"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-2.5 text-zinc-400 pl-1 border-l border-white/10">
                    <Video className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Phone className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              {/* Chat Thread Container with subtle WhatsApp wallpaper */}
              <div
                ref={chatScrollRef}
                className="p-4 space-y-3 min-h-[460px] max-h-[470px] overflow-y-auto bg-[#0b141a] relative custom-scrollbar select-text"
              >
                {/* Subtle WhatsApp doodle background motif */}
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 15% 15%, rgba(255,255,255,0.4) 1px, transparent 1px),
                                      radial-gradient(circle at 85% 85%, rgba(255,255,255,0.4) 1px, transparent 1px),
                                      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* System Date Pill */}
                <div className="text-center relative z-10 my-1">
                  <span className="text-[11px] text-[#8696a0] bg-[#182229] px-3 py-1 rounded-lg border border-white/[0.06] shadow-xs">
                    Hoje • 20:42
                  </span>
                </div>

                {/* Message 1: Customer (Sent message) */}
                <div className="flex justify-end relative z-10 animate-in fade-in duration-300">
                  <div className="max-w-[86%] rounded-2xl rounded-tr-xs bg-[#005c4b] text-[#e9edef] px-3.5 py-2.5 shadow-md border border-emerald-500/10">
                    {audioMode ? (
                      /* Audio Note Message */
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5 pr-2">
                          <button
                            type="button"
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="w-8 h-8 rounded-full bg-[#008069] flex items-center justify-center text-white shrink-0 hover:scale-105 transition-transform cursor-pointer"
                          >
                            {isPlayingAudio ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                          </button>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-0.5 h-5">
                              {[12, 22, 16, 28, 14, 24, 18, 30, 26, 15, 20, 28, 14, 18, 22, 16, 12, 8].map((h, idx) => (
                                <span
                                  key={idx}
                                  className={`w-0.5 rounded-full transition-all duration-300 ${
                                    isPlayingAudio && idx < 9 ? 'bg-[#53bdeb]' : 'bg-[#8696a0]/60'
                                  }`}
                                  style={{ height: `${h}px` }}
                                />
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-[#8696a0]">
                              <span>0:07</span>
                              <span className="text-[10px] text-[#53bdeb] flex items-center gap-1 font-mono">
                                <Mic className="w-3 h-3" /> Áudio
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Automatic Transcript Pill */}
                        <div className="p-2 rounded-lg bg-[#00483a] border border-white/5 text-[11px] text-zinc-200 leading-relaxed">
                          <span className="text-emerald-300 font-medium">Transcrição: </span>
                          <span>"Fala chefe, manda aquela pizza de sempre."</span>
                        </div>
                      </div>
                    ) : (
                      /* Text Message */
                      <p className="text-[13.5px] leading-relaxed text-[#e9edef]">
                        Fala chefe, manda aquela pizza de sempre.
                      </p>
                    )}

                    <div className="flex items-center justify-end gap-1.5 mt-1 text-[11px] text-[#8696a0]">
                      <span>20:42</span>
                      <CheckCheck className="w-4 h-4 text-[#53bdeb]" />
                    </div>
                  </div>
                </div>

                {/* Typing Balloon when ChefeMind is formulating the answer */}
                {isTyping && activeStep === 1 && (
                  <div className="flex justify-start relative z-10 animate-in fade-in duration-200">
                    <div className="rounded-2xl rounded-tl-xs bg-[#202c33] border border-white/[0.08] px-3.5 py-2.5 flex items-center gap-2 shadow-md">
                      <span className="text-xs text-[#8696a0]">ChefeMind digitando</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message 2: ChefeMind Natural Warm Response */}
                {activeStep >= 2 && (
                  <div className="flex justify-start relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="max-w-[88%] rounded-2xl rounded-tl-xs bg-[#202c33] border border-white/[0.08] text-[#e9edef] p-3.5 text-[13.5px] shadow-md space-y-2.5">
                      <p className="leading-relaxed">
                        Fala, Lucas! Boa noite, meu amigo! Tudo certo por aí? 🍕
                      </p>
                      <p className="leading-relaxed text-[#e9edef]">
                        Já separei o seu pedido de costume:{' '}
                        <strong className="font-semibold text-white">
                          1x Calabresa Especial com borda quentinha de Catupiry
                        </strong>
                        , do jeitinho que você gosta.
                      </p>
                      <p className="leading-relaxed text-zinc-300 text-[13px] bg-[#182229] p-2.5 rounded-xl border border-white/[0.04]">
                        Vai querer que já adicione aquele{' '}
                        <strong className="font-semibold text-white">
                          Guaraná Antarctica Zero 2L
                        </strong>{' '}
                        bem geladinho pra acompanhar como na última sexta? 😉
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-0.5 text-[11px] text-[#8696a0]">
                        <span>20:42</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Message 3: Customer Confirmation */}
                {activeStep >= 3 && (
                  <div className="flex justify-end relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="max-w-[86%] rounded-2xl rounded-tr-xs bg-[#005c4b] text-[#e9edef] px-3.5 py-2.5 shadow-md border border-emerald-500/10">
                      <p className="text-[13.5px] leading-relaxed">
                        Com certeza! Manda o guaraná também no mesmo endereço de sempre.
                      </p>
                      <div className="flex items-center justify-end gap-1.5 mt-1 text-[11px] text-[#8696a0]">
                        <span>20:43</span>
                        <CheckCheck className="w-4 h-4 text-[#53bdeb]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Typing Balloon when ChefeMind is dispatching the kitchen order */}
                {isTyping && activeStep === 4 && (
                  <div className="flex justify-start relative z-10 animate-in fade-in duration-200">
                    <div className="rounded-2xl rounded-tl-xs bg-[#202c33] border border-white/[0.08] px-3.5 py-2.5 flex items-center gap-2 shadow-md">
                      <span className="text-xs text-[#8696a0]">Imprimindo na cozinha e gerando comanda</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message 4: ChefeMind Order Confirmation + KDS Kitchen Sync */}
                {activeStep >= 5 && (
                  <div className="flex justify-start relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="max-w-[94%] rounded-2xl rounded-tl-xs bg-[#202c33] border border-emerald-500/25 text-[#e9edef] p-3.5 text-[13.5px] shadow-xl space-y-3">
                      <p className="leading-relaxed">
                        Perfeito, Lucas! Pedido confirmado e já enviado direto pra nossa cozinha! 🔥
                      </p>

                      {/* WhatsApp Business Card Receipt */}
                      <div className="rounded-xl bg-[#111b21] border border-white/[0.08] overflow-hidden shadow-sm">
                        {/* Receipt Top Header */}
                        <div className="px-3 py-2 bg-[#182229] border-b border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-bold text-white tracking-wider">COMANDA #2481</span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                            PIX AUTOMÁTICO
                          </span>
                        </div>

                        {/* Order Items */}
                        <div className="p-3 space-y-2 text-xs">
                          <div className="flex items-start justify-between gap-2 text-zinc-200">
                            <div>
                              <div className="font-semibold text-white">1x Pizza Calabresa Especial</div>
                              <div className="text-[11px] text-zinc-400">Grande • Borda recheada de Catupiry</div>
                            </div>
                            <span className="font-mono text-zinc-300 shrink-0">R$ 62,00</span>
                          </div>

                          <div className="flex items-start justify-between gap-2 text-zinc-200">
                            <div>
                              <div className="font-semibold text-white">1x Guaraná Antarctica Zero 2L</div>
                              <div className="text-[11px] text-zinc-400">Garrafa gelada</div>
                            </div>
                            <span className="font-mono text-zinc-300 shrink-0">R$ 14,00</span>
                          </div>

                          {/* Subtotal / Delivery / Total */}
                          <div className="pt-2 border-t border-white/[0.06] space-y-1">
                            <div className="flex items-center justify-between text-[11px] text-zinc-400">
                              <span>Taxa de Entrega</span>
                              <span className="text-emerald-400 font-medium">Grátis (Cliente VIP)</span>
                            </div>
                            <div className="flex items-center justify-between text-xs font-bold text-white pt-0.5">
                              <span>Total a Pagar</span>
                              <span className="text-emerald-400 text-sm font-mono font-bold">R$ 76,00</span>
                            </div>
                          </div>

                          {/* Address Info */}
                          <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-[#8696a0]">
                            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span className="truncate">R. das Acácias, 412 • Apto 32</span>
                          </div>
                        </div>

                        {/* Live Production Pill */}
                        <div className="px-3 py-2 bg-emerald-950/40 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-300">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Previsão: 25 a 32 min</span>
                          </div>
                          <span className="font-medium text-[10px] text-emerald-200">No Forno 🔥</span>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Assim que o motoboy sair com a sua pizza quentinha, te aviso aqui com o rastreio! Bom apetite! 😋
                      </p>

                      <div className="flex items-center justify-end gap-1 mt-0.5 text-[11px] text-[#8696a0]">
                        <span>20:43</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="p-2.5 bg-[#202c33] border-t border-white/[0.08] flex items-center gap-2">
                <div className="flex items-center gap-2 text-zinc-400 pl-1">
                  <Smile className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                  <Paperclip className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </div>
                <div className="flex-1 px-3.5 py-2 rounded-full bg-[#2a3942] text-xs text-zinc-400 flex items-center">
                  <span className="truncate">Mensagem...</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00a884] text-white flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                  <Mic className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
