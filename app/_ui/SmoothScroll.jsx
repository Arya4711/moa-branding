"use client";
import { ReactLenis } from "lenis/react";
import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    OverlayScrollbars(document.body, {
      scrollbars: {
        theme: "os-theme-dark"
      }
    });
  }, []);

  return (
    <ReactLenis root>{children}</ReactLenis>
  );
}
