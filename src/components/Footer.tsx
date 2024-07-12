import Image from "next/image";
import { Suspense } from "react";
import { LocationData } from "./LocationData";

const Footer = () => {
  return (
    <footer className="flex flex-col text-sm items-center mt-32">
      <Suspense
        fallback={<div className="blur-md">Last visit from: sdasd asdasd asdasd</div>}
      >
        <LocationData />
      </Suspense>
      <Image
        width={40}
        height={40}
        src="/logos/peace.svg"
        alt="peace"
        className="brightness-0 dark:invert w-14"
      />
      <p>&copy; {new Date().getFullYear()} - Shahbaz Singh</p>
    </footer>
  );
};

export default Footer;
