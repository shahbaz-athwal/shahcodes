"use server";
import { getCurrentlyListening } from "@/lib/spotify";
import { normalizeCurrentlyListening } from "@/lib/normalizer";

export const currentlyPlaying = async () => {
  const response = await getCurrentlyListening();

  if (!response) {
    return { isPlaying: false };
  }

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }
  const data = await response.json();

  return normalizeCurrentlyListening(data);
};
