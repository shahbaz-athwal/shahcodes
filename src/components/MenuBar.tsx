"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Details",
    href: "/details",
  },
  // {
  //   name: "Blogs",
  //   href: "/blog",
  // },
  {
    name: "Spotify",
    href: "/spotify",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function MenuBar() {
  const path = usePathname();
  return (
    <div className="shadow-surface-glass mx-auto w-fit place-content-center rounded-2xl px-2 py-2 backdrop-blur sm:px-4 [@supports(backdrop-filter:blur(0px))]:bg-black/[6%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
      <ul className="flex w-fit flex-wrap justify-center gap-1 sm:justify-start sm:gap-2">
        {links.map((link) => (
          <li className="relative flex items-center justify-center" key={link.href}>
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-1 text-[13px] transition sm:text-[15px]",
                {
                  "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950":
                    path === link.href,
                },
                { "text-muted-foreground hover:text-primary": path !== link.href },
              )}
              href={link.href}
            >
              {link.name}

              {link.href === path && (
                <motion.span
                  className="absolute inset-0 z-[-1] rounded-xl bg-zinc-800 dark:bg-white"
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
    </div>
  );
}
