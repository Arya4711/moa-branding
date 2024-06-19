"use client";
import Link from "next/link";

export default function Button({ text, href = "#", target = "" }) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
      target={target}
    >
      <div>{text}</div>
    </Link>
  );
}
