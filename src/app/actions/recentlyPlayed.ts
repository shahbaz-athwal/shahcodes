"use server";
import { normalizeRecentlyPlayed } from "@/lib/normalizeSpotify";
import { getRecentlyPlayed } from "@/lib/spotify";

export const recentlyPlayed = async () => {
  const response = await getRecentlyPlayed();

  if (!response) {
    return { recentlyPlayed: false };
  }

  if (response.status === 204 || response.status > 400) {
    return { recentlyPlayed: false };
  }
  const { items } = await response.json();
  const data = items
    .map(normalizeRecentlyPlayed)
    .sort((a: any, b: any) => b.played_at - a.played_at);

  return data;
};
