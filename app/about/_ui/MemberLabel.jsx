"use client";
export default function MemberLabel({ name, setSelected, toSetSelected }) {
  return (
    <div
      className="text-7xl md:max-2xl:text-5xl text-sky-500 bg-sky-100 outline outline-sky-500 outline-1 divide-x divide-sky-500 flex items-center flex-col justify-around"
      onMouseEnter={() => setSelected(toSetSelected)}
    >
      {name}
    </div>
  );
}
