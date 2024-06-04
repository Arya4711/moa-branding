"use client";
import Image from "next/image";

export default function SocialMediaIcon({ href, src, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-7 w-7 items-center justify-around rounded-full transition hover:brightness-75`}
    >
      <Image
        src={src}
        alt={alt}
        width={1}
        height={1}
        className="flex-grow"
      ></Image>
    </a>
  );
}
