import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import RenderedRecentlyPlayed from "./RenderedRecentlyPlayed";
import { SpotifyProvider } from "@/hooks/useSpotify";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Spotify - Shahbaz Singh",
  description: "What am I listening?",
};

const Page = async () => {
  return (
    <div className="pt-6">
      <Suspense fallback={<Loading/>}>
        <SpotifyProvider>
          <SpotifyPlayer />
        </SpotifyProvider>

        <RenderedRecentlyPlayed />
      </Suspense>
    </div>
  );
};

export default Page;
