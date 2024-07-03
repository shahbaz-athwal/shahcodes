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
            <Avatar className="w-20 h-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
          <h1 className="text-2xl font-bold ">Shahbaz Singh</h1>
          <p className="text-gray-900 dark:text-gray-100">
            FullStack Developer
          </p>
          <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="GitHub">
            {/* <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            > */}
                <IconBrandGithub className="text-xl text-gray-700 dark:text-gray-300" />
            {/* </motion.div> */}
              </a>
            <a href="#" aria-label="LinkedIn">
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
