import { defineCollection, defineConfig } from "@content-collections/core";
 
const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean(),
    date: z.string(),
    image: z.string().optional()
  }),
});
 
export default defineConfig({
  collections: [posts],
});