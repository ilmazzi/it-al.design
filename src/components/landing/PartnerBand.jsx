import React from "react";
import { motion } from "framer-motion";

export default function PartnerBand() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-y border-white/5 px-8 md:px-14 py-4 bg-[#0e0e10]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[9px] tracking-[0.25em] uppercase text-white/20">
          Distributore ufficiale e partner tecnico
        </span>
        <div className="font-display text-sm tracking-[0.3em] border border-white/8 px-5 py-2 text-white/20">
          OCTANORM
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase text-white/20">
          Il sistema fieristico più diffuso al mondo · da 50 anni
        </span>
      </div>
    </motion.div>
  );
}