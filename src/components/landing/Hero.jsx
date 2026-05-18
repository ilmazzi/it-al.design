import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_BG = "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/1a40b5337_generated_f393e1c6.png";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden flex items-end">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={HERO_BG} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/60 to-[#111113]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111113]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 pb-24 pt-40">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
            Partner ufficiale Octanorm
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(48px,7vw,96px)] font-normal leading-[0.95] tracking-tight text-white"
          >
            Lo stand che
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.65, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(48px,7vw,96px)] font-normal leading-[0.95] tracking-tight italic text-primary"
          >
            racconta
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(48px,7vw,96px)] font-normal leading-[0.95] tracking-tight text-white"
          >
            la tua azienda.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-14"
        >
          <p className="text-sm font-light text-white/50 leading-[1.9] max-w-[380px]">
            Sistemi modulari in alluminio per fiere, showroom e spazi espositivi.
            Milano · Lagos · Europa.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contatti"
              className="text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200">
              Parliamo del progetto
            </a>
            <a href="#galleria"
              className="text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-200 flex items-center gap-2">
              Galleria
              <span className="text-primary">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex items-center gap-10 mt-20 pt-8 border-t border-white/8"
        >
          {[
            { flag: "🇮🇹", city: "Milano", role: "Design · Europa" },
            { flag: "🇳🇬", city: "Lagos", role: "Showroom · Africa" },
          ].map((loc) => (
            <div key={loc.city} className="flex items-center gap-3">
              <span className="text-xl">{loc.flag}</span>
              <div>
                <div className="text-xs font-medium text-white/70">{loc.city}</div>
                <div className="text-[10px] text-white/30 tracking-[0.1em]">{loc.role}</div>
              </div>
            </div>
          ))}
          <div className="hidden sm:block w-px h-8 bg-white/10 mx-2" />
          <div className="hidden sm:block text-[10px] tracking-[0.2em] uppercase text-white/20">
            Presenti fisicamente<br />in entrambi i paesi
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}