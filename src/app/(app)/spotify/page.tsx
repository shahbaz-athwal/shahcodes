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
    <>
      <SpotifyProvider>
        <SpotifyPlayer />
      </SpotifyProvider>

      <RenderedRecentlyPlayed />
    </>
  );
};

export default Page;
