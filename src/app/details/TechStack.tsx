import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionChild } from "@/components/Motion";

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
} from "react-icons/si";

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
  <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
    <div className="mb-3 flex items-center gap-2">
      <span className="text-primary">{icon}</span>
      <h3 className="text-md font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill.name}
          variant="outline"
          className="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 text-sm dark:bg-zinc-800"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </Badge>
      ))}
    </div>
  </div>
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
        { name: "Python", icon: <FaPython className="h-3.5 w-3.5 text-yellow-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-3.5 w-3.5 text-sky-400" /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="h-5 w-5" />,
      skills: [
        { name: "Node.js", icon: <FaNode className="h-3.5 w-3.5 text-green-500" /> },
        { name: "Bun", icon: <SiBun className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Deno", icon: <SiDeno className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "Express", icon: <SiExpress className="h-3.5 w-3.5" /> },
        { name: "Flask", icon: <SiFlask className="h-3.5 w-3.5" /> },
        { name: "SQLAlchemy", icon: <FaDatabase className="h-3.5 w-3.5 text-red-500" /> },
        { name: "REST APIs", icon: <FaServer className="h-3.5 w-3.5 text-purple-500" /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="h-3.5 w-3.5 text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="h-3.5 w-3.5 text-blue-400" /> },
        { name: "SQLite", icon: <SiSqlite className="h-3.5 w-3.5 text-blue-400" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="h-5 w-5" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "GitHub Actions", icon: <FaGithub className="h-3.5 w-3.5" /> },
        { name: "AWS", icon: <FaAws className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "EC2", icon: <FaAws className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "S3", icon: <FaAws className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "RDS", icon: <FaAws className="h-3.5 w-3.5 text-orange-400" /> },
        { name: "Lambda", icon: <FaAws className="h-3.5 w-3.5 text-orange-400" /> },
      ],
    },
    {
      title: "Currently Learning",
      icon: <FaCode className="h-5 w-5" />,
      skills: [
        { name: "Kubernetes", icon: <SiKubernetes className="h-3.5 w-3.5 text-blue-500" /> },
        { name: "System Design", icon: <FaServer className="h-3.5 w-3.5 text-purple-400" /> },
        { name: "Advanced Docker", icon: <FaDocker className="h-3.5 w-3.5 text-blue-500" /> },
      ],
    },
  ];

  return (
    <MotionChild>
      <Card className="mb-8 mt-6 border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <CardHeader className="pb-2">
          <h2 className="text-3xl font-bold dark:text-zinc-200">Tech Stack</h2>
        </CardHeader>
        <CardContent>
          <div className="text-md mb-6 font-normal leading-normal text-zinc-700 dark:text-zinc-300 md:text-lg">
            <p>
              I'm a full-stack developer specializing in web application development with modern frameworks. My primary
              focus is building responsive, performant apps using React/Next.js and Vue.js frontends supported by Python
              and Node.js backends.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {techCategories.map((category) => (
              <TechCategory key={category.title} title={category.title} icon={category.icon} skills={category.skills} />
            ))}
          </div>
        </CardContent>
      </Card>
    </MotionChild>
  );
}
