import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopBar from "@/components/TopBar";
import SpotifyPrefetch from "./spotify/SpotifyFetcher";
import { SpotifyProvider } from "@/hooks/useSpotify";
import LiveActivity from "@/components/LiveActivity";
import { LocationSection } from "@/components/LocationData";
import { PostHogProvider } from "@/components/PostHogProvider";
import { getCachedLocationData } from "@/lib/redis";
import { Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Shahbaz Singh",
  title: {
    default: "Shahbaz Singh - Full Stack Developer",
    template: "%s - Shahbaz Singh",
  },
  description: "A Passionate Full Stack Developer based in Canada.",
  twitter: {
    card: "summary_large_image",
    creator: "@shahcodes",
    images: ["/og.png"],
    title: "Shahbaz Singh - Full Stack Developer",
  },
  openGraph: {
    title: "Shahbaz Singh - Full Stack Developer",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shahbaz Singh - Full Stack Developer",
      },
    ],
    siteName: "Shahbaz Singh - Full Stack Developer",
  },
  metadataBase: new URL("https://shahcodes.in"),
};

const Location = async () => {
  const location = await getCachedLocationData();
  return <LocationSection location={location} />;
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        className={`${inter.className} antialiased selection:bg-purple-800/90 selection:text-white sm:overflow-hidden dark:bg-[#020100] dark:selection:bg-yellow-800/90`}
      >
        <PostHogProvider>
          <TooltipProvider>
            <SpotifyProvider>
              <main className="flex h-screen flex-col items-center justify-between overflow-y-auto">
                <div className="w-full grow">
                  <ThemeProvider
                   attribute="class"
                   defaultTheme="dark"
                   disableTransitionOnChange>
                    <TopBar />
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
                  <Suspense fallback={null}>
                    <Location />
                  </Suspense>
                </div>
                <Footer />
              </main>
            </SpotifyProvider>
          </TooltipProvider>
        </PostHogProvider>
        <div className="pointer-events-none absolute inset-0 z-[-10] overflow-hidden">
          <div className="h-full bg-cover dark:bg-[url('https://res.cloudinary.com/dqss5unvd/image/upload/v1744240025/bg-sm-dark_hk9erl.png')] dark:opacity-[0.4] sm:dark:bg-[url('https://res.cloudinary.com/dqss5unvd/image/upload/v1744240314/bg-dark_grifof_ynbdy1.png')]" />
        </div>
      </body>
    </html>
  );
}
