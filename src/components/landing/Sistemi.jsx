import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const products = [
  {
    num: "01 / Lightbox",
    name: "Pannello luminoso autoportante",
    desc: "Struttura elegante in alluminio con retroilluminazione LED omogenea. Grafica a bordo in silicone per una resa visiva impeccabile. Montaggio rapido, singola o doppia facciata.",
    tags: ["LED integrato", "Montaggio rapido", "Doppia faccia"],
  },
  {
    num: "02 / Angolare",
    name: "Configurazione ad L",
    desc: "Ideale per angoli di stand o spazi d'ingresso. Si integra con i sistemi OCTAwall Custom e Maxima Light. Superficie in alluminio senza scanalatura a vista.",
    tags: ["Modulare", "Integrazione OCTAwall", "Angolo 90°"],
  },
  {
    num: "03 / Sospensione verticale",
    name: "Struttura sospesa da soffitto",
    desc: "Sistema con adattatore per sospensione verticale, perfetto per pad fieristici con strutture in quota. Massima visibilità da lontano, impatto immediato.",
    tags: ["Alta visibilità", "Adattatore incluso", "Installazione aerea"],
  },
  {
    num: "04 / Orizzontale",
    name: "Sospensione orizzontale o a parete",
    desc: "Versatile per showroom, retail e spazi permanenti. Adattatore per fissaggio orizzontale o a parete. La stessa qualità Octanorm in configurazione fissa.",
    tags: ["Retail", "Showroom", "Permanente"],
  },
];

export default function Sistemi() {
  return (
    <section id="sistemi" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="I nostri sistemi"
          title='Ogni spazio,<br/><em class="italic text-primary">una soluzione</em>'
          intro="Il sistema Octanorm si adatta a qualsiasi esigenza espositiva: dalla lightbox singola allo stand a doppio piano, dall'allestimento temporaneo all'installazione permanente."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 mt-14 border border-border/60">
          {products.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-9 flex flex-col cursor-pointer hover:bg-primary/[0.04] transition-colors"
            >
              <div className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium mb-4">
                {p.num}
              </div>
              <div className="font-display text-xl mb-3">{p.name}</div>
              <p className="text-[13px] font-light text-muted-foreground leading-[1.78] flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-[0.1em] px-2.5 py-1 border border-border/40 text-muted-foreground/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}