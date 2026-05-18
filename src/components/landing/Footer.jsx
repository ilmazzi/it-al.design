import React from "react";

const links = [
  { label: "Fiere", href: "#fiere" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 px-8 md:px-14 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-base tracking-[0.08em] text-white/30">
          IT·AL<span className="text-primary/50">.</span>
        </div>
        <ul className="flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="text-[9px] tracking-[0.22em] uppercase text-white/20 hover:text-primary transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-[9px] text-white/15 tracking-[0.12em]">
          © 2025 Italian Aluminium Design · Milano & Lagos
        </span>
      </div>
    </footer>
  );
}