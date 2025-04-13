"use client";

import { useEffect, useState } from "react";

export const LocationUpdater = () => {
  const [hasUpdated, setHasUpdated] = useState(false);

  useEffect(() => {
    if (!hasUpdated) {
      setHasUpdated(true);
      fetch("/api/location", { method: "POST" }).catch((err) => console.error("Failed to update location:", err));
    }
  }, [hasUpdated]);

  return null;
};
