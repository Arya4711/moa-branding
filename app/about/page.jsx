"use client";
import React, { useState } from "react";
import NavBar from "../_ui/NavBar";
import Image from "next/image";

export default function About() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-around items-center mx-20 text-center h-[50rem]">
        <div className="text-8xl mt-5">Meet the team behind the scenes.</div>
        <div className="border-neutral-500 w-full rounded-[7rem] border bg-neutral-200 my-20 basis-4/5 grid grid-cols-3 divide-x">
          <div className="text-7xl text-sky-500 bg-sky-100 h-2/3 rounded-tl-[7rem] outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around">
            MICAH
          </div>
          <div className="text-7xl text-sky-500 bg-sky-100 h-2/3 outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around">
            OWEN
          </div>
          <div className="text-7xl text-sky-500 bg-sky-100 h-2/3 rounded-tr-[7rem] outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around">
            ARYA
          </div>
          <Image
            src="/micah-headshot.png"
            alt="Micah Massey"
            width={300}
            height={300}
          ></Image>
          <Image
            src="/owen-headshot.png"
            alt="Owen Crosby"
            width={300}
            height={300}
          ></Image>
          <Image
            src="/arya-headshot.png"
            alt="Arya Malekjahani"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
    </>
  );
}
