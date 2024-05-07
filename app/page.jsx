"use client";
import NavBar from "./_ui/NavBar";
import shiftInElements from "./_lib/shiftInElements";
import Link from "next/link";
import React from "react";
import Services from "./_ui/Services";
import Footer from "./_ui/Footer";

export default function Home() {
  const targetRefs = shiftInElements();

  return (
    <>
      <NavBar />
      <div className="mb-10 bg-neutral-900 px-20 pb-16 pt-5 text-white">
        <div className="flex justify-between">
          <div className="mt-12 text-left sm:max-md:text-center">
            <div
              className="shift-in text-8xl md:max-2xl:text-7xl text-sky-400"
              ref={(el) => {
                if (el && targetRefs.current.indexOf(el) === -1) {
                  targetRefs.current.push(el);
                }
              }}
            >
              Your vision,
              <div className="text-white">our creation.</div>
            </div>
            <div
              className="shift-in mt-5 text-3xl md:max-2xl:text-2xl delay-300"
              ref={(el) => {
                if (el && targetRefs.current.indexOf(el) === -1) {
                  targetRefs.current.push(el);
                }
              }}
            >
              We create high quality branding plans and websites at an
              affordable price.
            </div>
            <div
              className="shift-in mt-5 space-x-5 delay-500"
              ref={(el) => {
                if (el && targetRefs.current.indexOf(el) === -1) {
                  targetRefs.current.push(el);
                }
              }}
            >
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
      <Footer />
    </>
  );
}
