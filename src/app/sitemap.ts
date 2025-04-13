import type { MetadataRoute } from "next";

const baseURL = "https://shahcodes.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ["", "/blog", "/details", "/spotify", "/contact"].map((route) => ({
    url: `${baseURL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
