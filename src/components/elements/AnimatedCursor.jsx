import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useIsMobile } from "@/hooks/useIsMobile";

export default function AnimatedCursor({ className }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hasMoved, setHasMoved] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      setHasMoved(true);
    };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }

      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(loop);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (isMobile) return;

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className={twMerge(
          "cursor-dot pointer-events-none fixed top-0 left-0 z-999 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--global-text-color)",
          !hasMoved && "opacity-0",
          className?.dot,
        )}
      />

      {/* ring */}
      <div
        ref={ringRef}
        className={twMerge(
          "cursor-ring pointer-events-none fixed top-0 left-0 z-998 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-(--global-text-color)",
          !hasMoved && "opacity-0",
          className?.ring,
        )}
      />
    </>
  );
}
