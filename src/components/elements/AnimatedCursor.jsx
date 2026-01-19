import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useIsMobile } from "@/hooks/useIsMobile";

const CURSOR_ACCENT_VAR = "--cursor-accent";
const CURSOR_ACCENT_SCOPE_VAR = "--cursor-accent-scoped";

const DEFAULT_CURSOR_ACCENT = "var(--accent-color-g)";

function resolveCursorAccent(target) {
  if (!target) return null;

  const el = target.closest("[style], [data-cursor-accent]");
  if (!el) return null;

  return (
    el.dataset.cursorAccent ||
    getComputedStyle(el).getPropertyValue(CURSOR_ACCENT_SCOPE_VAR)?.trim()
  );
}

export function useCursorAccentScope() {
  useEffect(() => {
    const handleMouseOver = (e) => {
      const accent = resolveCursorAccent(e.target);
      if (!accent) return;

      document.body.style.setProperty(CURSOR_ACCENT_VAR, accent);
    };

    const handleMouseOut = (e) => {
      const relatedAccent = resolveCursorAccent(e.relatedTarget);
      if (relatedAccent) return;

      document.body.style.setProperty(CURSOR_ACCENT_VAR, DEFAULT_CURSOR_ACCENT);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
}

export default function AnimatedCursor({ className }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hasMoved, setHasMoved] = useState(false);
  const isMobile = useIsMobile();

  useCursorAccentScope();

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

      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

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
        aria-hidden="true"
        className={twMerge(
          "cursor-dot pointer-events-none fixed top-0 left-0 z-999 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--text-color-g)",
          !hasMoved && "opacity-0",
          className?.dot,
        )}
      />

      {/* ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={twMerge(
          "cursor-ring pointer-events-none fixed top-0 left-0 z-998 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-(--text-color-g)",
          !hasMoved && "opacity-0",
          className?.ring,
        )}
      />
    </>
  );
}
