import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";

export const generateStaticParams = () => {
  return allPosts
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }));
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
    <div>
      <Mdx code={post.body.code} />
    </div>
  );
}
