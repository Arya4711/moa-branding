"use client";
export default function MemberDescription({
  name,
  title,
  points,
  hasTransitioned,
  selected,
  toCompare,
}) {
  return (
    <div
      className={`text-left transition-all absolute left-1/3 top-1/3 space-y-3 select-none ${
        !hasTransitioned
          ? "opacity-0 duration-0"
          : selected === toCompare
          ? "opacity-100 select-auto"
          : "opacity-0 duration-0"
      }`}
    >
      <h1 className="text-8xl text-sky-500">{name}</h1>
      <h2 className="text-5xl text-sky-800">{title}</h2>
      <ul className="list-disc">
        {points.map((point) => (
          <li className="ml-10 text-2xl" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
