const Footer = () => {
  return (
    <footer className="mt-28 flex w-full max-w-2xl justify-between border-t border-zinc-200 px-4 pb-5 pt-8 font-mono text-xs tracking-tight text-zinc-700 dark:border-zinc-700 dark:text-zinc-300 md:text-sm">
      <p>
        &copy; {new Date().getFullYear()} {"/"} Shahbaz Singh
      </p>

      <a href="https://github.com/shahbaz-athwal/shahcodes" target="_blank">
        View Source
      </a>
    </footer>
  );
};

export default Footer;
