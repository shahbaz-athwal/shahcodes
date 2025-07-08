import type { SpotifyPlayedItem } from "@/types/SpotifyRecentlyPlayed";
import type { SpotifyTopArtist } from "@/types/SpotifyTopArtist";

export const normalizeRecentlyPlayed = ({
  track,
  played_at,
}: any): SpotifyPlayedItem => ({
  title: track.name,
  artist: track.artists?.map(({ name }: any) => name).join(", "),
  album: track.album?.name,
  thumbnail: track.album?.images[0]?.url,
  url: track.external_urls?.spotify,
  playedAt: played_at,
  duration: track.duration_ms,
});

export const normalizeArtists = ({
  id,
  name,
  popularity,
  genres,
  external_urls,
  images,
}: any): SpotifyTopArtist => ({
  id,
  name,
  popularity,
  genres: genres?.join(" "),
  url: external_urls?.spotify,
  thumbnail: images[0].url,
});
