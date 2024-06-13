"use client";
import Image from "next/image";
import Button from "@/app/_ui/Button";

export default function PricingBox({ name, price, description }) {
  return (
    <>
      <div className="h-32 overflow-hidden rounded-md bg-sky-800 text-white outline outline-2 outline-neutral-300 transition-all hover:h-80">
        <div className="flex justify-between px-5 py-8 text-2xl">
          <div>
            {name}
            <span className="block font-bold">${price}</span>
          </div>
        </div>
        <ul className="flex h-48 items-center justify-between bg-white p-5">
          <div className="flex flex-col justify-around text-2xl text-black">
            {description.map((item) => (
              <li className="flex items-center" key={item.text}>
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
