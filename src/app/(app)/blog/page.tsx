import { MotionChild, MotionParent } from "@/components/Motion";
import { Title } from "@/components/ui/title";
import { Header } from "@/components/ui/topicHeader";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blogs",
    description: "A collection of blogs written by Shahbaz Singh",
  };
}
export default function Blog() {
  const filteredPosts = allPosts.filter(
    (p) =>
      p.status === "published" ||
      (process.env.NODE_ENV === "development" && p.status === "draft")
  );

  return (
    <MotionParent>
      <MotionChild>
        <Header variant="primary" as="h1" className="pt-8">
          Blogs
        </Header>

        <section className="divide-y pt-8">
          {filteredPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 py-8 first:pt-0"
              key={post.slug}
            >
              <MotionChild>
                <div className="flex flex-col">
                  <Title as="h2" variant="secondary">
                    {post.title}
                  </Title>
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm tracking-tight font-mono block mt-2">
                    <time dateTime={post.publishedAt}>
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "long",
                      }).format(new Date(post.publishedAt))}
                    </time>
                  </span>

                  <p className="mt-2 text-zinc-700 dark:text-zinc-500 text-base">
                    {post.description}
                  </p>
                </div>
              </MotionChild>
            </Link>
          ))}
        </section>
      </MotionChild>
    </MotionParent>
  );
}
