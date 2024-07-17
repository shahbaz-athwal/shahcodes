import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const AnimatedArrow = () => {
  return (
    <div className="w-6 h-6 sm:mb-0 flex-shrink-0">
      <svg
        className="w-full h-full text-zinc-600 dark:text-gray-300 animate-pulse"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 20 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};


const ProjectCard = ({ title, description, link, imageSrc, imageAlt }: any) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-4 ml-2">
        <AnimatedArrow />
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <h3 className="text-[17px] sm:text-lg font-medium">{title}</h3>
        </div>
        <p className="text-base sm:text-[17px] dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg shadow-lg overflow-hidden dark:shadow-gray-600 mx-4 md:mx-2"
      >
        <Link href={link} target="_blank">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={600}
            className="w-full"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
