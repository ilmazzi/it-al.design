import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/a60c10ca3_generated_57725cc3.png",
    cat: "Stand fieristico",
    title: "Pannelli retroilluminati + sospensione aerea",
    location: "Milano",
    size: "large", // spans 2 cols + 2 rows
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/b1ea42b2e_generated_87946b07.png",
    cat: "Interior · Showroom",
    title: "Lightbox integrata con arredo",
    location: "Milano",
    size: "tall",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/b32472d75_generated_d0fb887b.png",
    cat: "Lagos · Ambasciata d'Italia",
    title: "Settimana della Cucina Italiana",
    location: "Lagos",
    size: "normal",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/5ea341273_generated_fa91b721.png",
    cat: "Stand 6×3",
    title: "Lightbox retroilluminata + monitor",
    location: "Milano",
    size: "normal",
  },
  {
    img: "https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/6dabf6e93_generated_c8af2c1e.png",
    cat: "The Wine Lab",
    title: "Show cooking — allestimento completo",
    location: "Lagos",
    size: "wide",
  },
];

function ProjectCard({ project, index, onClick }) {
  const isLarge = project.size === "large";
  const isTall = project.size === "tall";
  const isWide = project.size === "wide";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onClick(project)}
      className={`relative overflow-hidden cursor-pointer group bg-[#1a1a1c]
        ${isLarge ? "col-span-2 row-span-2" : ""}
        ${isTall ? "row-span-2" : ""}
        ${isWide ? "col-span-2" : ""}
      `}
      style={{ minHeight: isLarge ? "500px" : isTall ? "480px" : isWide ? "280px" : "230px" }}
    >
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/90 via-[#0f0f10]/20 to-transparent" />

      {/* Hover: lime tint */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

      {/* Top-left category */}
      <div className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase text-white/30 group-hover:text-primary/70 transition-colors duration-300">
        {project.cat}
      </div>

      {/* Location pill */}
      <div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] border border-white/10 text-white/20 px-2 py-1 group-hover:border-primary/30 group-hover:text-primary/50 transition-all duration-300">
        {project.location}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-[13px] font-light text-white/60 group-hover:text-white transition-colors duration-300">
          {project.title}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}

export default function GalleriaNew() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galleria" className="bg-[#0c0c0d] py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[9px] tracking-[0.35em] uppercase text-primary">Progetti realizzati</span>
            </div>
            <h2
              className="font-display font-normal tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
            >
              <span className="text-white/80">Il lavoro</span>
              <br />
              <em className="italic text-primary">parla.</em>
            </h2>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase text-white/25 hover:text-primary transition-colors duration-300"
          >
            Vedi tutti
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 auto-rows-auto">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} onClick={setSelected} />
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
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
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
    </section>
  );
}