import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { Suspense } from "react";
import { LocationData } from "./LocationData";
import { ProfileImage } from "./Avatar";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="mb-4 flex w-full justify-between border-b border-zinc-200 pb-4 dark:border-zinc-700 dark:text-gray-200">
        <div>
          <div className="mb-2 mt-8">
            <ProfileImage />
          </div>
          <h1 className="text-xl font-bold sm:text-2xl">Shahbaz Singh</h1>
          <p className="text-sm text-muted-foreground sm:text-base">Full Stack Developer</p>
          <div className="mt-2 flex space-x-4 text-muted-foreground">
            <Link href="https://github.com/shahbaz-athwal" target="_blank" title="GitHub">
              <IconBrandGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/shahbaz-athwal/" target="_blank" title="LinkedIn">
              <IconBrandLinkedin />
            </Link>
            <Link href="https://x.com/shahcodes" target="_blank" title="X">
              <IconBrandX />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between text-right text-xs font-[350] text-zinc-700 dark:text-zinc-300 sm:text-sm">
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
    </>
  );
};

export default Navbar;
