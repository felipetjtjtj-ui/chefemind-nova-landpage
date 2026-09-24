import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'O ChefeMind substitui minha equipe de atendimento?',
    answer: 'Não. Ele potencializa sua equipe. O ChefeMind assume 90% das tarefas repetitivas (como enviar cardápio, informar chave Pix, responder tempo de espera e anotar pedidos padronizados), liberando seus funcionários para focarem na qualidade dos pratos, embalagem caprichada e atenção aos clientes no salão ou casos especiais.',
  },
  {
    id: 'faq-2',
    question: 'Funciona com qualquer tipo de cardápio e gastronomia?',
    answer: 'Sim! Nosso motor de IA é treinado especificamente para a gastronomia brasileira: suporta pizzas meio a meio com múltiplos sabores, hambúrgueres com adicionais infinitos, sushis com substituições de peças, marmitas com guarnições diárias e docerias com encomendas agendadas.',
  },
  {
    id: 'faq-3',
    question: 'Como funciona o Cardápio Digital? O cliente precisa baixar algum aplicativo?',
    answer: 'Nenhum download é necessário! O Cardápio Digital do ChefeMind é um Web App ultraveloz que abre em menos de 0.5 segundos direto no navegador do celular (Safari ou Chrome). Pode ser acessado pelo link na bio do Instagram, disparado automaticamente pelo WhatsApp ou via QR Code impresso nas mesas do seu salão.',
  },
  {
    id: 'faq-4',
    question: 'Como funciona a integração com o WhatsApp?',
    answer: 'Utilizamos a Cloud API Oficial do WhatsApp (Meta Business). Isso significa que seu restaurante terá total estabilidade, zero risco de banimento de número, capacidade de receber milhares de mensagens simultâneas e suporte opcional ao selo verde de verificação.',
  },
  {
    id: 'faq-taxas',
    question: 'Qual é o custo? Como funciona a taxa de 5% por transação?',
    answer: 'Ao contrário dos marketplaces tradicionais que cobram comissões abusivas de até 27%, o ChefeMind cobra uma taxa justa de apenas 5% por transação concluída. Você retém 95% do seu faturamento bruto, recebe via PIX direto na sua conta bancária sem intermediários e economiza em média 22% em relação aos apps convencionais.',
  },
  {
    id: 'faq-setup',
    question: 'É difícil configurar? Quanto tempo leva para começar?',
    answer: 'É extremamente simples. Nossa equipe de engenharia e suporte cuida de todo o setup em até 48 horas. Nós importamos seu cardápio, configuramos as regras de taxa de entrega por raio/bairro, integramos seu Pix e treinamos a IA com as particularidades do seu restaurante.',
  },
  {
    id: 'faq-5',
    question: 'E se o cliente quiser falar com uma pessoa de verdade?',
    answer: 'O ChefeMind detecta automaticamente pedidos de ajuda humana ou reclamações e faz o transbordo suave para qualquer atendente da sua equipe via painel web ou aplicativo, com histórico completo da conversa para ninguém perguntar nada duas vezes.',
  },
  {
    id: 'faq-6',
    question: 'A IA comete erros em pedidos com muitas observações?',
    answer: 'Diferente de atendentes cansados em horários de pico, a IA analisa a mensagem semanticamente com precisão matemática. Antes de enviar para a cozinha, ela repassa um resumo visual claro e pede a confirmação do cliente. O índice de erro cai para menos de 0.2%.',
  },
];

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Tudo o que você precisa saber para transformar o atendimento do seu restaurante com inteligência artificial.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white/[0.04] border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.1)]'
                    : 'bg-white/[0.02] border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.03]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Outfit'] text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-white/[0.04] text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-white text-sm">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-zinc-400">Nossa equipe de especialistas está pronta para analisar a operação do seu restaurante.</p>
          </div>

          <a
            href="#cta-final"
            className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold whitespace-nowrap transition-colors border border-white/[0.1] inline-flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-red-400" />
            <span>Falar com especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};
