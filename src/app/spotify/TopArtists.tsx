import Image from "next/image";
import { TextGradient } from "@/components/ui/textgradient";
import type { SpotifyTopArtist } from "@/types/SpotifyTopArtist";

interface Props {
  topArtists: SpotifyTopArtist[] | null;
}

export default function TopArtists({ topArtists }: Props) {
  return (
    <div>
      <h1 className="py-12 text-3xl leading-tight font-bold">
        <TextGradient variant="right">My Top Artists</TextGradient>
      </h1>
      <div className="relative mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:-ml-[10%] xl:w-[120%] 2xl:-ml-[20%] 2xl:w-[140%]">
        {topArtists?.map((artist) => (
          <a
            href={artist.url}
            target="_blank"
            key={artist.id}
            title={artist.name}
          >
            <div className="relative">
              <Image
                width={400}
                height={400}
                src={artist.thumbnail}
                alt={artist.name}
                priority
                className="h-64 w-full rounded-2xl object-cover brightness-[0.4] lg:h-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold text-white">
                  {artist.name}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
