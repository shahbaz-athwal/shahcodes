import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import Link from "next/link";
import ProjectCard from "@/components/ui/projectCard";
import { Header } from "@/components/ui/topicHeader";

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
  hidden: boolean;
}[] = [
  {
    title: "Whisperella",
    href: "https://whisperella.shahcodes.in",
    description: "An Anonymous Messaging Platform",
    image: "/projects/whisper.png",
    hidden: false,
  },
  {
    title: "FindMyJob",
    href: "https://findmyjob.shahcodes.in",
    description: "A Two Way Job Application Portal",
    image: "/projects/findmyjob.png",
    hidden: false,
  },
  {
    title: "Portfolio/Blog",
    href: "/",
    description: "My Personal Portfolio and Blog",
    image: "/projects/findmyjob.png",
    hidden: false,
  },
  {
    title: "RateMyAxe",
    href: "",
    description: "",
    image: "/projects/findmyjob.png",
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
        <p className="text-lg md:text-xl leading-normal dark:text-zinc-300/70">
          Junior year computer science student with nearly 2 years of
          experience in Full Stack Development. Currently, I am focusing on
          advanced Backend and DevOps skills. Proficient with{" "}
          <strong>TypeScript</strong>, <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong>, <strong>Docker</strong>, and{" "}
          <strong>AWS</strong>.
        </p>
        <Link
          href="/techstack"
          className="group bg-zinc-950 dark:bg-zinc-50 dark:hover:bg-zinc-200 hover:bg-zinc-800 transition-colors inline-block mt-8 font-mono text-sm font-semibold rounded-full px-8 py-3 text-white dark:text-black"
        >
          More Information{" "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            {">"}
          </span>
        </Link>
      </section>

      <div>
        <Header variant="primary" as="h2" className="text-3xl">
          Projects
        </Header>
        <p className="text-lg pt-4 pb-8">
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
                  link={project.href}
                  imageSrc={project.image}
                  imageAlt={project.title}
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
