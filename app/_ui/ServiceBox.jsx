"use client";
import React from "react";

export default function ServiceBox({ image, text, link }) {
  return (
    <>
      <a
        className={`inline-flex flex-col justify-end bg-${image} h-80 w-96 rounded-xl bg-cover bg-center bg-no-repeat transition hover:brightness-75 basis-[30%]`}
        href={link}
      >
        <div className="rounded-b-xl border-t-2 border-white/10 py-4 pl-4 text-left text-xl text-white backdrop-blur-3xl">
          {text}
        </div>
      </a>
    </>
  );
}
