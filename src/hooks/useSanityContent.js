import { useQuery } from "@tanstack/react-query";
import {
  fetchProjects,
  fetchSiteSettings,
  isSanityConfigured,
} from "@/lib/sanity";
import {
  FALLBACK_PROJECTS,
  FALLBACK_SITE_SETTINGS,
} from "@/data/fallbackContent";

const CMS_STALE_TIME = 30 * 1000;

function mergeSettings(data) {
  return {
    heroImage: data?.heroImage || FALLBACK_SITE_SETTINGS.heroImage,
    processBackground:
      data?.processBackground || FALLBACK_SITE_SETTINGS.processBackground,
    logo: data?.logo || FALLBACK_SITE_SETTINGS.logo,
    octanormLogo: data?.octanormLogo || FALLBACK_SITE_SETTINGS.octanormLogo,
    favicon: data?.favicon || FALLBACK_SITE_SETTINGS.favicon,
  };
}

export function useProjects({ featuredOnly = false } = {}) {
  const configured = isSanityConfigured();
  const query = useQuery({
    queryKey: ["projects", featuredOnly ? "featured" : "all"],
    queryFn: () => fetchProjects({ featuredOnly }),
    enabled: configured,
    staleTime: CMS_STALE_TIME,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    retry: 2,
  });

  if (!configured) {
    return {
      projects: FALLBACK_PROJECTS,
      isLoading: false,
      isFromSanity: false,
    };
  }

  if (query.isLoading) {
    return {
      projects: [],
      isLoading: true,
      isFromSanity: false,
    };
  }

  if (query.isError || !query.data) {
    return {
      projects: [],
      isLoading: false,
      isFromSanity: false,
      error: query.error,
    };
  }

  return {
    projects: query.data,
    isLoading: false,
    isFromSanity: true,
  };
}

export function useSiteSettings() {
  const query = useQuery({
    queryKey: ["siteSettings"],
    queryFn: fetchSiteSettings,
    enabled: isSanityConfigured(),
    staleTime: CMS_STALE_TIME,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });

  return {
    settings: mergeSettings(query.data),
    isLoading: query.isLoading && isSanityConfigured(),
    isFromSanity: Boolean(query.data),
  };
}
