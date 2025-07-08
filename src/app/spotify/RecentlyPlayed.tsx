"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TextGradient } from "@/components/ui/textgradient";
import { useSpotify } from "@/hooks/useSpotify";

const RecentlyPlayed = () => {
  const { recentlyPlayed } = useSpotify();

  return (
    recentlyPlayed && (
      <div className="relative overflow-hidden">
        <h1 className="pb-6 text-3xl leading-tight font-bold">
          <TextGradient variant="center">Recently Played</TextGradient>
        </h1>
        <Carousel className="w-full" plugins={[Autoplay({ delay: 4000 })]}>
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <CarouselContent>
              {recentlyPlayed.map((item) => (
                <CarouselItem key={item.playedAt} className="w-full">
                  <div className="relative mx-3 p-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${item.title} by: ${item.artist}`}
                      aria-label={`${item.title} by: ${item.artist}`}
                    >
                      <Image
                        height={400}
                        width={400}
                        priority
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-64 w-full rounded-2xl object-cover shadow-md brightness-[0.4] dark:shadow-stone-800/30"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="max-w-56 overflow-hidden text-xl font-semibold text-ellipsis whitespace-nowrap sm:max-w-full">
                          {item.title}
                        </h3>
                        <p className="text-cente max-w-56 overflow-hidden text-ellipsis whitespace-nowrap text-gray-300 sm:max-w-full">
                          {item.artist}
                        </p>
                      </div>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="absolute top-1/2 left-0 -mx-2 -rotate-[90deg] border-none bg-transparent transition-transform duration-300 hover:scale-125 hover:bg-transparent" />
          <CarouselNext className="absolute top-1/2 right-0 -mx-2 rotate-90 border-none bg-transparent transition-transform duration-300 hover:scale-125 hover:bg-transparent" />
        </Carousel>
      </div>
    )
  );
};

export default RecentlyPlayed;
