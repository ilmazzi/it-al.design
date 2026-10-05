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

## Pannello admin (Sanity)

Da Sanity Studio gestisci **hero**, **sfondo metodo**, **loghi** e **galleria progetti**.
Le modifiche compaiono sul sito dopo il publish (di solito in pochi secondi).

### Avvio locale

```bash
npm install
cd sanity && npm install && cd ..
npm run studio
```

Apri `http://localhost:3333` e accedi con l’account Sanity del progetto.

### Cosa modificare

| Sezione | Cosa fa |
|---|---|
| **Foto & impostazioni** | Immagine hero, sfondo metodo, logo, logo Octanorm, favicon |
| **Galleria progetti** | Foto, titolo, categoria, location, ordine, dimensione in homepage, “Mostra in homepage” |

### Variabili d’ambiente

Copia gli example (già precompilati con il project id del sito):

```bash
cp .env.example .env
cp sanity/.env.example sanity/.env
```

In Sanity → **API** → **CORS origins**, aggiungi `http://localhost:5173` e il dominio di produzione (es. `https://it-al.design`).

### Studio online

```bash
npm run studio:deploy
```

Lo studio sarà disponibile su `https://ital-design.sanity.studio`.

Senza contenuti in Sanity, il sito usa le immagini e i progetti di fallback in `public/` / `src/data/siteContent.js`.

## Deploy

Pubblica **solo** il contenuto di `dist/` (non la root del repository).

```bash
npm run build
# carica l’intera cartella dist/ sul server (index.html + assets/ + immagini)
```

Importante: ogni deploy deve includere **tutti** i file generati in `dist/assets/`. Se `index.html` punta a un CSS/JS con hash nuovo ma il file non è online, Safari segnala *“non CSS MIME types”* perché il server risponde con HTML al posto del foglio di stile.

Dopo il deploy su Cloudflare, se il sito appare senza stile: **Purge cache** (Caching → Purge Everything) e hard refresh.

Esempi:

- **Cloudflare Pages / Netlify**: build `npm run build`, publish `dist`. In `public/` ci sono già `_redirects` e `_headers` per MIME type e fallback SPA corretto.
- **Apache**: copia `dist/` (include `.htaccess` da `public/`).
- **Altri host**: non usare `/* → index.html` globale se possibile; limita il fallback a `/gallery` e `/area-riservata`.
