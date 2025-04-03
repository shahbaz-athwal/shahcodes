"use client";
import { useActivity } from "@/hooks/useActivity";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useCallback, useRef } from "react";
import { MotionParent, MotionChild } from "./Motion";
import { Activity, SpotifyData } from "@/types/Lanyard";
import { formatTime } from "@/lib/utils";

const CodeActivity = ({ codeData }: { codeData: Activity[] }) => {
  const [elapsedTimes, setElapsedTimes] = useState<Record<number, string>>({});
  const animationRef = useRef<number>();

  const updateElapsedTimes = useCallback(() => {
    const updatedTimes: Record<number, string> = {};

    codeData.forEach((activity, index) => {
      if (activity.timestamps?.start) {
        const elapsed = Math.floor((Date.now() - activity.timestamps.start) / 1000);
        updatedTimes[index] = formatTime(elapsed);
      }
    });

    setElapsedTimes(updatedTimes);
    animationRef.current = requestAnimationFrame(updateElapsedTimes);
  }, [codeData]);

  useEffect(() => {
    if (codeData.length > 0) {
      animationRef.current = requestAnimationFrame(updateElapsedTimes);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [codeData, updateElapsedTimes]);

  if (codeData.length === 0) return null;

  return (
    <Card className="w-96 rounded-lg border-none bg-stone-100 p-4 text-gray-900 dark:bg-stone-800/50 dark:text-white">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-medium">Coding</div>
      </div>

      {codeData.map((activity, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-stone-200 dark:bg-stone-700">
              {activity.assets?.large_image ? (
                <img
                  src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
                  alt={activity.assets.large_text || ""}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-stone-200 dark:bg-stone-700"></div>
              )}
            </div>
            {activity.assets?.small_image && (
              <div className="absolute -bottom-1 -right-1 h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-stone-200 dark:border-stone-800 dark:bg-stone-700">
                <img
                  src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png`}
                  alt={activity.assets.small_text || ""}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="text-base font-medium">{activity.name}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{activity.details}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{activity.state}</div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              {activity.timestamps?.start
                ? elapsedTimes[index] || formatTime(Math.floor((Date.now() - activity.timestamps.start) / 1000))
                : ""}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

// Spotify activity component with optimized animation
const SpotifyActivity = ({ spotifyData }: { spotifyData: SpotifyData }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(spotifyData.timestamps.start);
  const endTimeRef = useRef<number>(spotifyData.timestamps.end);
  const [elapsedFormatted, setElapsedFormatted] = useState<string>("00:00");
  const [totalFormatted, setTotalFormatted] = useState<string>("00:00");

  // Calculate total duration once
  const totalDuration = endTimeRef.current - startTimeRef.current;

  // Use requestAnimationFrame for smoother animation
  const updateProgress = useCallback(() => {
    if (!progressRef.current) return;

    const now = Date.now();
    const elapsed = now - startTimeRef.current;
    const percentage = Math.min(100, (elapsed / totalDuration) * 100);

    // Update progress bar width
    progressRef.current.style.width = `${percentage}%`;

    // Update formatted times
    const elapsedSeconds = Math.floor(elapsed / 1000);
    const totalSeconds = Math.floor(totalDuration / 1000);
    setElapsedFormatted(formatTime(elapsedSeconds));
    setTotalFormatted(formatTime(totalSeconds));

    // Continue animation
    animationRef.current = requestAnimationFrame(updateProgress);
  }, [totalDuration]);

  // Set up and clean up animation frame
  useEffect(() => {
    // Initialize values from props
    startTimeRef.current = spotifyData.timestamps.start;
    endTimeRef.current = spotifyData.timestamps.end;

    // Start animation
    animationRef.current = requestAnimationFrame(updateProgress);

    // Clean up on unmount or when data changes
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [spotifyData, updateProgress]);

  return (
    <Card className="my-4 w-96 rounded-lg border-none bg-stone-100 p-4 text-gray-900 dark:bg-stone-800/50 dark:text-white">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm font-medium">Listening to Spotify</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-md bg-stone-200 dark:bg-stone-700">
          <img src={spotifyData.album_art_url} alt={spotifyData.album} className="h-full w-full object-cover" />
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="text-base font-medium">{spotifyData.song}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{spotifyData.artist}</div>

          <div className="mt-2">
            <div className="mb-1 flex justify-between text-xs text-gray-500">
              <span>{elapsedFormatted}</span>
              <span>{totalFormatted}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div ref={progressRef} className="h-full bg-stone-500 dark:bg-white" style={{ width: "0%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Main component
export default function LiveActivity() {
  const { data, status } = useActivity("685471362961244160");
  const [codeData, setCodeData] = useState<Activity[]>([]);

  useEffect(() => {
    if (status === "connected" && data) {
      const hasVsCode = data.activities.find((a) => a.name === "Visual Studio Code");
      setCodeData(hasVsCode ? [hasVsCode] : []);
    }
  }, [data, status]);

  if (status !== "connected" || !data) {
    return null;
  }

  return (
    <MotionParent>
      {codeData.length > 0 && (
        <MotionChild key="code-activity">
          <CodeActivity codeData={codeData} />
        </MotionChild>
      )}

      {data.spotify && (
        <MotionChild key="spotify-activity">
          <SpotifyActivity spotifyData={data.spotify} />
        </MotionChild>
      )}
    </MotionParent>
  );
}
