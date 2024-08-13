import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";

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
        <h1 className="font-semibold tracking-tight text-4xl dark:text-zinc-200">
          {post.title}
        </h1>
        <span className="text-zinc-400 text-sm tracking-tight font-mono block mt-4">
          Published on{" "}
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
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
