import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SideNav from "../components/landing/SideNav";

const projects = [
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/a60c10ca3_generated_57725cc3.png",
    cat: "Stand fieristico",
    title: "Pannelli retroilluminati + sospensione aerea",
    location: "Milano",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/b1ea42b2e_generated_87946b07.png",
    cat: "Interior · Showroom",
    title: "Lightbox integrata con arredo",
    location: "Milano",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/b32472d75_generated_d0fb887b.png",
    cat: "Lagos · Ambasciata d'Italia",
    title: "Settimana della Cucina Italiana",
    location: "Lagos",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/5ea341273_generated_fa91b721.png",
    cat: "Stand 6×3",
    title: "Lightbox retroilluminata + monitor",
    location: "Milano",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/6dabf6e93_generated_c8af2c1e.png",
    cat: "The Wine Lab",
    title: "Show cooking — allestimento completo",
    location: "Lagos",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#0f0f10] text-white min-h-screen">
      <SideNav />

      <div className="pt-28 pb-24 px-8 md:px-16 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link to="/#galleria" className="flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-white/25 hover:text-primary transition-colors mb-6">
              <ArrowLeft size={12} />
              Torna alla home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[9px] tracking-[0.35em] uppercase text-primary">Progetti realizzati</span>
            </div>
            <h1
              className="font-display font-normal tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
            >
              <span className="text-white/80">Galleria</span>
              <br />
              <em className="italic text-primary">completa.</em>
            </h1>
          </div>
          <span className="hidden md:block text-[9px] tracking-[0.25em] uppercase text-white/15">
            {projects.length} progetti
          </span>
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelected(p)}
              className="relative overflow-hidden cursor-pointer group bg-[#1a1a1c] aspect-[4/3]"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/90 via-[#0f0f10]/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

              <div className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase text-white/30 group-hover:text-primary/70 transition-colors duration-300">
                {p.cat}
              </div>
              <div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] border border-white/10 text-white/20 px-2 py-1 group-hover:border-primary/30 group-hover:text-primary/50 transition-all duration-300">
                {p.location}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[13px] font-light text-white/60 group-hover:text-white transition-colors duration-300">
                  {p.title}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
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
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] bg-black/92 flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img src={selected.img} alt={selected.title} className="w-full h-auto max-h-[75vh] object-contain" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-primary/60">{selected.cat}</div>
                  <div className="text-sm font-light text-white/60 mt-1">{selected.title}</div>
                </div>
                <button onClick={() => setSelected(null)} className="text-white/30 hover:text-white transition-colors p-2">
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}