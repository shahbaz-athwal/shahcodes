import Link from "next/link";
import { Header } from "@/components/ui/header";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <section className="my-6">
        <span className="block pb-3 text-2xl font-semibold dark:text-zinc-200">
          I’m a full stack developer based in Canada
        </span>
        <p className="text-lg leading-normal dark:text-zinc-300/70">
          A third year computer science student with nearly 2 years of experience in Full Stack Development. Currently,
          I am focusing on advanced Backend and DevOps skills. Proficient with <strong>TypeScript</strong>,{" "}
          <strong>PostgreSQL</strong>, <strong>Next.js</strong>, <strong>React</strong>, <strong>Docker</strong>, and{" "}
          <strong>AWS</strong>.
        </p>
        <Link
          href="/details"
          className="group mt-8 inline-block rounded-full bg-zinc-950 px-8 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
        >
          More Information{" "}
          <span className="inline-block font-mono transition-transform group-hover:translate-x-2">{">"}</span>
        </Link>
      </section>

      <div>
        <Header variant="primary" as="h2" className="text-2xl">
          Projects
        </Header>
        <p className="pb-8 pt-4 text-lg dark:text-zinc-300/70">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
      </div>
      <Projects />
    </>
  );
}
