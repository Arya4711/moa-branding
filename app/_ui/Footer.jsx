"use client";
import SocialMediaIcon from "./SocialMediaIcon";

export default function Footer() {
  const iconData = [
    {
      href: "https://www.linkedin.com/company/moabranding/",
      src: "/linked-in-logo.svg",
      alt: "LinkedIn Page",
    },
    {
      href: "https://www.github.com/arya4711/moa-branding/",
      src: "/github-logo.svg",
      alt: "GitHub Repository",
    },
    {
      href: "https://www.instagram.com/moabrandingfl/",
      src: "/instagram-logo.svg",
      alt: "Instagram Page",
    },
    {
      href: "https://www.tiktok.com/@moabranding/",
      src: "/tiktok-logo.svg",
      alt: "TikTok Page",
    },
  ];
  return (
    <footer className="flex h-20 items-center justify-between bg-neutral-900 px-20 py-10">
      <p className="text-left text-white">
        <span className="text-sky-500">&copy; 2024 </span>
        MOA Branding LLC. All rights reserved.
      </p>
      <div className="flex items-center space-x-5">
        {iconData.map((item) => (
          <SocialMediaIcon {...item} size={10} key={item.alt} />
        ))}
      </div>
    </footer>
  );
}
