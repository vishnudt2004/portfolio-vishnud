import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import { twMerge } from "tailwind-merge";

const HeroRevealMotion = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className={twMerge("hero-reveal", className)}
    >
      {children}
    </div>
  );
};

const SectionRevealMotion = ({ children, className = "", ...rest }) => {
  const ref = useRef(null);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px 0px -20% 0px",
  });

  const [wasVisible, setWasVisible] = useState(false);

  if (intersection?.isIntersecting && !wasVisible) setWasVisible(true);

  return (
    <div
      ref={ref}
      className={twMerge(
        "section-reveal",
        wasVisible && "section-reveal-visible",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const DropdownMotion = ({ children, ...props }) => (
  <div className="dropdown-motion" {...props}>
    {children}
  </div>
);

export { HeroRevealMotion, SectionRevealMotion, DropdownMotion };
