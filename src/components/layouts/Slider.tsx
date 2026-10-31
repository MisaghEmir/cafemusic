"use client";

import MusicCard from "../music/MusicCard";

type MusicItem = {
  _id: string;
  name: string;
  singer: string;
  album: string;
  image: string;
  audio: string;
  view: number;
};

interface CarouselHomeProps {
  music: MusicItem[];
}

export function CarouselHome({ music }: CarouselHomeProps) {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div
        dir="ltr"
        className="flex w-full gap-7 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-4 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {music.map((item) => (
          <div
            key={item._id}
            dir="rtl"
            className="w-[220px] shrink-0 snap-start"
          >
            <MusicCard music={item} />
          </div>
        ))}
      </div>
    </div>
  );
}