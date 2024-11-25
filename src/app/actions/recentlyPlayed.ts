"use server";
import { normalizeRecentlyPlayed } from "@/lib/normalizeSpotify";
import { getRecentlyPlayed } from "@/lib/spotify";
import { SpotifyPlayedItem } from "@/types/SpotifyRecentlyPlayed";

export const recentlyPlayed = async (): Promise<SpotifyPlayedItem[] | null> => {
  const response = await getRecentlyPlayed();

  if (!response) {
    return null;
  }

  if (response.status === 204 || response.status > 400) {
    return null;
  }
  const { items } = await response.json();
  const data = items.map(normalizeRecentlyPlayed).sort((a: any, b: any) => b.played_at - a.played_at);

  return data;
};
