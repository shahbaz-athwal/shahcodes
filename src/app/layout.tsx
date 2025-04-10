import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import TopBar from "@/components/TopBar";
import SpotifyPrefetch from "./spotify/SpotifyFetcher";
import { SpotifyProvider } from "@/hooks/useSpotify";
import LiveActivity from "@/components/LiveActivity";
import { LocationSection } from "@/components/LocationData";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shahbaz Singh",
  image: "https://shahcodes.in/profile.png",
  url: "https://shahcodes.in",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://x.com/shahcodes",
    "https://github.com/shahbaz-athwal",
    "https://www.linkedin.com/in/shahbaz-athwal/",
    "https://www.instagram.com/shahbaz_athwal/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="shahbaz_athwal" />
      </head>
      <body
        className={`${inter.className} antialiased selection:bg-purple-800/90 selection:text-white dark:bg-[#020100] dark:selection:bg-yellow-800/90 sm:overflow-hidden`}
      >
        <SpotifyProvider>
          <main className="flex h-screen flex-col items-center justify-between overflow-y-auto">
            <div className="w-full flex-grow">
              <SpotifyPrefetch />
              <ThemeProvider>
                <TopBar />
                <div className="mx-auto mt-16 max-w-2xl p-4 sm:mt-20 md:p-6">{children}</div>
              </ThemeProvider>
            </div>
            <div className="absolute right-4 top-4 z-10 hidden xl:block">
              <LiveActivity />
            </div>
            <div className="absolute bottom-4 right-4 z-10 hidden xl:block">
              <LocationSection />
            </div>
            <Footer />
          </main>
        </SpotifyProvider>
        <div className="pointer-events-none absolute inset-0 z-[-10] overflow-hidden">
          <div className="h-full bg-cover dark:bg-[url('https://res.cloudinary.com/dqss5unvd/image/upload/v1744240025/bg-sm-dark_hk9erl.png')] dark:opacity-[0.4] sm:dark:bg-[url('https://res.cloudinary.com/dqss5unvd/image/upload/v1744240314/bg-dark_grifof_ynbdy1.png')]" />
        </div>
      </body>
    </html>
  );
}
