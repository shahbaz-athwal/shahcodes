import { allPosts } from "contentlayer/generated";
import type { MetadataRoute } from "next";

const baseURL = "https://shahcodes.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = allPosts
    .filter((p) => p.status === "published")
    .map((post) => ({
      url: `${baseURL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt).toISOString().split("T")[0],
    }));

  const routes: MetadataRoute.Sitemap = ["", "/blog", "/details", "/spotify", "/contact"].map(
    (route) => ({
      url: `${baseURL}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly"
    })
  );

  return [...routes, ...blogs];
}
