import React from "react";
import { motion } from "framer-motion";

export default function PresenzaBand() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="bg-[#0e0e10] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-white/5">
        {[
          { flag: "🇮🇹", label: "Sede operativa", city: "Milano, Italia", role: "Design · Produzione · Fiere europee" },
          { flag: "🇳🇬", label: "Sede operativa", city: "Lagos, Nigeria", role: "Showroom · Produzione · Nord Africa" },
        ].map((loc) => (
          <div key={loc.city} className="flex-1 flex items-center gap-4 px-8 md:px-14 py-4">
            <span className="text-2xl">{loc.flag}</span>
            <div>
              <div className="text-[8px] font-medium tracking-[0.28em] uppercase text-primary/60">{loc.label}</div>
              <div className="font-display text-[15px] text-white/70">{loc.city}</div>
              <div className="text-[10px] font-light text-white/25 tracking-wide">{loc.role}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}