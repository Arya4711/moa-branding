"use client";

export default function MemberLabel({ name, setSelected, toSetSelected }) {
  return (
    <div
      className="flex flex-col items-center justify-around divide-x divide-sky-500 bg-sky-100 text-7xl text-sky-500 outline outline-1 outline-sky-500 md:max-2xl:text-5xl"
      onMouseEnter={() => setSelected(toSetSelected)}
    >
      {name}
    </div>
  );
}
