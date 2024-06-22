"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-neutral-900 px-4 py-3 text-white sm:px-10 md:px-20">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/nav-logo.svg"
            className="h-auto"
            alt="Home"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex flex-grow items-center justify-center">
          <Button href="/purchase" text="START YOUR BRAND" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden items-center space-x-10 md:flex">
          <Link href="/pricing" className="transition hover:brightness-75">
            Pricing
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
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 flex flex-col items-end space-y-4 md:hidden">
          <Link
            href="/pricing"
            className="block text-right transition hover:brightness-75"
          >
            Pricing
          </Link>
          <Link
            href="/portfolio"
            className="block text-right transition hover:brightness-75"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="block text-right transition hover:brightness-75"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-right transition hover:brightness-75"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
