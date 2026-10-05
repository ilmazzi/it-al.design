import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSiteSettings } from "@/hooks/useSanityContent";

export default function AreaRiservata() {
  const { settings } = useSiteSettings();
  const [form, setForm] = useState({ email: "", password: "" });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fieldClass = (name) =>
    `w-full bg-transparent border-b-2 text-white text-sm font-light py-3 outline-none transition-all duration-300 placeholder:text-white/45 ${
      focused === name ? "border-primary" : "border-white/20 hover:border-white/35"
    }`;

  return (
    <div className="min-h-screen bg-[#0f0f10] text-white flex flex-col">
      <header className="flex items-center justify-between px-8 md:px-14 py-5 border-b border-white/5">
        <Link to="/" className="flex items-center">
          <img src={settings.logo} alt="Ital Design" className="h-12 w-auto" />
        </Link>
        <Link
          to="/"
          className="text-[10px] tracking-[0.3em] uppercase text-white/55 hover:text-primary transition-colors duration-300"
        >
          Torna al sito
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[9px] tracking-[0.35em] uppercase text-primary">Clienti</span>
          </div>
          <h1
            className="font-display font-normal tracking-tight leading-[0.9] mb-4"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            <span className="text-white/90">Area</span>
            <br />
            <em className="italic text-primary">riservata.</em>
          </h1>
          <p className="text-sm font-light text-white/60 leading-[1.9] mb-12 max-w-[320px]">
            Accedi per consultare i tuoi progetti. L'accesso sarà attivato a breve.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <label className="block text-[8px] tracking-[0.35em] uppercase text-white/50 mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nome@azienda.it"
                autoComplete="email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={fieldClass("email")}
              />
            </div>
            <div>
              <label className="block text-[8px] tracking-[0.35em] uppercase text-white/50 mb-3">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="current-password"
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                className={fieldClass("password")}
              />
            </div>
            <button
              type="submit"
              className="group self-start flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase bg-primary text-[#0f0f10] px-7 py-4 hover:bg-white transition-all duration-300"
            >
              Accedi
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
