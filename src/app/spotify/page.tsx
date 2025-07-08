import type { Metadata } from "next";
import { unstable_cache as cache } from "next/cache";
import { topArtists } from "@/actions/topArtists";
import { MotionChild, MotionParent } from "@/components/Motion";
import { createMetadata } from "@/lib/metadata";
import RecentlyPlayed from "./RecentlyPlayed";
import SpotifyPlayer from "./SpotifyPlayer";
import TopArtists from "./TopArtists";

export const metadata: Metadata = createMetadata({
  title: "Spotify",
  description: "what am I listening on Spotify?",
  ogText: "What am I listening on Spotify?",
});

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
