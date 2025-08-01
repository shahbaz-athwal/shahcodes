import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import LiveActivity from "@/components/LiveActivity";
import { LocationSection } from "@/components/LocationData";
import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopBar from "@/components/TopBar";
import BgImages from "@/components/ui/bg-images";
import { JsonLd } from "@/components/ui/json-ld";
import { WindowsEmojiPolyfill } from "@/components/ui/windows-emoji-polyfill";
import { SpotifyProvider } from "@/hooks/useSpotify";
import PostHogClient from "@/lib/posthog";
import { getCachedLocationData } from "@/lib/redis";
import SpotifyPrefetch from "./spotify/SpotifyFetcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://shahcodes.in"),
};

const Location = async () => {
  const location = await getCachedLocationData();
  return <LocationSection location={location} />;
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const posthog = PostHogClient();
  const flags = await posthog.getAllFlags("anon");
  const isBlogEnabled = flags["blog-page"];
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dqss5unvd/image/upload/v1744240314/bg-dark_grifof_ynbdy1.png"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dqss5unvd/image/upload/v1744240025/bg-sm-dark_hk9erl.png"
        />
      </head>
      <body
        className={`${inter.className} bg-stone-200/10 antialiased selection:bg-purple-800/90 selection:text-white sm:overflow-hidden dark:bg-stone-950 dark:selection:bg-yellow-800/90 md:dark:bg-stone-900/50`}
      >
        <PostHogProvider>
          <SpotifyProvider>
            <main className="flex h-screen flex-col items-center justify-between overflow-y-auto">
              <div className="w-full grow">
                <ThemeProvider attribute="class" defaultTheme="dark">
                  <TopBar isBlogEnabled={isBlogEnabled as boolean} />
                  <div className="mx-auto mt-16 max-w-2xl p-4 sm:mt-20 md:p-6">
                    <SpotifyPrefetch />
                    {children}
                  </div>
                </ThemeProvider>
              </div>
              <div className="absolute top-1 right-4 z-10 hidden xl:block">
                <LiveActivity />
              </div>
              <div className="absolute right-4 bottom-2 z-10 hidden xl:block">
                <Location />
              </div>
              <Footer />
            </main>
          </SpotifyProvider>
        </PostHogProvider>
        <WindowsEmojiPolyfill />
        <BgImages />
        <JsonLd />
        <ChatWidget />
      </body>
    </html>
  );
}
