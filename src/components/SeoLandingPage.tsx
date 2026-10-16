import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Star, 
  Smartphone, 
  MessageCircle, 
  MapPin, 
  FileText, 
  Globe, 
  ShieldCheck, 
  Mail, 
  Server, 
  Landmark, 
  Scale, 
  Handshake, 
  Plus, 
  Minus,
  TrendingUp,
  Award,
  ChevronRight,
  Instagram
} from 'lucide-react';
import { SeoPageData, SEO_PAGES } from '../data/seoPages';

interface SeoLandingPageProps {
  pageData: SeoPageData;
  onNavigateHome: () => void;
  onNavigatePage: (slug: string) => void;
}

const WA_LINK = "https://wa.me/5574999249182?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20site%20do%20meu%20escrit%C3%B3rio.";
const INSTAGRAM_LINK = "https://www.instagram.com/jurissites/";

export const SeoLandingPage: React.FC<SeoLandingPageProps> = ({ 
  pageData, 
  onNavigateHome, 
  onNavigatePage 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Update dynamic SEO meta tags on page load
  useEffect(() => {
    document.title = pageData.metaTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageData.metaDescription);
    }

    // Scroll to top on page switch
    window.scrollTo(0, 0);

    // Inject FAQ Schema JSON-LD for Google Rich Results
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pageData.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-jsonld';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [pageData]);

  const otherPages = Object.values(SEO_PAGES).filter(p => p.slug !== pageData.slug);

  return (
    <div className="min-h-screen bg-white text-[#2D3748] selection:bg-[#C9A24A]/20 selection:text-[#1A1A1A]">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
          
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
            className="flex items-center gap-3 group"
          >
            <img src="/logo-jurissites.png" alt="JurisSites" className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl tracking-tight text-gray-900 leading-none">JurisSites</span>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-1">Sites para Advogados</span>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="text-gray-600 hover:text-[#C9A24A] text-xs font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft size={14} /> Voltar à Página Inicial
            </button>

            <a 
              href={WA_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold text-xs px-5 py-2.5"
            >
              Pedir Orçamento
            </a>
          </div>

        </div>
      </header>

      {/* Breadcrumbs for SEO */}
      <div className="bg-[#F8F9FA] border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-xs text-gray-500">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
            className="hover:text-[#C9A24A] transition-colors"
          >
            Início
          </a>
          <ChevronRight size={12} />
          <span>Especialidades Jurídicas</span>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-md">{pageData.badge}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-6 pb-16 lg:pt-10 lg:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              
              <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
                {pageData.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.15] mb-5">
                {pageData.headline}
              </h1>

              <p className="font-bold text-[#111111] text-base sm:text-lg mb-3">
                {pageData.subheadline}
              </p>

              {/* Monthly searches badge */}
              <div className="my-5 p-4 rounded-xl bg-[#C9A24A]/10 border border-[#C9A24A]/25 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C9A24A]/20 flex items-center justify-center text-[#C9A24A] shrink-0 mt-0.5">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 flex items-center gap-2">
                    Demanda no Google: <span className="text-[#C9A24A]">{pageData.searchesMonthly}</span>
                  </div>
                  <div className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                    {pageData.searchesContext}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <a 
                  href={WA_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span className="font-bold text-base">»</span> Solicitar Orçamento com Especialista
                </a>
                
                <a 
                  href={WA_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle size={15} /> Falar no WhatsApp
                </a>
              </div>

            </div>

            {/* Right Mockup */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              <div className="floating-badge w-11 h-11 text-gray-700 -top-2 left-1/4 animate-float-subtle">
                <Handshake size={20} />
              </div>

              <div className="floating-badge w-11 h-11 text-[#C9A24A] top-1/3 -left-3 animate-float-subtle" style={{ animationDelay: '1s' }}>
                <Scale size={20} />
              </div>

              <div className="floating-badge w-11 h-11 text-gray-700 bottom-12 left-4 animate-float-subtle" style={{ animationDelay: '2s' }}>
                <FileText size={20} />
              </div>

              <div className="floating-badge w-11 h-11 text-gray-700 -bottom-2 right-1/4 animate-float-subtle" style={{ animationDelay: '1.5s' }}>
                <Landmark size={20} />
              </div>

              <img 
                src="/images/hero-phones.png" 
                alt={pageData.headline}
                className="w-full max-w-md lg:max-w-none h-auto object-contain mx-auto select-none pointer-events-none drop-shadow-xl"
              />

            </div>

          </div>
        </div>
      </section>

      {/* Niche Challenges & Real Solutions */}
      <section className="py-16 bg-[#F8F9FA] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
              Foco em {pageData.areaFocus}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Por que sua atuação em {pageData.areaFocus} precisa de um site especializado?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Diferente de negócios genéricos, o cliente jurídico busca confiança incondicional antes de enviar uma mensagem. Veja como resolvemos cada barreira:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            
            {/* Problems list */}
            <div className="p-7 rounded-xl bg-white border border-gray-200 shadow-xs">
              <h3 className="text-base font-bold text-red-600 mb-4 flex items-center gap-2">
                ✕ O que faz advogados perderem clientes no digital
              </h3>
              <ul className="space-y-3">
                {pageData.keyProblems.map((prob, i) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions list */}
            <div className="p-7 rounded-xl bg-white border border-[#C9A24A]/30 shadow-xs">
              <h3 className="text-base font-bold text-[#C9A24A] mb-4 flex items-center gap-2">
                ✓ Como a JurisSites estrutura seu site
              </h3>
              <div className="space-y-4">
                {pageData.keySolutions.map((sol, i) => (
                  <div key={i} className="text-left">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">{sol.title}</div>
                    <div className="text-gray-600 text-xs mt-0.5 leading-relaxed">{sol.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Deliverables Grid (9 items) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            O que está incluso no desenvolvimento do seu site
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-12">
            Solução chave na mão para você focar nos seus processos.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
            {pageData.deliverables.map((item, idx) => (
              <div key={idx} className="card-service p-6 bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C9A24A]/15 text-[#C9A24A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed">
                  {item}
                </div>
              </div>
            ))}
          </div>

          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold inline-flex items-center gap-2"
          >
            <span className="font-bold text-base">»</span> Pedir Proposta de Site
          </a>

        </div>
      </section>

      {/* Founders Section (Lucas e Layla) */}
      <section className="py-16 bg-[#F8F9FA] border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 text-left">
              <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
                Equipe Especialista
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Desenvolvido por quem entende de <span className="text-[#C9A24A]">Advocacia Real</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A JurisSites é fundada pela advogada <strong>Layla Marreta</strong> e pelo analista de tecnologia <strong>Lucas Rodrigues</strong>. Compreendemos o Código de Ética da OAB e o Provimento 205/2021 em detalhes, garantindo que o seu site seja uma ferramenta de prestígio sem qualquer risco disciplinar.
              </p>
              <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 font-medium">
                ⚖️ 100% de conformidade com a OAB · Sem mercantilização · Respeito à sobriedade da profissão
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white max-w-sm mx-auto">
                <img 
                  src="/images/lucas-e-layla.png" 
                  alt="Lucas e Layla - Fundadores JurisSites" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-left">
                  <div className="font-bold text-sm text-gray-900">Lucas Rodrigues & Layla Marreta</div>
                  <div className="text-[11px] text-[#C9A24A] font-semibold uppercase">Fundadores da JurisSites</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specific FAQ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Perguntas Frequentes sobre este serviço
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-10">
            Dúvidas específicas sobre a criação de sites para {pageData.areaFocus}.
          </p>

          <div className="space-y-4 text-left">
            {pageData.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#C9A24A] transition-colors"
                  >
                    <span>{f.q}</span>
                    <span className="text-[#C9A24A] shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SEO Internal Linking Hub: Explore Other Legal Niches */}
      <section className="py-16 bg-[#F8F9FA] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
            Veja outras soluções especializadas da JurisSites
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mb-8">
            Desenvolvemos páginas sob medida para todas as principais áreas do Direito.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-5xl mx-auto">
            {otherPages.map(item => (
              <button
                key={item.slug}
                onClick={() => onNavigatePage(item.slug)}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#C9A24A] hover:shadow-xs transition-all flex items-center justify-between text-left group"
              >
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-[#C9A24A] transition-colors">
                    {item.badge}
                  </div>
                  <div className="text-[11px] text-gray-500 truncate max-w-[240px]">
                    {item.headline}
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-[#C9A24A] group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <img src="/logo-jurissites.png" alt="JurisSites" className="h-8 w-auto object-contain" />
            <span className="font-extrabold text-lg text-gray-900">JurisSites</span>
            <span className="text-xs text-gray-400 border-l border-gray-300 pl-3">Especialistas em Sites para Advogados</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
            <button onClick={onNavigateHome} className="hover:text-[#C9A24A]">Início</button>
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 font-semibold text-[#C9A24A] hover:underline"
            >
              <Instagram size={14} /> @jurissites
            </a>
          </div>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} JurisSites. Todos os direitos reservados.
          </p>

        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={WA_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-whatsapp"
      >
        <MessageCircle size={30} className="fill-current stroke-none" />
      </a>

    </div>
  );
};
