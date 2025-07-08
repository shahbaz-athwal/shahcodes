import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";

const baseURL = "https://shahcodes.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    "",
    "/blog",
    "/details",
    "/spotify",
    "/contact",
  ].map((route) => ({
    url: `${baseURL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = allPosts.map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...posts];
}
