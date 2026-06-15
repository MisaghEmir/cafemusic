import Address from "@/components/layouts/Address";
import MusicCard from "@/components/music/MusicCard";
import { Music } from "@/config/data";
import React from "react";

function page() {
  return (
    <div className="pt-5">
      <Address />
      <div className="grid grid-cols-4 gap-8 px-4 mt-10">
        {Music.map(
          (item, index) =>
            index < 3 && (
              <div key={index}>
                <MusicCard music={item} />
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default page;
