import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import Link from "next/link";
import ProjectCard from "@/components/ui/projectCard";
import { Header } from "@/components/ui/topicHeader";

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
    badges: ["Next.js", "Auth.js", "TypeScript", "PostgreSQL", "Resend"],
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
    href: "https://www.shahcodes.in/",
    code: "https://github.com/shahbaz-athwal/shahcodes",
    description: "My Personal Portfolio and Blog",
    image: "/projects/findmyjob.png",
    badges: ["Next.js", "Tailwind", "TypeScript", "Redis", "Spotify API"],
    hidden: true,
  },
  {
    title: "",
    href: "",
    code: "https://github.com/shahbaz-athwal/acadia-help",
    description: "",
    image: "/projects/findmyjob.png",
    badges: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "PostgreSQL",
      "ShadCN",
      "Notion API",
    ],
    hidden: true,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <MenuBar />
      <section className="my-12">
        <span className="block font-semibold text-2xl pb-3 dark:text-zinc-200">
          I’m a full stack developer based in Canada
        </span>
        <p className="text-lg md:text-lg leading-normal dark:text-zinc-300/70">
          A third year computer science student with nearly 2 years of
          experience in Full Stack Development. Currently, I am focusing on
          advanced Backend and DevOps skills. Proficient with{" "}
          <strong>TypeScript</strong>, <strong>PostgreSQL</strong>,{" "}
          <strong>Next.js</strong>, <strong>React</strong>,{" "}
          <strong>Docker</strong>, and <strong>AWS</strong>.
        </p>
        <Link
          href="/details"
          className="group bg-zinc-950 dark:bg-zinc-50 dark:hover:bg-zinc-200 hover:bg-zinc-800 transition-colors inline-block mt-8 font-mono text-sm font-semibold rounded-full px-8 py-3 text-white dark:text-black"
        >
          More Information{" "}
          <span className="inline-block font-mono group-hover:translate-x-2 transition-transform">
            {">"}
          </span>
        </Link>
      </section>

      <div>
        <Header variant="primary" as="h2" className="text-2xl">
          Projects
        </Header>
        <p className="text-lg pt-4 pb-8 dark:text-zinc-300/70">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[140%] lg:-ml-[20%] grid grid-cols-1 md:grid-cols-2 gap-8">
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
};

export default Home;
