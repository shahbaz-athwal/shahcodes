"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { IconHome, IconMusic, IconMail, IconBriefcase, IconPencilBolt } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

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

export default function MenuBar() {
  const path = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={cn(
        "shadow-surface-glass h-fit rounded-full px-4 py-2 backdrop-blur transition-opacity duration-300 ease-in-out [@supports(backdrop-filter:blur(0px))]:bg-black/[6%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[6%]",
        isMobile ? "fixed bottom-4 left-1/2 z-50 -translate-x-1/2" : "mx-auto w-fit",
        mounted ? "opacity-100" : "opacity-0",
      )}
    >
      <ul className={cn("flex items-center justify-between", isMobile ? "w-[250px] gap-2" : "w-fit gap-1 sm:gap-2")}>
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = path === link.href;

          return (
            <li className="relative flex items-center justify-center" key={link.href}>
              <Link
                className={cn(
                  "flex items-center justify-center transition",
                  isMobile ? "h-9 w-9 rounded-full" : "px-3 py-1 text-[13px] sm:text-[15px]",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "text-muted-foreground hover:text-primary": !isActive },
                )}
                href={link.href}
              >
                {isMobile ? <Icon size={22} strokeWidth={2} /> : link.name}

                {isActive && (
                  <motion.div
                    className={cn(
                      "absolute z-[-1] bg-zinc-800 dark:bg-stone-200",
                      isMobile ? "inset-0 rounded-full" : "inset-0 rounded-xl",
                    )}
                    layoutId="path"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
