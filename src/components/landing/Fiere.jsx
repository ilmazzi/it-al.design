import React from "react";
import { motion } from "framer-motion";

const regions = [
  {
    icon: "🇮🇹",
    name: "Italia",
    desc: "Presenza diretta per tutte le principali fiere italiane: Salone del Mobile, Host, Eicma, Vinitaly. Conosciamo ogni padiglione.",
    badge: "Sede a Milano",
    num: "01",
  },
  {
    icon: "🌍",
    name: "Europa",
    desc: "Logistica consolidata e partner di montaggio locali per una presenza impeccabile in qualsiasi paese europeo.",
    badge: "Copertura UE completa",
    num: "02",
  },
  {
    icon: "🌐",
    name: "Nigeria & Nord Africa",
    desc: "Showroom e produzione a Lagos. Esperienza consolidata in Nigeria, Marocco, Egitto e nei principali mercati africani.",
    badge: "Sede a Lagos",
    num: "03",
  },
];

export default function Fiere() {
  return (
    <section id="fiere" className="py-32 px-8 md:px-14 bg-[#111113]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                Il nostro territorio
              </span>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.0] tracking-tight text-white">
              A quale fiera
              <br />
              <em className="italic text-primary">partecipate?</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <p className="text-sm font-light text-white/45 leading-[1.9]">
              Qualunque sia il vostro evento — in Italia, in Europa o in Africa — siamo il partner che conosce il territorio, i regolamenti e le aspettative del pubblico locale.
            </p>
            <p className="text-sm font-light text-white/30 leading-[1.9] italic font-display">
              Diteci dove andate. Pensiamo noi a come farvi brillare.
            </p>
            <a
              href="#contatti"
              className="self-start text-[11px] font-medium tracking-[0.2em] uppercase text-primary border border-primary/40 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Raccontaci la tua fiera ↗
            </a>
          </motion.div>
        </div>

        {/* Region Cards — elegant horizontal list */}
        <div className="space-y-0 border border-white/6">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 px-8 py-10 border-b border-white/6 last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono w-8 shrink-0">
                {r.num}
              </div>
              <div className="text-2xl shrink-0">{r.icon}</div>
              <div className="font-display text-2xl text-white group-hover:text-primary transition-colors duration-300 min-w-[180px]">
                {r.name}
              </div>
              <div className="flex-1 text-sm font-light text-white/40 leading-[1.8]">
                {r.desc}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-primary/60 border border-primary/20 px-3 py-1.5 shrink-0">
                {r.badge}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}