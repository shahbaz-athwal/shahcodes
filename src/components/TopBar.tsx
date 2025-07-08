"use client";

import { ProfileImage } from "./ProfileImage";
import ThemeToggle from "./ThemeToggle";
import { DesktopMenuBar, MobileDock, MobileMenu } from "./MenuBar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { allLinks } from "@/lib/contants";

interface TopBarProps {
  isBlogEnabled?: boolean;
}

const TopBar = ({ isBlogEnabled = false }: TopBarProps) => {
  const pathname = usePathname();
  const linksWithFeatureFlags = allLinks.filter(
    (link) => link.href !== "/blog" || isBlogEnabled,
  );
  return (
    <>
      <nav className="relative isolate z-10">
        <div
          className={cn(
            "fixed inset-x-0 top-0 mx-auto flex w-full max-w-[45rem] items-center justify-between rounded-br-3xl rounded-bl-3xl border-b border-stone-300 px-6 py-1.5 backdrop-blur-sm sm:absolute sm:border-x sm:px-12 sm:py-2.5 md:backdrop-blur-none dark:border-stone-500/30 sm:dark:bg-stone-700/20",
          )}
        >
          <div className="flex items-end gap-2">
            <ProfileImage
              className={cn(
                "h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]",
              )}
            />
            <p className="text-muted-foreground block font-mono text-xs sm:hidden">
              {pathname}
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <DesktopMenuBar path={pathname} links={linksWithFeatureFlags} />
          </div>
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <MobileMenu links={linksWithFeatureFlags} />
          </div>
        </div>
        <MobileDock path={pathname} links={linksWithFeatureFlags} />
      </nav>
    </>
  );
};

export default TopBar;
