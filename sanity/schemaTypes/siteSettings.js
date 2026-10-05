export default {
  name: "siteSettings",
  title: "Foto & impostazioni",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "Immagine hero (homepage)",
      type: "image",
      description:
        "Foto a tutto schermo in cima alla homepage. Consigliato: orizzontale, almeno 2000px di larghezza.",
      options: { hotspot: true },
    },
    {
      name: "processBackground",
      title: "Sfondo sezione metodo",
      type: "image",
      description: "Immagine di sfondo della sezione «Metodo di lavoro».",
      options: { hotspot: true },
    },
    {
      name: "logo",
      title: "Logo ITAL DESIGN",
      type: "image",
      description: "Logo in header e area riservata. Preferire PNG con sfondo trasparente.",
    },
    {
      name: "octanormLogo",
      title: "Logo Octanorm",
      type: "image",
      description: "Logo «Powered by» in navigazione.",
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "Icona della scheda del browser (quadrata, es. 64×64).",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Foto & impostazioni",
        subtitle: "Hero, metodo, loghi",
      };
    },
  },
};
