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
    <div className="py-12 mx-4 md:mx-0">
      <h1 className="font-bold text-3xl leading-tight pb-8">
        <TextGradient>Currently Playing</TextGradient>
      </h1>
      <div className="bg-opacity-60 dark:bg-opacity-30 bg-black p-4 rounded-lg shadow-lg dark:shadow-zinc-900">
        <div className="flex flex-col md:flex-row items-center">
          <Link
            target={listening?.isPlaying ? "_blank" : "_self"}
            aria-label="Listen on Spotify"
            rel="noopener noreferrer"
            title="Listen on Spotify"
            href={url!}
            className="mb-4 md:mb-0 md:mr-4 flex-shrink-0"
          >
            {listening?.isPlaying ? (
              <div className="h-auto w-auto">
                <Image
                  height={400}
                  width={400}
                  priority={true}
                  src={listening?.thumbnail || ""}
                  alt={listening?.album || "Album cover"}
                  className="rounded-lg shadow-lg w-64 h-64 md:w-32 md:h-32"
                />
              </div>
            ) : (
              <Spotify />
            )}
          </Link>

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col text-left">
                <p className="text-white text-lg font-semibold">
                  {listening?.isPlaying ? listening.title : "Not Listening"}
                </p>
                <p className="text-gray-400 text-sm">
                  {listening?.isPlaying ? listening.artist : "Spotify"}
                </p>
              </div>
            </div>
            {listening?.isPlaying && (
              <div className="mt-2">
                <div className="relative h-1 w-full bg-gray-700 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-1 bg-green-500 rounded-full"
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
