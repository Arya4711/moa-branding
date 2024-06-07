"use client";
import ServiceBox from "./ServiceBox";
import SectionButton from "./SectionButton";

export default function Services() {
  return (
    <>
      <SectionButton text="SERVICES" id="services" />
      <div className="shift-in reduced mx-20 flex justify-between">
        <ServiceBox
          image="logo-redesign"
          text="Logo Redesign"
          link="#"
          basis="30%"
        />
        <ServiceBox
          basis="30%"
          image="logo-design"
          text="Logo Design"
          link="#"
        />
        <ServiceBox
          image="color-palette-fonts"
          text="Color Palette & Fonts"
          link="#"
          basis="30%"
        />
      </div>
      <div className="shift-in reduced mx-20 mb-20 mt-10 flex justify-between">
        <ServiceBox
          basis="30%"
          image="branding-package"
          text="Branding Package"
          link="#"
        />
        <ServiceBox
          image="branding-package-mockup"
          text="Website Creation (with template)"
          link="#"
          basis="30%"
        />
        <ServiceBox
          image="branding-package-website"
          text="Website Creation (no template)"
          link="#"
          basis="30%"
        />
      </div>
    </>
  );
}
