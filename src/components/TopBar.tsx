import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { Suspense } from "react";
import { LocationData } from "./LocationData";
import { ProfileImage } from "./ProfileImage";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import MenuBar from "./MenuBar";

type ProfileInfo = {
  name: string;
  title: string;
  socialLinks: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
};

const ProfileSection = ({ profile }: { profile: ProfileInfo }) => (
  <div>
    <div className="mb-2 mt-8">
      <ProfileImage />
    </div>
    <h1 className="text-xl font-bold sm:text-2xl">{profile.name}</h1>
    <p className="text-sm text-muted-foreground sm:text-base">{profile.title}</p>
    <div className="mt-2 flex space-x-4 text-muted-foreground">
      {profile.socialLinks.map((link, index) => (
        <Link key={index} href={link.href} target="_blank" title={link.title}>
          {link.icon}
        </Link>
      ))}
    </div>
  </div>
);

const LocationSection = () => (
  <div className="flex flex-col items-end justify-between text-right text-xs font-[350] text-zinc-700 dark:text-zinc-300 sm:text-sm">
    <ThemeToggle />
    <div>
      <Suspense
        fallback={
          <div>
            <div className="blur-md">Last visit from:</div>
            <div className="blur-md">I am blured</div>
          </div>
        }
      >
        <LocationData />
      </Suspense>
    </div>
  </div>
);

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

  return (
    <>
      <nav>
        <div className="mb-4 flex w-full justify-between border-b border-zinc-700 pb-4 dark:border-zinc-500 dark:text-gray-200">
          <ProfileSection profile={profileInfo} />
          <LocationSection />
        </div>
        <MenuBar />
      </nav>
    </>
  );
};

export default TopBar;
