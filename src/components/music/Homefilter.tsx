import React, { SetStateAction } from "react";
import { BiBox } from "react-icons/bi";

const Homefilter = ({category,categoryHandle}:{
  category: string,categoryHandle: React.Dispatch<SetStateAction<string>>
}) => {
  return (
    <div className="flex justify-between items-center pr-8">
      <div className="flex items-center gap-10">
        <div className=" border border-white/20 rounded-lg flex items-center gap-20 py-2 px-3">
          <p className="text-sm font-bold">Remmended</p>
          <i>
            <BiBox />
          </i>
        </div>
        <p className="font-bold text-white/80 text-sm md:block hidden">Cuntry</p>
        <p className="font-bold text-white/80 text-sm md:block hidden">Type</p>
      </div>
      <div className="border border-white/30 rounded-3xl text-sm font-bold md:flex hidden overflow-hidden items-center">
        <div className={`py-[6px] text-center ${category === 'all' && 'bg-emerald-800'} cursor-pointer w-24`} onClick={() =>categoryHandle('all')}>All</div>
        <div className={`border-l border-white/30 py-[6px] text-center ${category === 'playlist' && 'bg-emerald-800'} cursor-pointer w-24`} onClick={() =>categoryHandle('playlist')}>Music</div>
        <div className={`border-l border-white/30 py-[6px] text-center ${category === 'music' && 'bg-emerald-800'} cursor-pointer w-24`} onClick={() => categoryHandle('music')}>Playlist</div>
      </div>
    </div>
  );
};

export default Homefilter;
