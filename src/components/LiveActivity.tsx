"use client";
import { useActivity } from "@/hooks/useActivity";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { MotionParent, MotionChild } from "./Motion";
import { Activity, SpotifyData } from "@/types/Lanyard";
import { useElapsedTime } from "@/hooks/useElapsedTime";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

const CodeActivity = ({ codeData }: { codeData: Activity }) => {
  const startTime = codeData.timestamps?.start;
  const { elapsedFormatted } = useElapsedTime(startTime);

  if (!codeData) return null;

  return (
    <Card className="w-64 rounded-md border-none bg-stone-100/80 px-3 py-2 text-gray-900 shadow-xs dark:bg-stone-800/30 dark:text-white">
      <div className="flex gap-3">
        <div className="relative h-[72px] w-[60px] shrink-0">
          <div className="my-1 flex h-14 w-14 overflow-hidden rounded-md bg-stone-200 dark:bg-stone-700">
            {codeData.assets?.large_image ? (
              <Image
                src={`https://cdn.discordapp.com/app-assets/${codeData.application_id}/${codeData.assets.large_image}.png`}
                alt={codeData.assets.large_text || ""}
                className="h-full w-full object-cover"
                width={48}
                height={48}
              />
            ) : (
              <div className="h-full w-full bg-stone-200 dark:bg-stone-700"></div>
            )}
          </div>
          {codeData.assets?.small_image && (
            <div className="absolute -right-1 bottom-2 h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-stone-200 dark:border-stone-800 dark:bg-stone-700">
              <Image
                src={`https://cdn.discordapp.com/app-assets/${codeData.application_id}/${codeData.assets.small_image}.png`}
                alt={codeData.assets.small_text || ""}
                className="h-full w-full object-cover"
                width={24}
                height={24}
              />
            </div>
          )}
        </div>

        <div className="flex-1 space-y-0.5 overflow-hidden">
          <div className="text-sm font-medium">Cursor</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{codeData.details}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{codeData.state}</div>
          <div className="flex items-center gap-1 font-mono text-[11px] text-gray-500 dark:text-gray-500">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
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

  // Generate Spotify URLs
  const songUrl = `https://open.spotify.com/track/${spotifyData.track_id}`;
  const artistUrl = `https://open.spotify.com/search/${encodeURIComponent(spotifyData.artist)}`;
  const albumUrl = `https://open.spotify.com/search/${encodeURIComponent(spotifyData.album)}`;

  return (
    <Card className="my-4 w-64 rounded-md border-none bg-stone-100/80 px-3 py-2 text-gray-900 shadow-xs dark:bg-stone-800/30 dark:text-white">
      <div className="flex gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={albumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="my-1 block h-14 w-14 overflow-hidden rounded-md bg-stone-200 dark:bg-stone-700"
            >
              <Image
                src={spotifyData.album_art_url}
                alt={spotifyData.album}
                className="h-full w-full object-cover"
                width={48}
                height={48}
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{spotifyData.album}</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex-1 overflow-hidden">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={songUrl} target="_blank" rel="noopener noreferrer" className="truncate text-sm font-medium">
                {spotifyData.song}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Play on Spotify</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={artistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate text-xs text-gray-600 hover:underline dark:text-gray-400"
              >
                {spotifyData.artist}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{spotifyData.artist}</p>
            </TooltipContent>
          </Tooltip>

          <div className="mb-1">
            <div className="mb-0.5 flex justify-between font-mono text-[11px] text-gray-500">
              <span>{elapsedFormatted}</span>
              <span>{totalFormatted}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div ref={progressRef} className="h-full bg-stone-500/70 dark:bg-white/70" style={{ width: "0%" }}></div>
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

  const pathname = usePathname();

  useEffect(() => {
    if (status === "connected" && data) {
      const hasVsCode = data.activities.find((a) => a.name === "Visual Studio Code" || a.name === "Cursor");
      setCodeData(hasVsCode);
    }
  }, [data, status]);

  if (status !== "connected" || !data) {
    return null;
  }

  return (
    <MotionParent>
      {(codeData || (data.spotify && pathname !== "/spotify")) && (
        <div className="my-2 text-sm font-medium">Live Activity</div>
      )}
      <MotionChild key="code-activity">{codeData && <CodeActivity codeData={codeData} />}</MotionChild>

      {data.spotify && pathname !== "/spotify" && (
        <MotionChild key="spotify-activity">
          <SpotifyActivity spotifyData={data.spotify} />
        </MotionChild>
      )}
    </MotionParent>
  );
}
