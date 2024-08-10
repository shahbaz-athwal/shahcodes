"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      title="Change Theme"
      className="rounded-full hover:scale-110 transition-transform flex items-center justify-center h-10 w-10"
      onClick={toggleTheme}
    >
      {!darkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
