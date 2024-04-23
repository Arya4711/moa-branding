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
      className={`text-left transition-all absolute left-1/3 top-1/3 ${
        !hasTransitioned
          ? "opacity-0 duration-0"
          : selected === toCompare
          ? "opacity-100"
          : "opacity-0 duration-0"
      }`}
    >
      <h1 className="text-6xl text-sky-500">{name}</h1>
      <h2 className="text-3xl text-sky-800">{title}</h2>
      <ul className="list-disc">
        {points.map((point) => (
          <li className="ml-10" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
