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
    <div className="w-full overflow-hidden">
      <div
        dir="ltr"
        className="flex gap-7 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-proximity pb-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {music.map((item) => (
          <div
            key={item._id}
            dir="rtl"
            className="shrink-0 snap-start w-[calc((100%-112px)/4.5)]"
          >
            <MusicCard music={item} />
          </div>
        ))}
      </div>
    </div>
  );
}