import { useReducedMotion } from "motion/react";

import Motion from "./Motion";

const MotionOnScroll = ({ children, ...rest }) => {
  return (
    <Motion
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
      viewport={{ once: true, amount: 0.1 }} // Ensures performance, Trigger when 10% is visible
      {...rest}
    >
      {children}
    </Motion>
  );
};

// Predefined animations – for component-specific use

const HeroRevealMotion = ({ children, delay = 0, ...motionProps }) => {
  return (
    <Motion
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
          delay,
        },
      }}
      {...motionProps}
    >
      {children}
    </Motion>
  );
};

const SectionRevealMotion = ({ isHero, children, ...motionProps }) => {
  const reduce = useReducedMotion();

  if (isHero || reduce) return children;

  return (
    <MotionOnScroll
      initial={{ opacity: 0, filter: "blur(3px)" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      {...motionProps}
    >
      {children}
    </MotionOnScroll>
  );
};

const DropdownMotion = ({ children, isOpen, ...motionProps }) => {
  const reduce = useReducedMotion();

  const dropDownVariants = {
    open: {
      opacity: 1,
      ...(reduce ? { y: 0 } : { clipPath: "inset(0% 0% 0% 0%)" }),
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      ...(reduce ? { y: -3 } : { clipPath: "inset(0% 0% 100% 0%)" }),
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return isOpen ? (
    <Motion
      key="dropdown"
      variants={dropDownVariants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      exit="closed"
      {...motionProps}
    >
      {children}
    </Motion>
  ) : null;
};

export {
  Motion,
  MotionOnScroll,
  HeroRevealMotion,
  SectionRevealMotion,
  DropdownMotion,
};
