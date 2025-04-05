"use client";

import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie-player";
import PlayerJson from "@/lib/player.json";
import Spotify from "../../components/icons/Spotify";
import Image from "next/image";
import { TextGradient } from "../../components/ui/textgradient";
import { useElapsedTime } from "@/hooks/useElapsedTime";
import { useSpotify } from "@/hooks/useSpotify";

const PlayerAnimation = () => {
  return <Lottie loop animationData={PlayerJson} play />;
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
      <div className="relative h-1 w-full rounded-full bg-gray-700">
        <div
          ref={progressRef}
          className="absolute left-0 top-0 h-1 rounded-full bg-green-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="mb-0.5 mt-1 flex justify-between text-xs text-gray-400">
        <span>{elapsedFormatted}</span>
        <span>{totalFormatted}</span>
      </div>
    </>
  );
};

const SpotifyPlayer = () => {
  const { listening } = useSpotify();

  if (!listening) {
    return (
      <div className="py-12">
        <h1 className="pb-8 text-3xl font-bold leading-tight">
          <TextGradient>Currently Playing</TextGradient>
        </h1>
        <div className="m-2 rounded-lg bg-black bg-opacity-50 px-3 py-6 shadow-xl dark:bg-white dark:bg-opacity-[8%] sm:m-0 sm:p-6">
          <div className="flex flex-col items-center justify-center py-8">
            <Spotify />
            <p className="text-lg font-semibold text-white">Not Playing</p>
            <p className="text-sm text-gray-400">No music playing on Spotify</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <h1 className="pb-8 text-3xl font-bold leading-tight">
        <TextGradient>Currently Playing</TextGradient>
      </h1>
      <div className="m-2 rounded-lg bg-black bg-opacity-50 px-3 py-6 shadow-xl dark:bg-white dark:bg-opacity-[8%] sm:m-0 sm:p-6">
        <div className="flex flex-col items-center md:flex-row">
          <a
            target="_blank"
            aria-label="Listen on Spotify"
            rel="noopener noreferrer"
            title="Listen on Spotify"
            href={`https://open.spotify.com/track/${listening.track_id}`}
            className="-py-2 mb-6 flex-shrink-0 md:mb-0 md:mr-4"
          >
            <div className="-mx- h-auto w-auto">
              <Image
                height={400}
                width={400}
                priority={true}
                src={listening.album_art_url}
                alt={listening.album || "Album cover"}
                className="h-[17rem] w-[17rem] rounded-lg shadow-lg md:h-48 md:w-48"
              />
            </div>
          </a>

          <div className="w-full flex-1 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col text-left">
                <p className="text-lg font-semibold text-white">{listening.song}</p>
                <p className="text-sm text-gray-400">{listening.artist}</p>
              </div>
            </div>
            <div className="mt-2">
              <ProgressBar startTime={listening.timestamps.start} endTime={listening.timestamps.end} />
              <div className="mt-2 flex justify-center">
                <PlayerAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SpotifyPlayer);
