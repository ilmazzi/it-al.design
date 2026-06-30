import { useEffect } from "react";
import { useSiteSettings } from "@/hooks/useSanityContent";

export default function FaviconUpdater() {
  const { settings } = useSiteSettings();

  useEffect(() => {
    if (!settings.favicon) return;

    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = settings.favicon;
  }, [settings.favicon]);

  return null;
}
