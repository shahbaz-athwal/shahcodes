"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { SpotifyPlayedItem } from "@/types/recentlyPlayed";
import Arrow from "./icons/Arrow";
import Link from "next/link";

type RecentlyPlayedProps = {
  recentPlays: SpotifyPlayedItem[];
};

const RecentlyPlayed: React.FC<RecentlyPlayedProps> = ({ recentPlays }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recentPlays.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recentPlays.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative overflow-hidden">
      <h1 className="font-bold text-2xl leading-tight pb-6">Recently Played</h1>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recentPlays.map((item) => (
          <div key={item.playedAt} className="w-full flex-shrink-0">
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
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300 max-w-56 sm:max-w-full text-center">{item.artist}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute  top-[55%] left-0  bg-transparent -rotate-[90deg] hover:scale-125 transition-transform duration-300"
      >
        <Arrow />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[55%] right-0 transform  bg-transparent rotate-90 hover:scale-125 transition-transform duration-300"
      >
        <Arrow />
      </button>
    </div>
  );
};

export default RecentlyPlayed;
