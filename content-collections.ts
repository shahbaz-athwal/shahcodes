import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { type RehypeCodeOptions, rehypeCode, remarkGfm, remarkHeading } from "fumadocs-core/mdx-plugins";
import readingTime from "reading-time";

const rehypeCodeOptions: RehypeCodeOptions = {
  themes: {
    light: "github-light",
    dark: "github-dark-default",
  },
};

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkHeading],
      rehypePlugins: [[rehypeCode, rehypeCodeOptions]],
    });
    return {
      ...document,
      mdx,
      slug: document._meta.path,
      readingTime: readingTime(document.content).text,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
