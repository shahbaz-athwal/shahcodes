"use client";
import { useTheme } from "@/hooks/useTheme";

export default function WhisperellaFrame() {
  const { darkMode } = useTheme();

  return (
    <iframe
      loading="lazy"
      src={`https://whisperella.shahcodes.in/embed?username=shahbazathwal2107&mode=${darkMode && "dark"}`}
      // src={`http://localhost:3000/embed?username=shahbazathwal2107&mode=${darkMode && "dark"}`}
      className="h-72 w-full"
    />
  );
}
