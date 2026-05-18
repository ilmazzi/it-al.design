import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PHONE = "+2349129384546";
const WA_URL = `https://wa.me/${PHONE}?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20sistemi%20espositivi.`;

export default function WhatsAppBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1a1a1c] border border-white/8 shadow-2xl w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-display text-sm font-medium">IT</span>
                </div>
                <div>
                  <div className="text-white text-[13px] font-semibold leading-none mb-0.5">Ital Design</div>
                  <div className="flex items-center gap-1.5">
                    {/* Animated availability dot */}
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                    </span>
                    <span className="text-white/80 text-[10px]">Online ora</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors p-1">
                <X size={15} />
              </button>
            </div>

            {/* Message bubble */}
            <div className="p-4">
              <div className="bg-[#2a2a2d] rounded-lg rounded-tl-none px-4 py-3 mb-1 max-w-[90%]">
                <p className="text-[13px] text-white/75 leading-[1.6]">
                  Ciao! 👋 Come possiamo aiutarvi?<br/>
                  Siamo a Milano e Lagos, pronti per il vostro prossimo stand.
                </p>
                <span className="text-[10px] text-white/25 mt-1.5 block text-right">Ora</span>
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 pb-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#22c55e] text-white text-[12px] font-semibold tracking-[0.12em] uppercase py-3 transition-colors duration-200"
              >
                <WhatsAppIcon size={15} />
                Avvia conversazione
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25D366] shadow-lg shadow-black/40 flex items-center justify-center hover:bg-[#22c55e] transition-colors duration-200"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <WhatsAppIcon size={26} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Availability pulse ring */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-none animate-ping bg-[#25D366] opacity-20" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-[#0f0f10] flex items-center justify-center">
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}