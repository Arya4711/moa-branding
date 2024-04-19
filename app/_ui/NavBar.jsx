"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between bg-neutral-900 px-20 py-3 text-white">
      <Link href="/">
        <Image src="/nav-logo.svg" alt="Home" width={100} height={100} />
      </Link>
      <div className="space-x-10">
        <Link href="/services" className="hover:brightness-75 transition">
          Services
        </Link>
        <Link href="/portfolio" className="hover:brightness-75 transition">
          Portfolio
        </Link>
        <Link href="/about" className="hover:brightness-75 transition">
          About
        </Link>
        <Link href="/contact" className="hover:brightness-75 transition">
          Contact
        </Link>
        <Link
          href="/pricing"
          className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
        >
          START YOUR BRAND
        </Link>
      </div>
    </nav>
  );
}
