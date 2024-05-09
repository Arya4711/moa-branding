import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShiftInElements() {
  const targetRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const shiftInElements = gsap.utils.toArray(".shift-in");
    shiftInElements.forEach((shiftInElement) => {
      gsap.to(shiftInElement, {
        scrollTrigger: shiftInElement,
        opacity: 1,
        y: 0,
      });
    });
  });

  return targetRefs;
}
