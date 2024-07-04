import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { Separator } from "@/components/ui/separator";
import BackgroundDots from "@/components/BackgroundDots";

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
      <body>
        <main className="flex items-center justify-between w-full flex-col p-3 md:p-6 min-h-screen">
          <div className={"w-full max-w-3xl"}>
            <Navbar />
            <Separator className="w-full  my-5 rounded h-0.5" />
            <MenuBar />
            {children}
          </div>
            <Footer />
        </main>
        {/* <BackgroundDots/> */}
      </body>
    </html>
  );
}
