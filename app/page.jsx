"use client";
import shiftInElements from "./_lib/shiftInElements";
import Services from "./_ui/Services";
import Button from "./_ui/Button";

export default function Home() {
  shiftInElements();

  return (
    <>
      <div className="bg-neutral-900 px-20 pb-16 pt-5 text-white">
        <div className="flex justify-between">
          <div className="mt-12 text-left sm:max-md:text-center">
            <div className="shift-in text-8xl text-sky-400 md:max-2xl:text-7xl">
              Your vision,
              <div className="text-white">our creation.</div>
            </div>
            <div className="shift-in mt-5 text-3xl delay-300 md:max-2xl:text-2xl">
              We create high quality branding plans and websites at an
              affordable price.
            </div>
            <div className="shift-in mt-5 space-x-5 delay-500">
              <Button text="BOOK A MEETING" />
              <Button text="GET A FREE QUOTE" />
            </div>
          </div>
          <video className="w-[37rem] max-md:hidden" autoPlay muted>
            <source src="/laptop-turning.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Services />
    </>
  );
}
