"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTransitionRouter } from "next-view-transitions";
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

function slideUpTransition() {
  try {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
        {
          opacity: 0,
          transform: "translate(0, -100px)",
        },
      ],
      {
        duration: 400,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-old(content-container)",
      },
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          transform: "translate(0, 100px)",
        },
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
      ],
      {
        duration: 400,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-new(content-container)",
      },
    );
  } catch (error) {
    console.log("Transition animation error:", error);
  }
}

function slideDownTransition() {
  try {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
        {
          opacity: 0,
          transform: "translate(0, 100px)",
        },
      ],
      {
        duration: 400,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-old(content-container)",
      },
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          transform: "translate(0, -100px)",
        },
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
      ],
      {
        duration: 400,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-new(content-container)",
      },
    );
  } catch (error) {
    console.log("Transition animation error:", error);
  }
}

export default function MenuBar() {
  const path = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useTransitionRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Skip view transitions for mobile devices
    if (isMobile) {
      router.push(href);
      return;
    }

    const supportsViewTransitions = typeof document !== "undefined" && "startViewTransition" in document;

    const isAboutPage = path === "/";
    const goingToAboutPage = href === "/";

    try {
      if (isAboutPage && !goingToAboutPage) {
        router.push(href, {
          onTransitionReady: supportsViewTransitions ? slideUpTransition : undefined,
        });
      } else if (!isAboutPage && goingToAboutPage) {
        router.push(href, {
          onTransitionReady: supportsViewTransitions ? slideDownTransition : undefined,
        });
      } else {
        router.push(href);
      }
    } catch (error) {
      console.log("Navigation error:", error);
      // Fallback to standard navigation if the custom approach fails
      window.location.href = href;
    }
  };

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
              <a
                className={cn(
                  "flex items-center justify-center transition",
                  isMobile ? "h-9 w-9 rounded-full" : "px-3 py-1 text-[13px] sm:text-[15px]",
                  {
                    "text-white hover:scale-105 hover:text-gray-100 dark:text-black dark:hover:text-zinc-950": isActive,
                  },
                  { "text-muted-foreground hover:text-primary": !isActive },
                )}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
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
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
