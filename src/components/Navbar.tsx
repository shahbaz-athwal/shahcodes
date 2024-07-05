import { motion } from "framer-motion";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="w-full justify-between flex dark:text-gray-200">
      <div className="flex">
        <div>
          <div className="mb-2">
            <Avatar className="w-24 h-auto">
              <AvatarImage src="/profile.png" />
            </Avatar>
          </div>
          <h1 className="text-2xl font-bold ">Shahbaz Singh</h1>
          <p className="text-gray-900 dark:text-gray-100">
            FullStack Developer
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/shahbaz-athwal" target="_blank" aria-label="GitHub">
              <IconBrandGithub className="text-xl text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/shahbaz-athwal/" target="_blank" aria-label="LinkedIn">
              <IconBrandLinkedin className="text-xl text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
