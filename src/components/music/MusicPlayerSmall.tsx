"use client";
import { Music } from "@/config/data";
import React, { useEffect, useRef, useState } from "react";
import { BsPause, BsPauseBtn, BsPlay } from "react-icons/bs";
import { GiNextButton, GiPreviousButton, GiSoundOn } from "react-icons/gi";
import { LiaListAlt } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { DrawerDemo } from "./MusicList";

const MusicPlayerSmall = () => {
  const [Play, setPlay] = useState(false);
  const [open, setOpen] = useState(false);
  const [PlayerFill, setPlayerFill] = useState(0);
  const [MusicTime, setMusicTime] = useState("0:00");
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const music = useSelector(
    (state: { musicReducer: { state: Music | null } }) =>
      state.musicReducer.state,
  );

  const musicList = useSelector(
    (state: { listReducer: { state: Music | null } }) =>
      state.listReducer.state,
  );

  useEffect(() => {
    setPlayerFill(0);
    setMusicTime("0:00");
    setPlay(true);
    setTimeout(() => {
      //   handlePlay();
    }, 1000);
  }, [music]);

  const handlePlay = () => {
    const myAudio = document.getElementById("myAdio");
    if (myAudio.paused) {
      myAudio.play();
      setPlay(true);
      //   dispatch({
      //     type: "play",
      //   });
    } else {
      myAudio.pause();
      setPlay(false);
      //   dispatch({
      //     type: "pause",
      //   });
    }
  };

  const updateTime = (e: any) => {
    const Audio = e.target;
    if (Audio.currentTime) {
      let f = (Audio.currentTime * 100) / Audio.duration;
      let Time = change_time(Audio.currentTime);
      //   dispatch({
      //     type: "settime",
      //     value: Audio.currentTime,
      //   });
      //   if (myAudio.buffered.end(0)) {
      //     dispatch({
      //       type: "setbuffer",
      //       value: (100 * myAudio.buffered.end(0)) / myAudio.duration,
      //     });
      //   }
      console.log({ f });
      setPlayerFill(parseInt(f));
      setMusicTime(Time);
      if (Audio.currentTime === Audio.duration) nextHandle();
    }
  };

  const change_time = (time: any) => {
    var min = parseInt(time / 60);
    var second = parseInt(time - min * 60);

    if (second > 9) return min.toString() + ":" + second.toString();
    else return min.toString() + ":0" + second.toString();
  };

  const FillHandle = (e: any) => {
    const value = parseFloat(e.target.value); // تبدیل به عدد اعشاری
    if (isNaN(value)) return;

    setPlayerFill(value); // مقدار 0 تا 100

    if (audioRef.current && audioRef.current?.duration) {
      const newTime = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const nextHandle = () => {
    const index = Music.findIndex((item) => item._id === music?._id);
    if (index === Music.length - 1)
      dispatch({
        type: "add",
        value: Music[0],
      });
    else
      dispatch({
        type: "add",
        value: Music[index + 1],
      });
  };

  const prevHandle = () => {
    const index = Music.findIndex((item) => item._id === music?._id);
    if (index === 0)
      dispatch({
        type: "add",
        value: Music[Music.length - 1],
      });
    else
      dispatch({
        type: "add",
        value: Music[index - 1],
      });
  };

  return (
    <div
      className={`flex bg-[#191919] p-3 justify-between items-center gap-2 ${music === null && "hidden"}`}
    >
      <div className="flex items-center gap-2">
        <div className=" relative rounded-md overflow-hidden">
          <img
            src={music?.image}
            className="w-[5.5rem] aspect-4/4 rounded-xl object-cover image-shadow"
            alt=""
          />
          <div className="font-bold text-white absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
            {MusicTime}
          </div>
        </div>
        <div className="flex flex-col">
          <b className="text-sm font-bold">
            set fire to the rain 
          </b>
            <span className="text-white/60">Adele</span>
        </div>
      </div>
      <div className="flex flex-col pl-20 items-center justify-center">
        <div className="flex justify-center items-center gap-3">
          <i onClick={prevHandle} className=" cursor-pointer">
            <GiPreviousButton />
          </i>
          {Play ? (
            <i className=" cursor-pointer" onClick={handlePlay}>
              <BsPause size={20} />
            </i>
          ) : (
            <i onClick={handlePlay}>
              <BsPlay size={20} />
            </i>
          )}
          <i onClick={nextHandle} className=" cursor-pointer">
            <GiNextButton />
          </i>
        </div>
        <div className="w-full  mt-0">
          <div className=" relative w-full">
            <div>
              <input
                onChange={(e) => FillHandle(e)}
                className="progressbar"
                type="range"
                id="progressBar"
                min="0"
                max="100"
                step={1}
                value={isNaN(PlayerFill) ? 0 : PlayerFill}
                style={{
                  background: `linear-gradient(90deg, #ffffff ${PlayerFill}%, #a1a1a1 ${PlayerFill}%)`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full  mt-0">
          <div className="grid grid-cols-6 items-center">
            <div className="col-span-1">
              <GiSoundOn size={20} />
            </div>
            <div className=" relative w-full col-span-3">
              <div className=" absolute w-full bg-white/60 left-0 top-0 h-1 rounded-2xl"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-white absolute top-[-3px] left-[20%]"></div>
            </div>
            <div className="col-span-2 justify-end flex">
              <LiaListAlt
                onClick={() => setOpen(!open)}
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <audio
          src={music?.audio}
          autoPlay
          id="myAdio"
          onTimeUpdate={(e) => updateTime(e)}
          ref={audioRef}
          //   onCanPlay={() => libraryHandle()}
        >
          <source src="" type="" />
          <source src="" type="" />
        </audio>
      </div>
      <DrawerDemo open={open} setOpen={setOpen} />
    </div>
  );
};

export default MusicPlayerSmall;
