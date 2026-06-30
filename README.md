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

## Sanity CMS (gestione contenuti)

Il cliente può aggiornare immagini e galleria da un pannello web.

### 1. Crea il progetto Sanity

1. Vai su [sanity.io/manage](https://www.sanity.io/manage) e crea un nuovo progetto
2. Copia il **Project ID**

### 2. Configura le variabili d'ambiente

Crea un file `.env` nella root del progetto:

```
VITE_SANITY_PROJECT_ID=il_tuo_project_id
VITE_SANITY_DATASET=production
```

Crea `sanity/.env` per lo studio:

```
SANITY_STUDIO_PROJECT_ID=il_tuo_project_id
SANITY_STUDIO_DATASET=production
```

### 3. Avvia lo studio (pannello admin)

```bash
npm install
cd sanity && npm install && cd ..
npm run studio
```

Apri `http://localhost:3333` — qui il cliente carica immagini e gestisce i progetti.

Per pubblicare lo studio online (es. `ital-design.sanity.studio`):

```bash
npm run studio:deploy
```

### 4. Cosa si modifica da Sanity

- **Impostazioni sito**: hero, sfondo metodo, logo, logo Octanorm, favicon
- **Progetti galleria**: immagine, titolo, categoria, location, ordine, dimensione griglia homepage

Senza Sanity configurato, il sito usa i contenuti di fallback già presenti nel codice.

In Sanity → **API** → **CORS origins**, aggiungi `http://localhost:5173` e il dominio di produzione (es. `https://it-al.design`).

## Deploy

Pubblica **solo** il contenuto di `dist/` (non la root del repository).

Esempi:

- **Netlify / Vercel**: build command `npm run build`, publish directory `dist`
- **Server statico**: copia `dist/` nella document root e configura fallback su `index.html` per le route SPA (`/gallery`, ecc.)
