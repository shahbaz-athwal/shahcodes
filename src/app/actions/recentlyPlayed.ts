"use server";
import { normalizeRecentlyPlayed } from "@/lib/normalizeSpotify";
import { getRecentlyPlayed } from "@/lib/spotify";

export const recentlyPlayed = async () => {
  const { status, data } = await getRecentlyPlayed();

  if (status === 204 || status > 400) {
    return { recentlyPlayed: false };
  }
  const { items } = data;
  const response = items
    .map(normalizeRecentlyPlayed)
    .sort((a: any, b: any) => b.played_at - a.played_at);
    
  return response;
};
