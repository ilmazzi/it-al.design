import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regions = [
  {
    num: "01",
    flagImg: "https://flagcdn.com/it.svg",
    flagAlt: "Italia",
    name: "Italia",
    desc: "Seguiamo stand per tutte le principali fiere italiane: Salone del Mobile, Host, Eicma, Vinitaly e molte altre. Conosciamo ogni padiglione, ogni regolamento.",
    fiere: ["Salone del Mobile", "Host Milano", "Eicma", "Vinitaly", "Fiera di Roma"],
  },
  {
    num: "02",
    flagImg: "https://flagcdn.com/eu.svg",
    flagAlt: "Europa",
    name: "Europa",
    desc: "Logistica consolidata e network di partner locali per una presenza impeccabile in qualsiasi paese europeo, dalla Germania alla Spagna.",
    fiere: ["Messe Frankfurt", "Fira Barcelona", "Messe München", "Brussels Expo"],
  },
  {
    num: "03",
    flagImg: "https://flagcdn.com/ng.svg",
    flagAlt: "Nigeria",
    name: "Nigeria & West Africa",
    desc: "Il nostro punto di forza esclusivo. Produzione in loco e team dedicato con esperienza consolidata in Nigeria e nei principali mercati della West Africa.",
    fiere: ["Lagos Trade Fair", "Abuja Expo", "Accra Expo", "Dakar Expo"],
  },
];

export default function FiereNew() {
  const [active, setActive] = useState(null);

  return (
    <section id="fiere" className="min-h-screen bg-[#0f0f10] flex flex-col justify-center py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-20 gap-8"
        >
          <h2
            className="font-display font-normal leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
          >
            <span className="text-white/80">A quale</span>
            <br />
            <em className="italic text-primary">fiera</em>
            <br />
            <span className="text-white/80">partecipi?</span>
          </h2>
          <div className="hidden md:block text-right">
            <p className="text-xs text-white/25 leading-[2] max-w-[220px]">
              Diteci dove andate.<br />
              Pensiamo noi a come farvi brillare.
            </p>
          </div>
        </motion.div>

        <div className="space-y-0">
          {regions.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div
                className="group border-b border-white/6 cursor-pointer"
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex items-center gap-6 md:gap-10 py-7 hover:bg-white/[0.02] transition-colors duration-300 px-2">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white/15 w-8 shrink-0">{r.num}</span>
                  <img src={r.flagImg} alt={r.flagAlt} className="w-8 h-6 object-cover rounded-[2px] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="font-display font-normal text-white/70 group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: "clamp(22px, 3.5vw, 42px)" }}
                  >
                    {r.name}
                  </span>
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-auto text-primary text-xl font-light leading-none"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-8 pb-8 pt-2 px-2 ml-14 md:ml-24">
                        <p className="text-sm font-light text-white/35 leading-[1.9] max-w-[380px]">
                          {r.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {r.fiere.map((f) => (
                            <span key={f} className="text-[10px] tracking-[0.15em] border border-primary/25 text-primary/60 px-3 py-1.5">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-col items-end gap-4"
        >
          <a
            href="#preventivo"
            className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase bg-primary text-[#0f0f10] px-7 py-4 hover:bg-white transition-all duration-300"
          >
            Richiedi un preventivo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-xs text-white/25 text-right max-w-[320px] leading-[1.8]">
            Se al momento non trovi ancora la fiera di tuo interesse,{" "}
            <a href="mailto:info@it-al.design" className="text-primary/60 hover:text-primary transition-colors">
              contattaci via mail
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
