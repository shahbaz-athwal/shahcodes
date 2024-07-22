"use client";
import { currentlyPlaying } from "@/app/actions/currentlyPlaying";
import { recentlyPlayed } from "@/app/actions/recentlyPlayed";
import Player from "@/components/Player";
import { useSpotify } from "@/hooks/useSpotify";
import { SpotifyPlayedItem } from "@/types/recentlyPlayed";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Page = () => {
  const { setSpotifyListening } = useSpotify();

  const [recentPlays, setRecentPlays] = useState<SpotifyPlayedItem[] | null>(null);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const data = await recentlyPlayed();
      setRecentPlays(data);
    };

    fetchRecentlyPlayed();
  }, []);

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
      <div>
      {recentPlays?.map((item) => (
        <div key={item.playedAt}>
          <p>{item.title}</p>
          <p>{item.playedAt}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
