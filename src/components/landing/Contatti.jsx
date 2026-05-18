import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const details = [
  { label: "Email", value: "info@it-al.design", href: "mailto:info@it-al.design" },
  { label: "WhatsApp", value: "+234 912 938 4546", href: "https://wa.me/+2349129384546" },
  { label: "Milano", value: "Dipartimento design e produzione" },
  { label: "Lagos", value: "282 Akin Olugbade St, Victoria Island" },
  { label: "Instagram", value: "@italian_aluminium_design", href: "https://instagram.com/italian_aluminium_design" },
];

const fairOptions = [
  "Salone del Mobile — Milano",
  "Host Fiera — Milano",
  "Eicma — Milano",
  "Vinitaly — Verona",
  "Fiera di Roma",
  "Fieristica in Europa",
  "Evento in Nigeria / Africa",
  "Altro / Non ancora definito",
];

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[9px] tracking-[0.28em] uppercase text-white/25 mb-2.5">{label}</label>
      {children}
    </div>
  );
}

const inputClass = "w-full bg-transparent border-b border-white/10 text-white/80 px-0 py-3 text-sm font-light outline-none focus:border-primary/60 transition-colors duration-300 placeholder:text-white/20";

export default function Contatti() {
  const [form, setForm] = useState({ nome: "", azienda: "", fiera: "", dimensioni: "", messaggio: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta preventivo — ${form.azienda || form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nAzienda: ${form.azienda}\nFiera: ${form.fiera}\nDimensioni: ${form.dimensioni}\n\n${form.messaggio}`
    );
    window.open(`mailto:info@it-al.design?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contatti" className="py-32 px-8 md:px-14 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              Inizia il tuo progetto
            </span>
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.0] tracking-tight text-white">
            Parliamo
            <br />
            della tua <em className="italic text-primary">fiera</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-28">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-light text-white/40 leading-[2] mb-12">
              Siamo pronti ad ascoltarvi. Che abbiate un'idea chiara o stiate ancora esplorando le possibilità, il nostro team vi guiderà verso la soluzione giusta — da Milano o da Lagos.
            </p>
            <div className="space-y-0">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-8 py-5 border-b border-white/5 group"
                >
                  <span className="text-[9px] tracking-[0.25em] uppercase text-primary/50 w-20 shrink-0">
                    {d.label}
                  </span>
                  <span className="text-[13px] font-light text-white/35 group-hover:text-white/60 transition-colors duration-300">
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-300">
                        {d.value}
                      </a>
                    ) : d.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <Field label="Nome">
                <input name="nome" value={form.nome} onChange={handleChange}
                  placeholder="Mario Rossi" className={inputClass} />
              </Field>
              <Field label="Azienda">
                <input name="azienda" value={form.azienda} onChange={handleChange}
                  placeholder="Acme Srl" className={inputClass} />
              </Field>
            </div>

            <Field label="A quale fiera partecipate?">
              <select name="fiera" value={form.fiera} onChange={handleChange}
                className={inputClass + " cursor-pointer bg-transparent appearance-none"}>
                <option value="" className="bg-[#0e0e10]">Seleziona...</option>
                {fairOptions.map((o) => (
                  <option key={o} value={o} className="bg-[#0e0e10]">{o}</option>
                ))}
              </select>
            </Field>

            <Field label="Dimensioni stand previste">
              <input name="dimensioni" value={form.dimensioni} onChange={handleChange}
                placeholder="es. 6×3 m, isola 6×6, da definire..." className={inputClass} />
            </Field>

            <Field label="Messaggio">
              <textarea name="messaggio" value={form.messaggio} onChange={handleChange}
                placeholder="Raccontateci il progetto, la data dell'evento, eventuali esigenze particolari..."
                rows={4} className={inputClass + " resize-none"} />
            </Field>

            <button type="submit"
              className="group flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-200">
              Invia richiesta
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}