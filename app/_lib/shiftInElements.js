import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShiftInElements() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const shiftInElements = gsap.utils.toArray(".shift-in");
    shiftInElements.forEach((shiftInElement) => {
      gsap.to(shiftInElement, {
        scrollTrigger: shiftInElement,
        opacity: 1,
        y: 0,
        duration: 0.1
      });
    });
  });
}
