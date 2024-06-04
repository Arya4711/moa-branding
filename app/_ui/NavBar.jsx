"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between bg-neutral-900 px-20 py-3 text-white">
      <Link href="/">
        <Image src="/nav-logo.svg" alt="Home" width={100} height={100} />
      </Link>
      <div className="my-auto space-x-10">
        <Link href="/services" className="transition hover:brightness-75">
          Services
        </Link>
        <Link href="/portfolio" className="transition hover:brightness-75">
          Portfolio
        </Link>
        <Link href="/about" className="transition hover:brightness-75">
          About
        </Link>
        <Link href="/contact" className="transition hover:brightness-75">
          Contact
        </Link>
        <Button href="/pricing" text="START YOUR BRAND" />
      </div>
    </nav>
  );
}
