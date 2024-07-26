"use client";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
    else setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed bottom-5 w-full flex justify-center">
      <div className="max-w-3xl w-full flex justify-end pr-2">
        <button
          className="text-white bg-opacity-60 dark:bg-opacity-50 dark:text-black bg-black w-[40px] h-[40px] backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.10] active:scale-105 transition-all dark:bg-white"
          onClick={toggleTheme}
        >
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
