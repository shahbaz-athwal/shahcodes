import { IconBriefcase, IconHome, IconMail, IconMusic, IconPencilBolt } from "@tabler/icons-react";

export interface Link {
  name: string;
  href: string;
  icon: React.ElementType;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  code: string;
  image: string;
  badges?: string[];
  hidden?: boolean;
}

export const allLinks = [
  {
    name: "About",
    href: "/",
    icon: IconHome,
  },
  {
    name: "Details",
    href: "/details",
    icon: IconBriefcase,
  },
  {
    name: "Blogs",
    href: "/blog",
    icon: IconPencilBolt,
  },
  {
    name: "Spotify",
    href: "/spotify",
    icon: IconMusic,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: IconMail,
  },
];

export const projects: ProjectCardProps[] = [
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

export const contacts = [
  {
    method: "Email",
    link: "mailto:shahbazathwal2107@gmail.com",
    label: "shahbazathwal2107@gmail.com",
  },
  {
    method: "GitHub",
    link: "https://github.com/shahbaz-athwal",
    label: "git/shahbaz-athwal",
  },
  {
    method: "LinkedIn",
    link: "https://www.linkedin.com/in/shahbaz-athwal/",
    label: "in/shahbaz-athwal",
  },
  {
    method: "X",
    link: "https://x.com/shahcodes",
    label: "@shahcodes",
  },
  {
    method: "Instagram",
    link: "https://www.instagram.com/shahbaz_athwal/",
    label: "@shahbaz_athwal",
  },
];
