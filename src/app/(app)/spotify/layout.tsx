import type { Metadata } from "next";
import { SpotifyProvider } from "@/hooks/useSpotify";

export const metadata: Metadata = {
  title: "Spotify | Shahbaz Singh",
  description: "What am I listening?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SpotifyProvider>
      {children}
    </SpotifyProvider>
  );
}
