"use server";
import { normalizeArtists } from "@/lib/normalizer";
import { getTopArtists } from "@/lib/spotify";
import { SpotifyTopArtist } from "@/types/SpotifyTopArtist";

export const topArtists = async (): Promise<SpotifyTopArtist[] | null> => {
  const response = await getTopArtists();

  if (!response) {
    return null;
  }

  if (response.status === 204 || response.status > 400) {
    return null;
  }
  const { items } = await response.json();

  return items.map(normalizeArtists);
};
