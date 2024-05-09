"use client";
import { ReactLenis } from "lenis/react";
import { OverlayScrollbars } from "overlayscrollbars";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

export default function SmoothScroll({ children }) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  useEffect(() => {
    OverlayScrollbars(document.body, {
      scrollbars: {
        theme: "os-theme-dark"
      }
    });
  }, []);

  return <div id="smooth-wrapper"><div id="smooth-content">{children}</div></div>;
}
