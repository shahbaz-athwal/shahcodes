import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 mt-28 w-full max-w-2xl border-t border-zinc-200 dark:border-zinc-700 pt-8 pb-5  text-zinc-700 dark:text-zinc-300 font-mono text-xs md:text-sm tracking-tight flex justify-between">
      <p>
        &copy; {new Date().getFullYear()} {"/"} Shahbaz Singh
      </p>

      <Link href="https://github.com/shahbaz-athwal/shahcodes">
        View Source
      </Link>
    </footer>
  );
};

export default Footer;
