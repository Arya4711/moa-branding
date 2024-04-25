import Image from "next/image";

export default function SocialMediaIcon({ href, src, alt, size }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:brightness-75 rounded-full transition h-${size} w-${size} flex items-center justify-around`}
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
