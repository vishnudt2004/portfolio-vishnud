import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

const useScrollDirection = () => {
  const hasScrolled = useRef(false);

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(null);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    const diff = current - prev;

    if (!hasScrolled.current) {
      // prevent initial scroll trigger logic
      hasScrolled.current = true;
      return;
    }

    // Optional: avoid flickering on tiny scrolls
    if (Math.abs(diff) > 5) {
      setScrollDirection(diff > 0 ? "down" : "up");
    }
  });

  return scrollDirection;
};

export default useScrollDirection;
