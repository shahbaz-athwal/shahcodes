"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 w-full flex justify-center">
      <div className="max-w-4xl w-full flex justify-end pr-5 md:pr-0">
        <button
          className={`w-[45px] h-[45px] backdrop-blur-lg shadow-lg rounded-full flex items-center justify-center hover:scale-[1.10] active:scale-105 transition-transform duration-300 ease-in-out ${
            darkMode
              ? "bg-gradient-to-r from-pink-700 to-purple-500 text-black"
              : "bg-gradient-to-r from-gray-600 to-indigo-500 text-white"
          }`}
          onClick={toggleTheme}
        >
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
