"use client";

import { ProfileImage } from "./ProfileImage";
import ThemeToggle from "./ThemeToggle";
import { DesktopMenuBar, MobileDock, MobileMenu } from "./MenuBar";
import { cn } from "@/lib/utils";

const TopBar = () => {
  return (
    <>
      <nav className="relative isolate z-[10]">
        <div
          className={cn(
            "fixed inset-x-0 top-0 mx-auto flex w-full max-w-3xl items-center justify-between rounded-bl-3xl rounded-br-3xl border-b border-zinc-400 px-6 py-1.5 backdrop-blur dark:border-zinc-700 dark:text-gray-200 sm:border-x sm:px-12 sm:py-3",
          )}
        >
          <ProfileImage className={cn("h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]")} />
          <DesktopMenuBar />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
        <MobileDock />
      </nav>
    </>
  );
};

export default TopBar;
