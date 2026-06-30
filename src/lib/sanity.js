import imageUrlBuilder from "@sanity/image-url";

export const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
export const sanityDataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export const isSanityConfigured = () =>
  Boolean(sanityProjectId && sanityProjectId !== "your_project_id");

const builder = isSanityConfigured()
  ? imageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset })
  : null;

export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source);
}

export function imageUrl(source, width = 1600) {
  const url = urlFor(source);
  if (!url) return null;
  return url.width(width).auto("format").url();
}

async function sanityQuery(query) {
  const params = new URLSearchParams({ query });
  const path = `/v${apiVersion}/data/query/${sanityDataset}?${params}`;
  const url = import.meta.env.DEV
    ? `/sanity-api${path}`
    : `https://${sanityProjectId}.apicdn.sanity.io${path}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Sanity query failed (${response.status})`);
  }

  const json = await response.json();
  return json.result;
}

const PROJECT_FIELDS = `
  _id,
  title,
  category,
  location,
  gridSize,
  featured,
  image
`;

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(order asc) { ${PROJECT_FIELDS} }`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(order asc) { ${PROJECT_FIELDS} }`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  heroImage,
  processBackground,
  logo,
  octanormLogo,
  favicon
}`;

export function mapProject(doc) {
  return {
    id: doc._id,
    img: imageUrl(doc.image) || "",
    cat: doc.category,
    title: doc.title,
    location: doc.location,
    size: doc.gridSize || "normal",
  };
}

export function mapSiteSettings(doc) {
  if (!doc) return null;

  return {
    heroImage: imageUrl(doc.heroImage, 2000),
    processBackground: imageUrl(doc.processBackground, 2000),
    logo: imageUrl(doc.logo, 400),
    octanormLogo: imageUrl(doc.octanormLogo, 200),
    favicon: imageUrl(doc.favicon, 64),
  };
}

export async function fetchProjects({ featuredOnly = false } = {}) {
  if (!isSanityConfigured()) return null;

  const query = featuredOnly ? FEATURED_PROJECTS_QUERY : ALL_PROJECTS_QUERY;
  const docs = await sanityQuery(query);
  return docs.map(mapProject).filter((p) => p.img);
}

export async function fetchSiteSettings() {
  if (!isSanityConfigured()) return null;

  const doc = await sanityQuery(SITE_SETTINGS_QUERY);
  return mapSiteSettings(doc);
}
