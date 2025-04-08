"use client";

import { ProfileImage } from "./ProfileImage";
import ThemeToggle from "./ThemeToggle";
import { DesktopMenuBar, MobileDock } from "./MenuBar";
import { cn } from "@/lib/utils";

// const LocationSection = () => (
//   <div className="flex flex-col items-end justify-between text-right text-xs font-[350] text-zinc-700 dark:text-zinc-300 sm:text-sm">
//     <div>
//       <Suspense
//         fallback={
//           <div>
//             <div className="blur-md">Last visit from:</div>
//             <div className="blur-md">I am blured</div>
//           </div>
//         }
//       >
//         <LocationData />
//       </Suspense>
//     </div>
//   </div>
// );

const TopBar = () => {
  return (
    <>
      <nav className="relative isolate z-[10]">
        <div
          className={cn(
            "shadow-surface-glass fixed inset-x-0 top-0 mx-auto flex w-full max-w-3xl items-center justify-between rounded-bl-3xl rounded-br-3xl border-b border-zinc-400 px-6 py-1.5 backdrop-blur dark:border-zinc-700 dark:text-gray-200 sm:border-x sm:px-12 sm:py-3",
          )}
        >
          <ProfileImage className={cn("h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]")} />
          <DesktopMenuBar />
          <ThemeToggle />
        </div>
        <MobileDock />
      </nav>
    </>
  );
};

export default TopBar;
