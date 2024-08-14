"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SpotifyPlayedItem } from "@/types/SpotifyRecentlyPlayed";
import Link from "next/link";
import Image from "next/image";
import { recentlyPlayed } from "@/app/actions/recentlyPlayed";
import { RecentlyPlayedSkeleton } from "@/components/Skeletons";
import { TextGradient } from "./ui/textgradient";

const RecentlyPlayed = () => {
  const [recentPlays, setRecentPlays] = useState<SpotifyPlayedItem[] | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await recentlyPlayed();
      setRecentPlays(result);
      setTimeout(() => setIsLoaded(true), 100);
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <h1 className="font-bold text-3xl leading-tight pb-6 mx-4 md:mx-0">
        <TextGradient>Recently Played</TextGradient>
      </h1>
      {recentPlays ? (
        <Carousel
          className={`w-full ${
            isLoaded
              ? "transition-opacity duration-700 opacity-100"
              : "opacity-0"
          }`}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <CarouselContent>
              {recentPlays.map((item, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-4 mx-6 relative">
                    <Link
                      href={item.url!}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${item.title} by: ${item.artist}`}
                      aria-label={`${item.title} by: ${item.artist}`}
                    >
                      <Image
                        height={400}
                        width={400}
                        priority
                        src={item.thumbnail!}
                        alt={item.title!}
                        className="w-full h-[300px] sm:h-64 object-cover rounded-lg shadow-lg dark:shadow-zinc-800/70 brightness-[0.4]"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-semibold max-w-56 sm:max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 max-w-56 sm:max-w-full text-center overflow-hidden">
                          {item.artist}
                        </p>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="absolute top-1/2 left-0 bg-transparent hover:scale-125 transition-transform duration-300 -rotate-[90deg]" />
          <CarouselNext className="absolute top-1/2 right-0 bg-transparent hover:scale-125 transition-transform duration-300 rotate-90" />
        </Carousel>
      ) : (
        <RecentlyPlayedSkeleton />
      )}
    </div>
  );
};

export default RecentlyPlayed;
