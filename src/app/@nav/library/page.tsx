import Address from "@/components/layouts/Address";
import MusicCard from "@/components/music/MusicCard";
import PlaylistCard from "@/components/playlist/PlaylistCard";
import { Music } from "@/config/data";
import React from "react";

const list = [
  {
    _id: "1",
    name: "Favorite",
    image: "/image/cute-pink-heart-aesthetic-wallpapers-for-phone-minimal-line-art-heart.jpg",

    musics: ["sada"],
  },
  {
    _id: "2",
    name: "Recently Played",
    image: "/image/photo-1518281361980-b26bfd556770.avif",
    musics: ["sada"],
  },
  {
    _id: "3",
    name: "My Playlist",
    image: "/image/31JSk-BC-3L._AC_UF894,1000_QL80_.jpg",
    musics: ["sada"],
  },
];

function page() {
  return (
    <div className="pt-5">
      <Address />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 mt-10">
        {list.map(
          (item, index) =>
            index < 3 && (
              <div key={index}>
               <PlaylistCard playlist={item} />
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default page;