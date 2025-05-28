"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return hasMounted;
};

export const useThemeToggle = (): {
  theme: "dark" | "light" | undefined;
  setTheme: (theme: string) => void;
  mounted: boolean;
} => {
  const { theme, setTheme } = useTheme()
  const mounted = useHasMounted()

  return { theme: theme as "dark" | "light", setTheme, mounted }
}

const ThemeToggle = () => {
  const { theme, setTheme, mounted } = useThemeToggle()

  const handleThemeChange = (theme: string, e: React.MouseEvent) => {
    // Only proceed if the browser supports view transitions
    if (document.startViewTransition) {
      // Get click coordinates for the wave effect origin
      const x = e.clientX;
      const y = e.clientY;
      
      // Set the CSS variables for the wave effect origin
      document.documentElement.style.setProperty('--x', `${x}px`);
      document.documentElement.style.setProperty('--y', `${y}px`);
      
      // Start the view transition
      document.startViewTransition(() => {
        setTheme(theme);
      });
    } else {
      // Fallback for browsers that don't support view transitions
      setTheme(theme);
    }
  }

  if (!mounted) {
    return (
      <div className="w-0 sm:w-6 h-6 opacity-0" />
    )
  }

  return (
    <button
      title="Change Theme"
      className="items-center justify-center opacity-70 transition-transform hover:scale-110"
      onClick={(e) => handleThemeChange(theme === "dark" ? "light" : "dark", e)}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
