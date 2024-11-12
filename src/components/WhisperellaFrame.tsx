"use client"
import { useTheme } from "@/hooks/useTheme";

export default function WhisperellaFrame() {
  const { darkMode } = useTheme();

  return (
    <iframe
      loading="lazy"
      src={`https://whisperella.shahcodes.in/embed?mode=${darkMode && "dark"}`}
      className="w-full h-72"
    />
  );
}