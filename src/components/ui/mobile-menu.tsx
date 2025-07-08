"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useCallback, useRef } from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 150,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | React.ReactNode) => void;
  active: string | React.ReactNode | null;
  item: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      onClick={() => setActive(active ? null : item)}
      className="relative bg-transparent border-none p-0"
    >
      <motion.div
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-stone-900 transition-all duration-100 hover:scale-110 hover:opacity-[0.9] dark:text-stone-100"
      >
        {item}
      </motion.div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={transition}
          >
            <div className="absolute top-[calc(100%_+_1.2rem)] right-1">
              <div className="shadow-3xl text-primary rounded-tl-3xl rounded-b-3xl border border-stone-300 bg-white dark:border-stone-500/50 dark:bg-stone-900">
                <div className="h-full w-max p-6">{children}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | React.ReactNode | null) => void;
  children: React.ReactNode;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Simplified click outside handler using React's event system
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    },
    [setActive],
  );

  // Add/remove event listener on mount/unmount
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return <div ref={menuRef}>{children}</div>;
};

export const HoveredLink = ({
  children,
  onClick,
  ...rest
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-stone-700 hover:text-black dark:text-stone-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
