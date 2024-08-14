import { SpotifyTopArtist } from "@/types/TopArtists";
import Image from "next/image";
import Link from "next/link";
import { TextGradient } from "./ui/textgradient";

interface Props {
  topArtists: SpotifyTopArtist[] | null;
}

export default function TopArtists({ topArtists }: Props) {
  return (
    <div>
      <h1 className="font-bold text-3xl leading-tight py-12 mx-4 md:mx-0">
        <TextGradient>My Top Artists</TextGradient>
      </h1>
      <div className="lg:w-[140%] lg:-ml-[20%] relative grid grid-cols-1 md:grid-cols-2 gap-8 mx-8">
        {topArtists?.map((artist) => (
          <Link href={artist.url} key={artist.id} title={artist.name}>
            <div className="relative">
              <Image
                width={400}
                height={400}
                src={artist.thumbnail}
                alt={artist.name}
                priority
                className="h-full max-h-80 w-full object-cover rounded-lg brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  {artist.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
