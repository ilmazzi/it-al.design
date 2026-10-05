import React from "react";
import { motion } from "framer-motion";

const regions = [
  {
    num: "01",
    flagImg: "https://flagcdn.com/it.svg",
    flagAlt: "Italia",
    name: "Italia",
    desc: "Il tuo stand Octanorm, in tutta Italia. Dai più forza al tuo brand con uno stand Octanorm professionale, elegante e personalizzato. Ci occupiamo di tutto: progettazione, produzione,trasporto, montaggio e smontaggio in tutte le principali fiere italiane.",
  },
  {
    num: "02",
    flagImg: "https://flagcdn.com/eu.svg",
    flagAlt: "Europa",
    name: "Europa",
    desc: "Logistica consolidata e network di partner locali per una presenza impeccabile in qualsiasi paese europeo.",
  },
  {
    num: "03",
    flagImg: "https://flagcdn.com/ng.svg",
    flagAlt: "Nigeria",
    name: "Nigeria & West Africa",
    desc: "Stand Octanorm in tutta l'Africa occidentale. Progettiamo e realizziamo stand Octanorm in tutta la West Africa, combinando design e progettazione italiana con una struttura produttiva e logistica direttamente sul territorio. Grazie alla nostra base di Lagos, Nigeria, disponiamo di materiali Octanorm già presenti nei nostri magazzini e di personale locale specializzato e formato, farantendo rapidità, controllo dei costi e affidabilità. Ogni progetto viene sviluppato e coordinato dal nostro team di progettazione in Italia, assicurando gli stessi standard qualitativi europei in opgni fiera dell'Africa Occidentale.",
  },
];

export default function FiereNew() {
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
          <div className="hidden md:block text-right shrink-0 mr-12 lg:mr-24">
            <div className="flex items-start justify-end gap-4">
              <span className="w-8 h-px bg-primary mt-3 shrink-0" />
              <p
                className="font-display font-normal text-white/80 leading-[1.35] max-w-[340px]"
                style={{ fontSize: "clamp(18px, 1.8vw, 26px)" }}
              >
                Diteci dove andate.
                <br />
                <em className="italic text-primary/90">Pensiamo noi a come farvi brillare.</em>
              </p>
            </div>
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
              className="border-b border-white/6 py-8 px-2"
            >
              <div className="flex items-start gap-6 md:gap-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/35 w-8 shrink-0 pt-2">{r.num}</span>
                <img
                  src={r.flagImg}
                  alt={r.flagAlt}
                  className="w-8 h-6 object-cover rounded-[2px] shrink-0 mt-1.5 opacity-90"
                />
                <div className="min-w-0 flex-1">
                  <h3
                    className="font-display font-normal text-white/85 mb-3"
                    style={{ fontSize: "clamp(22px, 3.5vw, 42px)" }}
                  >
                    {r.name}
                  </h3>
                  <p className="text-sm font-light text-white/55 leading-[1.9] max-w-[520px]">
                    {r.desc}
                  </p>
                </div>
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
            className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase bg-primary text-white px-7 py-4 hover:bg-white hover:text-[#0f0f10] transition-all duration-300"
          >
            Richiedi un preventivo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-xs text-white/40 text-right max-w-[320px] leading-[1.8]">
            Se al momento non trovi ancora la fiera di tuo interesse,{" "}
            <a href="mailto:info@it-al.design" className="text-primary/80 hover:text-primary transition-colors">
              contattaci via mail
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
