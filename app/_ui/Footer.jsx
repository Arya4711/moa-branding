import SocialMediaIcon from "./SocialMediaIcon";

export default function Footer() {
  return (
    <footer className="px-20 h-20 bg-neutral-900 flex justify-between items-center">
      <p className="text-left text-white">
        <span className="text-sky-500">&copy; 2024 </span>
        MOA Branding LLC. All rights reserved.
      </p>
      <div className="flex justify-around w-40">
        <SocialMediaIcon
          href="https://www.github.com/arya4711/moa-branding/"
          src="/github-logo.svg"
          alt="GitHub repository"
          size={10}
        />
        <SocialMediaIcon
          href="https://www.instagram.com/moabrandingfl/"
          src="/instagram-logo.svg"
          alt="Instagram page"
          size={10}
        />
        <SocialMediaIcon
          href="https://www.tiktok.com/@moabranding"
          src="/tiktok-logo.svg"
          alt="GitHub repository"
          size={10}
        />
      </div>
    </footer>
  );
}
