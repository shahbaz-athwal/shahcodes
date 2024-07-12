"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MenuItem = ({ href, path, label }: any) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.97 }}
    >
      <Button className="text-[13px] sm:text-sm" variant={path === href ? "default" : "outline"}>{label}</Button>
    </motion.div>
  </Link>
);

function MenuBar() {
  const path = usePathname();

  return (
    <div className="flex space-x-4 w-auto justify-start">
      <MenuItem href="/" path={path} label="About" />
      <MenuItem href="/techstack" path={path} label="Tech Stack" />
      <MenuItem href="/blog" path={path} label="Blogs" />
      <MenuItem href="/contact" path={path} label="Contact" />
    </div>
  );
}

export default MenuBar;
