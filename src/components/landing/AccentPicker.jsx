import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRESETS = [
  { label: "Lime",     value: "#C8F000" },
  { label: "Cyan",     value: "#00E5FF" },
  { label: "Orange",   value: "#FF6B2B" },
  { label: "Rose",     value: "#FF2D6B" },
  { label: "Violet",   value: "#9B6BFF" },
  { label: "White",    value: "#E8E8E0" },
];

function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function applyAccent(hex) {
  const hsl = hexToHsl(hex);
  document.documentElement.style.setProperty("--primary", hsl);
  document.documentElement.style.setProperty("--accent", hsl);
  document.documentElement.style.setProperty("--ring", hsl);
}

export default function AccentPicker({ dropUp = false }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(PRESETS[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pick = (preset) => {
    setCurrent(preset);
    applyAccent(preset.value);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[9px] tracking-[0.28em] uppercase text-white/30 hover:text-white/60 transition-colors duration-200 group"
        title="Cambia colore accento"
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-white/15 group-hover:scale-110 transition-transform duration-200"
          style={{ background: current.value }}
        />
        <span className="hidden sm:inline">Tema</span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute right-0 bg-[#1a1a1c] border border-white/8 shadow-2xl p-4 w-48 z-[9999] ${dropUp ? "bottom-8" : "top-8"}`}
          >
            <div className="text-[8px] tracking-[0.3em] uppercase text-white/20 mb-3">Colore accento</div>
            <div className="grid grid-cols-3 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => pick(p)}
                  className="flex flex-col items-center gap-1.5 group/dot"
                  title={p.label}
                >
                  <span
                    className={`w-7 h-7 rounded-full border-2 transition-all duration-200 group-hover/dot:scale-110 ${
                      current.value === p.value ? "border-white/60 scale-110" : "border-transparent"
                    }`}
                    style={{ background: p.value }}
                  />
                  <span className="text-[8px] text-white/20 group-hover/dot:text-white/50 transition-colors">{p.label}</span>
                </button>
              ))}
            </div>

            {/* Custom color input */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <label className="text-[8px] tracking-[0.28em] uppercase text-white/15 mb-2 block">Personalizzato</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  defaultValue={current.value}
                  onChange={(e) => {
                    const hex = e.target.value;
                    setCurrent({ label: "Custom", value: hex });
                    applyAccent(hex);
                  }}
                  className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                />
                <span className="text-[9px] text-white/20 font-mono">{current.value}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}