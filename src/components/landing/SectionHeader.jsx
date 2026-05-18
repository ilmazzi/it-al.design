import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ tag, title, intro, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {tag && (
        <div className="flex items-center gap-2.5 mb-4 text-[10px] font-medium tracking-[0.26em] uppercase text-primary">
          <span className="w-6 h-px bg-primary" />
          {tag}
        </div>
      )}
      {title && (
        <h2
          className="font-display text-[clamp(30px,4vw,48px)] font-normal leading-[1.12] mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {intro && (
        <p className="text-[15px] font-light text-muted-foreground max-w-[580px] leading-[1.88]">
          {intro}
        </p>
      )}
    </motion.div>
  );
}