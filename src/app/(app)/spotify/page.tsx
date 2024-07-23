import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import RenderedRecentlyPlayed from "./RenderedRecentlyPlayed";
import { SpotifyProvider } from "@/hooks/useSpotify";

export const metadata: Metadata = {
  title: "Spotify - Shahbaz Singh",
  description: "What am I listening?",
};

const Page = async () => {
  return (
    <div className="pt-6">
      <SpotifyProvider>
        <SpotifyPlayer />
      </SpotifyProvider>

      <RenderedRecentlyPlayed />
    </div>
  );
};

export default Page;
