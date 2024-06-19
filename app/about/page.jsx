"use client";
import { useState } from "react";
import MemberDescription from "./_ui/MemberDescription";
import MemberLabel from "./_ui/MemberLabel";
import MemberImage from "./_ui/MemberImage";

export default function About() {
  const [selected, setSelected] = useState(null);
  const [hasTransitioned, setHasTransitioned] = useState(false);

  return (
    <div className="mx-20 flex h-[50rem] flex-col items-center justify-around text-center">
      <h1 className="mt-5 md:max-2xl:text-6xl 2xl:text-7xl">
        Meet the team behind the scenes.
      </h1>
      <h2 className="text-xl">Hover to learn more</h2>
      <div
        onMouseLeave={() => {
          setSelected(null);
          setHasTransitioned(false);
        }}
        className="relative my-20 grid w-full basis-4/5 grid-cols-3 divide-x overflow-hidden rounded-[7rem] border border-neutral-500 bg-neutral-200 md:max-2xl:rounded-[5rem]"
      >
        <MemberLabel name="MICAH" setSelected={setSelected} toSetSelected={1} />
        <MemberLabel name="OWEN" setSelected={setSelected} toSetSelected={2} />
        <MemberLabel name="ARYA" setSelected={setSelected} toSetSelected={3} />
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
          title="Full-Stack Designer"
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
            "Java and Python certified",
          ]}
          hasTransitioned={hasTransitioned}
          selected={selected}
          toCompare={3}
        />
      </div>
    </div>
  );
}
