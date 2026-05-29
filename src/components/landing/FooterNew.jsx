import React from "react";

export default function FooterNew() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/4 px-8 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-sm tracking-[0.1em] text-white/20">
          IT·AL<span className="text-primary/40">.</span>
          <span className="ml-2 text-[9px] tracking-[0.2em] uppercase align-middle">Italian Aluminium Design</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { l: "Fiere", h: "#fiere" },
            { l: "Metodo di lavoro", h: "#metodo" },
            { l: "Galleria", h: "#galleria" },
            { l: "Contatti", h: "#contatti" },
            { l: "Area riservata", h: "#area-riservata" },
          ].map((link) => (
            <a key={link.h} href={link.h}
              className="text-[9px] tracking-[0.25em] uppercase text-white/15 hover:text-primary transition-colors duration-300">
              {link.l}
            </a>
          ))}
        </div>
        <span className="text-[9px] text-white/10 tracking-[0.1em]">
          © 2025 · Cantù & Lagos
        </span>
      </div>
      <div id="area-riservata" className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
          Area riservata clienti — in arrivo
        </p>
      </div>
    </footer>
  );
}
