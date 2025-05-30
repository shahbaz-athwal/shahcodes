import { allPosts } from "content-collections";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Blogs",
  description: "Shahbaz Singh's blog",
  ogText: "Blogs",
});

export default function BlogPage() {
  return (
    <div>
      {allPosts.map((post) => (
        <Link href={`/blog/${post._meta.path}`} key={post._meta.path}>
          <div key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
