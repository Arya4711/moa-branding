"use client";
import { ReactLenis } from "lenis/react";
import { OverlayScrollbars } from "overlayscrollbars";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
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
    <ReactLenis root><OverlayScrollbarsComponent defer>{children}</OverlayScrollbarsComponent></ReactLenis>
  );
}
