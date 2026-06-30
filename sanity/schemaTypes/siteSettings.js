export default {
  name: "siteSettings",
  title: "Impostazioni sito",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "Immagine hero (homepage)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "processBackground",
      title: "Sfondo sezione metodo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "logo",
      title: "Logo ITAL DESIGN",
      type: "image",
    },
    {
      name: "octanormLogo",
      title: "Logo Octanorm",
      type: "image",
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
    },
  ],
};
