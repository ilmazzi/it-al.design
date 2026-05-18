import React from "react";
import { motion } from "framer-motion";

const items = [
  "Sistemi modulari Octanorm",
  "Milano · Lagos",
  "Design & Produzione",
  "Stand fieristici",
  "Showroom & Retail",
  "Nord Africa",
];

export default function ManifestoStrip() {
  return (
    <div className="relative overflow-hidden bg-primary py-4 border-y border-primary">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0f0f10]">
            {item}
            <span className="w-1 h-1 bg-[#0f0f10]/30 rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}