import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  FaReact,
  FaNode,
  FaDocker,
  FaPython,
  FaAws,
  FaGithub,
  FaDatabase,
  FaCode,
  FaServer,
  FaCloud,
  FaFlask,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiKubernetes,
  SiFlask,
  SiVuedotjs,
  SiMysql,
  SiSqlite,
  SiBun,
  SiDeno,
  SiTurborepo,
  SiDrizzle,
  SiPrisma,
  SiFastapi,
  SiRedis,
  SiJest,
  SiVitest,
  SiPytest,
  SiAmazonec2,
  SiAmazons3,
  SiAmazonrds,
  SiAwslambda,
  SiOpensearch,
  SiGo,
  SiSqlalchemy,
  SiCypress,
} from "react-icons/si";
import { Header } from "@/components/ui/header";

type TechCategoryProps = {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    icon?: React.ReactNode;
    proficiency?: number;
  }>;
};

const TechCategory = ({ title, icon, skills }: TechCategoryProps) => (
  <Card className="p-4 dark:bg-stone-700/25">
    <div className="mb-3 flex items-center gap-2">
      <span className="text-primary">{icon}</span>
      <h3 className="text-md font-semibold tracking-wider text-zinc-700 uppercase dark:text-zinc-300">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill.name}
          variant="outline"
          className="flex items-center gap-1.5 bg-stone-200 px-2 py-1 text-sm dark:bg-stone-700/50"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </Badge>
      ))}
    </div>
  </Card>
);

export function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="h-5 w-5" />,
      skills: [
        { name: "React", icon: <FaReact className="h-3.5 w-3.5 text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="h-3.5 w-3.5" /> },
        { name: "Turborepo", icon: <SiTurborepo className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="h-3.5 w-3.5 text-green-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-3.5 w-3.5 text-yellow-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="h-3.5 w-3.5 text-sky-400" /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="h-5 w-5" />,
      skills: [
        { name: "Node.js", icon: <FaNode className="h-3.5 w-3.5 text-green-500" /> },
        { name: "Bun", icon: <SiBun className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Deno", icon: <SiDeno className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Python", icon: <FaPython className="h-3.5 w-3.5 text-yellow-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Express", icon: <SiExpress className="h-3.5 w-3.5" /> },
        { name: "Flask", icon: <SiFlask className="h-3.5 w-3.5" /> },
        { name: "SQLAlchemy", icon: <SiSqlalchemy className="h-3.5 w-3.5 text-red-500" /> },
        { name: "Drizzle", icon: <SiDrizzle className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Prisma", icon: <SiPrisma className="h-3.5 w-3.5 text-blue-500" /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="h-3.5 w-3.5 text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="h-3.5 w-3.5 text-blue-400" /> },
        { name: "SQLite", icon: <SiSqlite className="h-3.5 w-3.5 text-blue-400" /> },
        { name: "Redis", icon: <SiRedis className="h-3.5 w-3.5 text-red-500" /> },
        { name: "OpenSearch", icon: <SiOpensearch className="h-3.5 w-3.5 text-red-500" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="h-5 w-5" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "GitHub Actions", icon: <FaGithub className="h-3.5 w-3.5" /> },
        { name: "AWS", icon: <FaAws className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "EC2", icon: <SiAmazonec2 className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "S3", icon: <SiAmazons3 className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "RDS", icon: <SiAmazonrds className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "Lambda", icon: <SiAwslambda className="h-3.5 w-3.5 text-orange-400" /> },
      ],
    },
    {
      title: "Testing",
      icon: <FaFlask className="h-5 w-5" />,
      skills: [
        { name: "Jest", icon: <SiJest className="h-3.5 w-3.5 text-red-500" /> },
        { name: "Vitest", icon: <SiVitest className="h-3.5 w-3.5 text-purple-400" /> },
        { name: "Pytest", icon: <SiPytest className="h-3.5 w-3.5 text-green-500" /> },
        { name: "Cypress", icon: <SiCypress className="h-3.5 w-3.5 text-amber-700" /> },
      ],
    },
    {
      title: "Currently Learning",
      icon: <FaCode className="h-5 w-5" />,
      skills: [
        { name: "Kubernetes", icon: <SiKubernetes className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Go", icon: <SiGo className="h-3.5 w-3.5 text-blue-500" /> },
      ],
    },
  ];

  return (
    <>
      <div>
        <div className="text-md mb-6 leading-normal font-normal text-zinc-700 md:text-lg dark:text-zinc-300">
          <p>I&apos;m a full-stack developer specializing in web development with modern frameworks.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {techCategories.map((category) => (
            <TechCategory key={category.title} title={category.title} icon={category.icon} skills={category.skills} />
          ))}
        </div>
      </div>
    </>
  );
}
