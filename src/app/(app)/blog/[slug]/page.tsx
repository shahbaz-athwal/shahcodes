import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import Link from "next/link";

export const generateStaticParams = () => {
  const posts = allPosts
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }));
  return posts;
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    alternates: { canonical: url },
  };
}

export default async function PostPage({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }
  return (
    <main className="pt-8">
      <section>
        <Link
          href="/blog"
          className="group inline-block mb-4 font-mono text-sm font-semibold"
        >
          <span className="inline-block font-mono mr-1 group-hover:-translate-x-1.5 transition-transform">
            {"<"}
          </span>
          BACK
        </Link>
        <h1 className="font-semibold tracking-tight text-3xl dark:text-zinc-200">
          {post.title}
        </h1>
        <span className="text-zinc-400 text-sm tracking-tight font-mono block mt-2">
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
            }).format(new Date(post.publishedAt))}
          </time>
        </span>
      </section>

      <section className="py-5">
        <article>
          <Mdx code={post.body.code} />
        </article>
      </section>
    </main>
  );
}
