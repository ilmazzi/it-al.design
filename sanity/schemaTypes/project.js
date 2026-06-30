export default {
  name: "project",
  title: "Progetto galleria",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Categoria",
      type: "string",
      description: "Es. Stand fieristico, Interior · Showroom",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Es. Milano, Lagos",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Immagine",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gridSize",
      title: "Dimensione in homepage",
      type: "string",
      options: {
        list: [
          { title: "Normale", value: "normal" },
          { title: "Grande (2×2)", value: "large" },
          { title: "Alta (2 righe)", value: "tall" },
          { title: "Larga (2 colonne)", value: "wide" },
        ],
        layout: "radio",
      },
      initialValue: "normal",
    },
    {
      name: "order",
      title: "Ordine",
      type: "number",
      description: "Numero più basso = mostrato per primo",
      initialValue: 0,
    },
    {
      name: "featured",
      title: "Mostra in homepage",
      type: "boolean",
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: "Ordine",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
};
