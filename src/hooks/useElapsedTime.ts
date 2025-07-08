"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatTime } from "@/lib/utils";

export const useElapsedTime = (startTime?: number, endTime?: number) => {
  const [elapsedFormatted, setElapsedFormatted] = useState<string>("00:00");
  const [totalFormatted, setTotalFormatted] = useState<string>("00:00");
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  const animationRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(0);

  const updateTime = useCallback(() => {
    if (!startTime) return;

    const now = Date.now();

    const shouldUpdateUI = now - lastUpdateRef.current >= 1000;

    const elapsed = now - startTime;
    const elapsedSeconds = Math.floor(elapsed / 1000);

    if (shouldUpdateUI) {
      setElapsedFormatted(formatTime(elapsedSeconds));

      if (endTime) {
        const totalDuration = endTime - startTime;
        const totalSeconds = Math.floor(totalDuration / 1000);
        const percentage = Math.min(100, (elapsed / totalDuration) * 100);

        setTotalFormatted(formatTime(totalSeconds));
        setProgressPercentage(percentage);
      }

      lastUpdateRef.current = now;
    }

    animationRef.current = requestAnimationFrame(updateTime);
  }, [startTime, endTime]);

  useEffect(() => {
    if (startTime) {
      animationRef.current = requestAnimationFrame(updateTime);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startTime, updateTime]);

  return { elapsedFormatted, totalFormatted, progressPercentage };
};
