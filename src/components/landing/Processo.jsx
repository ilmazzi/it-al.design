import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Briefing & progetto",
    desc: "Ascoltiamo le vostre esigenze, analizziamo lo spazio e definiamo insieme obiettivi, budget e tempi.",
  },
  {
    num: "02",
    title: "Design & render 3D",
    desc: "Il nostro team crea il progetto visivo completo con render tridimensionali per approvazione.",
  },
  {
    num: "03",
    title: "Produzione",
    desc: "Produzione in Italia o a Lagos con componenti Octanorm certificati. Controllo qualità su ogni elemento.",
  },
  {
    num: "04",
    title: "Montaggio & assistenza",
    desc: "Montaggio on-site con team dedicato. Presenti durante la fiera per qualsiasi necessità tecnica.",
  },
];

export default function Processo() {
  return (
    <section className="py-32 px-8 md:px-14 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              Come lavoriamo
            </span>
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.0] tracking-tight text-white">
            Dal brief
            <br />
            allo <em className="italic text-primary">stand</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0e0e10] p-10 group hover:bg-white/[0.025] transition-colors duration-300"
            >
              <div className="font-display text-[64px] font-normal leading-none text-primary/8 mb-8 group-hover:text-primary/15 transition-colors duration-500">
                {s.num}
              </div>
              <div className="text-sm font-medium text-white/80 mb-3 group-hover:text-white transition-colors duration-300">
                {s.title}
              </div>
              <p className="text-[13px] font-light text-white/35 leading-[1.8]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}