"use client";
import React from "react";
import { IconHome, IconMusic, IconMail, IconBriefcase } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useViewTransition } from "@/hooks/useViewTransition";
import { MotionDiv } from "@/lib/motion";

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
  "shadow-surface-glass h-fit rounded-full px-4 py-2 backdrop-blur transition-opacity duration-300 ease-in-out [@supports(backdrop-filter:blur(0px))]:bg-black/[6%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[6%]";

export const DesktopMenuBar = () => {
  const { path, handleNavigation } = useViewTransition();
  return (
    <div className={cn(baseMenuClass, "mx-auto hidden w-fit md:block")}>
      <ul className="flex w-fit items-center justify-between gap-1 sm:gap-2">
        {links.map((link) => {
          const isActive = path === link.href;
          return (
            <li key={link.name} className="relative flex items-center justify-center">
              <a
                className={cn(
                  "flex items-center justify-center px-3 py-1 text-[13px] transition sm:text-[15px]",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "text-muted-foreground hover:text-primary": !isActive },
                )}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
              >
                {link.name}

                {isActive && (
                  <MotionDiv
                    className="absolute inset-0 z-[-1] rounded-xl bg-zinc-800 dark:bg-stone-200"
                    layoutId="desktop-path"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const MobileDock = () => {
  const { path, handleNavigation } = useViewTransition();

  return (
    <div className={cn(baseMenuClass, "fixed bottom-4 left-1/2 z-50 block -translate-x-1/2 md:hidden")}>
      <ul className="flex w-[250px] items-center justify-between gap-2">
        {links.map((link) => {
          const isActive = path === link.href;
          return (
            <li key={link.name} className="relative flex items-center justify-center">
              <a
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "text-muted-foreground hover:text-primary": !isActive },
                )}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
              >
                <link.icon size={22} strokeWidth={2} />

                {isActive && (
                  <MotionDiv
                    className="absolute inset-0 z-[-1] rounded-full bg-zinc-800 dark:bg-stone-200"
                    layoutId="mobile-path"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
