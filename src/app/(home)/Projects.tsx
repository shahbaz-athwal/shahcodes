import Image from "next/image";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { IconCode, IconLink } from "@tabler/icons-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  code: string;
  image: string;
  badges?: string[];
  hidden?: boolean;
}

const projects: ProjectCardProps[] = [
  {
    title: "Dryft",
    href: "https://dryft.ca",
    code: "https://github.com/shahbaz-athwal/dryft",
    description: "A Social Media Platform for Acadia Students",
    image: "/projects/dryft.png",
    badges: [
      "Turborepo",
      "Docker",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Zod",
      "Zustand",
      "Tanstack Query",
      "Better Auth",
      "Traefik",
      "VPS",
      "Kafka",
      "Redis",
    ],
    hidden: true,
  },
  {
    title: "Study Link",
    href: "https://studylink.dryft.ca",
    code: "https://github.com/mehirk/study-link",
    description: "A Study & Collaboration Platform",
    image: "/projects/study-link.jpg",
    badges: [
      "React",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Better Auth",
      "Uploadthing",
      "Traefik",
      "VPS",
      "PostHog",
      "Zero Sync Engine",
      "Tanstack Query",
    ],
    hidden: false,
  },
  {
    title: "Socket Chess",
    href: "https://chess.shahcodes.in",
    code: "https://github.com/shahbaz-athwal/chess",
    description: "A Multiplayer Chess Game Using Socket.io",
    image: "/projects/chess.jpg",
    badges: ["Socket.io", "TypeScript", "Tailwind", "Zustand", "Node.js"],
    hidden: false,
  },
  {
    title: "Whisperella",
    href: "https://whisperella.shahcodes.in",
    code: "https://github.com/shahbaz-athwal/whisperella",
    description: "An Anonymous Messaging Platform",
    image: "/projects/whisperella-og.jpg",
    badges: ["Next.js", "Auth.js", "TypeScript", "PostgreSQL", "Resend", "Zod"],
    hidden: false,
  },
  {
    title: "FindMyJob",
    code: "https://github.com/shahbaz-athwal/find-my-job",
    description: "A Two Way Job Application Portal",
    image: "/projects/findmyjob.png",
    badges: ["Express", "React", "MongoDB", "GCP Cloud Run", "Cloudinary"],
    hidden: true,
  },
  {
    title: "Portfolio/Blog",
    href: "https://shahcodes.in/",
    code: "https://github.com/shahbaz-athwal/shahcodes",
    description: "My Personal Portfolio and Blog",
    image: "/og.png",
    badges: ["Next.js", "Tailwind", "TypeScript", "Redis", "Spotify API", "MDX", "Discord API", "Motion"],
    hidden: false,
  },
  {
    title: "Acadia Help",
    href: "",
    code: "https://github.com/shahbaz-athwal/acadia-help",
    description: "One Stop Solution for Acadia Students",
    image: "/projects/acadia.png",
    badges: ["Next.js", "Tailwind", "TypeScript", "PostgreSQL", "ShadCN", "Notion API", "Zod"],
    hidden: true,
  },
];

const ProjectCard = ({ title, description, href, code, image, badges }: ProjectCardProps) => {
  return (
    <div className="mx-2 flex h-full w-fit flex-col space-y-6 rounded-xl bg-zinc-100 p-8 md:mx-0 dark:bg-stone-700/25">
      <div>
        <h3 className="text-[17px] font-medium sm:text-lg">{title}</h3>
        <p className="text-base sm:text-[17px] dark:text-gray-300">{description}</p>
      </div>
      <a href={href || code} target="_blank">
        <div className="w-fit overflow-hidden rounded-lg shadow-xl dark:shadow-zinc-800/50">
          <Image src={image} alt={title} width={700} height={400} className="rounded-lg object-cover" loading="eager" />
        </div>
      </a>
      <div className="flex flex-wrap gap-2">
        {badges?.map((badge) => (
          <Badge
            key={badge}
            variant={"secondary"}
            className="bg-zinc-200 font-normal hover:cursor-text hover:bg-zinc-300 dark:bg-zinc-700/70"
          >
            {badge}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        {href && (
          <a href={href} target="_blank">
            <Button className="rounded-2xl text-xs">
              <IconLink className="mr-1 h-4 w-4" />
              Live
            </Button>
          </a>
        )}
        <a href={code} target="_blank">
          <Button className="rounded-2xl text-xs">
            <IconCode className="mr-1 h-4 w-4" />
            Code
          </Button>
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:-ml-[10%] xl:w-[120%] 2xl:-ml-[20%] 2xl:w-[140%]">
      {projects
        .filter((project) => !project.hidden)
        .map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            code={project.code}
            badges={project.badges}
            image={project.image}
          />
        ))}
    </div>
  );
}
