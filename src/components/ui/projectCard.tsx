import Link from "next/link";
import Image from "next/image";
import { Badge } from "./badge";
import { Button } from "./button";
import { IconCode, IconLink } from "@tabler/icons-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  code: string;
  image: string;
  badges?: string[];
}

const ProjectCard = ({
  title,
  description,
  href,
  code,
  image,
  badges,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col w-fit h-full space-y-6 rounded-xl mx-2 md:mx-0 p-8 bg-zinc-100 hover:bg-zinc-200/70 dark:bg-stone-700/30 dark:hover:bg-stone-700/60">
      <div>
        <h3 className="text-[17px] sm:text-lg font-medium">{title}</h3>
        <p className="text-base sm:text-[17px] dark:text-gray-300">
          {description}
        </p>
      </div>
      <Link href={href} target="_blank">
        <div className="rounded-lg shadow-lg overflow-hidden w-fit dark:shadow-zinc-700/50">
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="rounded-lg object-cover aspect-[16/9]"
          />
        </div>
      </Link>
      <div className="flex flex-wrap gap-2">
        {badges?.map((badge) => (
          <Badge
            key={badge}
            variant={"secondary"}
            className="font-normal bg-zinc-200 dark:bg-zinc-700/70 hover:cursor-text"
          >
            {badge}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Link href={href} target="_blank">
          <Button className="text-xs ">
            <IconLink className="h-4 w-4 mr-1" />
            Live
          </Button>
        </Link>
        <Link href={code} target="_blank">
          <Button className="text-xs">
            <IconCode className="h-4 w-4 mr-1" />
            Code
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
