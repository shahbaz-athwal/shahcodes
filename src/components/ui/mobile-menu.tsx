"use client";
import React, { useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
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
    <div onClick={() => setActive(active ? null : item)} className="relative">
      <motion.div
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-black transition-all duration-300 hover:scale-110 hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={transition}
          >
            <div className="absolute right-0 top-[calc(100%_+_1.2rem)]">
              <div className="shadow-3xl rounded-b-3xl rounded-tl-3xl border border-black/[0.2] bg-white text-primary dark:border-white/[0.2] dark:bg-stone-950">
                <div className="h-full w-max p-6" onClick={(e) => e.stopPropagation()}>
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

export const HoveredLink = ({ children, onClick, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-700 hover:text-black dark:text-neutral-200" onClick={onClick}>
      {children}
    </Link>
  );
};
