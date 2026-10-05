import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || "kpqf0ixi";
const dataset =
  process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "ITAL DESIGN — Admin",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenuti")
          .items([
            S.listItem()
              .title("Foto & impostazioni")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Foto & impostazioni")
              ),
            S.divider(),
            S.listItem()
              .title("Galleria progetti")
              .schemaType("project")
              .child(
                S.documentTypeList("project")
                  .title("Galleria progetti")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
