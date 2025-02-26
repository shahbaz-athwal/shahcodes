"use client";

import { currentlyPlaying } from "@/actions/currentlyPlaying";
import { useSpotify } from "@/hooks/useSpotify";
import { usePathname } from "next/navigation";
import useSWR from "swr";

export default function SpotifyPrefetch() {
  const path = usePathname();
  const refreshInterval = path === "/spotify" ? 3 * 1000 : 10 * 1000;

  const { setSpotifyListening } = useSpotify();
  const fetcher = async () => {
    const data = await currentlyPlaying();
    setSpotifyListening(data);
    return data;
  };

  useSWR("/spotify", fetcher, {
    refreshInterval,
  });

  return null;
}
