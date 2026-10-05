import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSiteSettings } from "@/hooks/useSanityContent";

export default function HeroNew() {
  const { settings } = useSiteSettings();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden">

      {/* Full bleed image with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <img src={settings.heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f10]/30 via-[#0f0f10]/50 to-[#0f0f10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f10]/60 via-transparent to-[#0f0f10]/20" />
      </motion.div>



      {/* Main headline — massive, layered */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-end min-h-screen px-8 md:px-16 pb-16 pt-24"
      >
        {/* Line 1 */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-normal leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            <span className="text-white/90">Lo stand</span>
          </motion.div>
        </div>

        {/* Line 2 — italic accent */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic font-normal leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            <span className="text-primary">che racconta</span>
          </motion.div>
        </div>

        {/* Line 3 */}
        <div className="overflow-hidden mb-12">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-normal leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            <span className="text-white/90">la tua azienda.</span>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
        >
          <p className="text-[13px] font-light text-white/35 leading-[1.95] max-w-[320px]">
            Sistemi modulari in alluminio realizzati con il sistema Octanorm.
            <br />
            Dalla progettazione al montaggio — Italia (Cantù) · Nigeria (Lagos).
          </p>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-4">
              {["🇮🇹 Italia (Cantù)", "🇳🇬 Nigeria (Lagos)"].map((loc) => (
                <div key={loc} className="text-[10px] tracking-[0.15em] text-white/30 border border-white/8 px-3 py-1.5">
                  {loc}
                </div>
              ))}
            </div>
            <a
              href="#preventivo"
              className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase bg-primary text-[#0f0f10] px-7 py-4 hover:bg-white transition-all duration-300"
            >
              Richiedi un preventivo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}