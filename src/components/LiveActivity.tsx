"use client";
import { useActivity } from "@/hooks/useActivity";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { MotionParent, MotionChild } from "./Motion";

// Types
interface Activity {
  id: string;
  name: string;
  type: number;
  application_id?: string;
  state?: string;
  details?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

interface SpotifyData {
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  timestamps: {
    start: number;
    end: number;
  };
}

// Helper functions
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

// Game activity component
const GameActivity = ({ activities }: { activities: Activity[] }) => {
  const gameActivities = activities.filter((a) => a.application_id === "383226320970055681");

  if (gameActivities.length === 0) return null;

  return (
    <Card className="w-96 rounded-lg border-none bg-stone-100 p-4 text-gray-900 dark:bg-stone-800/50 dark:text-white">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-medium">Playing</div>
      </div>

      {gameActivities.map((activity, index) => (
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
            <div className="text-sm text-gray-600 dark:text-gray-400">{activity.details}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{activity.state}</div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              {activity.timestamps?.start
                ? formatTime(Math.floor((Date.now() - activity.timestamps.start) / 1000))
                : ""}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

// Spotify activity component
const SpotifyActivity = ({ spotifyData }: { spotifyData: SpotifyData }) => {
  const [elapsed, setElapsed] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const start = spotifyData.timestamps.start;
      const end = spotifyData.timestamps.end;

      const elapsedTime = Math.floor((now - start) / 1000);
      const totalTime = Math.floor((end - start) / 1000);

      setElapsed(elapsedTime);
      setTotal(totalTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [spotifyData]);

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
              <span>{formatTime(elapsed)}</span>
              <span>{formatTime(total)}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div
                className="h-full bg-stone-500 dark:bg-white"
                style={{ width: `${Math.min(100, (elapsed / total) * 100)}%` }}
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
  const { data, status } = useActivity("685471362961244160");

  if (status !== "connected" || !data) {
    return null;
  }

  return (
    <MotionParent>
      <MotionChild>
        <GameActivity activities={data.activities || []} />
      </MotionChild>
      <MotionChild>{data.spotify && <SpotifyActivity spotifyData={data.spotify} />}</MotionChild>
    </MotionParent>
  );
}
