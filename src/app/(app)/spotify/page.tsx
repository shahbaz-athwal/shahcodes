import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { SpotifyProvider } from "@/hooks/useSpotify";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { topArtists } from "@/app/actions/topArtists";
import { unstable_cache as cache } from "next/cache";
import TopArtists from "@/components/TopArtists";
import { MotionChild, MotionParent } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Spotify",
  description: "what am I listening on Spotify?",
};

const cachedTopArtists = cache(async () => topArtists(), [], {
  revalidate: 60480, //weekly
});

export default async function Page() {
  const top = await cachedTopArtists();
  return (
    <MotionParent>
      <MotionChild>
        <SpotifyProvider>
          <SpotifyPlayer />
        </SpotifyProvider>
      </MotionChild>
      <MotionChild>
        <RecentlyPlayed />
      </MotionChild>
      <MotionChild>
        <TopArtists topArtists={top} />
      </MotionChild>
    </MotionParent>
  );
}
