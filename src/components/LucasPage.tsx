import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Target 
} from 'lucide-react';

const WA_NUMBER = "5574999249182";

const createWaLink = (message: string) => {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const LucasPage: React.FC = () => {
  const options = [
    {
      id: 'site',
      title: 'Criação de Sites',
      waMessage: 'Olá Lucas! Gostaria de solicitar um orçamento para Criação de Sites.'
    },
    {
      id: 'trafego',
      title: 'Gestão de Tráfego Pago',
      waMessage: 'Olá Lucas! Gostaria de solicitar um orçamento para Gestão de Tráfego Pago.'
    },
    {
      id: 'gmn',
      title: 'Google Meu Negócio',
      waMessage: 'Olá Lucas! Gostaria de solicitar um orçamento para Google Meu Negócio.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans selection:bg-[#C9A24A]/30 relative flex flex-col justify-between overflow-x-hidden">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-radial from-[#C9A24A]/12 via-transparent to-transparent blur-3xl opacity-70" />
      </div>



      {/* Main Content Area */}
      <main className="relative z-10 max-w-md mx-auto w-full px-6 py-8 flex-grow flex flex-col justify-center">
        
        {/* Header Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          {/* Avatar with glowing border */}
          <div className="relative inline-block mb-5">
            <div className="absolute -inset-1 rounded-full bg-radial from-[#C9A24A] via-[#D4AF6A] to-[#A8832D] opacity-85 blur-md animate-pulse-gold"></div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C9A24A] bg-[#111] mx-auto shadow-2xl">
              <img 
                src="/images/lucas-e-layla.png" 
                alt="Lucas Rodrigues" 
                className="w-full h-full object-cover filter contrast-[1.08] brightness-[1.02]"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-[#C9A24A] text-black p-1.5 rounded-full shadow-lg border border-black" title="Verificado">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Name */}
          <h1 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Lucas Rodrigues
          </h1>

          {/* Subtitle */}
          <p className="text-[#C9A24A] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Estrategista Digital
          </p>

          {/* Description */}
          <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6 font-light">
            Ajudo empresas, profissionais e escritórios a acelerar o crescimento através de{' '}
            <strong className="text-white font-semibold">Criação de Sites</strong>,{' '}
            <strong className="text-white font-semibold">Tráfego Pago</strong> e{' '}
            <strong className="text-white font-semibold">Google Meu Negócio</strong>.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C9A24A]" /> Sites Alta Performance
            </span>
            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-400" /> Tráfego Pago (Ads)
            </span>
            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" /> Google Meu Negócio
            </span>
          </div>
        </motion.div>

        {/* Clean WhatsApp Option Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-3.5"
        >
          {options.map((item) => (
            <a 
              key={item.id}
              href={createWaLink(item.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 px-5 rounded-xl border border-white/15 bg-neutral-900/90 hover:border-[#25D366]/60 hover:bg-neutral-900 transition-all duration-300 shadow-lg"
            >
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                {item.title}
              </span>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-black font-bold text-xs group-hover:bg-[#25D366]/90 transition-all shadow-md shrink-0">
                <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                <span>Fale comigo</span>
              </div>
            </a>
          ))}
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 text-center text-[11px] text-white/35 border-t border-white/5">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} Lucas Rodrigues</span>
          <a href="/" className="hover:text-white transition-colors">JurisSites</a>
        </div>
      </footer>

    </div>
  );
};
