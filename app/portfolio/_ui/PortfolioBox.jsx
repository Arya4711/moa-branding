"use client";
import React from "react";

export default function PortfolioBox({ image, contentText, labelText, link }) {
  return (
    <>
      <div
        className={`inline-flex flex-col justify-end bg-${image} h-[28rem] basis-[48%] rounded-xl bg-cover bg-center bg-no-repeat transition`}
        href={link}
      >
        <div className="flex h-full w-full items-center justify-around bg-cover bg-center text-center text-xl text-transparent transition-all hover:bg-black/50 hover:text-white">
          <p className="m-20">{contentText}</p>
        </div>
        <div className="rounded-b-xl border-t-2 border-white/10 py-4 pl-4 text-left text-xl text-white backdrop-blur-3xl">
          {labelText}
        </div>
      </div>
    </>
  );
}
