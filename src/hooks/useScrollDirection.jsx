import { useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const prevY = useRef(0);
  const rafId = useRef(null);
  const directionRef = useRef(null);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    prevY.current = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;
      const diff = currentY - prevY.current;

      if (Math.abs(diff) > 5) {
        const newDirection = diff > 0 ? "down" : "up";

        // prevent unnecessary re-renders
        if (directionRef.current !== newDirection) {
          directionRef.current = newDirection;
          setDirection(newDirection);
        }

        prevY.current = currentY;
      }

      rafId.current = null;
    };

    const handleScroll = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return direction;
};
