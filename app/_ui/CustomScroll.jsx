"use client";
import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    OverlayScrollbars(document.body, {});
  }, []);

  return children;
}
