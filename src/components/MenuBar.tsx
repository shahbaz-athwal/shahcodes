"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Tech",
      href: "/techstack",
    },
    {
      name: "Blogs",
      href: "/blog",
    },
    {
      name: "Spotify",
      href: "/spotify",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

export default function MenuBar() {
  
const path = usePathname();
  return (
    
        <ul className="flex justify-center sm:justify-start flex-wrap gap-1 sm:gap-2 w-fit">
          {links.map((link) => (
            <li
              className="flex items-center justify-center relative"
              key={link.href}
            >
              <Link
                className={clsx(
                  "flex w-full text-[15px] items-center justify-center px-3 py-1 hover:-translate-y-[2px] transition",
                  {
                    "text-white dark:text-black hover:text-gray-100 dark:hover:text-zinc-950":
                      path === link.href,
                  }
                )}
                href={link.href}
              >
                {link.name}

                {link.href === path && (
                  <motion.span
                    className="bg-zinc-800 dark:bg-white rounded-xl absolute inset-0 -z-10"
                    layoutId="path"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
  );
}