import React, { useState } from 'react';
import {
  UtensilsCrossed,
  QrCode,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Zap,
  ArrowRight,
  Flame,
  ExternalLink,
  Store,
  Clock,
  ShieldCheck,
  Percent,
  Layers,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Printer,
  Info
} from 'lucide-react';

export interface GuririMenuItem {
  id: string;
  category: 'entradas' | 'space-maki' | 'salmao-grelhado' | 'combinados';
  categoryLabel: string;
  categoryDesc?: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients?: string[];
  badge?: string;
}

const guririMenuData: GuririMenuItem[] = [
  {
    id: 'space-maki-4',
    category: 'space-maki',
    categoryLabel: '| SPACE MAKI',
    categoryDesc: 'Nossas criações exclusivas maçaricadas envoltas em lâminas nobres.',
    title: 'SPACE MAKI 4 UN',
    description: 'Tartar de salmão envolto de lâmina de salmão maçaricado.',
    price: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cebolinha', 'Gergelim torrado', 'Cream cheese', 'Azeite trufado'],
    badge: 'Destaque da Casa',
  },
  {
    id: 'cheviche-misto',
    category: 'entradas',
    categoryLabel: '| ENTRADAS',
    categoryDesc: 'Deliciosa salada de pepino refrescante, finalizada com gergelim torrado',
    title: 'CHEVICHE MISTO',
    description: 'Cubos de salmão, polvo e camarão com molho de leite de tigre, cebola roxa, manga, cebolinha, pimenta biquinho com um toque de pimenta da casa, finalizada com gergelim torrado e nachos.',
    price: 48.00,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cebola roxa', 'Pimenta biquinho', 'Gergelim torrado', 'Nachos'],
  },
  {
    id: 'guioza-lombo',
    category: 'entradas',
    categoryLabel: '| ENTRADAS',
    title: 'GUIOZA LOMBO DE PORCO COM LEGUMES 6 UN',
    description: 'Bolinhos com recheio de lombo suíno moído e legumes, envoltos em uma massa fina.',
    price: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cebolinha', 'Molho shoyu especial'],
  },
  {
    id: 'nachos-salmao',
    category: 'entradas',
    categoryLabel: '| ENTRADAS',
    title: 'NACHOS SALMÃO 10 UN',
    description: 'Doritos sobreposto de tartar de salmão, finalizado com cream cheese, pimenta tailandesa sriracha e gergelim torrado',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pimenta Sriracha', 'Cream cheese', 'Gergelim torrado'],
  },
  {
    id: 'shitake-manteiga',
    category: 'entradas',
    categoryLabel: '| ENTRADAS',
    title: 'SHITAKE NA MANTEIGA',
    description: 'Shitake na manteiga finalizada com cebolinha',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cebolinha', 'Manteiga especial'],
  },
  {
    id: 'bolinhas-salmao',
    category: 'entradas',
    categoryLabel: '| ENTRADAS',
    title: 'BOLINHAS DE SALMÃO 10UN',
    description: 'Crocantes bolinhas de patê de salmão grelhado com cream cheese e cebolinha, empanados e fritos',
    price: 50.00,
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cream cheese', 'Cebolinha', 'Molho tarê artesanal'],
    badge: 'Mais Pedido 🔥',
  },
  {
    id: 'mini-temaki',
    category: 'entradas',
    categoryLabel: '| ENTRADAS',
    title: 'MINI TEMAKI SALMÃO 10UN',
    description: 'Crocantes mini cones de alga recheados com salmão fresco em cubos, cream cheese original e cebolinha fresca.',
    price: 55.00,
    imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cream cheese', 'Cebolinha fresca', 'Gergelim'],
  },
  {
    id: 'salmao-grelhado',
    category: 'salmao-grelhado',
    categoryLabel: '| SALMÃO GRELHADO',
    categoryDesc: 'Postas nobres de salmão grelhado com acompanhamentos especiais.',
    title: 'SALMÃO GRELHADO',
    description: 'Posta de salmão grelhado ao molho teriyaki artesanal com mix de legumes salteados na manteiga.',
    price: 58.00,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Molho teriyaki', 'Legumes salteados', 'Gergelim'],
  },
  {
    id: 'salmao-recheado',
    category: 'salmao-grelhado',
    categoryLabel: '| SALMÃO GRELHADO',
    title: 'SALMÃO RECHEADO',
    description: 'Posta de salmão recheada com shimeji selecionado e cream cheese, finalizada com fio de azeite e arroz gohan.',
    price: 68.00,
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Shimeji', 'Cream cheese'],
  },
  {
    id: 'combo-especial',
    category: 'combinados',
    categoryLabel: '| COMBINADOS & SUSHIS',
    categoryDesc: 'Seleções do chef preparadas na hora com insumos frescos do dia.',
    title: 'COMBO GURIRI ESPECIAL (32 PEÇAS)',
    description: '10 Sashimis de salmão fresco, 8 Uramakis Filadélfia, 8 Dyo de salmão maçaricado com tarê e 6 Hot Rolls crocantes.',
    price: 98.90,
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Gergelim', 'Cebolinha', 'Molho tarê'],
    badge: 'Combo Família 🍱',
  }
];

interface CartEntry {
  item: GuririMenuItem;
  qty: number;
}

export const DigitalMenuShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [highlightedItemId, setHighlightedItemId] = useState<string>('space-maki-4');
  
  // Modal State (Image 2 reproduction)
  const [activeModalItem, setActiveModalItem] = useState<GuririMenuItem | null>(null);
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const [itemObservation, setItemObservation] = useState<string>('');
  const [isObservationOpen, setIsObservationOpen] = useState<boolean>(false);

  // Cart & Feedback
  const [cart, setCart] = useState<Record<string, CartEntry>>({
    'space-maki-4': { item: guririMenuData[0], qty: 1 },
    'bolinhas-salmao': { item: guririMenuData[5], qty: 1 },
  });
  const [orderSentToast, setOrderSentToast] = useState<boolean>(false);

  // Filter Items
  const filteredItems = guririMenuData.filter((item) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Open customization modal
  const openItemModal = (item: GuririMenuItem) => {
    setHighlightedItemId(item.id);
    setActiveModalItem(item);
    setModalQuantity(1);
    setRemovedIngredients([]);
    setItemObservation('');
    setIsObservationOpen(false);
  };

  const toggleRemoveIngredient = (ing: string) => {
    setRemovedIngredients((prev) =>
      prev.includes(ing) ? prev.filter((i) => i !== ing) : [...prev, ing]
    );
  };

  const handleAddToCartFromModal = () => {
    if (!activeModalItem) return;
    setCart((prev) => {
      const existing = prev[activeModalItem.id];
      const currentQty = existing ? existing.qty : 0;
      return {
        ...prev,
        [activeModalItem.id]: {
          item: activeModalItem,
          qty: currentQty + modalQuantity,
        },
      };
    });
    setActiveModalItem(null);
  };

  const handleSimulateCheckout = () => {
    setOrderSentToast(true);
    setTimeout(() => {
      setOrderSentToast(false);
    }, 5000);
  };

  const cartEntries: CartEntry[] = Object.values(cart);
  const cartTotalQuantity: number = cartEntries.reduce((sum, entry) => sum + entry.qty, 0);
  const cartSubtotal: number = cartEntries.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0);

  return (
    <section id="cardapio-digital" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#080b11] border-t border-white/[0.08] overflow-hidden">
      {/* Ambient Backdrop Illumination */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            O cardápio digital oficial que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              vende sozinho no automático.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Veja exatamente como os clientes do <strong>Guriri Sushi</strong> navegam pelo cardápio, personalizam pratos sem erros e fecham pedidos em segundos — direto pelo WhatsApp.
          </p>
        </div>

        {/* Mobile Smartphone Showcase */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-[420px] transition-all duration-300">
              
              {/* Floating Value Badges around the phone */}
              <div className="absolute -top-4 -left-6 z-20 hidden md:flex items-center gap-2.5 bg-[#121622] border border-emerald-500/30 px-3.5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Percent className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">Taxa de 5%</div>
                  <div className="text-[10px] text-zinc-400">Economia de 22% vs apps</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-6 z-20 hidden md:flex items-center gap-2.5 bg-[#121622] border border-red-500/30 px-3.5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md">
                <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                  <Printer className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">Imprime na Cozinha</div>
                  <div className="text-[10px] text-zinc-400">Comanda térmica em 1s</div>
                </div>
              </div>

              {/* iPhone Hardware Outer Frame */}
              <div className="relative rounded-[46px] bg-[#0c1017] border-[4px] border-[#222c3c] shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_60px_rgba(239,68,68,0.15)] overflow-hidden ring-1 ring-white/10">
                
                {/* Status Bar */}
                <div className="pt-3 px-6 pb-2 bg-[#0d111a] flex items-center justify-between text-[11px] font-semibold text-zinc-300 select-none border-b border-white/[0.06]">
                  <span>20:45</span>
                  <div className="w-24 h-4 rounded-full bg-black flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700/50 mr-2" />
                    <div className="w-10 h-1 rounded-full bg-zinc-800" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-emerald-400 font-mono">100%</span>
                  </div>
                </div>

                {/* Mobile Menu Body Container */}
                <div className="relative bg-[#090c12] max-h-[640px] overflow-y-auto custom-scrollbar">
                  
                  {/* Top Header Card (Replication of Image 3) */}
                  <div className="relative pt-6 pb-4 px-4 bg-gradient-to-b from-[#131926] to-[#090c12] border-b border-white/[0.06] text-center">
                    
                    {/* Circular Guriri Sushi Logo */}
                    <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-black border-2 border-red-500/40 p-1 shadow-2xl flex items-center justify-center overflow-hidden">
                      <div className="flex flex-col items-center justify-center">
                        <Flame className="w-6 h-6 text-red-500 fill-red-500/40" />
                        <span className="text-[7px] font-black tracking-widest text-white uppercase mt-0.5">
                          GURIRISUSHI
                        </span>
                      </div>
                    </div>

                    {/* Restaurant Title */}
                    <h3 className="font-['Outfit'] text-xl font-extrabold text-white tracking-tight">
                      Guriri Sushi
                    </h3>

                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mt-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Aberto</span>
                    </div>

                    {/* Delivery Time & Fees Info */}
                    <div className="mt-3 text-xs text-zinc-300 flex items-center justify-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Entrega estimada: <strong>~90 min</strong></span>
                      <span>•</span>
                      <span className="text-red-400 font-medium hover:underline cursor-pointer">Ver mais</span>
                    </div>

                    <div className="mt-1 text-[11px] text-zinc-400">
                      Preparo ~60 min • Entrega ~30 min • Taxa por bairro: R$ 8,00 – R$ 20,00
                    </div>

                    {/* Search & Filter Bar (Matching Image 3 Red Search Button) */}
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0 cursor-pointer transition-transform active:scale-95"
                        title="Buscar prato"
                      >
                        <Search className="w-4 h-4" />
                      </button>

                      {isSearchOpen ? (
                        <div className="flex-1 relative animate-in fade-in slide-in-from-left-2 duration-200">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar no cardápio..."
                            className="w-full h-10 px-3.5 rounded-full bg-[#141926] border border-red-500/40 text-xs text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-500"
                            autoFocus
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery('')}
                              className="absolute right-3 top-2.5 text-zinc-400 hover:text-white"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="flex-1 overflow-x-auto custom-scrollbar flex gap-1.5 py-0.5">
                          {[
                            { id: 'todos', label: 'Todos' },
                            { id: 'space-maki', label: 'Space Maki' },
                            { id: 'entradas', label: 'Entradas' },
                            { id: 'salmao-grelhado', label: 'Salmão Grelhado' },
                            { id: 'combinados', label: 'Combinados' },
                          ].map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                                selectedCategory === cat.id
                                  ? 'bg-red-600 text-white shadow-md'
                                  : 'bg-[#151a26] text-zinc-400 hover:text-white border border-white/5'
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section Title Header (Image 3: '| ENTRADAS') */}
                  <div className="px-4 pt-4 pb-1">
                    <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                      <span className="text-white font-black text-base">|</span>
                      <span>
                        {selectedCategory === 'todos'
                          ? 'DESTAQUES DO CARDÁPIO'
                          : selectedCategory === 'space-maki'
                          ? 'SPACE MAKI'
                          : selectedCategory === 'entradas'
                          ? 'ENTRADAS'
                          : selectedCategory === 'salmao-grelhado'
                          ? 'SALMÃO GRELHADO'
                          : 'COMBINADOS & SUSHIS'}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Toque em qualquer prato para abrir os ingredientes e personalizar.
                    </p>
                  </div>

                  {/* Items List (Exact Styling of Screenshot 1) */}
                  <div className="p-3 space-y-2.5">
                    {filteredItems.map((item) => {
                      const isHighlighted = highlightedItemId === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => openItemModal(item)}
                          className={`p-3 rounded-2xl bg-[#11151f] hover:bg-[#151a28] border transition-all cursor-pointer flex gap-3 group relative ${
                            isHighlighted
                              ? 'border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.15)] ring-1 ring-white/30'
                              : 'border-white/[0.06] hover:border-red-500/30'
                          }`}
                        >
                          {/* Dish Square Thumbnail (Matching Image 1) */}
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-zinc-900 border border-white/10">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            {item.badge && (
                              <span className="absolute bottom-1 left-1 text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/80 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Dish Information */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <h4 className="font-bold text-white text-xs sm:text-[13px] uppercase tracking-wide group-hover:text-red-300 transition-colors line-clamp-1">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1 leading-snug">
                                {item.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/[0.04]">
                              <span className="font-['Outfit'] font-bold text-xs sm:text-sm text-white font-mono">
                                R$ {item.price.toFixed(2).replace('.', ',')}
                              </span>
                              <span className="text-[10px] font-semibold text-red-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                                <span>Ver detalhes</span>
                                <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Empty state if search finds nothing */}
                  {filteredItems.length === 0 && (
                    <div className="text-center py-12 px-4">
                      <p className="text-zinc-400 text-xs">Nenhum prato encontrado com esse nome.</p>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('todos');
                        }}
                        className="mt-3 text-xs text-red-400 font-semibold underline cursor-pointer"
                      >
                        Limpar busca
                      </button>
                    </div>
                  )}

                  {/* ==========================================================
                      MODAL (Exact Reproduction of Screenshot 2: Space Maki 4 UN)
                      ========================================================== */}
                  {activeModalItem && (
                    <div className="absolute inset-0 z-40 bg-black/85 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-200">
                      <div className="bg-[#121620] border-t border-white/10 rounded-t-[32px] overflow-hidden max-h-[90%] flex flex-col shadow-2xl animate-in slide-in-from-bottom-6 duration-300">
                        
                        {/* Modal Header Dish Image with Close Button */}
                        <div className="relative h-44 w-full shrink-0 bg-zinc-900">
                          <img
                            src={activeModalItem.imageUrl}
                            alt={activeModalItem.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-black/40" />
                          
                          {/* Close X Button (Circular Top Right, Screenshot 2) */}
                          <button
                            type="button"
                            onClick={() => setActiveModalItem(null)}
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Modal Scrollable Content */}
                        <div className="p-4 overflow-y-auto custom-scrollbar space-y-4">
                          {/* Title & Description */}
                          <div>
                            <h4 className="font-bold text-white text-base uppercase tracking-wide">
                              {activeModalItem.title}
                            </h4>
                            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                              {activeModalItem.description}
                            </p>
                          </div>

                          {/* Ingredientes / Toque para remover (Screenshot 2) */}
                          {activeModalItem.ingredients && activeModalItem.ingredients.length > 0 && (
                            <div className="pt-2 border-t border-white/[0.08]">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">
                                  Ingredientes
                                </span>
                                <span className="text-[10px] text-zinc-400">
                                  Toque para remover
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-1.5">
                                {activeModalItem.ingredients.map((ing) => {
                                  const isRemoved = removedIngredients.includes(ing);
                                  return (
                                    <button
                                      key={ing}
                                      type="button"
                                      onClick={() => toggleRemoveIngredient(ing)}
                                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                                        isRemoved
                                          ? 'bg-red-500/20 text-red-300 border border-red-500/50 line-through'
                                          : 'bg-[#1b2232] text-zinc-200 border border-white/10 hover:border-white/20'
                                      }`}
                                    >
                                      {isRemoved && <X className="w-3 h-3 text-red-400" />}
                                      <span>{ing}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Observação Dropdown (Screenshot 2) */}
                          <div className="pt-2 border-t border-white/[0.08]">
                            <button
                              type="button"
                              onClick={() => setIsObservationOpen(!isObservationOpen)}
                              className="w-full flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider cursor-pointer"
                            >
                              <span>Observação</span>
                              {isObservationOpen ? (
                                <ChevronUp className="w-4 h-4 text-zinc-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-zinc-400" />
                              )}
                            </button>

                            {isObservationOpen && (
                              <textarea
                                value={itemObservation}
                                onChange={(e) => setItemObservation(e.target.value)}
                                placeholder="Ex: Caprichar no wasabi, embalar molhos separados..."
                                rows={2}
                                className="mt-2 w-full p-2.5 rounded-xl bg-[#171d2b] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                              />
                            )}
                          </div>
                        </div>

                        {/* Modal Action Bar (Screenshot 2: Quantity pill + Off-white Add Button) */}
                        <div className="p-3 bg-[#0d111a] border-t border-white/10 flex items-center gap-3">
                          {/* Quantity selector [-] 1 [+] */}
                          <div className="flex items-center gap-3 bg-[#1c2333] px-3 py-2 rounded-full border border-white/10 shrink-0">
                            <button
                              type="button"
                              onClick={() => setModalQuantity((q) => Math.max(1, q - 1))}
                              className="text-zinc-400 hover:text-white cursor-pointer"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono text-xs font-bold text-white w-4 text-center">
                              {modalQuantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setModalQuantity((q) => q + 1)}
                              className="text-white hover:text-red-400 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Action button: "Adicionar · R$ 35,00" (Exact light gray button from Image 2) */}
                          <button
                            type="button"
                            onClick={handleAddToCartFromModal}
                            className="flex-1 py-2.5 px-4 rounded-full bg-[#e2e8f0] hover:bg-white text-[#0f172a] font-bold text-xs shadow-lg cursor-pointer transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
                          >
                            <span>Adicionar</span>
                            <span>•</span>
                            <span className="font-mono">
                              R$ {(activeModalItem.price * modalQuantity).toFixed(2).replace('.', ',')}
                            </span>
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Cart Floating Footer */}
                  <div className="sticky bottom-0 p-3 bg-[#0d111a]/95 backdrop-blur-md border-t border-white/[0.08]">
                    {cartTotalQuantity > 0 ? (
                      <button
                        type="button"
                        onClick={handleSimulateCheckout}
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs flex items-center justify-between shadow-[0_4px_20px_rgba(220,38,38,0.4)] cursor-pointer transition-all active:scale-[0.98]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                            {cartTotalQuantity}
                          </span>
                          <span>Ver Sacola & Concluir Pedido</span>
                        </div>
                        <span className="font-mono font-bold">
                          R$ {cartSubtotal.toFixed(2).replace('.', ',')}
                        </span>
                      </button>
                    ) : (
                      <div className="text-center py-1 text-xs text-zinc-400">
                        Toque em um prato para adicionar à sacola
                      </div>
                    )}
                  </div>

                  {/* Order Confirmation Toast Notification */}
                  {orderSentToast && (
                    <div className="absolute inset-x-3 bottom-16 z-50 p-3.5 rounded-2xl bg-emerald-950/95 border border-emerald-500 text-emerald-200 text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300">
                      <div className="flex items-center gap-2 font-bold text-white mb-1">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Pedido Recebido pelo ChefeMind!</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-snug">
                        Comanda impressa no balcão do <strong>Guriri Sushi</strong> e notificação confirmada no WhatsApp do cliente.
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>
        </div>

        {/* Persuasive Pillars: Why Guriri Sushi's Menu Converts 3x More Than Traditional Apps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-[#10141e] border border-white/[0.08] hover:border-red-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">
              Abre em 0.5s sem Baixar Aplicativo
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              O cliente não perde tempo procurando na Play Store ou gastando memória do telefone. Funciona como um PWA instantâneo no Safari, Chrome ou direto dentro do WhatsApp.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#10141e] border border-white/[0.08] hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <QrCode className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">
              Autoatendimento no Salão com QR Code
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Coloque o QR Code em displays de mesa. Os clientes fazem os pedidos sozinhos, retiram ingredientes e a comanda cai na hora na cozinha sem sobrecarregar garçons.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#10141e] border border-white/[0.08] hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Percent className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-lg mb-2">
              Apenas 5% por Transação e PIX Direto
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Elimine os 27% que os apps tradicionais cobram sobre o seu trabalho. Com uma taxa justa de apenas 5% por transação, você retém 95% do lucro e o dinheiro do cliente cai direto na sua conta bancária.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
