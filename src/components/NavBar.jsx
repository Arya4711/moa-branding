import React from "react";
import navLogo from "../assets/nav-logo.png";

function NavBar() {
  return (
    <>
      {" "}
      <nav className="sticky top-0 z-10 flex justify-between bg-neutral-900 px-20 py-3 text-white">
        <a href="Home">
          <img src={navLogo} alt="Home" className="h-10" />
        </a>
        <div className="space-x-10">
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="../../about.html">About</a>
          <a href="#">Contact</a>
          <a
            href="#"
            className="inline-block rounded-md border border-solid border-neutral-700 bg-neutral-800 px-6 py-2 no-underline transition hover:border-neutral-500"
          >
            START YOUR BRAND
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
