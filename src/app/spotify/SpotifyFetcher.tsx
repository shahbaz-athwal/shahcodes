"use client";

import { useEffect } from "react";
import { recentlyPlayed } from "@/actions/recentlyPlayed";
import { useSpotify } from "@/hooks/useSpotify";

export default function SpotifyPrefetch() {
  const { setSpotifyRecentlyPlayed } = useSpotify();

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const data = await recentlyPlayed();
      setSpotifyRecentlyPlayed(data);
    };

    fetchRecentlyPlayed();
  }, [setSpotifyRecentlyPlayed]);

  return null;
}
