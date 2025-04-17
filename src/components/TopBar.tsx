"use client";

import { ProfileImage } from "./ProfileImage";
import ThemeToggle from "./ThemeToggle";
import { DesktopMenuBar, MobileDock, MobileMenu } from "./MenuBar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const TopBar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="relative isolate z-10">
        <div
          className={cn(
            "fixed inset-x-0 top-0 mx-auto flex w-full max-w-3xl items-center justify-between rounded-bl-3xl rounded-br-3xl border-b border-zinc-400 px-6 py-1.5 backdrop-blur-sm dark:border-zinc-700 dark:text-gray-200 sm:absolute sm:border-x sm:px-12 sm:py-2.5 md:-top-1 md:scale-90",
          )}
        >
          <div className="flex items-end gap-2">
            <ProfileImage className={cn("h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]")} />
            <p className="block font-mono text-xs text-muted-foreground sm:hidden">{pathname}</p>
          </div>
          <div className="flex flex-1 justify-center">
            <DesktopMenuBar path={pathname} />
          </div>
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
        <MobileDock path={pathname} />
      </nav>
    </>
  );
};

export default TopBar;
