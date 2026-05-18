import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccentPicker from "./AccentPicker";

const links = [
  { label: "Fiere", href: "#fiere" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

export default function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top navbar — all screen sizes */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-8 md:px-14 py-5 transition-all duration-500 ${
          mobileOpen ? "hidden" : ""
        } ${
          scrolled
            ? "bg-[#0f0f10]/95 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/a91671a52_LOGO-ITALDESIGN-GREY.png"
            alt="Ital Design"
            className="h-16 w-31"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-6">
          <AccentPicker />
          <div className="flex items-center gap-3 border-l border-white/8 pl-6">
            <span className="text-[8px] tracking-[0.3em] uppercase text-white/25">Partner ufficiale</span>
            <img
              src="https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/bb51cfc09_octanorm_grey.png"
              alt="Octanorm"
              className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 w-5 p-0.5"
          aria-label="Menu"
        >
          <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[60] bg-[#0f0f10] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5">
              <img
                src="https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/a91671a52_LOGO-ITALDESIGN-GREY.png"
                alt="Ital Design"
                className="h-12 w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                aria-label="Chiudi menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="font-display text-5xl font-normal text-white/70 hover:text-primary transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}

            </div>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-white/5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[8px] tracking-[0.25em] uppercase text-white/20">Partner ufficiale</span>
                <img
                  src="https://media.base44.com/images/public/6a0b2e92614647cccd0d31e3/bb51cfc09_octanorm_grey.png"
                  alt="Octanorm"
                  className="h-5 w-auto opacity-80"
                />
              </div>
              <AccentPicker dropUp />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}