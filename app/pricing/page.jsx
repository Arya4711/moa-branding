"use client";
import SectionButton from "../_ui/SectionButton";
import PricingBox from "./_ui/PricingBox";

export default function Pricing() {
  const pricingBoxes = [
    {
      name: "Branding Package",
      service: "branding-package",
      price: "90.00",
      originalPrice: "100.00",
      description: [
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "Logos, colors, fonts, and business cards.",
        },
        {
          image: {
            src: "/heart-plus-squares.svg",
            alt: "Two squares containing a heart and a plus sign",
          },
          text: "Multiple renditions of each.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Pencil" },
          text: "5 edits for each product.",
        },
      ],
      bg: "branding-package",
    },
    {
      name: "Logo Redesign",
      service: "logo-redesign",
      price: "25.00",
      description: [
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: {
            src: "/heart-plus-squares.svg",
            alt: "Two squares containing a heart and a plus sign",
          },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
      bg: "logo-redesign",
    },
    {
      name: "Logo Design",
      service: "logo-design",
      price: "25.00",
      description: [
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "Design tailored to your brand.",
        },
        {
          image: {
            src: "/heart-plus-squares.svg",
            alt: "Two squares containing a heart and a plus sign",
          },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
      bg: "logo-design",
    },
    {
      name: "Business Card Design",
      service: "business-card-design",
      price: "25.00",
      description: [
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "Design tailored to your brand.",
        },
        {
          image: {
            src: "/heart-plus-squares.svg",
            alt: "Two squares containing a heart and a plus sign",
          },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
      bg: "business-card-design",
    },
    {
      name: "Color Palette & Fonts",
      service: "color-palette-and-fonts",
      price: "25.00",
      description: [
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "Colors and fonts tailored to your brand.",
        },
        {
          image: {
            src: "/heart-plus-squares.svg",
            alt: "Two squares containing a heart and a plus sign",
          },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
    },
    {
      name: "Website Design (per page - no template)",
      service: "website-design-no-template",
      price: "200.00",
      description: [
        {
          image: {
            src: "/monitor-with-pencil.svg",
            alt: "A pencil shown on a computer monitor",
          },
          text: "Create the perfect website for your brand.",
        },
        {
          image: {
            src: "/user-with-pencil.svg",
            alt: "User icon with a pencil",
          },
          text: "Work with the team during the design.",
        },
        {
          image: { src: "/browser-box.svg", alt: "Browser box" },
          text: "5 final edits (per page) allowed.",
        },
      ],
    },
    {
      name: "Website Design (per page - with template)",
      service: "website-design-with-template",
      price: "80.00",
      description: [
        {
          image: {
            src: "/monitor-with-pencil.svg",
            alt: "A pencil shown on a computer monitor",
          },
          text: "One of our website templates tailored to your brand.",
        },
        {
          image: {
            src: "/user-with-pencil.svg",
            alt: "User icon with a pencil",
          },
          text: "Work with the team during the design.",
        },
        {
          image: { src: "/browser-box.svg", alt: "Browser box" },
          text: "5 final edits (per page) allowed.",
        },
      ],
    },
  ];

  return (
    <>
      <SectionButton text="PRICING" id="pricing" />
      <h1 className="mx-20 my-5 text-center text-5xl">
        Let&apos;s make something<span className="text-sky-500"> great.</span>
      </h1>
      <h2 className="mx-20 text-center text-lg">Hover to learn more</h2>
      <div className="mx-20 my-10 grid h-max grid-cols-2 items-center gap-16">
        {pricingBoxes.map((item) => (
          <PricingBox {...item} key={item.name} />
        ))}
      </div>
    </>
  );
}
