"use client"
import { currentlyPlaying } from "@/app/actions/currentlyPlaying";
import Player from "@/components/Player";
import { useSpotify } from "@/hooks/useSpotify";
import React from "react";
import useSWR from "swr";

const YourComponent = () => {
  // @ts-ignore
  const { setSpotifyListening } = useSpotify();

  const fetcher = async () => {
    const data = await currentlyPlaying();
    setSpotifyListening(data);
  };

  useSWR("/spotify", fetcher, {
    refreshInterval: 5 * 1000,
  });

  return (
    <div>
      <Player />
    </div>
  );
};

export default YourComponent;
