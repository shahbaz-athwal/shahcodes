"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import PlayerJson from "@/lib/player.json";
import { useSpotify } from "@/hooks/useSpotify";
import Spotify from "./icons/Spotify";
import Image from "next/image";
import { TextGradient } from "./ui/textgradient";

const PlayerAnimation = () => {
  return <Lottie loop animationData={PlayerJson} play />;
};

const Player = () => {
  const { listening } = useSpotify();

  const url = listening?.isPlaying ? listening.url : " /spotify";

  const progress = useMemo(() => {
    if (listening.progress && listening.duration) {
      return (listening.progress / listening.duration) * 100;
    }
    return 0;
  }, [listening]);

  return (
    <div className="mx-4 py-12 md:mx-0">
      <h1 className="pb-8 text-3xl font-bold leading-tight">
        <TextGradient>Currently Playing</TextGradient>
      </h1>
      <div className="rounded-lg bg-black bg-opacity-60 p-4 shadow-lg dark:bg-opacity-30 dark:shadow-zinc-900">
        <div className="flex flex-col items-center md:flex-row">
          <Link
            target={listening?.isPlaying ? "_blank" : "_self"}
            aria-label="Listen on Spotify"
            rel="noopener noreferrer"
            title="Listen on Spotify"
            href={url!}
            className="mb-4 flex-shrink-0 md:mb-0 md:mr-4"
          >
            {listening?.isPlaying ? (
              <div className="h-auto w-auto">
                <Image
                  height={400}
                  width={400}
                  priority={true}
                  src={listening?.thumbnail || ""}
                  alt={listening?.album || "Album cover"}
                  className="h-64 w-64 rounded-lg shadow-lg md:h-32 md:w-32"
                />
              </div>
            ) : (
              <Spotify />
            )}
          </Link>

          <div className="w-full flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col text-left">
                <p className="text-lg font-semibold text-white">
                  {listening?.isPlaying ? listening.title : "Not Listening"}
                </p>
                <p className="text-sm text-gray-400">{listening?.isPlaying ? listening.artist : "Spotify"}</p>
              </div>
            </div>
            {listening?.isPlaying && (
              <div className="mt-2">
                <div className="relative h-1 w-full rounded-full bg-gray-700">
                  <div
                    className="absolute left-0 top-0 h-1 rounded-full bg-green-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-center">
                  <PlayerAnimation />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Player);
