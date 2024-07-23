"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SpotifyPlayedItem } from "@/types/recentlyPlayed";
import Link from "next/link";

type RecentlyPlayedProps = {
  recentPlays: SpotifyPlayedItem[];
};

const RecentlyPlayed: React.FC<RecentlyPlayedProps> = ({ recentPlays }) => {
  return (
    <div className="relative overflow-hidden">
      <h1 className="font-bold text-2xl leading-tight pb-6 mx-4 md:mx-0">
        Recently Played
      </h1>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {recentPlays.map((item) => (
            <CarouselItem key={item.playedAt} className="w-full">
              <div className="p-4 mx-6 relative">
                <Link
                  href={item.url!}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${item.title} by: ${item.artist}`}
                  aria-label={`${item.title} by: ${item.artist}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full sm:h-64 object-cover rounded-lg shadow-lg dark:shadow-zinc-900 brightness-[0.4]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 max-w-56 sm:max-w-full text-center overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.artist}
                    </p>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 bg-transparent hover:scale-125 transition-transform duration-300 -rotate-[90deg]" />
        <CarouselNext className="absolute top-1/2 right-0 bg-transparent hover:scale-125 transition-transform duration-300 rotate-90" />
      </Carousel>
    </div>
  );
};

export default RecentlyPlayed;
