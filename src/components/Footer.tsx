import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-sm items-center mt-32">
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
