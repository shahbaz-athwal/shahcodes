"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollAdjust() {
  const pathname = usePathname();
  // biome-ignore lint/correctness/useExhaustiveDependencies: fix
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      // Scroll the main element to the top
      mainContent.scrollTop = 0;
    }
  }, [pathname]);
  return null;
}
