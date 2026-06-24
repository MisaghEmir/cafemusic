import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Slide from "../music/Slide";
import { Music } from "@/config/data";

export function CarouselHome() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent >
        {Music.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex justify-center w-full">
              <Slide item={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" absolute left-6 bg-white/0 top-[-9rem]" />
      <CarouselNext className=" absolute bottom-[-9rem] right-6 bg-white/0" />
    </Carousel>
  );
}
