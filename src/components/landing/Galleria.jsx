import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const items = [
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/a60c10ca3_generated_57725cc3.png",
    label: "Stand fieristico · Sistema Octanorm",
    title: "Pannelli retroilluminati + sospensione aerea",
    span: "col-span-2 row-span-2",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/b1ea42b2e_generated_87946b07.png",
    label: "Interior design · Showroom",
    title: "Lightbox integrata con arredo",
    span: "",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/b32472d75_generated_d0fb887b.png",
    label: "Lagos · Ambasciata d'Italia",
    title: "Settimana della Cucina Italiana",
    span: "",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/5ea341273_generated_fa91b721.png",
    label: "Stand fieristico · 6×3",
    title: "Lightbox retroilluminata + monitor",
    span: "",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/6dabf6e93_generated_c8af2c1e.png",
    label: "Lagos · The Wine Lab",
    title: "Show cooking — allestimento completo",
    span: "",
  },
];

function GalleryItem({ item, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      onClick={() => onClick(item)}
      className={`relative overflow-hidden cursor-pointer group ${item.span || ""}`}
      style={{ minHeight: item.span ? "420px" : "220px" }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/90 via-[#111113]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 border border-primary/60 flex items-center justify-center">
          <ZoomIn size={16} className="text-primary" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">{item.label}</div>
        <div className="text-[13px] font-light text-white/80">{item.title}</div>
      </div>
    </motion.div>
  );
}

export default function Galleria() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galleria" className="py-32 px-8 md:px-14 bg-[#111113]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                Progetti realizzati
              </span>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.0] tracking-tight text-white">
              Il nostro lavoro
              <br />
              parla <em className="italic text-primary">per noi</em>
            </h2>
          </div>
          <a href="#contatti"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 hover:text-primary transition-colors duration-300 flex items-center gap-2">
            Inizia il tuo progetto <span className="text-primary">→</span>
          </a>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5">
          {items.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img src={selected.img} alt={selected.title} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="mt-4">
                <div className="text-[10px] tracking-[0.2em] uppercase text-primary/60">{selected.label}</div>
                <div className="text-base font-light text-white/70 mt-1">{selected.title}</div>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/40 hover:text-white transition-colors p-2">
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}