import { allPosts } from "content-collections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/ui/mdx";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const page = allPosts.find((page) => page._meta.path === slug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    image: `/og?title=${page.title}&description=${page.description}`,
  });
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = allPosts.find((page) => page.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{page.title}</h1>
      <Mdx code={page.mdx} />
    </div>
  );
}
