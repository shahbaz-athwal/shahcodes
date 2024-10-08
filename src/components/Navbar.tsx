import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Suspense } from "react";
import { LocationData } from "./LocationData";
import { Separator } from "@radix-ui/react-separator";
import { ProfileImage } from "./Avatar";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full justify-between flex dark:text-gray-200">
        <div>
          <div className="mb-2 mt-8">
            <ProfileImage />
          </div>
          <h1 className="text-xl sm:text-2xl font-medium">Shahbaz Singh</h1>
          <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100">
            FullStack Developer
          </p>
          <div className="flex space-x-4 mt-2">
            <Link
              href="https://github.com/shahbaz-athwal"
              target="_blank"
              title="GitHub"
            >
              <IconBrandGithub className="text-gray-700 dark:text-gray-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shahbaz-athwal/"
              target="_blank"
              title="LinkedIn"
            >
              <IconBrandLinkedin className="text-gray-700 dark:text-gray-300" />
            </Link>
            <Link href="https://x.com/shahcodes" target="_blank" title="X">
              <IconBrandX className="text-gray-700 dark:text-gray-300" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-right items-end justify-between text-xs sm:text-sm font-[350] text-zinc-700 dark:text-zinc-300">
          <ThemeToggle />
          <div>
            <Suspense
              fallback={
                <div>
                  <div className="blur-md">Last visit from:</div>
                  <div className="blur-md">sdasd asdasd</div>
                </div>
              }
            >
              <LocationData />
            </Suspense>
          </div>
        </div>
      </nav>
      <Separator className="w-full my-5 rounded h-[0.5px] sm:h-[1px] bg-zinc-500 shrink-0" />
    </>
  );
};

export default Navbar;
