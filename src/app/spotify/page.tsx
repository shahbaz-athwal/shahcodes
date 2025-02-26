import { Metadata } from "next";
import { topArtists } from "@/actions/topArtists";
import { unstable_cache as cache } from "next/cache";
import { MotionChild, MotionParent } from "@/components/Motion";
import TopArtists from "./TopArtists";
import SpotifyPlayer from "./SpotifyPlayer";
import RecentlyPlayed from "./RecentlyPlayed";

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
        <SpotifyPlayer />
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
