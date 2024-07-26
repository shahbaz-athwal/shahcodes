"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <div className="fixed bottom-5 w-full flex justify-center">
      <div className="max-w-3xl w-full flex justify-end pr-2">
        <button
          className="text-white bg-opacity-70 dark:bg-opacity-70 dark:text-black bg-black w-[40px] h-[40px] backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.10] active:scale-105 transition-all dark:bg-white"
          onClick={toggleTheme}
        >
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
