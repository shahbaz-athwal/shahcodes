"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      title="Change Theme"
      className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
      onClick={toggleTheme}
    >
      {!darkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
