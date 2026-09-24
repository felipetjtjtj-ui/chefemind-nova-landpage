import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, CheckCheck, RotateCcw, ThumbsUp, MessageSquare, Clock } from 'lucide-react';
import { ChatMessage } from '../types';
import { BrandLogo } from './BrandLogo';

const defaultSuggestions = [
  'Quero fazer um pedido',
  'Vocês têm opção vegetariana?',
  'Quanto tempo demora a entrega?',
  'Quero falar com um humano',
  'Manda aquela pizza de calabresa com borda recheada',
];

export const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-init',
      sender: 'bot',
      text: 'Olá! Seja bem-vindo ao ChefeMind Demo. Sou a inteligência artificial gastronômica do restaurante. Como posso te ajudar hoje?',
      timestamp: 'Agora',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateSmartReply = (userText: string): { reply: string; suggestions?: string[] } => {
    const text = userText.toLowerCase();

    if (text.includes('vegetariana') || text.includes('vegano') || text.includes('sem carne')) {
      return {
        reply: 'Temos sim! Nossa Pizza Margherita Especial com massa de fermentação natural de 48h e nosso Burger do Futuro com cogumelos salteados e queijo brie vegetal. Gostaria de ver o cardápio vegetariano completo?',
        suggestions: ['Sim, me mostra!', 'Tem opção sem glúten?'],
      };
    }

    if (text.includes('quanto tempo') || text.includes('demora') || text.includes('previsão') || text.includes('entrega')) {
      return {
        reply: 'Nosso tempo médio de entrega hoje está entre 28 e 35 minutos! Para calcular o tempo e frete exatos, poderia me enviar seu endereço ou CEP?',
        suggestions: ['Calcular pro meu CEP', 'Posso retirar no balcão?'],
      };
    }

    if (text.includes('humano') || text.includes('atendente') || text.includes('pessoa')) {
      return {
        reply: 'Sem problemas! Já notifiquei nossa equipe humana. Enquanto o gerente Matheus assume a conversa (tempo médio: 1 min), posso adiantar o seu pedido para você não perder tempo?',
        suggestions: ['Quero falar com o Matheus', 'Pode anotar o pedido por aqui mesmo'],
      };
    }

    if (text.includes('fazer um pedido') || text.includes('cardápio') || text.includes('menu')) {
      return {
        reply: 'Excelente! Hoje nossos destaques são o Combo Smash Duplo com batata rústica (com 15% off) e a Pizza Família meio Calabresa Especial, meio 4 Queijos. Qual te dá mais água na boca hoje?',
        suggestions: ['Vou querer o Combo Smash!', 'Prefiro a pizza', 'Quero montar do meu jeito'],
      };
    }

    if (text.includes('pizza') || text.includes('calabresa')) {
      return {
        reply: 'Perfeita escolha! Pizza de Calabresa Especial com cebola caramelizada e borda recheada de Catupiry original. Quer adicionar uma Coca-Cola 2L geladinha por apenas R$ 9,90?',
        suggestions: ['Sim, adiciona a Coca!', 'Só a pizza mesmo', 'Qual a chave Pix?'],
      };
    }

    if (text.includes('pix') || text.includes('pagar') || text.includes('pagamento')) {
      return {
        reply: 'Aceitamos Pix automático com confirmação imediata no WhatsApp, cartão de crédito/débito na entrega e dinheiro com troco. Posso fechar seu pedido no Pix com 5% de desconto?',
        suggestions: ['Manda a chave Pix', 'Prefiro cartão na entrega'],
      };
    }

    // Default contextual response
    return {
      reply: `Entendi perfeitamente! Como uma IA especializada no seu cardápio, posso processar qualquer alteração de sabor, retirar ingredientes, calcular o frete e emitir a comanda direto na cozinha. O que deseja pedir agora?`,
      suggestions: ['Ver promoções de hoje', 'Fazer um pedido rápido'],
    };
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: 'Agora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const response = generateSmartReply(textToSend);
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: response.reply,
        timestamp: 'Agora',
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'm-init-2',
        sender: 'bot',
        text: 'Conversa reiniciada! Como posso ajudar o seu restaurante ou demonstrar nossas capacidades?',
        timestamp: 'Agora',
      },
    ]);
  };

  return (
    <section id="demo" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-4">
            <span>PLAYGROUND INTERATIVO EM TEMPO REAL</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Teste a inteligência do ChefeMind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">
              agora mesmo.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Clique nas mensagens de teste abaixo ou digite qualquer pergunta como se fosse um cliente do seu restaurante.
          </p>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-8">
          {defaultSuggestions.map((sug) => (
            <button
              key={sug}
              onClick={() => handleSendMessage(sug)}
              className="px-4 py-2 rounded-full text-xs font-medium bg-white/[0.04] hover:bg-red-600 hover:text-white border border-white/[0.08] hover:border-red-500 text-zinc-300 transition-all duration-200 hover:scale-105"
            >
              "{sug}"
            </button>
          ))}
        </div>

        {/* Chat Interactive Simulator Frame */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#090d15] border border-white/[0.12] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Header bar */}
          <div className="p-4 sm:px-6 bg-[#0e1422] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <BrandLogo size="md" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0e1422]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-['Outfit'] font-bold text-sm text-white">ChefeMind Simulator</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400">IA V2.4</span>
                </div>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Pronto para atender • Latência 0.8s
                </span>
              </div>
            </div>

            <button
              onClick={handleResetChat}
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] transition-colors text-xs flex items-center gap-1.5"
              title="Reiniciar chat"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono hidden sm:inline">LIMPAR</span>
            </button>
          </div>

          {/* Messages Container */}
          <div
            ref={chatScrollRef}
            className="p-5 space-y-4 h-[380px] overflow-y-auto bg-[#070a10]/80 backdrop-blur-md"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'rounded-tr-xs bg-[#005c4b] text-[#e9edef] shadow-md'
                      : 'rounded-tl-xs bg-[#202c33] border border-white/[0.06] text-[#e9edef] shadow-md'
                  }`}
                >
                  <p>{m.text}</p>
                  <div
                    className={`flex items-center justify-end gap-1.5 mt-1 text-[11px] ${
                      m.sender === 'user' ? 'text-[#8696a0]' : 'text-[#8696a0]'
                    }`}
                  >
                    <span>{m.timestamp}</span>
                    {m.sender === 'user' && <CheckCheck className="w-4 h-4 text-[#53bdeb]" />}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-xs bg-[#202c33] border border-white/[0.06] px-4 py-3 flex items-center gap-2 shadow-md">
                  <span className="text-xs text-[#8696a0] mr-1">ChefeMind digitando</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputVal);
            }}
            className="p-3 bg-[#0e1422] border-t border-white/[0.08] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Digite qualquer dúvida ou pedido de teste..."
              className="flex-1 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-xs sm:text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="w-10 h-10 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-lg shadow-red-600/30 shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
