"use client";
import React from "react";
import ServiceBox from "./ServiceBox";
import shiftInElements from "../_lib/shiftInElements";

export default function Services() {
  const targetRefs = shiftInElements();

  return (
    <>
      <a
        id="services"
        href="#services"
        className="mx-20 inline-block rounded-md border border-solid border-sky-400 bg-sky-50 px-4 py-1 text-sky-300 no-underline transition"
      >
        SERVICES
      </a>
      <div
        ref={(el) => {
          if (el && targetRefs.current.indexOf(el) === -1) {
            targetRefs.current.push(el);
          }
        }}
        className="shift-in reduced mx-20 mt-10 flex justify-between"
      >
        <ServiceBox image="logo-redesign" text="Logo Redesign" link="#" />
        <ServiceBox image="logo-design" text="Logo Design" link="#" />
        <ServiceBox
          image="color-palette-fonts"
          text="Color Palette + Fonts"
          link="#"
        />
      </div>
      <div
        ref={(el) => {
          if (el && targetRefs.current.indexOf(el) === -1) {
            targetRefs.current.push(el);
          }
        }}
        className="shift-in reduced mx-20 mb-20 mt-10 flex justify-between"
      >
        <ServiceBox
          image="branding-package"
          text="Branding Package"
          link="#"
        />
        <ServiceBox
          image="branding-package-mockup"
          text="Branding Package + Mockup"
          link="#"
        />
        <ServiceBox
          image="branding-package-website"
          text="Branding Package + Website"
          link="#"
        />
      </div>
    </>
  );
}
