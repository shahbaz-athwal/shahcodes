import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/hooks/useTheme";

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
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="shahbaz_athwal" />
      </head>
      <body
        className={`${inter.className} antialiased dark:bg-[rgb(26,26,26)] selection:bg-purple-800/90 dark:selection:bg-pink-800/90 selection:text-white  `}
      >
        <div className="bg-[#976ae1] opacity-40 dark:bg-transparent absolute top-[-6rem] -z-10 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#fb7dc2] opacity-20 dark:bg-transparent absolute top-[-4rem] -z-10 left-[-40rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <main className="flex items-center flex-col justify-between p-3 md:p-6 min-h-screen">
          <div className="w-full max-w-3xl">{children}</div>
          <Footer />
          <ThemeProvider>
            <ThemeToggle />
          </ThemeProvider>
        </main>
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-[-1]">
          <div className="h-full dark:bg-[url('/bg_gradient.jpeg')] bg-top bg-no-repeat opacity-[0.3]" />
        </div>
      </body>
    </html>
  );
}
