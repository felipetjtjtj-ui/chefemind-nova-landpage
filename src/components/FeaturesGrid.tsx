import React, { useState } from 'react';
import { Bot, Mic, BookOpen, TrendingUp, Utensils, Navigation, Send, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Atendimento 24/7 no WhatsApp',
    description: 'Atendimento instantâneo em qualquer horário do dia ou da noite, sem pausas, feriados ou filas de espera.',
    iconName: 'Bot',
    badge: 'ALTA DISPONIBILIDADE',
    tag: 'Disponibilidade 99.9%',
  },
  {
    id: 'f2',
    title: 'Transcrição & Compreensão de Áudio',
    description: 'O cliente manda áudio de 40 segundos e o ChefeMind extrai os itens, sabores, observações e endereço em 0.8s.',
    iconName: 'Mic',
    badge: 'VOZ PARA TEXTO NEURAL',
    tag: 'Processamento em 0.8s',
  },
  {
    id: 'f3',
    title: 'Cardápio Inteligente Dinâmico',
    description: 'Cardápio interativo atualizado em tempo real. Esgotou um ingrediente? A IA remove automaticamente das opções.',
    iconName: 'BookOpen',
    badge: 'SINCRONIA DE ESTOQUE',
    tag: 'Zero quebra de produto',
  },
  {
    id: 'f4',
    title: 'Sugestão Automática de Adicionais',
    description: 'Upsell contextual baseado no pedido: bebidas, sobremesas e combos sugeridos na hora exata, aumentando o ticket.',
    iconName: 'TrendingUp',
    badge: 'UPSELL COGNITIVO',
    tag: '+28% no Ticket Médio',
  },
  {
    id: 'f5',
    title: 'Integração com PDV & Cozinha (KDS)',
    description: 'O pedido confirmado é despachado diretamente para as impressoras térmicas e telas da cozinha sem digitação humana.',
    iconName: 'Utensils',
    badge: 'ZERO RETRABALHO',
    tag: 'Sincronização Direta',
  },
  {
    id: 'f6',
    title: 'Roteirização & Despacho de Entregadores',
    description: 'Cálculo de rotas inteligentes por endereço exato, divisão de áreas e notificação automática para os motoboys.',
    iconName: 'Navigation',
    badge: 'LOGÍSTICA OTIMIZADA',
    tag: 'Menos tempo na rota',
  },
  {
    id: 'f7',
    title: 'Disparo de Campanhas Segmentadas',
    description: 'Disparos direcionados para quem ama pizza às sextas ou quem não pede há 20 dias, com alta taxa de abertura.',
    iconName: 'Send',
    badge: 'ENGAGEMENT IA',
    tag: '84% Taxa de Abertura',
  },
  {
    id: 'f8',
    title: 'Relatórios Preditivos de Demanda',
    description: 'Previsão de quais pratos mais venderão no fim de semana para você preparar insumos e evitar desperdício.',
    iconName: 'LineChart',
    badge: 'ANALYTICS AVANÇADO',
    tag: 'Decisões por Dados',
  },
];

export const FeaturesGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Bot': return <Bot className="w-5 h-5 text-red-400" />;
      case 'Mic': return <Mic className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-purple-400" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-blue-400" />;
      case 'Send': return <Send className="w-5 h-5 text-rose-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-teal-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="recursos" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-4">
            <span>RECURSOS TECNOLÓGICOS DE ALTA PERFORMANCE</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Engenharia pensada para a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">
              velocidade do seu restaurante.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Cada módulo foi desenvolvido para operar sob pressão extrema de pico, garantindo precisão milimétrica em cada pedido.
          </p>
        </div>

        {/* 8 Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedFeature(item.id)}
              className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/40 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                    {getFeatureIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-['Outfit'] text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-red-400">
                <span>{item.tag}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
