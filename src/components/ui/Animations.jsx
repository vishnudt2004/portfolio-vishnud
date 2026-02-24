import { AnimatePresence, useReducedMotion } from "motion/react";

import Motion from "./Motion";
import { useTheme } from "@/contexts/ThemeContext";

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

const HeroBgOverlayMotion = ({ children, ...motionProps }) => {
  const { theme } = useTheme();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <Motion
        key={theme}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.7,
          transition: reduce
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 1.2,
                delay: 0.4,
              },
        }}
        {...motionProps}
      >
        {children}
      </Motion>
    </AnimatePresence>
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
  HeroBgOverlayMotion,
  DropdownMotion,
  SectionRevealMotion,
};
