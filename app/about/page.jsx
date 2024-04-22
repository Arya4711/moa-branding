"use client";
import React, { useState } from "react";
import NavBar from "../_ui/NavBar";
import Image from "next/image";

export default function About() {
  const [selected, setSelected] = useState(null);
  const [hasTransitioned, setHasTransitioned] = useState(false);

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-around items-center mx-20 text-center h-[50rem]">
        <div className="text-8xl mt-5">Meet the team behind the scenes.</div>
        <div
          onMouseLeave={() => {
            setSelected(null);
            setHasTransitioned(false);
          }}
          className="border-neutral-500 w-full rounded-[7rem] md:max-2xl:rounded-[5rem] border bg-neutral-200 my-20 basis-4/5 grid grid-cols-3 divide-x overflow-hidden"
        >
          <div
            className="text-7xl md:max-2xl:text-5xl text-sky-500 bg-sky-100 h-2/3 md:max-2xl:h-full outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around"
            onMouseEnter={() => setSelected(0)}
          >
            MICAH
          </div>
          <div
            className="text-7xl md:max-2xl:text-5xl text-sky-500 bg-sky-100 h-2/3 md:max-2xl:h-full outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around"
            onMouseEnter={() => setSelected(1)}
          >
            OWEN
          </div>
          <div
            className="text-7xl md:max-2xl:text-5xl text-sky-500 bg-sky-100 h-2/3 md:max-2xl:h-full outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around"
            onMouseEnter={() => setSelected(2)}
          >
            ARYA
          </div>
          <Image
            src="/micah-headshot.png"
            alt="Micah Massey"
            width={300}
            height={300}
            className={`${
              selected === 1 || selected === 2
                ? hasTransitioned
                  ? "hidden"
                  : "opacity-0"
                : ""
            } m-auto transition-all duration-500`}
            onMouseEnter={() => {
              if (!selected) setSelected(0);
            }}
            onTransitionEnd={() => setHasTransitioned(true)}
          />
          <Image
            src="/owen-headshot.png"
            alt="Owen Crosby"
            width={300}
            height={300}
            className={`${
              selected === 0 || selected === 2
                ? hasTransitioned
                  ? "hidden"
                  : "opacity-0"
                : ""
            } ${
              selected === 1
                ? hasTransitioned
                  ? "transition-none"
                  : "-translate-x-[195%]"
                : ""
            } m-auto transition-all duration-500`}
            onMouseEnter={() => {
              if (!selected) setSelected(1);
            }}
            onTransitionEnd={() => setHasTransitioned(true)}
          />
          <Image
            src="/arya-headshot.png"
            alt="Arya Malekjahani"
            width={300}
            height={300}
            className={`${
              selected === 0 || selected === 1
                ? hasTransitioned
                  ? "hidden"
                  : "opacity-0"
                : ""
            } ${
              selected === 2
                ? hasTransitioned
                  ? "transition-none"
                  : "-translate-x-[390%]"
                : ""
            } m-auto transition-all duration-500`}
            onMouseEnter={() => {
              if (!selected) setSelected(2);
            }}
            onTransitionEnd={() => setHasTransitioned(true)}
          />
          <div
            className={`text-7xl transition-all absolute left-1/3 top-1/2 ${
              !hasTransitioned
                ? "opacity-0"
                : selected === 0
                ? "duration-500 delay-500 opacity-100"
                : "opacity-0 delay-0 duration-0"
            }`}
          >
            Micah Massey
          </div>
        </div>
      </div>
    </>
  );
}
