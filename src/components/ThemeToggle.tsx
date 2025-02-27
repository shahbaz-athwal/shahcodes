"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      title="Change Theme"
      className="mt-2 flex h-8 w-8 items-center justify-center rounded-full align-middle opacity-75 transition-transform hover:scale-110 sm:h-10 sm:w-10"
      onClick={toggleTheme}
    >
      {!darkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
