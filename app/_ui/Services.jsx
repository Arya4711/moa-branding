"use client";
import React from "react";
import ServiceBox from "./ServiceBox";
import SectionButton from "./SectionButton";

export default function Services() {
  return (
    <>
      <SectionButton text="SERVICES" id="services" />
      <div className="shift-in reduced mx-20 mt-10 flex justify-between">
        <ServiceBox image="logo-redesign" text="Logo Redesign" link="#" />
        <ServiceBox image="logo-design" text="Logo Design" link="#" />
        <ServiceBox
          image="color-palette-fonts"
          text="Color Palette + Fonts"
          link="#"
        />
      </div>
      <div className="shift-in reduced mx-20 mb-20 mt-10 flex justify-between">
        <ServiceBox image="branding-package" text="Branding Package" link="#" />
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
