"use client";
import Image from "next/image";

export default function MemberImage({
  src,
  alt,
  selected,
  setSelected,
  hasTransitioned,
  setHasTransitioned,
  toCompare,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className={`${
        selected && selected !== toCompare
          ? hasTransitioned
            ? "hidden"
            : "opacity-0"
          : ""
      } ${
        selected !== 1 && selected === toCompare
          ? hasTransitioned
            ? "transition-none"
            : selected === 2
            ? "2xl:-translate-x-[195%] md:max-2xl:-translate-x-[23rem]"
            : "2xl:-translate-x-[390%] md:max-2xl:-translate-x-[46rem]" // TODO: replace rem with percentage
          : ""
      } m-auto transition-all duration-500 row-span-3`}
      onMouseEnter={() => {
        if (!selected) setSelected(toCompare);
      }}
      onTransitionEnd={() => setHasTransitioned(true)}
    />
  );
}
