"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function MenuBar() {
  const path = usePathname();

  return (
    <div className="flex space-x-4 w-auto justify-center md:justify-start">
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button  variant={path === "/" ? "default" : "outline"}>About</Button>
        </motion.div>
      </Link>

      <Link href="/techstack">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant={path === "/techstack" ? "default" : "outline"}>
            Tech Stack
          </Button>
        </motion.div>
      </Link>

      <Link href="/mylife">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant={path === "/mylife" ? "default" : "outline"}>
            My Life
          </Button>
        </motion.div>
      </Link>

      <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button variant={path === "/contact" ? "default" : "outline"}>
            Contact
          </Button>
        </motion.div>
      </Link>
    </div>
  );
}

export default MenuBar;
