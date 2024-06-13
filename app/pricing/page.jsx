"use client";
import SectionButton from "../_ui/SectionButton";
import PricingBox from "./_ui/PricingBox";

export default function Pricing() {
  const pricingBoxes = [
    {
      name: "Logo Redesign",
      price: "25.00",
      description: [
        {
          image: { src: "/broom.svg", alt: "Broom" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Mouse pointer" },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
    },
    {
      name: "I'm",
      price: "25.00",
      description: [
        {
          image: { src: "/broom.svg", alt: "Broom" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Mouse pointer" },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
    },
    {
      name: "Genius",
      price: "25.00",
      description: [
        {
          image: { src: "/broom.svg", alt: "Broom" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Mouse pointer" },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
    },
    {
      name: "Micah",
      price: "25.00",
      description: [
        {
          image: { src: "/broom.svg", alt: "Broom" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Mouse pointer" },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
    },
    {
      name: "Massey",
      price: "25.00",
      description: [
        {
          image: { src: "/broom.svg", alt: "Broom" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Mouse pointer" },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
        },
      ],
    },
    {
      name: "Malekahani",
      price: "25.00",
      description: [
        {
          image: { src: "/broom.svg", alt: "Broom" },
          text: "Give your logo a fresh new look.",
        },
        {
          image: { src: "/mouse-pointer.svg", alt: "Mouse pointer" },
          text: "Pick from a group of concepts.",
        },
        {
          image: { src: "/pencil.svg", alt: "Pencil" },
          text: "4 final edits allowed.",
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
      <div className="mx-20 grid h-[60vh] grid-cols-3 items-center gap-10">
        {pricingBoxes.map((item) => (
          <PricingBox {...item} key={item.name} />
        ))}
      </div>
    </>
  );
}
