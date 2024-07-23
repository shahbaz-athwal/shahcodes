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
import Image from "next/image";

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
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
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
                 
                    <Image
                      width={500}
                      height={500}
                      src={item.thumbnail!}
                      alt={item.title!}
                      className="w-full h-full sm:h-64 object-cover rounded-lg shadow-lg dark:shadow-zinc-600 brightness-[0.4]"
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
        </div>
        <CarouselPrevious className="absolute top-1/2 left-0 bg-transparent hover:scale-125 transition-transform duration-300 -rotate-[90deg]" />
        <CarouselNext className="absolute top-1/2 right-0 bg-transparent hover:scale-125 transition-transform duration-300 rotate-90" />
      </Carousel>
    </div>
  );
};

export default RecentlyPlayed;
