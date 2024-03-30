import { useEffect, useRef } from "react";

function shiftInElements() {
  const targetRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
        }
      });
    });

    targetRefs.current.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targetRefs.current.forEach((target) => {
        observer.unobserve(target);
      });
    };
  });

  return targetRefs;
}

export default shiftInElements;
