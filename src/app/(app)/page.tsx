import Link from "next/link";
import { Header } from "@/components/ui/header";
import ProjectCard from "@/components/ui/ProjectCard";

const projects: {
  href: string;
  code: string;
  title: string;
  description: string;
  image: string;
  badges: string[];
  hidden: boolean;
}[] = [
  {
    title: "Whisperella",
    href: "https://whisperella.shahcodes.in",
    code: "https://github.com/shahbaz-athwal/whisperella",
    description: "An Anonymous Messaging Platform",
    image: "/projects/whisper.png",
    badges: ["Next.js", "Auth.js", "TypeScript", "PostgreSQL", "Resend", "Zod"],
    hidden: false,
  },
  {
    title: "FindMyJob",
    href: "https://findmyjob.shahcodes.in",
    code: "https://github.com/shahbaz-athwal/find-my-job",
    description: "A Two Way Job Application Portal",
    image: "/projects/findmyjob.png",
    badges: ["Express", "React", "MongoDB", "GCP Cloud Run", "Cloudinary"],
    hidden: false,
  },
  {
    title: "Portfolio/Blog",
    href: "https://shahcodes.in/",
    code: "https://github.com/shahbaz-athwal/shahcodes",
    description: "My Personal Portfolio and Blog",
    image: "/og.png",
    badges: ["Next.js", "Tailwind", "TypeScript", "Redis", "Spotify API", "MDX"],
    hidden: false,
  },
  {
    title: "",
    href: "",
    code: "https://github.com/shahbaz-athwal/acadia-help",
    description: "",
    image: "/projects/acadia.png",
    badges: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL", "ShadCN", "Notion API", "Zod"],
    hidden: true,
  },
];

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:-ml-[20%] lg:w-[140%]">
          {projects.map((project) => {
            return (
              !project.hidden && (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  code={project.code}
                  badges={project.badges}
                  image={project.image}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
