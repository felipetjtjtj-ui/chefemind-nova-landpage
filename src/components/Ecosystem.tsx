import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageCircle, ShoppingBag, Database, Users, Utensils, Bike, Tag, Megaphone, BarChart3 } from 'lucide-react';
import { EcosystemNode } from '../types';

const ecosystemNodes: EcosystemNode[] = [
  { id: 'whatsapp', name: 'WhatsApp Oficial', category: 'Canal', status: 'online', description: 'API Oficial com selo de verificação e webhooks instantâneos', dataThroughput: '142 msgs/min', color: '#22c55e', xPercent: 50, yPercent: 12 },
  { id: 'pedidos', name: 'Pedidos & PDV', category: 'Vendas', status: 'synced', description: 'Sincronização com sistemas de caixa e comanda eletrônica', dataThroughput: '84 pedidos/h', color: '#ef4444', xPercent: 78, yPercent: 22 },
  { id: 'crm', name: 'CRM Inteligente', category: 'Inteligência', status: 'active', description: 'Clusterização automática de perfis, hábitos e frequência', dataThroughput: '1.2k perfis', color: '#a855f7', xPercent: 88, yPercent: 52 },
  { id: 'cozinha', name: 'Cozinha & KDS', category: 'Produção', status: 'synced', description: 'Impressão térmica automática e tela de produção KDS', dataThroughput: 'Tempo médio 14m', color: '#f59e0b', xPercent: 78, yPercent: 80 },
  { id: 'delivery', name: 'Delivery & Rotas', category: 'Logística', status: 'active', description: 'Cálculo de raio de entrega, taxa por km e despacho de motoboys', dataThroughput: '99.4% pontualidade', color: '#3b82f6', xPercent: 50, yPercent: 88 },
  { id: 'promocoes', name: 'Promoções & Cupons', category: 'Marketing', status: 'active', description: 'Geração dinâmica de vouchers e cupons de reativação', dataThroughput: '24% conversão', color: '#ec4899', xPercent: 22, yPercent: 80 },
  { id: 'campanhas', name: 'Campanhas Ativas', category: 'Engajamento', status: 'synced', description: 'Disparos cirúrgicos no momento de maior propensão de compra', dataThroughput: 'ROI 8.4x', color: '#f97316', xPercent: 12, yPercent: 52 },
  { id: 'clientes', name: 'Clientes & VIPs', category: 'Fidelização', status: 'active', description: 'Score de fidelidade, cashback e alertas de clientes recorrentes', dataThroughput: '68% retenção', color: '#06b6d4', xPercent: 22, yPercent: 22 },
];

export const Ecosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState<EcosystemNode | null>(ecosystemNodes[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background Quantum Canvas for Continuous Beam Pulses
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      nodeIdx: Math.floor(Math.random() * ecosystemNodes.length),
      progress: Math.random(),
      speed: 0.006 + Math.random() * 0.012,
      size: 2 + Math.random() * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Draw connecting lines from center to each node
      ecosystemNodes.forEach((node, i) => {
        const nx = (node.xPercent / 100) * width;
        const ny = (node.yPercent / 100) * height;

        const isHovered = activeNode?.id === node.id;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = isHovered ? node.color : 'rgba(255, 255, 255, 0.07)';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();
      });

      // Draw moving photon packets along lines
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const targetNode = ecosystemNodes[p.nodeIdx];
        const nx = (targetNode.xPercent / 100) * width;
        const ny = (targetNode.yPercent / 100) * height;

        const curX = cx + (nx - cx) * p.progress;
        const curY = cy + (ny - cy) * p.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = targetNode.color;
        ctx.shadowColor = targetNode.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [activeNode]);

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'whatsapp': return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      case 'pedidos': return <ShoppingBag className="w-5 h-5 text-red-400" />;
      case 'crm': return <Database className="w-5 h-5 text-purple-400" />;
      case 'cozinha': return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'delivery': return <Bike className="w-5 h-5 text-blue-400" />;
      case 'promocoes': return <Tag className="w-5 h-5 text-pink-400" />;
      case 'campanhas': return <Megaphone className="w-5 h-5 text-orange-400" />;
      case 'clientes': return <Users className="w-5 h-5 text-cyan-400" />;
      default: return <BarChart3 className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="ecossistema" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            O Ecossistema Completo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">
              do seu Restaurante.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            O ChefeMind atua como o cérebro central unificando todos os pontos de contato: atendimento, pedidos, cozinha, motoboys e inteligência de dados.
          </p>
        </div>

        {/* Big Interactive Quantum Diagram Canvas Container */}
        <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl bg-zinc-950/60 border border-white/[0.08] backdrop-blur-xl overflow-hidden mb-12 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          {/* Canvas for Quantum Beams */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

          {/* Central ChefeMind Core Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* Outer pulsating rings */}
            <div className="absolute w-44 h-44 rounded-full border border-red-500/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
            <div className="absolute w-36 h-36 rounded-full border border-red-500/30 pointer-events-none" />

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#1b080a] to-[#0d0305] border-2 border-red-500 flex flex-col items-center justify-center text-white shadow-[0_0_50px_rgba(239,68,68,0.5)] cursor-pointer">
              <div className="p-2.5 rounded-2xl bg-red-600 shadow-lg shadow-red-600/50 mb-1">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <span className="font-['Outfit'] font-extrabold text-xs tracking-wider uppercase text-white">
                CHEFEMIND
              </span>
              <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest">
                CORE IA
              </span>
            </div>
          </div>

          {/* Orbiting Satellite Nodes */}
          {ecosystemNodes.map((node) => {
            const isSelected = activeNode?.id === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                onMouseEnter={() => setActiveNode(node)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-2xl flex items-center gap-2.5 transition-all duration-300 border backdrop-blur-xl ${
                  isSelected
                    ? 'bg-zinc-900 border-white/40 shadow-2xl scale-110'
                    : 'bg-zinc-950/80 border-white/10 hover:border-white/20 hover:scale-105'
                }`}
                style={{
                  left: `${node.xPercent}%`,
                  top: `${node.yPercent}%`,
                  borderColor: isSelected ? node.color : undefined,
                  boxShadow: isSelected ? `0 0 25px ${node.color}40` : undefined,
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${node.color}15` }}
                >
                  {getNodeIcon(node.id)}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="block text-xs font-bold text-white leading-tight">
                    {node.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {node.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Telemetry Detail Bar */}
        {activeNode && (
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${activeNode.color}20`, border: `1px solid ${activeNode.color}40` }}
              >
                {getNodeIcon(activeNode.id)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-['Outfit'] font-bold text-white text-base">
                    {activeNode.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                    {activeNode.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {activeNode.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/[0.06] pt-3 sm:pt-0">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Capacidade / Vazão
                </span>
                <span className="font-mono text-xs font-bold text-red-400">
                  {activeNode.dataThroughput}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
