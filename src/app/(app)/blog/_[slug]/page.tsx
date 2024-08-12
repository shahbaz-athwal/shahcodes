import { Metadata } from "next";

//generateStaticParams

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Blog",
    description: "Under development, hang tight!",
  };
}
export default function Blog() {
  return (
    <div className="flex justify-center m-14">
      Under development, hang tight!
    </div>
  );
}
