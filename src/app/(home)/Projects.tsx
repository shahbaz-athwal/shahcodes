import { IconCode, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type ProjectCardProps, projects } from "@/lib/contants";

const ProjectCard = ({
  title,
  description,
  href,
  code,
  image,
  badges,
}: ProjectCardProps) => {
  return (
    <Card className="mx-2 flex h-full w-fit flex-col space-y-6 p-6 sm:p-8 md:mx-0 md:p-6 xl:p-8">
      <div>
        <h3 className="text-[18px] font-extrabold text-stone-900 sm:text-lg dark:text-stone-100">
          {title}
        </h3>
        <p className="text-base text-stone-600 sm:text-[17px] dark:text-stone-300">
          {description}
        </p>
      </div>
      <a href={href || code} target="_blank">
        <div className="w-fit overflow-hidden rounded-2xl shadow-xl dark:shadow-none">
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="rounded-2xl border border-stone-200 object-cover dark:border-stone-800"
            loading="eager"
          />
        </div>
      </a>
      <div className="flex flex-wrap gap-2">
        {badges?.map((badge) => (
          <Badge
            key={badge}
            variant={"secondary"}
            className="bg-stone-200 font-normal text-stone-700 hover:cursor-text hover:bg-stone-300 dark:bg-stone-700/70 dark:text-stone-300"
          >
            {badge}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        {href && (
          <a href={href} target="_blank">
            <Button className="rounded-2xl bg-[var(--color-stone-900)] text-xs hover:bg-[var(--color-stone-800)] dark:bg-[var(--color-stone-100)] dark:text-[var(--color-stone-900)] dark:hover:bg-[var(--color-stone-200)]">
              <IconLink className="mr-1 h-4 w-4" />
              Live
            </Button>
          </a>
        )}
        <a href={code} target="_blank">
          <Button className="rounded-2xl bg-[var(--color-stone-900)] text-xs hover:bg-[var(--color-stone-800)] dark:bg-[var(--color-stone-100)] dark:text-[var(--color-stone-900)] dark:hover:bg-[var(--color-stone-200)]">
            <IconCode className="mr-1 h-4 w-4" />
            Code
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:-ml-[10%] xl:w-[120%] 2xl:-ml-[20%] 2xl:w-[140%]">
      {projects
        .filter((project) => !project.hidden)
        .map((project) => (
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
