"use client";

import { currentlyPlaying } from "@/actions/currentlyPlaying";
import { recentlyPlayed } from "@/actions/recentlyPlayed";
import { useSpotify } from "@/hooks/useSpotify";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

export default function SpotifyPrefetch() {
  const path = usePathname();
  const refreshInterval = path === "/spotify" ? 3 * 1000 : 10 * 1000;

  const { setSpotifyListening, setSpotifyRecentlyPlayed } = useSpotify();

  const currentlyPlayingFetcher = async () => {
    const data = await currentlyPlaying();
    setSpotifyListening(data);
    return data;
  };

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const data = await recentlyPlayed();
      setSpotifyRecentlyPlayed(data);
    };

    fetchRecentlyPlayed();
  }, [setSpotifyRecentlyPlayed]);

  useSWR("/spotify", currentlyPlayingFetcher, {
    refreshInterval,
  });

  return null;
}
