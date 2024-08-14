import { Metadata } from "next";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { SpotifyProvider } from "@/hooks/useSpotify";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { getTopArtists } from "@/lib/spotify";
// import { topArtists } from "@/app/actions/topArtists";

export const metadata: Metadata = {
  title: "Spotify",
  description: "what am I listening on Spotify?",
};

export default async function Page() {
  // const top = await topArtists();
  // console.log(top);
  return (
    <div className="pt-6">
      <SpotifyProvider>
        <SpotifyPlayer />
      </SpotifyProvider>
      <RecentlyPlayed />
    </div>
  );
}
