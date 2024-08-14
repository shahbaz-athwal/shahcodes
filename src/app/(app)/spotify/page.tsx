import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { SpotifyProvider } from "@/hooks/useSpotify";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { topArtists } from "@/app/actions/topArtists";
import { unstable_cache as cache } from "next/cache";
import TopArtists from "@/components/TopArtists";

export const metadata: Metadata = {
  title: "Spotify",
  description: "what am I listening on Spotify?",
};

const cachedTopArtists = cache(async () => topArtists(), [], {
  revalidate: 2592000,
});

export default async function Page() {
  const top = await cachedTopArtists();
  return (
    <div className="pt-6">
      <SpotifyProvider>
        <SpotifyPlayer />
      </SpotifyProvider>
      <RecentlyPlayed />
      <TopArtists topArtists={top} />
    </div>
  );
}
