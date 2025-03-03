"use client";

import React, { useMemo } from "react";
import Lottie from "react-lottie-player";
import PlayerJson from "@/lib/player.json";
import { useSpotify } from "@/hooks/useSpotify";
import Spotify from "../../components/icons/Spotify";
import Image from "next/image";
import { TextGradient } from "../../components/ui/textgradient";
import { currentlyPlaying } from "@/actions/currentlyPlaying";
import useSWR from "swr";

const PlayerAnimation = () => {
  return <Lottie loop animationData={PlayerJson} play />;
};

const SpotifyPlayer = () => {
  const { listening, setSpotifyListening } = useSpotify();

  const fetcher = async () => {
    const data = await currentlyPlaying();
    setSpotifyListening(data);
    return data;
  };

  useSWR("/spotify", fetcher, {
    refreshInterval: 5 * 1000,
  });

  const url = listening?.isPlaying ? listening.url : " /spotify";

  const progress = useMemo(() => {
    if (listening.progress && listening.duration) {
      return (listening.progress / listening.duration) * 100;
    }
    return 0;
  }, [listening]);

  return (
    <div className="py-12">
      <h1 className="pb-8 text-3xl font-bold leading-tight">
        <TextGradient>Currently Playing</TextGradient>
      </h1>
      <div className="m-2 rounded-lg bg-black bg-opacity-50 px-3 py-6 shadow-xl dark:bg-white dark:bg-opacity-[8%] sm:m-0 sm:p-6">
        <div className="flex flex-col items-center md:flex-row">
          <a
            target={listening?.isPlaying ? "_blank" : "_self"}
            aria-label="Listen on Spotify"
            rel="noopener noreferrer"
            title="Listen on Spotify"
            href={url!}
            className="-py-2 mb-6 flex-shrink-0 md:mb-0 md:mr-4"
          >
            {listening?.isPlaying ? (
              <div className="-mx- h-auto w-auto">
                <Image
                  height={400}
                  width={400}
                  priority={true}
                  src={listening?.thumbnail || ""}
                  alt={listening?.album || "Album cover"}
                  className="h-[17rem] w-[17rem] rounded-lg shadow-lg md:h-48 md:w-48"
                />
              </div>
            ) : (
              <Spotify />
            )}
          </a>

          <div className="w-full flex-1 px-4">
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

export default React.memo(SpotifyPlayer);
