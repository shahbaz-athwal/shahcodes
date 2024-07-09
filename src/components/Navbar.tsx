import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import TotalVisits from "./TotalVisiters";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="w-full justify-between flex dark:text-gray-200">
      <div>
        <div className="mb-2">
          <Avatar className="w-28 h-auto grayscale">
            <AvatarImage src="/profile.png" />
          </Avatar>
        </div>
        <h1 className="text-2xl font-bold ">Shahbaz Singh</h1>
        <p className="text-gray-900 dark:text-gray-100">FullStack Developer</p>
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
      <div className="flex text-[15px] font-mono space-x-4">
        <Suspense fallback={<div className="blur-md">Total Visiters: X</div>}>
          <TotalVisits />
        </Suspense>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
