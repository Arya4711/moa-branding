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
              ? "md:max-2xl:-translate-x-[23rem] 2xl:max-[2500px]:-translate-x-[36.5rem] min-[2500px]:-translate-x-[50rem]"
              : "md:max-2xl:-translate-x-[46rem] 2xl:max-[2500px]:-translate-x-[73.25rem] min-[2500px]:-translate-x-[100rem]"
          : ""
      } z-10 row-span-3 m-auto transition-all duration-500 md:max-2xl:w-60`}
      onMouseEnter={() => {
        if (!selected) setSelected(toCompare);
      }}
      onTransitionEnd={() => setHasTransitioned(true)}
    />
  );
}
