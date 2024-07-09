"use client";
import { motion } from "framer-motion";

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
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        whileTap={{ scale: 0.97 }}
      >
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-800 text-white rounded-md dark:bg-gray-200 dark:text-black"
        >
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
