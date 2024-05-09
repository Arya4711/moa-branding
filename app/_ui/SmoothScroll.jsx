"use client";
import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    OverlayScrollbars(document.body, {});
  }, []);

  return <ReactLenis root>{children}</ReactLenis>;
}
