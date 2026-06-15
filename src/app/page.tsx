import Address from "@/components/layouts/Address";
import Homefilter from "@/components/music/Homefilter";
import MusicCard from "@/components/music/MusicCard";
import { Music } from "@/config/data";

const fristMusic = {
  _id: "1",
  name: "Someone Like You",
  singer: "Adele",
  album: "string",
  image:
    "https://kurdsong.storage.iran.liara.space/cafemusic/images/1jijc25a.jpeg",
  audio:
    "https://kurdsong.storage.iran.liara.space/cafemusic/music/Adele-Someone-Like-You.mp3",
  view: 54,
};
const seccondMusic = {
  _id: "1",
  name: "Set Fire to the rain",
  singer: "Adele",
  album: "string",
  image:
    "https://kurdsong.storage.iran.liara.space/cafemusic/images/1l036ppd.jpeg",
  audio:
    "https://kurdsong.storage.iran.liara.space/cafemusic/music/Adele-Set-Fire-to-the-Rain.mp3",
  view: 54,
};
const threeMusic = {
  _id: "1",
  name: "Rolling in the Deep",
  singer: "Adele",
  album: "string",
  image:
    "https://kurdsong.storage.iran.liara.space/cafemusic/images/1l11k2ii.jpeg",
  audio:
    "https://kurdsong.storage.iran.liara.space/cafemusic/music/Adele-Rolling-in-the-Deep.mp3",
  view: 54,
};
const fourMusic = {
  _id: "1",
  name: "Million Years Ago",
  singer: "Adele",
  album: "string",
  image:
    "https://kurdsong.storage.iran.liara.space/cafemusic/images/1l24t5lv.jpeg",
  audio: "string",
  view: 54,
};
const fiveMusic = {
  _id: "1",
  name: "Million Years Ago",
  singer: "Adele",
  album: "string",
  image:
    "https://kurdsong.storage.iran.liara.space/cafemusic/images/Adele-Laurie-Blue-Adkins.png",
  audio: "string",
  view: 54,
};
const sixMusic = {
  _id: "1",
  name: "Million Years Ago",
  singer: "Adele",
  album: "string",
  image:
    "https://kurdsong.storage.iran.liara.space/cafemusic/images/Adele-music.png",
  audio: "string",
  view: 54,
};
export default function Home() {
  return (
    <div className="pt-5">
      <Address />
      <h1 className="mt-20 text-4xl font-bold">Releases</h1>
      <div className="my-10">
        <Homefilter />
      </div>
      <div className="grid grid-cols-5 gap-8 px-3">
        {Music.map((item, index) => (
          <div key={index}>
            <MusicCard music={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
