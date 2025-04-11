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
      <nav className="relative isolate z-[10]">
        <div
          className={cn(
            "fixed inset-x-0 top-0 mx-auto flex w-full max-w-3xl items-center justify-between rounded-bl-3xl rounded-br-3xl border-b border-zinc-400 px-6 py-1.5 backdrop-blur dark:border-zinc-700 dark:text-gray-200 sm:border-x sm:px-12 sm:py-3",
          )}
        >
          <div className="flex w-[120px] items-end gap-2">
            <ProfileImage className={cn("h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]")} />
            <p className="font-mono text-xs text-muted-foreground">{pathname}</p>
          </div>
          <div className="flex flex-1 justify-center">
            <DesktopMenuBar path={pathname} />
          </div>
          <div className="flex w-[120px] items-center justify-end gap-2">
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
