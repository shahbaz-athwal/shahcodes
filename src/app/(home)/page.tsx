import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { MotionChild, MotionParent } from "@/components/Motion";
import { Header } from "@/components/ui/header";
import { createMetadata } from "@/lib/metadata";
import { getCachedGithubData } from "@/lib/redis";
import { GithubGraph } from "./GithubGraph";
import Projects from "./Projects";
import { Socials } from "./Socials";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: "A Full Stack Developer based in Canada.",
  image: "/og.png",
});

async function GithubGraphWithData() {
  const data = await getCachedGithubData();
  return <GithubGraph data={data} />;
}

export default function Home() {
  return (
    <MotionParent>
      <MotionChild>
        <Header variant="primary" as="h2" className="mb-6 text-4xl">
          Hi, I&apos;m Shahbaz
        </Header>
        <span className="block pb-3 text-2xl font-semibold dark:text-zinc-200">
          A full stack developer based in Canada
        </span>
        <p className="text-lg leading-normal dark:text-zinc-300/70">
          Senior year computer science student with 2 years of experience in
          Full Stack Development. Currently, focusing on Backend and DevOps.
          Proficient in{" "}
          <strong className="rounded bg-zinc-200/50 px-1.5 dark:bg-zinc-700/50">
            TypeScript
          </strong>
          ,{" "}
          <strong className="rounded bg-zinc-200/50 px-1.5 dark:bg-zinc-700/50">
            PostgreSQL
          </strong>
          ,{" "}
          <strong className="rounded bg-zinc-200/50 px-1.5 dark:bg-zinc-700/50">
            Next.js
          </strong>
          ,{" "}
          <strong className="rounded bg-zinc-200/50 px-1.5 dark:bg-zinc-700/50">
            React
          </strong>
          ,{" "}
          <strong className="rounded bg-zinc-200/50 px-1.5 dark:bg-zinc-700/50">
            Docker
          </strong>
          , and{" "}
          <strong className="rounded bg-zinc-200/50 px-1.5 dark:bg-zinc-700/50">
            Node.js
          </strong>
          .
        </p>
        <Socials />
        <Link
          href="/details"
          className="group mt-8 inline-block rounded-full bg-zinc-950 px-8 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
        >
          More Information{" "}
          <span className="ml-1 inline-block font-mono transition-transform group-hover:translate-x-2">
            →
          </span>
        </Link>
      </MotionChild>

      <MotionChild>
        <Header variant="primary" as="h2" className="my-6 text-2xl">
          Github Contributions
        </Header>
        <Suspense fallback={<GithubGraph data={null} />}>
          <GithubGraphWithData />
        </Suspense>
      </MotionChild>

      <MotionChild>
        <div>
          <Header variant="primary" as="h2" className="mt-4 text-2xl">
            Projects
          </Header>
          <p className="pt-4 pb-8 text-lg dark:text-zinc-300/70">
            Below is a selection of recent projects that I&apos;ve worked on.
          </p>
        </div>
        <Projects />
      </MotionChild>
    </MotionParent>
  );
}
