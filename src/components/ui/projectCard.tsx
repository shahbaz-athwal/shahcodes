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

const ProjectCard = ({ title, description, href, code, image, badges }: ProjectCardProps) => {
  return (
    <div className="mx-2 flex h-full w-fit flex-col space-y-6 rounded-xl bg-zinc-100 p-8 hover:bg-zinc-200/70 dark:bg-stone-700/25 dark:hover:bg-stone-700/40 md:mx-0">
      <div>
        <h3 className="text-[17px] font-medium sm:text-lg">{title}</h3>
        <p className="text-base dark:text-gray-300 sm:text-[17px]">{description}</p>
      </div>
      <Link href={href} target="_blank">
        <div className="w-fit overflow-hidden rounded-lg shadow-lg dark:shadow-zinc-800/50">
          <Image src={image} alt={title} width={700} height={400} className="aspect-[16/9] rounded-lg object-cover" />
        </div>
      </Link>
      <div className="flex flex-wrap gap-2">
        {badges?.map((badge) => (
          <Badge
            key={badge}
            variant={"secondary"}
            className="bg-zinc-200 font-normal hover:cursor-text dark:bg-zinc-700/70"
          >
            {badge}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Link href={href} target="_blank">
          <Button className="text-xs">
            <IconLink className="mr-1 h-4 w-4" />
            Live
          </Button>
        </Link>
        <Link href={code} target="_blank">
          <Button className="text-xs">
            <IconCode className="mr-1 h-4 w-4" />
            Code
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
