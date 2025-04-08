"use client";
import React from "react";
import { IconHome, IconMusic, IconMail, IconBriefcase } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/lib/motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "About",
    href: "/",
    icon: IconHome,
  },
  {
    name: "Details",
    href: "/details",
    icon: IconBriefcase,
  },
  // {
  //   name: "Blogs",
  //   href: "/blog",
  //   icon: IconPencilBolt,
  // },
  {
    name: "Spotify",
    href: "/spotify",
    icon: IconMusic,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: IconMail,
  },
];

const baseMenuClass =
  "h-fit rounded-full px-4 py-2 backdrop-blur transition-opacity bg-black/10 dark:bg-white/10 transition-colors duration-300 ease-in-out";

export const DesktopMenuBar = () => {
  const path = usePathname();
  return (
    <div className={cn(baseMenuClass, "mx-auto hidden w-fit md:block")}>
      <ul className="flex w-fit items-center justify-between gap-1 sm:gap-2">
        {links.map((link) => {
          const isActive = path === link.href;
          return (
            <li key={link.name} className="relative flex items-center justify-center">
              <Link
                className={cn(
                  "flex items-center justify-center px-3 py-1 text-[13px] transition sm:text-[15px]",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "text-zinc-200 hover:text-primary dark:text-zinc-400 dark:hover:text-primary": !isActive },
                )}
                href={link.href}
              >
                {link.name}

                {isActive && (
                  <MotionDiv
                    className="absolute inset-0 z-[-1] rounded-xl bg-zinc-800 dark:bg-stone-200"
                    layoutId="desktop-path"
                    layoutScroll
                    style={{ transform: "translateZ(0)" }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const MobileDock = () => {
  const path = usePathname();

  return (
    <div className={cn(baseMenuClass, "fixed bottom-4 left-1/2 z-50 block -translate-x-1/2 md:hidden")}>
      <ul className="flex w-[250px] items-center justify-between gap-2">
        {links.map((link) => {
          const isActive = path === link.href;
          return (
            <li key={link.name} className="relative flex items-center justify-center">
              <Link
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "text-zinc-600 hover:text-primary dark:text-zinc-400": !isActive },
                )}
                href={link.href}
              >
                <link.icon size={22} strokeWidth={2} />

                {isActive && (
                  <MotionDiv
                    className="absolute inset-0 z-[-1] rounded-full bg-zinc-800 dark:bg-stone-200"
                    layoutId="mobile-path"
                    layoutScroll
                    style={{ transform: "translateZ(0)" }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
