import React, { useState } from 'react';
import {
  LayoutDashboard,
  Settings2,
  UtensilsCrossed,
  BarChart3,
  Users,
  ShoppingBag,
  Layers,
  ClipboardList,
  CreditCard,
  Receipt,
  Moon,
  Store,
  MoreVertical,
  PanelLeft,
  TrendingUp,
  CheckCircle2,
  Clock,
  Printer,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Search,
  Check,
  Plus
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

type TabKey = 'dashboard' | 'pedidos' | 'cardapio' | 'adicionais' | 'financeiro';

interface OrderItem {
  id: string;
  customer: string;
  items: string;
  total: string;
  status: 'Preparando' | 'Em Rota' | 'Concluído';
  time: string;
  payment: string;
}

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');
  const [chartPeriod, setChartPeriod] = useState<'3m' | '30d' | '7d'>('30d');
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  // Live order items for the Pedidos view
  const demoOrders: OrderItem[] = [
    {
      id: '#2489',
      customer: 'Lucas Silveira',
      items: '1x Combo Premium Salmão (32 pcs) + 1x Coca-Cola Zero',
      total: 'R$ 118,00',
      status: 'Preparando',
      time: 'Há 3 min',
      payment: 'PIX Automático',
    },
    {
      id: '#2488',
      customer: 'Mariana Duarte',
      items: '2x Temaki Hot Filadélfia + 1x Porção Guioza Suíno',
      total: 'R$ 74,00',
      status: 'Em Rota',
      time: 'Há 12 min',
      payment: 'Cartão Crédito',
    },
    {
      id: '#2487',
      customer: 'Rodrigo Fontes',
      items: '1x Uramaki Especial Ebi + 1x Suco Natural Laranja',
      total: 'R$ 62,50',
      status: 'Concluído',
      time: 'Há 26 min',
      payment: 'PIX Automático',
    },
    {
      id: '#2486',
      customer: 'Camila Peixoto',
      items: '1x Sashimi Salmão Maçaricado (15 fatias) + 2x Cerveja',
      total: 'R$ 89,00',
      status: 'Concluído',
      time: 'Há 41 min',
      payment: 'PIX Automático',
    },
  ];

  return (
    <section id="painel" className="relative py-28 px-3 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Atmospheric Light Behind Dashboard */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-red-600/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Persuasive Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            O coração do seu restaurante,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              por dentro.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Esqueça plataformas complexas e confusas. O ChefeMind coloca o faturamento real, os pedidos em preparo e a gestão do seu cardápio em um cockpit limpo, rápido e 100% sob seu controle.
          </p>
        </div>

        {/* The Exact ChefeMind Dashboard Window (Replicated with Pixel Precision) */}
        <div className="rounded-3xl bg-[#090b10] border border-white/[0.12] shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_50px_rgba(239,68,68,0.12)] overflow-hidden">
          
          {/* Top Browser / App Bar */}
          <div className="px-5 py-3 bg-[#0d1017] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-zinc-400 border-l border-white/10 pl-3">
                app.chefemind.com.br / dashboard
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sincronizado com WhatsApp
              </span>
              <span className="text-xs text-zinc-400">v2.8.4</span>
            </div>
          </div>

          {/* Main Dashboard Layout (Sidebar + Content Workspace) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* Left Authentic Sidebar (from user screenshot) */}
            <aside className="lg:col-span-3 bg-[#0a0c10] border-b lg:border-b-0 lg:border-r border-white/[0.08] p-4 flex flex-col justify-between select-none">
              <div className="space-y-4">
                
                {/* Brand Header */}
                <div className="flex items-center gap-3 px-2 py-1">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                    <BrandLogo size="sm" showText={false} />
                  </div>
                  <span className="font-['Outfit'] font-bold text-base text-white tracking-wide">
                    Chefemind
                  </span>
                </div>

                {/* Loja Aberta Pill Status (interactive) */}
                <button
                  type="button"
                  onClick={() => setIsStoreOpen(!isStoreOpen)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                    isStoreOpen
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:bg-zinc-800'
                  }`}
                  title="Clique para alternar o status de funcionamento"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className={`w-2 h-2 rounded-full ${isStoreOpen ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'}`} />
                    <span>{isStoreOpen ? 'Loja aberta' : 'Loja fechada'}</span>
                  </div>
                  <Store className="w-4 h-4 opacity-70" />
                </button>

                {/* Menu List */}
                <nav className="space-y-1 text-xs">
                  {/* Dashboard - Active Pill */}
                  <button
                    type="button"
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold transition-all cursor-pointer ${
                      activeTab === 'dashboard'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_4px_20px_rgba(220,38,38,0.35)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    <span>Dashboard</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('pedidos')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold transition-all cursor-pointer ${
                      activeTab === 'pedidos'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_4px_20px_rgba(220,38,38,0.35)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <ClipboardList className="w-4 h-4 shrink-0" />
                      <span>Pedidos</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)] animate-pulse" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('cardapio')}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                      activeTab === 'cardapio'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_4px_20px_rgba(220,38,38,0.35)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <UtensilsCrossed className="w-4 h-4 shrink-0" />
                    <span>Cardapio</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('adicionais')}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                      activeTab === 'adicionais'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_4px_20px_rgba(220,38,38,0.35)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Layers className="w-4 h-4 shrink-0" />
                    <span>Adicionais</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('financeiro')}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                      activeTab === 'financeiro'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_4px_20px_rgba(220,38,38,0.35)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    <span>Financeiro</span>
                  </button>

                  <div className="pt-2 border-t border-white/[0.06] space-y-1">
                    <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer">
                      <ShoppingBag className="w-4 h-4 shrink-0" />
                      <span>Produtos</span>
                    </div>

                    <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer">
                      <Users className="w-4 h-4 shrink-0" />
                      <span>Usuários</span>
                    </div>

                    <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer">
                      <Settings2 className="w-4 h-4 shrink-0" />
                      <span>Configurações</span>
                    </div>

                    <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer">
                      <CreditCard className="w-4 h-4 shrink-0" />
                      <span>Planos</span>
                    </div>

                    <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer">
                      <Receipt className="w-4 h-4 shrink-0" />
                      <span>Faturas</span>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Bottom Profile Section (Guriri sushi) */}
              <div className="pt-4 mt-6 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 px-3 py-1.5 text-zinc-400 text-xs">
                  <Moon className="w-3.5 h-3.5" />
                  <span>Modo Escuro</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="min-w-0">
                    <div className="font-semibold text-xs text-white truncate">Guriri sushi</div>
                    <div className="text-[11px] text-zinc-400 truncate">arthurfgac@gmail.com</div>
                  </div>
                  <MoreVertical className="w-4 h-4 text-zinc-400 shrink-0" />
                </div>
              </div>
            </aside>

            {/* Right Main Content Area */}
            <main className="lg:col-span-9 bg-[#0e1117] p-5 sm:p-7 flex flex-col justify-between overflow-x-hidden">
              
              {/* Tab Header & Title */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <PanelLeft className="w-4 h-4 text-zinc-400" />
                  <h3 className="font-['Outfit'] font-bold text-lg text-white">
                    {activeTab === 'dashboard' && 'Dashboard'}
                    {activeTab === 'pedidos' && 'Gestão de Pedidos em Tempo Real'}
                    {activeTab === 'cardapio' && 'Cardápio Digital Sincronizado'}
                    {activeTab === 'adicionais' && 'Motor de Adicionais e Upsell'}
                    {activeTab === 'financeiro' && 'Resumo Financeiro e Economia'}
                  </h3>
                </div>

                {/* Switcher Indicator */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs text-zinc-400">Exibição interativa:</span>
                  <div className="flex items-center gap-1 bg-[#141822] p-1 rounded-xl border border-white/10 text-xs">
                    {(['dashboard', 'pedidos', 'cardapio', 'financeiro'] as TabKey[]).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`px-2.5 py-1 rounded-lg capitalize font-medium transition-all ${
                          activeTab === tab
                            ? 'bg-red-600 text-white shadow'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* VIEW 1: DASHBOARD (Authentic Replication from user's image) */}
              {activeTab === 'dashboard' && (
                <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                  
                  {/* 4 Metric Cards Exactly as in Screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    
                    {/* Card 1: Valor obtido */}
                    <div className="p-5 rounded-2xl bg-[#141822] border border-white/[0.08] hover:border-red-500/30 transition-all shadow-sm">
                      <span className="text-xs text-zinc-400 block mb-2 font-medium">
                        Valor obtido (ultimos 30 dias)
                      </span>
                      <div className="font-['Outfit'] font-bold text-2xl sm:text-[26px] text-white tracking-tight mb-2">
                        R$ 25.987,00
                      </div>
                      <span className="text-[11px] text-zinc-400 block leading-tight">
                        Soma dos pedidos concluidos no periodo
                      </span>
                    </div>

                    {/* Card 2: Novos clientes */}
                    <div className="p-5 rounded-2xl bg-[#141822] border border-white/[0.08] hover:border-red-500/30 transition-all shadow-sm">
                      <span className="text-xs text-zinc-400 block mb-2 font-medium">
                        Novos clientes (ultimos 30 dias)
                      </span>
                      <div className="font-['Outfit'] font-bold text-2xl sm:text-[26px] text-white tracking-tight mb-2">
                        166
                      </div>
                      <span className="text-[11px] text-zinc-400 block leading-tight">
                        Clientes unicos com pedidos concluidos no periodo
                      </span>
                    </div>

                    {/* Card 3: Pedidos concluidos hoje */}
                    <div className="p-5 rounded-2xl bg-[#141822] border border-white/[0.08] hover:border-red-500/30 transition-all shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-zinc-400 font-medium">
                          Pedidos concluidos hoje
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="font-['Outfit'] font-bold text-2xl sm:text-[26px] text-white tracking-tight mb-2">
                        18
                      </div>
                      <span className="text-[11px] text-zinc-400 block leading-tight">
                        Contagem de pedidos com status concluido no dia
                      </span>
                    </div>

                    {/* Card 4: Total de pedidos concluidos */}
                    <div className="p-5 rounded-2xl bg-[#141822] border border-white/[0.08] hover:border-red-500/30 transition-all shadow-sm">
                      <span className="text-xs text-zinc-400 block mb-2 font-medium">
                        Total de pedidos concluidos (ultimos 30 dias)
                      </span>
                      <div className="font-['Outfit'] font-bold text-2xl sm:text-[26px] text-white tracking-tight mb-2">
                        207
                      </div>
                      <span className="text-[11px] text-zinc-400 block leading-tight">
                        Pedidos concluidos no periodo selecionado de 30 dias
                      </span>
                    </div>
                  </div>

                  {/* Chart Card ("Valor obtido") */}
                  <div className="p-6 rounded-2xl bg-[#141822] border border-white/[0.08] shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="font-['Outfit'] font-bold text-white text-base">
                          Valor obtido
                        </h4>
                        <span className="text-xs text-zinc-400">
                          Comparativo de faturamento no periodo
                        </span>
                      </div>

                      {/* Period Filter Buttons (exactly as user screenshot) */}
                      <div className="inline-flex rounded-xl bg-[#0c0f16] p-1 border border-white/[0.08] text-xs font-semibold self-start sm:self-auto">
                        <button
                          type="button"
                          onClick={() => setChartPeriod('3m')}
                          className={`px-3 py-1.5 rounded-lg transition-all ${
                            chartPeriod === '3m' ? 'bg-[#1c2230] text-white shadow' : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Ultimos 3 meses
                        </button>
                        <button
                          type="button"
                          onClick={() => setChartPeriod('30d')}
                          className={`px-3 py-1.5 rounded-lg transition-all ${
                            chartPeriod === '30d' ? 'bg-[#1c2230] text-white border border-white/10 shadow' : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Ultimos 30 dias
                        </button>
                        <button
                          type="button"
                          onClick={() => setChartPeriod('7d')}
                          className={`px-3 py-1.5 rounded-lg transition-all ${
                            chartPeriod === '7d' ? 'bg-[#1c2230] text-white shadow' : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Ultimos 7 dias
                        </button>
                      </div>
                    </div>

                    {/* SVG Smooth Curved Area Chart (Replicating user's exact visual curve) */}
                    <div className="relative w-full h-56 pt-4">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-15">
                        <div className="border-b border-zinc-500 w-full" />
                        <div className="border-b border-zinc-500 w-full" />
                        <div className="border-b border-zinc-500 w-full" />
                        <div className="border-b border-zinc-500 w-full" />
                      </div>

                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                        <defs>
                          <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                            <stop offset="40%" stopColor="#ef4444" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#0c0f16" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Area fill */}
                        <path
                          d="M 0 200 
                             Q 180 180, 320 100 
                             T 520 45 
                             T 800 55 
                             L 800 200 Z"
                          fill="url(#curveGradient)"
                        />

                        {/* Top Bright Curved Line */}
                        <path
                          d="M 0 200 
                             Q 180 180, 320 100 
                             T 520 45 
                             T 800 55"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Peak Point Pulsing */}
                        <circle cx="520" cy="45" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                      </svg>

                      {/* Floating Peak Tooltip */}
                      <div className="absolute top-2 left-[58%] -translate-x-1/2 px-3 py-1.5 rounded-xl bg-[#0c0f16] border border-red-500/40 text-xs shadow-xl flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-zinc-300">Pico:</span>
                        <strong className="text-white font-mono">R$ 2.450,00 / dia</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 text-[11px] text-zinc-400 font-mono">
                      <span>Início do Mês</span>
                      <span>Semana 2</span>
                      <span>Semana 3 (Pico de Vendas)</span>
                      <span>Hoje</span>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: PEDIDOS EM TEMPO REAL (KDS) */}
              {activeTab === 'pedidos' && (
                <div className="pt-6 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-zinc-400">
                      Todos os pedidos enviados pelo WhatsApp chegam aqui automaticamente, sem precisar de atendente humano digitando.
                    </p>
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Impressão Automática Ativa</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {demoOrders.map((ord) => (
                      <div
                        key={ord.id}
                        className="p-4 rounded-2xl bg-[#141822] border border-white/[0.08] hover:border-red-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono font-bold text-red-400 text-sm">{ord.id}</span>
                            <span className="font-semibold text-white text-sm">{ord.customer}</span>
                            <span className="text-[11px] text-zinc-400">• {ord.time}</span>
                          </div>
                          <p className="text-xs text-zinc-300">{ord.items}</p>
                          <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400">
                            <span className="text-emerald-400 font-medium">✓ {ord.payment}</span>
                            <span>• Bairro Centro</span>
                          </div>
                        </div>

                        <div className="flex items-center sm:flex-col sm:items-end justify-between shrink-0">
                          <span className="font-['Outfit'] font-bold text-lg text-white font-mono">{ord.total}</span>
                          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                            ord.status === 'Preparando' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' :
                            ord.status === 'Em Rota' ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30' :
                            'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {ord.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 3: CARDAPIO DIGITAL */}
              {activeTab === 'cardapio' && (
                <div className="pt-6 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-zinc-400">
                      Altere preços, pause itens esgotados ou crie promoções. A IA do WhatsApp absorve a mudança em tempo real.
                    </p>
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold flex items-center gap-1 shadow cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Novo Produto</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Combo Guriri Especial (40 peças)', cat: 'Combinados', price: 'R$ 139,90', status: 'Ativo', sales: '84 vendidos este mês' },
                      { name: 'Temaki Salmão Completo', cat: 'Temakis', price: 'R$ 38,90', status: 'Ativo', sales: '142 vendidos este mês' },
                      { name: 'Hot Roll Especial Maçaricado (10 pcs)', cat: 'Hot Rolls', price: 'R$ 34,90', status: 'Ativo', sales: '110 vendidos este mês' },
                      { name: 'Sashimi Salmão Trufado (12 pcs)', cat: 'Sashimis', price: 'R$ 52,00', status: 'Ativo', sales: '67 vendidos este mês' },
                    ].map((prod, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#141822] border border-white/[0.08] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{prod.cat}</span>
                          <h5 className="font-semibold text-white text-sm mt-0.5">{prod.name}</h5>
                          <span className="text-xs text-emerald-400 font-mono font-bold mt-1 block">{prod.price}</span>
                          <span className="text-[11px] text-zinc-400">{prod.sales}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 font-medium">
                            {prod.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 4: ADICIONAIS & UPSELL */}
              {activeTab === 'adicionais' && (
                <div className="pt-6 space-y-4 animate-in fade-in duration-300">
                  <p className="text-xs text-zinc-400">
                    Itens que a IA oferece automaticamente durante o diálogo com o cliente para aumentar seu faturamento sem parecer invasivo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'Bebidas Geladas (Refrigerantes / Sucos)', boost: '+R$ 14,00 / pedido', acceptRate: '68% aceitação', icon: '🥤' },
                      { name: 'Adicional Cream Cheese / Tarê Especial', boost: '+R$ 7,50 / pedido', acceptRate: '82% aceitação', icon: '🍣' },
                      { name: 'Sobremesa Hot Banana com Nutella', boost: '+R$ 18,90 / pedido', acceptRate: '41% aceitação', icon: '🍫' },
                    ].map((up, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#141822] border border-white/[0.08] space-y-2">
                        <div className="text-2xl">{up.icon}</div>
                        <h5 className="font-semibold text-white text-sm leading-tight">{up.name}</h5>
                        <div className="text-xs font-mono font-bold text-amber-400">{up.boost}</div>
                        <span className="text-[11px] text-emerald-400 block">{up.acceptRate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 5: FINANCEIRO & ECONOMIA */}
              {activeTab === 'financeiro' && (
                <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-[#141822] border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                        ECONOMIA DIRETA ESTIMADA
                      </span>
                      <h4 className="font-['Outfit'] font-bold text-2xl text-white">
                        Você economizou R$ 5.717,14 este mês
                      </h4>
                      <p className="text-xs text-zinc-300 mt-1">
                        Taxa de 5% no ChefeMind vs a comissão média de 27% cobrada por aplicativos de marketplace.
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs text-zinc-400 block">Faturamento Retido (95%):</span>
                      <span className="font-['Outfit'] font-black text-2xl text-emerald-400 font-mono">
                        R$ 24.687,65
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick Feature Summary Strip */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-4 text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Taxa fixa de 5% por transação
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Seus clientes são seus
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Impressão KDS automática
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-zinc-400">Acesso completo incluso em todos os planos</span>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* 3 Core Persuasive Pillars below the Dashboard */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-red-500/30 transition-all backdrop-blur-md">
            <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-lg text-white mb-2">
              Sincronia Imediata em 0.8s
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Trocou o valor de um prato ou pausou um item em falta? A IA do WhatsApp aplica a alteração no mesmo instante, sem risco de vender produto esgotado.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 transition-all backdrop-blur-md">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-lg text-white mb-2">
              100% do Faturamento é Seu
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Nos mesmos R$ 25.987,00 do painel, marketplaces levariam mais de R$ 7.000 em comissões. No ChefeMind o dinheiro cai direto no seu PIX ou cartão.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/30 transition-all backdrop-blur-md">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-lg text-white mb-2">
              Base de Clientes Privada
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Os 166 novos clientes pertencem ao seu restaurante. Você tem nome, telefone, histórico de compras e pode disparar campanhas a qualquer momento.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

