import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
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
  Users, 
  Award, 
  Monitor, 
  Instagram, 
  Plus, 
  Minus,
  ChevronRight
} from 'lucide-react';
import { LucasPage } from './components/LucasPage';
import { SEO_PAGES } from './data/seoPages';
import { SeoLandingPage } from './components/SeoLandingPage';

const WA_LINK = "https://wa.me/5574999249182?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20site%20do%20meu%20escrit%C3%B3rio.";
const INSTAGRAM_LINK = "https://www.instagram.com/jurissites/";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'O que Inclui', href: '#o-que-inclui' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Perguntas Frequentes', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img src="/logo-jurissites.png" alt="JurisSites" className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xl tracking-tight text-gray-900 leading-none">
              JurisSites
            </span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-1">
              Sites para Advogados
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <a 
              key={l.label} 
              href={l.href} 
              className="text-gray-700 hover:text-[#C9A24A] text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-900 hover:text-[#C9A24A] text-sm font-bold uppercase tracking-wider transition-colors"
          >
            PEDIR ORÇAMENTO
          </a>

          <a 
            href={INSTAGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram da JurisSites"
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#C9A24A]/10 text-gray-700 hover:text-[#C9A24A] flex items-center justify-center transition-all"
          >
            <Instagram size={17} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          aria-label="Alternar Menu" 
          className="lg:hidden text-gray-800 p-2" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 flex flex-col gap-4 text-center shadow-lg"
          >
            {links.map(l => (
              <a 
                key={l.label} 
                href={l.href} 
                onClick={() => setOpen(false)} 
                className="text-gray-700 hover:text-[#C9A24A] font-medium py-2 text-base transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a 
              href={WA_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold w-full text-center mt-2"
            >
              » PEDIR ORÇAMENTO
            </a>

            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-[#C9A24A] pt-2 text-sm font-medium transition-colors"
            >
              <Instagram size={16} /> @jurissites
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// HERO SECTION (Reduced space, gold CTA, clean)
const Hero = () => (
  <section id="home" className="relative bg-white pt-4 pb-14 sm:pt-6 sm:pb-20 overflow-hidden border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column (Copy + Gold CTA) */}
        <div className="lg:col-span-6 text-left">
          
          {/* Badge: Especialistas Em */}
          <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            Especialistas Em
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111111] tracking-tight leading-[1.12] mb-5">
            Site para Advogados
          </h1>

          {/* Subheading */}
          <p className="font-bold text-[#111111] text-base sm:text-lg mb-3 leading-snug">
            Transforme seu escritório em uma referência online.
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
            Nós criamos sites profissionais e feitos sob medida para advogados – seja você um advogado autônomo ou sócio de um escritório – para atrair clientes qualificados e fortalecer sua autoridade digital.
          </p>

          {/* Signature Gold CTA Button */}
          <div>
            <a 
              href={WA_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold inline-flex items-center gap-2"
            >
              <span className="font-bold text-base">»</span> PEDIR ORÇAMENTO
            </a>
          </div>

        </div>

        {/* Right Column: 3 Smartphones Mockup + 4 Floating Icons */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Floating Badges */}
          <div className="floating-badge w-11 h-11 text-gray-700 -top-3 left-1/4 sm:left-1/3 animate-float-subtle">
            <Handshake size={20} />
          </div>

          <div className="floating-badge w-11 h-11 text-[#C9A24A] top-1/3 -left-2 sm:left-4 animate-float-subtle" style={{ animationDelay: '1s' }}>
            <Scale size={20} />
          </div>

          <div className="floating-badge w-11 h-11 text-gray-700 bottom-16 left-2 sm:left-8 animate-float-subtle" style={{ animationDelay: '2s' }}>
            <FileText size={20} />
          </div>

          <div className="floating-badge w-11 h-11 text-gray-700 -bottom-3 right-1/4 sm:right-1/3 animate-float-subtle" style={{ animationDelay: '1.5s' }}>
            <Landmark size={20} />
          </div>

          <img 
            src="/images/hero-phones.png" 
            alt="Site para Advogados em Smartphones" 
            className="w-full max-w-lg lg:max-w-none h-auto object-contain mx-auto select-none pointer-events-none drop-shadow-2xl"
          />

        </div>

      </div>
    </div>
  </section>
);

// SECTION 2: 4 Quick Highlight Columns
const FourPillars = () => {
  return (
    <section id="como-funciona" className="py-14 bg-[#F8F9FA] border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Site para Advogados
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Especializados em site para advogados iniciantes, advogado autônomo e escritório de advocacia. Cuide dos seus casos, deixe a criação do site para nós!
            </p>
          </div>

          <div className="text-left">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 text-[#C9A24A] flex items-center justify-center mb-3">
              <Monitor size={20} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1.5">
              Solução Completa
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Cuidamos de tudo para você: hospedagem segura, e-mail profissional, manutenção contínua e suporte dedicado.
            </p>
          </div>

          <div className="text-left">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 text-[#C9A24A] flex items-center justify-center mb-3">
              <Award size={20} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1.5">
              Especialistas
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Empresa co-fundada por advogada, nós sabemos exatamente das necessidades, da rotina e dos limites éticos da advocacia digital.
            </p>
          </div>

          <div className="text-left">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 text-[#C9A24A] flex items-center justify-center mb-3">
              <Users size={20} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1.5">
              Capte mais Clientes
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Um site otimizado e profissional é o canal que conecta você a potenciais clientes no momento certo: quando eles precisam de um advogado.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// SECTION 3: Provocação Estratégica
const ProvocationSection = () => (
  <section className="py-20 bg-white border-b border-gray-100 text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
        Advogado, você está pronto para abrir as portas do seu escritório jurídico para o Brasil inteiro?
      </h2>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
        No mundo atual, reclamar de “não tenho tempo pra redes sociais” não basta: <strong>quando alguém busca um advogado, a <span className="underline decoration-[#C9A24A] decoration-2">primeira parada é o Google</span></strong>. Um site de advocacia profissional e bem estruturado funciona como sua vitrine digital: mostra sua história, sua autoridade, seus serviços e seu diferencial. É sua chance de controlar a narrativa, transmitir credibilidade e converter visitantes em clientes — 24 horas por dia, 7 dias por semana.
      </p>

      <div>
        <a 
          href={WA_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-gold inline-flex items-center gap-2"
        >
          <span className="font-bold text-base">»</span> Pedir Orçamento
        </a>
      </div>
    </div>
  </section>
);

// SECTION 4: "Todos os sites para advogados incluem:"
const WhatsIncluded = () => {
  const items = [
    {
      icon: <Smartphone className="text-[#C9A24A]" size={26} />,
      title: "Layout Responsivo",
      desc: "Site adapta-se a qualquer tipo de tela que é acessado: computador, tablet e celular com navegação fluida."
    },
    {
      icon: <MessageCircle className="text-[#C9A24A]" size={26} />,
      title: "Ícone de Whatsapp e Redes Sociais",
      desc: "Receba contatos diretamente no Whatsapp e redes sociais com apenas 1 clique, sem barreiras para o cliente."
    },
    {
      icon: <Star className="text-[#C9A24A]" size={26} />,
      title: "Avaliações Google",
      desc: "Adicione suas avaliações do Google Meu Negócio como prova social para outras pessoas te contratarem também."
    },
    {
      icon: <MapPin className="text-[#C9A24A]" size={26} />,
      title: "Google Maps",
      desc: "O endereço do seu escritório já aparece direto no mapa do Google no seu site para facilitar a localização."
    },
    {
      icon: <FileText className="text-[#C9A24A]" size={26} />,
      title: "Formulário de Contato",
      desc: "Receba contato dos potenciais clientes com triagem de caso direto na sua caixa de e-mail."
    },
    {
      icon: <Globe className="text-[#C9A24A]" size={26} />,
      title: "Blog Jurídico",
      desc: "Mantenha a sua audiência atualizada com os temas jurídicos em alta e seja encontrado organicamente no Google."
    },
    {
      icon: <ShieldCheck className="text-[#C9A24A]" size={26} />,
      title: "Certificado de Segurança",
      desc: "Garantia de que seu site é seguro (HTTPS/SSL), transmitindo total confiança e proteção aos seus clientes."
    },
    {
      icon: <Mail className="text-[#C9A24A]" size={26} />,
      title: "Email Profissional",
      desc: "Envie e receba emails profissionais com seu domínio próprio, por exemplo contato@seuescritorio.adv.br."
    },
    {
      icon: <Server className="text-[#C9A24A]" size={26} />,
      title: "Hospedagem",
      desc: "É o servidor veloz onde ficarão armazenados os dados do site. Já cuidamos de toda a configuração para você."
    }
  ];

  return (
    <section id="o-que-inclui" className="py-20 bg-[#F8F9FA] border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Todos os sites para advogados incluem:
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Uma estrutura técnica e comercial completa, pronta para gerar autoridade imediata.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div 
              key={item.title}
              className="card-service p-8 text-left bg-white shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A24A]/10 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// SECTION: SEO Niche Solutions (Internal Linking Hub for Google Search Console)
const NicheSolutionsSection = ({ onNavigatePage }: { onNavigatePage: (slug: string) => void }) => {
  const pages = Object.values(SEO_PAGES);

  return (
    <section id="especialidades" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
          Especialidades & Nichos
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
          Sites Especializados por Ramo do Direito
        </h2>

        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-14 leading-relaxed">
          Cada área da advocacia tem um perfil de cliente e um vocabulário de busca único no Google. Conheça nossas soluções nichadas prontas para ranqueamento:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-10">
          {pages.map(p => (
            <a
              key={p.slug}
              href={`/${p.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigatePage(p.slug);
              }}
              className="card-service p-6 bg-white border border-gray-200/90 hover:border-[#C9A24A] transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="text-[11px] font-bold text-[#C9A24A] uppercase tracking-wider mb-2">
                  {p.badge}
                </div>
                <h3 className="font-extrabold text-gray-900 text-base mb-2 group-hover:text-[#C9A24A] transition-colors leading-snug">
                  {p.headline}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                  {p.subheadline}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-800 group-hover:text-[#C9A24A]">
                <span>Conhecer Solução</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

// SECTION 5: Quem está por trás da JurisSites (COM A FOTO DO CASAL LUCAS E LAYLA!)
const AboutFounders = () => (
  <section id="sobre-nos" className="py-20 bg-[#F8F9FA] border-b border-gray-200/70">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Story & Authority */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Quem Somos
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            A união entre o rigor do <span className="text-[#C9A24A]">Direito</span> e a excelência da <span className="text-[#C9A24A]">Tecnologia</span>
          </h2>

          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              A <strong>JurisSites</strong> nasceu de uma necessidade real percebida dentro da própria advocacia: advogados brilhantes no mundo físico que ficavam invisíveis ou mal posicionados na internet.
            </p>
            <p>
              Nossa agência é liderada por <strong>Layla Marreta</strong>, advogada que conhece de perto a rotina forense, as exigências dos clientes e os limites éticos do Código de Ética da OAB, e <strong>Lucas Rodrigues</strong>, especialista em tecnologia, desenvolvimento web e marketing digital estratégico.
            </p>
            <p>
              Essa união garante que o seu site não seja apenas "bonito", mas tecnicamente impecável, seguro, veloz e rigorosamente alinhado às diretrizes do Provimento 205/2021 da OAB sobre publicidade jurídica sóbria e informativa.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-6">
            <div>
              <div className="text-2xl font-extrabold text-[#C9A24A]">100%</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Foco Jurídico</div>
            </div>
            <div className="h-10 w-px bg-gray-300" />
            <div>
              <div className="text-2xl font-extrabold text-gray-900">Zero</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Preocupação Técnica</div>
            </div>
          </div>
        </div>

        {/* Right Column: FOTO DE LUCAS E LAYLA */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A24A]/25 to-amber-400/20 rounded-2xl blur-xl opacity-70" />
            
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <img 
                src="/images/lucas-e-layla.png" 
                alt="Lucas e Layla - Fundadores da JurisSites" 
                className="w-full h-auto object-cover"
              />
              <div className="p-5 bg-white border-t border-gray-100 text-left">
                <div className="font-extrabold text-lg text-gray-900">Lucas Rodrigues & Layla Marreta</div>
                <div className="text-xs font-semibold text-[#C9A24A] uppercase tracking-wider">Fundadores da JurisSites</div>
                <div className="text-xs text-gray-500 mt-1">Advocacia Ética & Estratégia Digital de Alta Performance</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// SECTION 6: Buscas Mensais no Google (SEMrush / Ubersuggest)
const MonthlySearches = () => {
  const stats = [
    { area: "Advogado Trabalhista", count: "110.000+", desc: "Demissões, verbas rescisórias e horas extras" },
    { area: "Advogado de Família", count: "90.000+", desc: "Divórcios, pensão alimentícia e guarda de filhos" },
    { area: "Advogado Previdenciário", count: "85.000+", desc: "Aposentadorias, BPC/LOAS e revisões do INSS" },
    { area: "Advogado Criminalista", count: "65.000+", desc: "Audiências de custódia, flagrantes e defesas criminais" },
    { area: "Advogado Tributário", count: "45.000+", desc: "Recuperação tributária e planejamento fiscal" },
    { area: "Advogado Imobiliário", count: "40.000+", desc: "Usucapião, regularização de imóveis e contratos" },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            Potencial de Crescimento
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Buscas mensais por advogado na Internet
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Saiba quantos clientes você está perdendo por não ter um site ainda. Palavras-chave procuradas por mês no Brasil (Fontes: SEMrush e Ubersuggest).
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map(s => (
            <div key={s.area} className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs text-left">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-900 text-base">{s.area}</span>
                <span className="text-xs font-bold text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-3 py-1 rounded-full">
                  {s.count} buscas
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold inline-flex items-center gap-2"
          >
            <span className="font-bold text-base">»</span> Quero Estar Visível no Google
          </a>
        </div>

      </div>
    </section>
  );
};

// SECTION 7: "Serve para o Advogado e Escritório de Advocacia que..."
const TargetAudience = () => {
  const checks = [
    {
      title: "Quer ter solução completa",
      desc: "Fazemos tudo para você: site, hospedagem e email. Sem necessidade de conhecimentos técnicos."
    },
    {
      title: "Não quer perder tempo",
      desc: "Já está tudo incluso, não se preocupe com a parte técnica para ter o seu site no ar com rapidez."
    },
    {
      title: "Quer captar mais clientes",
      desc: "Tenha página de alta conversão voltada para transformar visitantes em contatos reais no WhatsApp."
    },
    {
      title: "Site personalizado",
      desc: "Todo o site é personalizado com a identidade visual do escritório, aumentando a credibilidade e autoridade do advogado."
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] border-b border-gray-200/70">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="inline-block bg-[#F1F3F5] text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
          Para Quem Serve
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12">
          Serve para o Advogado e Escritório de Advocacia que...
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-10 text-left">
          {checks.map(c => (
            <div key={c.title} className="p-6 rounded-xl border border-gray-200 bg-white shadow-xs flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={16} strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{c.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
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
          <span className="font-bold text-base">»</span> PEDIR ORÇAMENTO
        </a>

      </div>
    </section>
  );
};

// SECTION 8: FAQ Accordion
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "O site segue as normas do Código de Ética e Provimento da OAB?",
      a: "Sim, integralmente. Todos os nossos projetos são desenvolvidos sob a ótica do Provimento 205/2021 da OAB, prezando pelo caráter informativo, sóbrio e sem mercantilização da advocacia."
    },
    {
      q: "Eu preciso entender de programação para ter meu site?",
      a: "Não! Nós entregamos a solução 100% pronta chave na mão: cuidamos do registro/apontamento de domínio, hospedagem, e-mails corporativos, desenvolvimento visual e testes de velocidade."
    },
    {
      q: "Qual é o prazo de entrega do site?",
      a: "Em média entre 7 e 15 dias úteis após a coleta das informações e materiais do seu escritório."
    },
    {
      q: "O site já vem com botão do WhatsApp?",
      a: "Sim! Instalamos o botão flutuante oficial do WhatsApp com mensagem personalizada para que o cliente clique e fale direto com você ou com a sua equipe."
    },
    {
      q: "Vocês atendem advogados de qualquer lugar do Brasil?",
      a: "Sim, atendemos advogados autônomos e escritórios em todos os estados do país com atendimento próximo e 100% digital."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-12">
          Tire suas principais dúvidas sobre a criação do site do seu escritório.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#C9A24A] transition-colors"
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
  );
};

// FOOTER (With links to all specialized niche SEO pages)
const Footer = ({ onNavigatePage }: { onNavigatePage: (slug: string) => void }) => {
  const pages = Object.values(SEO_PAGES);

  return (
    <footer className="bg-white py-14 border-t border-gray-200 text-center">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src="/logo-jurissites.png" alt="JurisSites" className="h-8 w-auto object-contain" />
            <span className="font-extrabold text-lg text-gray-900">JurisSites</span>
            <span className="text-xs text-gray-400 border-l border-gray-300 pl-3">Especialistas em Sites para Advogados</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
            <a href="#home" className="hover:text-[#C9A24A]">Início</a>
            <a href="#como-funciona" className="hover:text-[#C9A24A]">Como Funciona</a>
            <a href="#o-que-inclui" className="hover:text-[#C9A24A]">O que Inclui</a>
            <a href="#sobre-nos" className="hover:text-[#C9A24A]">Sobre Nós</a>
            <a href="#faq" className="hover:text-[#C9A24A]">Dúvidas</a>
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram @jurissites"
              className="inline-flex items-center gap-1.5 font-semibold text-[#C9A24A] hover:underline"
            >
              <Instagram size={14} /> @jurissites
            </a>
          </div>
        </div>

        {/* SEO Landing Page Links in Footer for Googlebot Crawling */}
        <div className="py-8 border-b border-gray-100 text-left">
          <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
            Especialidades Jurídicas Atendidas (Páginas Especializadas):
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-gray-500">
            {pages.map(p => (
              <a
                key={p.slug}
                href={`/${p.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePage(p.slug);
                }}
                className="hover:text-[#C9A24A] transition-colors"
              >
                {p.headline}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} JurisSites. Todos os direitos reservados.</p>
          <p>Conforme Provimento 205/2021 do CFOAB · Publicidade Jurídica Ética</p>
        </div>

      </div>
    </footer>
  );
};

// FLOATING WHATSAPP BUTTON (Bottom Right)
const WhatsAppFloat = () => (
  <a 
    href={WA_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Fale conosco no WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-whatsapp"
  >
    <MessageCircle size={30} className="fill-current stroke-none" />
  </a>
);

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
    search: window.location.search
  }));

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath({
        pathname: window.location.pathname,
        hash: window.location.hash,
        search: window.location.search
      });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath({
      pathname: window.location.pathname,
      hash: window.location.hash,
      search: window.location.search
    });
    window.scrollTo(0, 0);
  };

  const isLucas = 
    currentPath.pathname.toLowerCase() === '/lucas' ||
    currentPath.pathname.toLowerCase() === '/lucas/' ||
    currentPath.pathname.toLowerCase().startsWith('/lucas') ||
    currentPath.hash.toLowerCase() === '#lucas' ||
    currentPath.hash.toLowerCase() === '#/lucas' ||
    currentPath.search.toLowerCase().includes('lucas');

  if (isLucas) {
    return <LucasPage />;
  }

  // Check if current route matches one of the 8 specialized SEO landing pages
  const cleanPath = currentPath.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (cleanPath && SEO_PAGES[cleanPath]) {
    return (
      <SeoLandingPage 
        pageData={SEO_PAGES[cleanPath]}
        onNavigateHome={() => navigateTo('/')}
        onNavigatePage={(slug) => navigateTo(`/${slug}`)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#2D3748] selection:bg-[#C9A24A]/20 selection:text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <FourPillars />
      <ProvocationSection />
      <WhatsIncluded />
      <NicheSolutionsSection onNavigatePage={(slug) => navigateTo(`/${slug}`)} />
      <AboutFounders />
      <MonthlySearches />
      <TargetAudience />
      <FAQ />
      <Footer onNavigatePage={(slug) => navigateTo(`/${slug}`)} />
      <WhatsAppFloat />
    </div>
  );
}
