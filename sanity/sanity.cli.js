import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "kpqf0ixi",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  studioHost: "ital-design",
});
