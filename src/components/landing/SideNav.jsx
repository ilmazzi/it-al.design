import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteSettings } from "@/hooks/useSanityContent";
import AccentPicker from "./AccentPicker";

const links = [
  { label: "Fiere", href: "#fiere" },
  { label: "Metodo di lavoro", href: "#metodo" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

function sectionHref(hash, pathname) {
  return pathname === "/" ? hash : `/${hash}`;
}

export default function SideNav() {
  const { pathname } = useLocation();
  const { settings } = useSiteSettings();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-8 md:px-14 py-5 transition-all duration-500 ${
          mobileOpen ? "hidden" : ""
        } ${
          scrolled
            ? "bg-[#0f0f10]/95 backdrop-blur-xl border-b border-white/5"
            : "bg-[#0f0f10]/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <a href={sectionHref("#home", pathname)} className="flex items-center">
          <img
            src={settings.logo}
            alt="Ital Design"
            className="h-16 w-31"
          />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={sectionHref(l.href, pathname)}
                className="text-[10px] tracking-[0.3em] uppercase text-white/65 hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/area-riservata"
              className="text-[10px] tracking-[0.3em] uppercase text-white/65 hover:text-primary transition-colors duration-300"
            >
              Area riservata clienti
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <AccentPicker />
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <span className="text-[8px] tracking-[0.25em] uppercase text-white/45">Powered by</span>
            <img
              src={settings.octanormLogo}
              alt="Octanorm"
              className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[60] bg-[#0f0f10] flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-5">
              <a href={sectionHref("#home", pathname)} onClick={() => setMobileOpen(false)}>
                <img
                  src={settings.logo}
                  alt="Ital Design"
                  className="h-12 w-auto"
                />
              </a>
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

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={sectionHref(l.href, pathname)}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="font-display text-4xl font-normal text-white/70 hover:text-primary transition-colors text-center"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07 + 0.1 }}
              >
                <Link
                  to="/area-riservata"
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl font-normal text-white/70 hover:text-primary transition-colors text-center"
                >
                  Area riservata clienti
                </Link>
              </motion.div>
            </div>

            <div className="px-8 py-6 border-t border-white/5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[8px] tracking-[0.25em] uppercase text-white/35">Powered by</span>
                <img
                  src={settings.octanormLogo}
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
