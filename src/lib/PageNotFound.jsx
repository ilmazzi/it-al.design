import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0f0f10]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-display text-7xl font-light text-white/20">404</h1>
          <div className="h-px w-16 bg-primary/40 mx-auto" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-white/80">Pagina non trovata</h2>
          <p className="text-white/40 leading-relaxed">
            La pagina <span className="text-white/60">"{pageName || '/'}"</span> non esiste.
          </p>
        </div>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#0f0f10] bg-primary hover:bg-white transition-colors duration-300"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}
