"use client";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SpotifyPlayedItem } from "@/types/SpotifyRecentlyPlayed";
import Link from "next/link";
import Image from "next/image";
import { recentlyPlayed } from "@/actions/recentlyPlayed";
import { TextGradient } from "@/components/ui/textgradient";
import { Skeleton } from "@/components/ui/skeleton";

const RecentlyPlayed = () => {
  const [recentPlays, setRecentPlays] = useState<SpotifyPlayedItem[] | null>(null);
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
      <h1 className="pb-6 text-3xl font-bold leading-tight">
        <TextGradient variant="center">Recently Played</TextGradient>
      </h1>
      {recentPlays ? (
        <Carousel
          className={`w-full ${isLoaded ? "opacity-100 transition-opacity duration-700" : "opacity-0"}`}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <div
            className="relative"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <CarouselContent>
              {recentPlays.map((item, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="relative mx-6 p-4">
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
                        className="h-64 w-full rounded-lg object-cover shadow-md brightness-[0.5] dark:shadow-zinc-800/30"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="max-w-56 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold sm:max-w-full">
                          {item.title}
                        </h3>
                        <p className="max-w-56 overflow-hidden text-center text-gray-300 sm:max-w-full">
                          {item.artist}
                        </p>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="absolute left-0 top-1/2 -rotate-[90deg] bg-transparent transition-transform duration-300 hover:scale-125" />
          <CarouselNext className="absolute right-0 top-1/2 rotate-90 bg-transparent transition-transform duration-300 hover:scale-125" />
        </Carousel>
      ) : (
        <div className="flex items-center justify-center py-4">
          <Skeleton className="mx-10 h-64 w-[408px] rounded-lg sm:mx-10 sm:w-full" />
        </div>
      )}
    </div>
  );
};

export default RecentlyPlayed;
