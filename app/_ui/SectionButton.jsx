"use client";

export default function SectionButton({ text, id, hasYMargin = true }) {
  return (
    <>
      <a
        id={id}
        href={`#${id}`}
        className={`mx-20 ${hasYMargin ? "my-7" : ""} inline-block w-fit rounded-md border border-sky-400 bg-sky-50 px-4 py-1 text-center text-sky-300 no-underline transition`}
      >
        {text}
      </a>
    </>
  );
}
