"use client";
import { useActivity } from "@/hooks/useActivity";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

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
export default function LiveActivity() {
  const { data, status } = useActivity("685471362961244160");
  const [elapsed, setElapsed] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // Format timestamps for display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!data?.spotify) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const start = data.spotify.timestamps.start;
      const end = data.spotify.timestamps.end;

      const elapsedTime = Math.floor((now - start) / 1000);
      const totalTime = Math.floor((end - start) / 1000);

      setElapsed(elapsedTime);
      setTotal(totalTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  if (status !== "connected" || !data) {
    return;
  }

  return (
    <div className="min-w-md space-y-4">
      {data.activities?.find((a: Activity) => a.application_id === "383226320970055681") && (
        <Card className="w-96 rounded-lg border-none bg-gray-800 p-4 text-white">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-medium">Playing</div>
          </div>

          {data.activities
            .filter((a: Activity) => a.application_id === "383226320970055681")
            .map((activity: Activity, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-gray-700">
                    {activity.assets?.large_image ? (
                      <img
                        src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
                        alt={activity.assets.large_text || ""}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-700"></div>
                    )}
                  </div>
                  {activity.assets?.small_image && (
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 overflow-hidden rounded-full border-2 border-gray-800 bg-gray-700">
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
                  <div className="text-sm text-gray-400">{activity.details}</div>
                  <div className="text-sm text-gray-400">{activity.state}</div>
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
      )}

      {data.spotify && (
        <Card className="rounded-lg border-none bg-gray-800 p-4 text-white">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm font-medium">Listening to Spotify</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-700">
              <img src={data.spotify.album_art_url} alt={data.spotify.album} className="h-full w-full object-cover" />
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="text-base font-medium">{data.spotify.song}</div>
              <div className="text-sm text-gray-400">{data.spotify.artist}</div>

              <div className="mt-2">
                <div className="mb-1 flex justify-between text-xs text-gray-500">
                  <span>{formatTime(elapsed)}</span>
                  <span>{formatTime(total)}</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-gray-700">
                  <div
                    className="h-full bg-white"
                    style={{ width: `${Math.min(100, (elapsed / total) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
