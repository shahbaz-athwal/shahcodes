import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="w-full py-4 flex">
      <div className="container mx-auto flex">
        <div>
          <div className="mb-2">
            <Avatar className="w-20 h-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-2xl font-bold dark:text-white">Shahbaz Singh</h1>
          <p className="text-gray-900 dark:text-gray-100">
            FullStack Developer
          </p>
          <div className="flex space-x-4 mt-2">
            
            <a href="#" aria-label="GitHub">
              <IconBrandGithub className="text-xl text-gray-700 dark:text-gray-300" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <IconBrandLinkedin className="text-xl text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div> 
      </div>
      <div className="mx-5">
        <ThemeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
