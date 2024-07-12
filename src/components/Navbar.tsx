import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import TotalVisits from "./TotalVisiters";
import { Suspense } from "react";
import { LocationData } from "./LocationData";

const Navbar = () => {
  return (
    <nav className="w-full justify-between flex dark:text-gray-200">
      <div>
        <div className="mb-2">
          <Avatar className="w-24 sm:w-28 h-auto grayscale">
            <AvatarImage src="/profile.png" className="scale-110" />
          </Avatar>
        </div>
        <h1 className="text-xl sm:text-2xl font-medium">Shahbaz Singh</h1>
        <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100">FullStack Developer</p>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://github.com/shahbaz-athwal"
            target="_blank"
            aria-label="GitHub"
          >
            <IconBrandGithub className="text-xl text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahbaz-athwal/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="text-xl text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
      <div className="flex flex-col direction-normal justify-between items-end text-[14px] sm:text-[15px] font-mono">
        <div>
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-end max-w-36 sm:max-w-full">
          <Suspense fallback={<div className="blur-md">Total Visits: X</div>}>
            <TotalVisits />
          </Suspense>
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
  );
};

export default Navbar;
