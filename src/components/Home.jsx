import React from "react";
import "../output.css";
import laptopTurning from "../assets/laptop-turning.mp4";
import navLogo from "../assets/nav-logo.png";
import shiftInElements from "../hooks/shiftInElements";

function Home() {
  var targetRefs = shiftInElements();

  return (
    <>
      <nav className="sticky top-0 z-10 flex justify-between bg-neutral-900 px-20 py-3 text-white">
        <a href="Home">
          <img src={navLogo} alt="Home" className="h-10" />
        </a>
        <div className="space-x-10">
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a
            href="#"
            className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
          >
            START YOUR BRAND
          </a>
        </div>
      </nav>
      <div className="mb-10 bg-neutral-900 px-20 pb-20 pt-5 text-white">
        <div className="flex justify-between">
          <div className="mt-12 text-left">
            <div
              className="shift-in text-9xl text-sky-400"
              ref={(el) => {
                targetRefs.current[0] = el;
              }}
            >
              Your vision,
            </div>
            <div
              className="shift-in text-9xl"
              ref={(el) => {
                targetRefs.current[1] = el;
              }}
            >
              our creation.
            </div>
            <div
              className="shift-in mt-5 text-4xl delay-150"
              ref={(el) => {
                targetRefs.current[2] = el;
              }}
            >
              <div>We create high quality branding plans and websites</div>
              <div>at an affordable price.</div>
            </div>
            <div
              className="shift-in mt-5 space-x-5 delay-300"
              ref={(el) => {
                targetRefs.current[3] = el;
              }}
            >
              <a
                href="#"
                className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
              >
                BOOK A MEETING
              </a>
              <a
                href="#"
                className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
              >
                GET A FREE QUOTE
              </a>
            </div>
          </div>
          <video className="w-[600px]" autoPlay muted>
            <source src={laptopTurning} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Home;
