"use client";
import Image from "next/image";
import Button from "@/app/_ui/Button";

export default function PricingBox({
  name,
  price,
  originalPrice,
  description,
  bg,
}) {
  return (
    <>
      <div
        className={`bg-${bg} h-60 overflow-hidden rounded-md bg-cover bg-center bg-no-repeat text-white outline outline-2 outline-neutral-300 transition-all hover:h-[30rem]`}
      >
        <div className="flex h-60 items-center justify-between px-5 py-8 text-2xl backdrop-blur-md transition-all hover:backdrop-blur-none">
          <div className="rounded-md bg-black/75 p-5">
            {name}
            <span className="block font-bold">
              ${price}
              <span
                className={`m-2 text-sm font-thin ${originalPrice ? "inline" : "hidden"} line-through`}
              >
                ${originalPrice}
              </span>
            </span>
          </div>
        </div>
        <ul className="flex h-60 items-center justify-between bg-white p-5">
          <div className="flex flex-col justify-around text-xl text-black">
            {description.map((item) => (
              <li className="flex items-center">
                <Image
                  height={30}
                  width={30}
                  src={item.image.src}
                  alt={item.image.alt}
                  className="m-2 inline"
                />
                {item.text}
              </li>
            ))}
          </div>
          <Button text="ORDER NOW" />
        </ul>
      </div>
    </>
  );
}
