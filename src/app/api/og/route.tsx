import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const title = request.nextUrl.searchParams.get("title");
  const description = request.nextUrl.searchParams.get("description");

  const avatarData = await readFile(join(process.cwd(), "public/profile.png"));
  const backgroundData = await readFile(join(process.cwd(), "public/opengraph_bg.png"));
  const backgroundSrc = Uint8Array.from(backgroundData).buffer;
  const avatarSrc = Uint8Array.from(avatarData).buffer;
  const geistBold = await readFile(join(process.cwd(), "src/app/api/og/Geist-Bold.ttf"));
  const geistRegular = await readFile(join(process.cwd(), "src/app/api/og/Geist-Regular.ttf"));

  return new ImageResponse(
    (
      <div tw="flex flex-col justify-between w-full h-full relative p-16">
        {/* Background Image */}
        <img
          // @ts-expect-error "required"
          src={backgroundSrc}
          alt="background"
          width={1200}
          height={630}
          tw="absolute top-0 left-0 z-0"
        />

        {/* Main Content Area */}
        <div tw="flex flex-col justify-center flex-1 z-10">
          <h1 tw="max-w-[48rem] text-[72px] font-bold leading-[76px] tracking-tighter m-0 text-white">
            {title || "Shahbaz Singh"}
          </h1>
          {description && (
            <p tw="max-w-[36rem] text-[28px] font-normal leading-[36px] tracking-tight text-gray-300 mt-6 mb-0">
              {description}
            </p>
          )}
        </div>

        {/* Profile Section at Bottom */}
        <div tw="flex items-center z-10 mt-8">
          <img
            // @ts-expect-error "required"
            src={avatarSrc}
            alt="Shahbaz Singh"
            width={80}
            height={80}
            tw="rounded-full border-4 border-white/20"
          />
          <div tw="flex flex-col ml-6">
            <div tw="text-[24px] font-bold text-white">Shahbaz Singh</div>
            <div tw="text-[18px] font-normal text-gray-300">Full Stack Developer</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
};
