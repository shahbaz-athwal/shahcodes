"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useActivity } from "@/hooks/useActivity";
import { useElapsedTime } from "@/hooks/useElapsedTime";
import type { Activity, SpotifyData } from "@/types/Lanyard";
import { MotionChild, MotionParent } from "./Motion";

const CodeActivity = ({ codeData }: { codeData: Activity }) => {
  const startTime = codeData.timestamps?.start;
  const { elapsedFormatted } = useElapsedTime(startTime);

  if (!codeData) return null;

  return (
    <Card className="w-64 rounded-2xl px-4 py-3 2xl:w-72">
      <div className="flex gap-3">
        <div className="relative h-fit w-[58px] shrink-0">
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
            <div className="absolute -right-1 bottom-0 h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-stone-200 dark:border-stone-800 dark:bg-stone-700">
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
          <div className="text-xs text-stone-600 dark:text-stone-400">
            {codeData.details}
          </div>
          <div className="text-xs text-stone-600 dark:text-stone-400">
            {codeData.state}
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] text-stone-500 dark:text-stone-500">
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

  const { elapsedFormatted, totalFormatted, progressPercentage } =
    useElapsedTime(startTime, endTime);

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
    <Card className="my-4 w-64 rounded-2xl px-4 py-3 2xl:w-72">
      <div className="flex gap-3">
        <Link
          href={albumUrl}
          title={spotifyData.album}
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

        <div className="flex-1 overflow-hidden">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit max-w-full truncate text-sm font-medium"
              >
                {spotifyData.song}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Play on Spotify</p>
            </TooltipContent>
          </Tooltip>

          <Link
            href={artistUrl}
            title={spotifyData.artist}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit max-w-full truncate text-xs text-stone-600 dark:text-stone-400"
          >
            {spotifyData.artist}
          </Link>

          <div className="mb-1">
            <div className="mb-0.5 flex justify-between font-mono text-[11px] text-gray-500">
              <span>{elapsedFormatted}</span>
              <span>{totalFormatted}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div
                ref={progressRef}
                className="h-full bg-stone-500/70 dark:bg-white/70"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Main component
export default function LiveActivity() {
  const { data, connectionStatus } = useActivity("685471362961244160");
  const [codeData, setCodeData] = useState<Activity>();

  const pathname = usePathname();

  useEffect(() => {
    if (connectionStatus === "connected" && data) {
      const hasVsCode = data.activities.find(
        (a) => a.name === "Visual Studio Code" || a.name === "Cursor",
      );
      setCodeData(hasVsCode);
    }
  }, [data, connectionStatus]);

  if (connectionStatus !== "connected" || !data) {
    return null;
  }

  return (
    <MotionParent>
      {(codeData || (data.spotify && pathname !== "/spotify")) && (
        <div className="my-2 font-mono">Live Activity</div>
      )}
      {codeData && (
        <MotionChild key="code-activity">
          <CodeActivity codeData={codeData} />
        </MotionChild>
      )}

      {data.spotify && pathname !== "/spotify" && (
        <MotionChild key="spotify-activity">
          <SpotifyActivity spotifyData={data.spotify} />
        </MotionChild>
      )}
    </MotionParent>
  );
}
