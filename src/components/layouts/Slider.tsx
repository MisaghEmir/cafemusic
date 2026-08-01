import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MusicCard from "../music/MusicCard"
import {Music} from "../../config/data"

export function CarouselHome() {
 return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  "
    >
      <CarouselContent>
        {Music.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/5">
            <div className="p-1">
            <MusicCard music={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
