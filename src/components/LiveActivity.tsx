"use client";
import { useActivity } from "@/hooks/useActivity";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useCallback, useRef } from "react";
import { MotionParent, MotionChild } from "./Motion";
import { Activity, SpotifyData } from "@/types/Lanyard";
import { useElapsedTime } from "@/hooks/useElapsedTime";

const CodeActivity = ({ codeData }: { codeData: Activity }) => {
  const startTime = codeData.timestamps?.start;
  const { elapsedFormatted } = useElapsedTime(startTime);

  if (!codeData) return null;

  return (
    <Card className="w-96 rounded-lg border-none bg-stone-100 p-4 text-gray-900 dark:bg-stone-800/50 dark:text-white">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-medium">Coding</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-stone-200 dark:bg-stone-700">
            {codeData.assets?.large_image ? (
              <img
                src={`https://cdn.discordapp.com/app-assets/${codeData.application_id}/${codeData.assets.large_image}.png`}
                alt={codeData.assets.large_text || ""}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-stone-200 dark:bg-stone-700"></div>
            )}
          </div>
          {codeData.assets?.small_image && (
            <div className="absolute -bottom-1 -right-1 h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-stone-200 dark:border-stone-800 dark:bg-stone-700">
              <img
                src={`https://cdn.discordapp.com/app-assets/${codeData.application_id}/${codeData.assets.small_image}.png`}
                alt={codeData.assets.small_text || ""}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="text-sm font-medium">{codeData.name}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{codeData.details}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{codeData.state}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            {elapsedFormatted}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Spotify activity component with optimized animation
const SpotifyActivity = ({ spotifyData }: { spotifyData: SpotifyData }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const startTime = spotifyData.timestamps.start;
  const endTime = spotifyData.timestamps.end;

  const { elapsedFormatted, totalFormatted, progressPercentage } = useElapsedTime(startTime, endTime);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progressPercentage}%`;
    }
  }, [progressPercentage]);

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
          <div className="text-sm font-medium">{spotifyData.song}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{spotifyData.artist}</div>

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
  const [codeData, setCodeData] = useState<Activity>();

  useEffect(() => {
    if (status === "connected" && data) {
      const hasVsCode = data.activities.find((a) => a.name === "Visual Studio Code");
      setCodeData(hasVsCode);
    }
  }, [data, status]);

  if (status !== "connected" || !data) {
    return null;
  }

  return (
    <MotionParent>
      {codeData && (
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
