"use client";
import Image from "next/image";
import Button from "@/app/_ui/Button";

export default function PricingBox({ name, price, description }) {
  return (
    <>
      <div className="h-40 overflow-hidden rounded-md bg-sky-800 text-white outline outline-2 outline-neutral-300 transition-all hover:h-96">
        <div className="flex h-40 items-center justify-between px-5 py-8 text-2xl">
          <div>
            {name}
            <span className="block font-bold">${price}</span>
          </div>
        </div>
        <ul className="flex h-56 items-center justify-between bg-white p-5">
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
