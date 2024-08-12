import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { SpotifyProvider } from "@/hooks/useSpotify";
import RecentlyPlayed from "@/components/RecentlyPlayed";

export const metadata: Metadata = {
  title: "Spotify",
  description: "what am I listening on Spotify?",
};

export default function Page() {
  return (
    <div className="pt-6">
      <SpotifyProvider>
        <SpotifyPlayer />
      </SpotifyProvider>
      <RecentlyPlayed />
    </div>
  );
}
