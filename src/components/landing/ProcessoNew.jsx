import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSiteSettings } from "@/hooks/useSanityContent";

const steps = [
  { num: "01", title: "Briefing", desc: "Ascoltiamo esigenze, analizziamo lo spazio. Obiettivi, budget e tempi definiti insieme." },
  { num: "02", title: "Design 3D", desc: "Render tridimensionali completi per approvazione. Zero sorprese in produzione." },
  { num: "03", title: "Montaggio", desc: "Team dedicato on-site. Presenti per ogni necessità tecnica durante la fiera." },
];

export default function ProcessoNew() {
  const { settings } = useSiteSettings();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="metodo" className="relative overflow-hidden py-0 bg-[#0f0f10]">
      <div className="relative min-h-[80vh] flex items-center">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img src={settings.processBackground} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f10] via-[#0f0f10]/70 to-[#0f0f10]/40" />
        </motion.div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[9px] tracking-[0.35em] uppercase text-primary font-medium">Metodo di lavoro</span>
            </div>
            <h2
              className="font-display font-normal tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)" }}
            >
              <span className="text-white/80">Dal brief</span>
              <br />
              <em className="italic text-primary">allo stand</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group border-t border-white/8 pt-8 pr-8 pb-8 hover:border-primary/40 transition-colors duration-500"
              >
                <div className="font-display text-[80px] font-normal leading-none text-white/[0.04] group-hover:text-primary/[0.08] transition-colors duration-500 mb-4 select-none">
                  {s.num}
                </div>
                <div className="text-sm font-medium text-white/70 mb-3 group-hover:text-white transition-colors duration-300">
                  {s.title}
                </div>
                <p className="text-[12px] font-light text-white/30 leading-[1.85]">{s.desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-white/5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
