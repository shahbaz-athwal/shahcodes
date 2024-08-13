import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      // [rehypePrettyCode, rehypePrettyCodeOptions],
      // [rehypePrettyCodeClasses],
      [
        rehypeAutolinkHeadings,
        {
          // behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
          },
        },
      ],
    ],
  },
});
