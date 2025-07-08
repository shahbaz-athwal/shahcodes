"use client";

import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie-player";
import PlayerJson from "@/lib/player.json";
import Image from "next/image";
import { TextGradient } from "@/components/ui/textgradient";
import { useElapsedTime } from "@/hooks/useElapsedTime";
import { useSpotify } from "@/hooks/useSpotify";
import { FaSpotify } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const PlayerAnimation = () => {
  return (
    <Lottie
      className="invert dark:invert-0"
      loop
      animationData={PlayerJson}
      play
    />
  );
};

const ProgressBar = ({
  startTime,
  endTime,
}: {
  startTime: number;
  endTime: number;
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const { elapsedFormatted, totalFormatted, progressPercentage } =
    useElapsedTime(startTime, endTime);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progressPercentage}%`;
    }
  }, [progressPercentage]);

  return (
    <>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-stone-300/70 dark:bg-stone-700/70">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full rounded-full bg-stone-700 dark:bg-stone-400"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="mt-2 mb-1 flex justify-between text-xs font-medium text-gray-400">
        <span>{elapsedFormatted}</span>
        <span>{totalFormatted}</span>
      </div>
    </>
  );
};

const SpotifyPlayer = () => {
  const { listening } = useSpotify();

  return (
    <div className="pb-12">
      <h1 className="pb-10 text-3xl leading-tight font-extrabold">
        <TextGradient>Currently Playing</TextGradient>
      </h1>
      <Card className="mx-2 space-y-6 p-8 sm:mx-0">
        <div className="flex min-h-fit flex-col items-center sm:flex-row sm:items-start sm:space-x-5">
          {!listening ? (
            <div className="flex h-[176px] w-full flex-col items-center justify-center space-y-4 px-2 sm:-m-8 sm:flex-row sm:gap-28 sm:space-y-0">
              <FaSpotify className="h-24 w-24 rounded-full bg-black text-green-500 opacity-80" />
              <div className="flex flex-col items-center justify-center sm:h-full">
                <div className="text-center md:text-left">
                  <p className="text-muted-foreground font-mono text-lg font-extrabold">
                    Not Playing
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <a
                target="_blank"
                aria-label="Listen on Spotify"
                rel="noopener noreferrer"
                title="Listen on Spotify"
                href={`https://open.spotify.com/track/${listening.track_id}`}
                className="mb-3 aspect-square w-[100%] max-w-[400px] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:mb-0 sm:h-44 sm:w-44"
              >
                <Image
                  height={400}
                  width={400}
                  priority={true}
                  src={listening.album_art_url}
                  alt={listening.album || "Album cover"}
                  className="object-cover transition-transform duration-500"
                />
              </a>
              <div className="w-full flex-1">
                <div className="flex flex-col">
                  <div className="flex flex-col space-y-0.5 text-left">
                    <p className="text-primary text-lg font-bold">
                      {listening.song}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {listening.artist}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <ProgressBar
                      startTime={listening.timestamps.start}
                      endTime={listening.timestamps.end}
                    />
                    <div className="mt- flex justify-center">
                      <PlayerAnimation />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default React.memo(SpotifyPlayer);
