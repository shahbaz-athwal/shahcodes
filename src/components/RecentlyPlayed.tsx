"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  return (
    <div className="relative overflow-hidden">
      <h1 className="font-bold text-2xl leading-tight pb-6">Recently Played</h1>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recentPlays.map((item) => (
          <div key={item.playedAt} className="w-full flex-shrink-0">
            <Link
              href={item.url!}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              title={`${item.title} by: ${item.artist}`}
              aria-label={`${item.title} by: ${item.artist}`}
            >
              <motion.div
                className="p-4 mx-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full sm:h-64 object-cover rounded-lg shadow-lg dark:shadow-zinc-900 brightness-[0.3]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.artist}</p>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute  top-[59%] left-0 transform -translate-y-1/2 bg-transparent -rotate-[90deg] hover:scale-125 transition-transform duration-300"
      >
        <Arrow />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[59%] right-0 transform -translate-y-1/2 bg-transparent rotate-90 hover:scale-125 transition-transform duration-300"
      >
        <Arrow />
      </button>
    </div>
  );
};

export default RecentlyPlayed;
