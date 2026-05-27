import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import { twMerge } from "tailwind-merge";

const HeroRevealMotion = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className={twMerge(
        "animate-fadeUp opacity-1 will-change-transform", // To overcome NO_LCP issue
        className,
      )}
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
        "fadeUp-initial",
        wasVisible && "animate-fadeUp",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const DropdownMotion = ({ children, className, ...props }) => (
  <div
    className={twMerge(
      "data-[state=open]:animate-fadeUp data-[state=closed]:animate-fadeOut",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export { HeroRevealMotion, SectionRevealMotion, DropdownMotion };
