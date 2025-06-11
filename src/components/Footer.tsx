const Footer = () => {
  return (
    <footer className="text-muted-foreground mt-32 flex w-full max-w-2xl justify-between rounded-tl-3xl rounded-tr-3xl border-t border-stone-300 px-6 py-4 pb-36 font-mono text-xs tracking-tight sm:mb-0 sm:border-x sm:py-5 md:text-sm dark:border-stone-500/30 dark:bg-stone-600/10">
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
