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

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const mounted = useHasMounted()

  return { theme, setTheme, mounted }
}

const ThemeToggle = () => {
  const { theme, setTheme, mounted } = useThemeToggle()

  if (!mounted) {
    return (
      <div className="w-6 h-6 opacity-0" aria-hidden="true" />
    )
  }

  return (
    <button
      title="Change Theme"
      className="items-center justify-center opacity-70 transition-transform hover:scale-110"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
