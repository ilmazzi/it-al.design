import React, { useState } from "react";
import { motion } from "framer-motion";
import SediMap from "./SediMap";

const areaOptions = [
  "Italia",
  "Germania",
  "Francia",
  "Altri paesi Europa",
  "Nigeria",
  "Altri paesi West Africa",
];

export default function ContattiNew() {
  const [form, setForm] = useState({
    nome: "",
    azienda: "",
    area: "",
    nomeFiera: "",
    data: "",
    dimensioni: "",
    messaggio: "",
  });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta preventivo — ${form.azienda || form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nAzienda: ${form.azienda}\nArea: ${form.area}\nNome fiera: ${form.nomeFiera}\nData: ${form.data}\nDimensioni: ${form.dimensioni}\n\n${form.messaggio}`
    );
    window.open(`mailto:info@it-al.design?subject=${subject}&body=${body}`, "_blank");
  };

  const fieldClass = (name) =>
    `w-full bg-transparent border-b-2 text-white text-sm font-light py-3 outline-none transition-all duration-300 placeholder:text-white/15 ${
      focused === name ? "border-primary" : "border-white/8 hover:border-white/15"
    }`;

  return (
    <section className="bg-[#0f0f10] py-24">
      <div className="w-full max-w-6xl mx-auto px-8 md:px-16">

        {/* Form preventivo */}
        <div id="preventivo" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 min-h-[80vh]">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between py-12 pr-0 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/5 mb-12 lg:mb-0"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-6 h-px bg-primary" />
                  <span className="text-[9px] tracking-[0.35em] uppercase text-primary">Richiedi un preventivo</span>
                </div>
                <h2
                  className="font-display font-normal tracking-tight leading-[0.88] mb-10"
                  style={{ fontSize: "clamp(42px, 6.5vw, 90px)" }}
                >
                  <span className="text-white/80">Parliamo</span>
                  <br />
                  <span className="text-white/80">della</span>
                  <br />
                  <em className="italic text-primary">tua fiera.</em>
                </h2>
                <p className="text-sm font-light text-white/30 leading-[2] max-w-[300px]">
                  Che abbiate un'idea chiara o stiate ancora esplorando — il nostro team vi guida verso la soluzione giusta.
                </p>
              </div>

              <div className="space-y-5 mt-12">
                {[
                  { label: "Email", val: "info@it-al.design", href: "mailto:info@it-al.design" },
                  { label: "WhatsApp", val: "+234 906 895 5108", href: "https://wa.me/2349068955108" },
                  { label: "Instagram", val: "@italian_aluminium_design", href: "https://instagram.com/italian_aluminium_design" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-5 group">
                    <span className="text-[9px] tracking-[0.28em] uppercase text-primary/40 w-16 shrink-0">{c.label}</span>
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-white/25 hover:text-primary transition-colors duration-300">
                      {c.val}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-center py-12 pl-0 lg:pl-16 gap-8"
            >
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Nome", name: "nome", ph: "Mario Rossi" },
                  { label: "Azienda", name: "azienda", ph: "Acme Srl" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[8px] tracking-[0.35em] uppercase text-white/20 mb-3">{f.label}</label>
                    <input
                      name={f.name} value={form[f.name]} onChange={handleChange}
                      placeholder={f.ph}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                      className={fieldClass(f.name)}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[8px] tracking-[0.35em] uppercase text-white/20 mb-3">Area / Paese</label>
                <select
                  name="area" value={form.area} onChange={handleChange}
                  onFocus={() => setFocused("area")} onBlur={() => setFocused(null)}
                  className={fieldClass("area") + " cursor-pointer appearance-none bg-transparent"}
                >
                  <option value="" className="bg-[#0f0f10] text-white/30">Seleziona...</option>
                  {areaOptions.map((o) => <option key={o} value={o} className="bg-[#0f0f10]">{o}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[8px] tracking-[0.35em] uppercase text-white/20 mb-3">Nome fiera</label>
                  <input
                    name="nomeFiera" value={form.nomeFiera} onChange={handleChange}
                    placeholder="es. Salone del Mobile"
                    onFocus={() => setFocused("nomeFiera")} onBlur={() => setFocused(null)}
                    className={fieldClass("nomeFiera")}
                  />
                </div>
                <div>
                  <label className="block text-[8px] tracking-[0.35em] uppercase text-white/20 mb-3">Data</label>
                  <input
                    name="data" value={form.data} onChange={handleChange}
                    placeholder="es. Aprile 2026"
                    onFocus={() => setFocused("data")} onBlur={() => setFocused(null)}
                    className={fieldClass("data")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[8px] tracking-[0.35em] uppercase text-white/20 mb-3">Dimensioni stand</label>
                <input
                  name="dimensioni" value={form.dimensioni} onChange={handleChange}
                  placeholder="es. 6×3 m, isola 6×6, da definire..."
                  onFocus={() => setFocused("dimensioni")} onBlur={() => setFocused(null)}
                  className={fieldClass("dimensioni")}
                />
              </div>

              <div>
                <label className="block text-[8px] tracking-[0.35em] uppercase text-white/20 mb-3">Messaggio</label>
                <textarea
                  name="messaggio" value={form.messaggio} onChange={handleChange}
                  placeholder="Raccontateci il progetto..."
                  rows={4}
                  onFocus={() => setFocused("messaggio")} onBlur={() => setFocused(null)}
                  className={fieldClass("messaggio") + " resize-none border-b-2"}
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[9px] tracking-[0.25em] uppercase text-white/15">
                  Risposta entro 24h
                </span>
                <button
                  type="submit"
                  className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase bg-primary text-[#0f0f10] px-7 py-4 hover:bg-white transition-all duration-300"
                >
                  Invia
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.form>
          </div>
        </div>

        {/* Sedi / Contatti */}
        <div id="contatti" className="scroll-mt-28 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[9px] tracking-[0.35em] uppercase text-primary">Contatti</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-[10px] tracking-[0.28em] uppercase text-primary/50 mb-4">Italia</h3>
                <p className="text-sm text-white/50 leading-[1.9]">
                  Italdesign srl<br />
                  Viale Cesare Cattaneo 26<br />
                  22063 Cantù (CO)<br />
                  <a href="tel:+390312269715" className="text-white/35 hover:text-primary transition-colors">+39 031 2269715</a>
                </p>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.28em] uppercase text-primary/50 mb-4">Nigeria</h3>
                <p className="text-sm text-white/50 leading-[1.9]">
                  Italian Aluminium Design Ltd<br />
                  115 Ayo Babatunde Crescent, Oniru<br />
                  Lagos<br />
                  <a href="tel:+2349068955108" className="text-white/35 hover:text-primary transition-colors">+234 906 895 5108</a>
                </p>
              </div>
            </div>
          </motion.div>

          <SediMap />
        </div>

      </div>
    </section>
  );
}
