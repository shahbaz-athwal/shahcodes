"use server"
import { getCurrentlyListening } from '@/lib/spotify';
import { normalizeCurrentlyListening } from '@/lib/normalizeSpotify';

export const currentlyPlaying = async () => {
    const {status, data} = await getCurrentlyListening();

    if (status === 204 || status > 400) {
        return { is_playing: false }
      }

    return normalizeCurrentlyListening(data)
}