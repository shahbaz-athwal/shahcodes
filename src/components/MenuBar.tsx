"use client";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/lib/motion";
import Link from "next/link";
import { HoveredLink, MenuItem, Menu } from "@/components/ui/mobile-menu";
import { Link as LinkType } from "@/lib/contants";

const baseMenuClass =
  "h-fit rounded-full px-4 py-2 backdrop-blur-sm transition-opacity bg-black/10 dark:bg-white/15 transition-colors duration-300 ease-in-out";

export const DesktopMenuBar = ({ path, links }: { path: string; links: LinkType[] }) => {
  return (
    <div className={cn(baseMenuClass, "mx-auto hidden w-fit md:block")}>
      <ul className="flex w-fit items-center justify-between gap-1 sm:gap-2">
        {links.map((link) => {
          const isActive = link.href === "/blog" ? path.startsWith(link.href) : path === link.href;
          return (
            <li key={link.name} className="relative flex items-center justify-center">
              <Link
                className={cn(
                  "flex items-center justify-center px-3 py-1 text-[13px] transition sm:text-[15px]",
                  {
                    "text-stone-100 hover:scale-105 hover:text-stone-100 dark:text-stone-900": isActive,
                  },
                  { "hover:text-primary text-stone-800 dark:text-stone-300": !isActive }
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

export const MobileDock = ({ path, links }: { path: string; links: LinkType[] }) => {
  return (
    <div className={cn(baseMenuClass, "fixed bottom-4 left-1/2 z-50 block -translate-x-1/2 md:hidden")}>
      <ul className="flex w-[250px] items-center justify-between gap-2">
        {links.map((link) => {
          const isActive = link.href === "/blog" ? path.startsWith(link.href) : path === link.href;
          return (
            <li key={link.name} className="relative flex items-center justify-center">
              <Link
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "hover:text-primary text-zinc-600 dark:text-zinc-400": !isActive }
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

export const MobileMenu = ({ links }: { links: LinkType[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="justify-right relative block w-full items-center sm:hidden">
      <Menu setActive={() => setIsOpen(false)}>
        <MenuItem
          setActive={() => setIsOpen(!isOpen)}
          active={isOpen ? "menu" : null}
          item={
            <div>
              {isOpen ? <IconX size={28} className="opacity-70" /> : <IconMenu2 size={28} className="opacity-70" />}
            </div>
          }
        >
          <div className="flex flex-col space-y-4 text-lg">
            {links.map((link) => (
              <HoveredLink
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {link.name}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};
