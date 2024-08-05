import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, description, link, imageSrc, imageAlt }: any) => {
  return (
    <Link href={link} target="_blank" title={title}>
      <div className="flex flex-col w-fit h-full space-y-6 rounded-xl mx-2 md:mx-0 p-8 bg-zinc-100 hover:bg-zinc-200/70 dark:bg-stone-700/30 dark:hover:bg-stone-700/60">
        <div>
          <h3 className="text-[17px] sm:text-lg font-medium">{title}</h3>
          <p className="text-base sm:text-[17px] dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden w-fit dark:shadow-zinc-700/50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={450}
            height={240}
            quality={90}
            className="rounded-xl bg-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
