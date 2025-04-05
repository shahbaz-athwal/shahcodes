"use client";

import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie-player";
import PlayerJson from "@/lib/player.json";
import Spotify from "@/components/icons/Spotify";
import Image from "next/image";
import { TextGradient } from "@/components/ui/textgradient";
import { useElapsedTime } from "@/hooks/useElapsedTime";
import { useSpotify } from "@/hooks/useSpotify";

const PlayerAnimation = () => {
  return <Lottie loop animationData={PlayerJson} play style={{ height: 50 }} />;
};

const ProgressBar = ({ startTime, endTime }: { startTime: number; endTime: number }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const { elapsedFormatted, totalFormatted, progressPercentage } = useElapsedTime(startTime, endTime);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progressPercentage}%`;
    }
  }, [progressPercentage]);

  return (
    <>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-800/70">
        <div
          ref={progressRef}
          className="absolute left-0 top-0 h-full rounded-full bg-stone-400"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="mb-1 mt-2 flex justify-between text-xs font-medium text-gray-400">
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
      <h1 className="py-10 text-3xl font-bold leading-tight">
        <TextGradient>Currently Playing</TextGradient>
      </h1>
      <div className="dark:from-white/8 dark:to-white/4 mx-4 rounded-xl bg-gradient-to-br from-stone-900/60 to-stone-900/90 p-5 shadow-2xl backdrop-blur-sm dark:from-stone-900/40 dark:to-stone-900/60">
        <div className="flex min-h-fit flex-col items-center md:flex-row md:items-start md:space-x-5">
          {!listening ? (
            <div className="group mb-5 flex h-44 w-44 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-stone-900/70 shadow-md transition-all duration-300 md:mb-0">
              <Spotify className="h-16 w-16 opacity-80" />
            </div>
          ) : (
            <a
              target="_blank"
              aria-label="Listen on Spotify"
              rel="noopener noreferrer"
              title="Listen on Spotify"
              href={`https://open.spotify.com/track/${listening.track_id}`}
              className="group mb-5 flex h-44 w-44 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:mb-0"
            >
              <Image
                height={400}
                width={400}
                priority={true}
                src={listening.album_art_url}
                alt={listening.album || "Album cover"}
                className="h-44 w-44 object-cover transition-transform duration-500"
              />
            </a>
          )}

          <div className="w-full flex-1">
            {!listening ? (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-center md:text-left">
                  <p className="text-lg font-bold text-white sm:pt-[70px]">Not Playing</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex flex-col space-y-1 text-center md:text-left">
                  <p className="text-lg font-bold text-white">{listening.song}</p>
                  <p className="text-sm text-gray-300">{listening.artist}</p>
                </div>
                <div className="mt-5">
                  <ProgressBar startTime={listening.timestamps.start} endTime={listening.timestamps.end} />
                  <div className="mt-3 flex justify-center">
                    <PlayerAnimation />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SpotifyPlayer);
