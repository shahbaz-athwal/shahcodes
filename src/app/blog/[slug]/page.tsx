import { allPosts } from "content-collections";
import { Mdx } from "@/components/ui/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
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
