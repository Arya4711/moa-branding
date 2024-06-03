"use client";
import shiftInElements from "./_lib/shiftInElements";
import Link from "next/link";
import React from "react";
import Services from "./_ui/Services";

export default function Home() {
  shiftInElements();

  return (
    <>
      <div className="bg-neutral-900 px-20 pb-16 pt-5 text-white">
        <div className="flex justify-between">
          <div className="mt-12 text-left sm:max-md:text-center">
            <div className="shift-in text-8xl text-sky-400 md:max-2xl:text-7xl">
              Your vision,
              <div className="text-white">our creation.</div>
            </div>
            <div className="shift-in mt-5 text-3xl delay-300 md:max-2xl:text-2xl">
              We create high quality branding plans and websites at an
              affordable price.
            </div>
            <div className="shift-in mt-5 space-x-5 delay-500">
              <Link
                href="#"
                className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
              >
                BOOK A MEETING
              </Link>
              <Link
                href="#"
                className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
          <video className="w-[37rem] max-md:hidden" autoPlay muted>
            <source src="/laptop-turning.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Services />
    </>
  );
}
