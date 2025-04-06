"use client";

import { usePathname } from "next/navigation";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { ProfileImage } from "./ProfileImage";
import ThemeToggle from "./ThemeToggle";
import MenuBar from "./MenuBar";
import { cn } from "@/lib/utils";
type ProfileInfo = {
  name: string;
  title: string;
  socialLinks: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
};

const ProfileSection = ({ profile }: { profile: ProfileInfo }) => {
  const path = usePathname();
  return (
    <div>
      <div className={cn("mb-2", path !== "/" && "mb-0 mt-0")}>
        <ProfileImage className={cn({ "h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]": path !== "/" })} />
      </div>
      {path === "/" && (
        <>
          <h1 className="text-xl font-bold sm:text-2xl">{profile.name}</h1>
          <p className="text-sm text-muted-foreground sm:text-base">{profile.title}</p>
          <div className="mt-2 flex space-x-4 text-muted-foreground">
            {profile.socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" title={link.title}>
                {link.icon}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// const LocationSection = () => (
//   <div className="flex flex-col items-end justify-between text-right text-xs font-[350] text-zinc-700 dark:text-zinc-300 sm:text-sm">
//     <ThemeToggle />
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
  const profileInfo: ProfileInfo = {
    name: "Shahbaz Singh",
    title: "Full Stack Developer",
    socialLinks: [
      {
        href: "https://github.com/shahbaz-athwal",
        title: "GitHub",
        icon: <IconBrandGithub />,
      },
      {
        href: "https://www.linkedin.com/in/shahbaz-athwal/",
        title: "LinkedIn",
        icon: <IconBrandLinkedin />,
      },
      {
        href: "https://x.com/shahcodes",
        title: "X",
        icon: <IconBrandX />,
      },
    ],
  };
  const path = usePathname();

  return (
    <>
      <nav>
        <div className="mb-2 flex w-full justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700 dark:text-gray-200">
          <ProfileSection profile={profileInfo} />
          <div className={cn("flex items-center", path === "/" && "absolute left-0 right-0 top-[235px]")}>
            <MenuBar />
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default TopBar;
