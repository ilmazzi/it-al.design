import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SHOWCASE_BG = "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/a85bd1473_generated_a7295ac4.png";

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden flex items-center">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img src={SHOWCASE_BG} alt="Stand Octanorm in azione" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#111113]/75" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              Octanorm in azione
            </span>
          </div>
          <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-normal leading-[1.05] text-white mb-6">
            Strutture che
            <br />
            <em className="italic text-primary">dominano</em> lo spazio.
          </h2>
          <p className="text-sm font-light text-white/45 leading-[1.9] mb-10 max-w-[380px]">
            Pannelli retroilluminati, sospensioni aeree, totem e counter —
            ogni elemento crea un'esperienza visiva indimenticabile.
          </p>
          <a
            href="#contatti"
            className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Richiedi un progetto su misura
          </a>
        </motion.div>
      </div>
    </section>
  );
}