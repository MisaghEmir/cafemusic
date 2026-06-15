"use client"
import Address from "@/components/layouts/Address";
import Homefilter from "@/components/music/Homefilter";
import MusicCard from "@/components/music/MusicCard";
import PlaylistCard from "@/components/playlist/PlaylistCard";
import { Music, PlaylistData } from "@/config/data";
import { useState } from "react";


export default function Home() {
  const [category,setCategory] = useState('all')
  return (
    <div className="pt-5">
      <Address />
      <h1 className="mt-20 text-4xl font-bold">Releases</h1>
      <div className="my-10">
        <Homefilter category={category} categoryHandle={setCategory} />
      </div>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-8 px-3">
        {Music.map((item, index) => (
          <div key={index}>
            <MusicCard music={item} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 mt-16 gap-8 px-3">
        {PlaylistData.map((item, index) => (
          <div key={index}>
            <PlaylistCard playlist={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
