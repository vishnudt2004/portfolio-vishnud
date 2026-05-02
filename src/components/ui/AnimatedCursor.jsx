import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { useEffect, useRef } from "react";

const LERP = 12;
const IDLE_THRESHOLD_SQ = 0.01;

function AnimatedCursor() {
  const dotRef = useRef(null);
  const state = useRef(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const s = {
      target: { x: cx, y: cy },
      current: { x: cx, y: cy },
      rafId: null,
      lastTime: null,
      hasMoved: false,
      isRunning: false,
    };
    state.current = s;

    const loop = (timestamp) => {
      const dt = Math.min((timestamp - (s.lastTime ?? timestamp)) / 1000, 0.05);
      s.lastTime = timestamp;

      const alpha = 1 - Math.exp(-LERP * dt);
      s.current.x += (s.target.x - s.current.x) * alpha;
      s.current.y += (s.target.y - s.current.y) * alpha;

      el.style.transform = `translate3d(${s.current.x}px,${s.current.y}px,0)`;

      const dx = s.target.x - s.current.x;
      const dy = s.target.y - s.current.y;
      if (dx * dx + dy * dy < IDLE_THRESHOLD_SQ) {
        s.isRunning = false;
        s.rafId = null;
        return;
      }

      s.rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (s.isRunning) return;
      s.isRunning = true;
      s.lastTime = null;
      s.rafId = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      s.target.x = e.clientX;
      s.target.y = e.clientY;

      if (!s.hasMoved) {
        s.hasMoved = true;
        s.current.x = e.clientX;
        s.current.y = e.clientY;
        el.style.removeProperty("opacity");
      }

      startLoop();
    };

    const onDown = () => el.classList.add("dot-active");
    const onUp = () => el.classList.remove("dot-active");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className="cursor-dot pointer-events-none fixed top-0 left-0 z-999 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--text-color-g)/25"
    />
  );
}

export default function Wrapper() {
  const isTouch = useIsTouchDevice();
  return !isTouch ? <AnimatedCursor /> : null;
}
