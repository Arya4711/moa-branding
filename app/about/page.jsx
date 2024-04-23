"use client";
import { useState } from "react";
import NavBar from "../_ui/NavBar";
import MemberDescription from "./_ui/MemberDescription";
import MemberLabel from "./_ui/MemberLabel";
import MemberImage from "./_ui/MemberImage";

export default function About() {
  const [selected, setSelected] = useState(null);
  const [hasTransitioned, setHasTransitioned] = useState(false);

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-around items-center mx-20 text-center h-[50rem]">
        <h1 className="text-8xl mt-5">Meet the team behind the scenes.</h1>
        <h2 className="text-xl">Hover to learn more</h2>
        <div
          onMouseLeave={() => {
            setSelected(null);
            setHasTransitioned(false);
          }}
          className="relative border-neutral-500 w-full rounded-[7rem] md:max-2xl:rounded-[5rem] border my-20 bg-neutral-200 basis-4/5 grid grid-cols-3 divide-x overflow-hidden"
        >
          <MemberLabel
            name="MICAH"
            setSelected={setSelected}
            toSetSelected={1}
          />
          <MemberLabel
            name="OWEN"
            setSelected={setSelected}
            toSetSelected={2}
          />
          <MemberLabel
            name="ARYA"
            setSelected={setSelected}
            toSetSelected={3}
          />
          <MemberImage
            src="/micah-headshot.png"
            alt="Micah Massey"
            selected={selected}
            setSelected={setSelected}
            hasTransitioned={hasTransitioned}
            setHasTransitioned={setHasTransitioned}
            toCompare={1}
          />
          <MemberImage
            src="/owen-headshot.png"
            alt="Owen Crosby"
            selected={selected}
            setSelected={setSelected}
            hasTransitioned={hasTransitioned}
            setHasTransitioned={setHasTransitioned}
            toCompare={2}
          />
          <MemberImage
            src="/arya-headshot.png"
            alt="Arya Malekjahani"
            selected={selected}
            setSelected={setSelected}
            hasTransitioned={hasTransitioned}
            setHasTransitioned={setHasTransitioned}
            toCompare={3}
          />
          <MemberDescription
            name="Micah Massey"
            title="Jack of all Trades"
            points={[
              "3+ years of Adobe experience",
              "Experience in front-end and back-end development",
              "Codecademy HTML and CSS certified",
              "Broad knowledge of graphic design",
            ]}
            hasTransitioned={hasTransitioned}
            selected={selected}
            toCompare={1}
          />
          <MemberDescription
            name="Owen Crosby"
            title="Graphic Design Specialist"
            points={[
              "Photoshop certified",
              "InDesign certified",
              "2+ years of experience in Illustrator",
              "Broad knowledge of graphic design",
            ]}
            hasTransitioned={hasTransitioned}
            selected={selected}
            toCompare={2}
          />
          <MemberDescription
            name="Arya Malekjahani"
            title="Full-Stack Engineer"
            points={[
              "Experience in front-end and back-end development",
              "React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB",
            ]}
            hasTransitioned={hasTransitioned}
            selected={selected}
            toCompare={3}
          />
        </div>
      </div>
    </>
  );
}
