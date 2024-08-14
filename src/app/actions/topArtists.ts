"use server";
import { normalizeArtists } from "@/lib/normalizeSpotify";
import { getTopArtists } from "@/lib/spotify";

export const topArtists = async () => {
  const response = await getTopArtists();

  if (!response) {
    return { topArtists: false };
  }

  if (response.status === 204 || response.status > 400) {
    return { topArtists: false };
  }
  const { items } = await response.json();

  return items.map(normalizeArtists);
};
