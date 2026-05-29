# ITAL DESIGN

Sito vetrina React + Vite.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:5173`.

## Build produzione

```bash
npm run build
npm run preview
```

La cartella `dist/` contiene i file statici da pubblicare sul server.

## Deploy

Pubblica **solo** il contenuto di `dist/` (non la root del repository).

Esempi:

- **Netlify / Vercel**: build command `npm run build`, publish directory `dist`
- **Server statico**: copia `dist/` nella document root e configura fallback su `index.html` per le route SPA (`/gallery`, ecc.)
