"use client";
import { useEffect, useState } from "react";
import shiftInElements from "./_lib/shiftInElements";
import Services from "./_ui/Services";
import Button from "./_ui/Button";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true); // Set videoLoaded to true when component mounts
  }, []);

  shiftInElements();

  return (
    <>
      <div className="bg-neutral-900 px-4 pb-10 pt-5 text-white sm:px-10 sm:pb-16 md:px-20">
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <div className="mt-12 text-center md:w-1/2 md:text-left">
            <div className="shift-in text-5xl text-sky-400 sm:text-6xl md:text-8xl">
              Your vision,
              <div className="text-white">our creation.</div>
            </div>
            <div className="shift-in mt-5 text-xl delay-300 sm:text-2xl md:text-3xl">
              We create high quality branding plans and websites at an
              affordable price.
            </div>
            <div className="shift-in mt-5 flex flex-col items-center justify-center space-y-5 delay-500 sm:flex-row sm:space-x-5 sm:space-y-0 md:justify-start">
              <Button
                text="BOOK A MEETING"
                href="https://calendar.app.google/WJ1hAdc2iSTD9hkm8"
                target="_blank"
              />
              <Button text="GET A FREE QUOTE" href="/pricing" />
            </div>
          </div>
          <div className="mt-10 w-full md:mt-0 md:w-1/2">
            {videoLoaded && (
              <div
                className="relative overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                >
                  <source src="/laptop-turning.mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}
