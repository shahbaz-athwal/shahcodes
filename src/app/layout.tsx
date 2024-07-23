import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahbaz Singh",
  description: "A Passionate Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="shahbaz_athwal" />
      </head>
      <body
        className={`${inter.className} antialiased dark:bg-[rgb(26,26,26)] selection:bg-purple-800/90 dark:selection:bg-pink-800/90 selection:text-white  `}
      >
        <main className="flex items-center justify-between w-full flex-col p-3 md:p-6 min-h-screen">
          <div className={"w-full max-w-3xl"}>{children}</div>
          <Footer />
        </main>
          <div className="pointer-events-none absolute inset-0 overflow-hidden z-[-1]">
            <div className="h-full  dark:bg-[url('/bg_gradient.jpeg')] bg-top bg-no-repeat opacity-[0.3]" />
          </div>
      </body>
    </html>
  );
}
