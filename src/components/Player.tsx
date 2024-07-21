'use client';

import React, { useMemo } from 'react';

import Link from 'next/link';
import Lottie from 'react-lottie-player';
import PlayerJson from '@/lib/lottie-files/player.json';
// import { ChevronUp, Spotify } from 'components/icons';
// import config from 'lib/config';
import { useSpotify } from '@/hooks/useSpotify';

const PlayerAnimation = () => {
  return <Lottie loop animationData={PlayerJson} play />;
};

const Player = () => {
  const { listening } = useSpotify();

  const url = listening?.isPlaying ? listening.url : "https://www.shahcodes.in/spotify"

  const progress = useMemo(() => listening && (listening.progress! / listening.duration!) * 100, [listening]);
    console.log(progress)
  return (
    <>
      <div>
        <div >
          <Link
            passHref
            target={listening?.isPlaying ? '_blank' : '_self'}
            aria-label="Listen on Spotify"
            rel="noopener noreferer noreferrer"
            title="Listen on Spotify"
            href={url!}
          >
            {listening?.isPlaying ? (
              <div className="h-auto w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img width="40" height="40" src={listening?.thumbnail} alt={listening?.album} />
              </div>
            ) : (
            <div>Not Playing</div>
            )}
          </Link>

          <div >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <p>{listening?.isPlaying ? listening.title : 'Not Listening'}</p>
                <p>{listening?.isPlaying ? listening.artist : 'Spotify'}</p>
              </div>
              <div className="flex flex-row">
                <Link
                  href="/spotify"
                  passHref
                  target={listening?.isPlaying ? '_blank' : '_self'}
                  aria-label="Mateo Nunez on Spotify"
                  rel="noopener noreferer noreferrer"
                  title="Mateo Nunez on Spotify"
                >
                  {/* <ChevronUp className="h-4 w-4 rotate-90" /> */}
                </Link>
              </div>
            </div>
            {listening?.isPlaying && (
              <>
                <div >
                  <div >
                    <div className='bg-green h-1 rounded-full'  style={{ width: `${progress}%` }} />
                  </div>

                  <div >
                    <PlayerAnimation />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Player);
