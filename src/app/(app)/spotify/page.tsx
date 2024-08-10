import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { SpotifyProvider } from "@/hooks/useSpotify";
import { Suspense } from "react";
import Loading from "./loading";
import { recentlyPlayed } from "@/app/actions/recentlyPlayed";
import { unstable_noStore as noStore } from "next/cache";
import RecentlyPlayed from "@/components/RecentlyPlayed";

export const metadata: Metadata = {
  title: "Spotify - Shahbaz Singh",
  description: "What am I listening?",
};

export default async function Page() {
  noStore();
  const data = await recentlyPlayed();
  return (
    <div className="pt-6">
      <Suspense fallback={<Loading />}>
        <SpotifyProvider>
          <SpotifyPlayer />
        </SpotifyProvider>
        <RecentlyPlayed recentPlays={data} />
      </Suspense>
    </div>
  );
}
