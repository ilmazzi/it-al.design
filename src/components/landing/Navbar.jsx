import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Fiere", href: "#fiere" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1a1a1c]/95 backdrop-blur-2xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-14 py-5">
        <a href="#home" className="font-display text-[17px] font-medium tracking-[0.08em] text-white">
          IT·AL<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[10.5px] font-medium tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contatti"
          className="hidden md:inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-primary-foreground bg-primary px-5 py-2.5 hover:bg-primary/90 transition-all duration-200"
        >
          Preventivo
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
        >
          <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1c]/98 backdrop-blur-2xl overflow-hidden border-t border-white/5"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contatti" onClick={() => setMobileOpen(false)}
                className="text-xs font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-5 py-3 text-center">
                Preventivo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}