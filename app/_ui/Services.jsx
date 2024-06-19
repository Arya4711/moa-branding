"use client";
import ServiceBox from "./ServiceBox";
import SectionButton from "./SectionButton";

export default function Services() {
  return (
    <>
      <SectionButton text="SERVICES" id="services" />
      <div className="shift-in reduced mx-20 flex justify-between">
        <ServiceBox
          basis="30%"
          image="branding-package"
          text="Branding Package"
          link="/pricing#branding-package"
        />
        <ServiceBox
          image="color-palette-and-fonts"
          text="Color Palette & Fonts"
          link="/pricing#color-palette-and-fonts"
          basis="30%"
        />
        <ServiceBox
          basis="30%"
          image="logo-design"
          text="Logo Design"
          link="/pricing#logo-design"
        />
      </div>
      <div className="shift-in reduced mx-20 mb-20 mt-10 flex justify-between">
        <ServiceBox
          image="logo-redesign"
          text="Logo Redesign"
          link="/pricing#logo-redesign"
          basis="30%"
        />
        <ServiceBox
          image="website-design-with-template"
          text="Website Design (with template)"
          link="/pricing#website-design-with-template"
          basis="30%"
        />
        <ServiceBox
          image="website-design-no-template"
          text="Website Design (no template)"
          link="/pricing#website-design-no-template"
          basis="30%"
        />
      </div>
    </>
  );
}
