import { cloneElement, Fragment, isValidElement } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useTheme } from "@/contexts/ThemeContext";

function Motion({ asChild = false, as, children, ...motionProps }) {
  if (!children) {
    throw new Error("Motion requires children.");
  }

  // asChild MODE

  if (asChild) {
    if (as) {
      throw new Error("Motion: `asChild` and `as` cannot be used together.");
    }

    if (!isValidElement(children)) {
      throw new Error("Motion asChild requires a single React element.");
    }

    if (children.type === Fragment) {
      throw new Error("Motion cannot animate React.Fragment.");
    }

    return cloneElement(children, {
      ...motionProps,
      ...children.props,
    });
  }

  // as PROP MODE

  if (as) {
    if (typeof as !== "string") {
      throw new Error("Motion `as` must be a valid HTML tag.");
    }

    const MotionElement = motion[as];

    return <MotionElement {...motionProps}>{children}</MotionElement>;
  }

  // DEFAULT / WRAPPER MODE

  if (!isValidElement(children)) {
    // Must be exactly ONE valid HTML element
    throw new Error(
      "Motion default mode requires a single HTML element child.",
    );
  }

  if (children.type === Fragment) {
    throw new Error("Motion cannot animate React.Fragment.");
  }

  if (typeof children.type !== "string") {
    throw new Error(
      "Motion default mode only supports native HTML elements. Use `asChild` for custom components.",
    );
  }

  const MotionElement = motion[children.type];

  return (
    <MotionElement {...motionProps} {...children.props}>
      {children.props.children}
    </MotionElement>
  );
}

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

const NavbarBrandMotion = ({
  children,
  screen = "small",
  navbarVisible,
  ...motionProps
}) => {
  const reduce = useReducedMotion();

  const menuVariants = {
    hidden: reduce ? { opacity: 0 } : { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.3 },
    },
  };

  return (
    <Motion
      initial={screen === "large" ? menuVariants.hidden : false}
      variants={screen === "small" ? menuVariants : undefined}
      animate={
        screen === "large"
          ? menuVariants.visible
          : navbarVisible
            ? "visible"
            : "hidden"
      }
      {...motionProps}
    >
      {children}
    </Motion>
  );
};

const NavbarMenusMotion = ({
  children,
  screen = "small",
  navbarVisible,
  delay = 0,
  ...motionProps
}) => {
  const reduce = useReducedMotion();

  const motion_desktop = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3, delay } },
  };

  const menuVariants_mobile = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + delay, duration: 0.3 },
    },
  };

  return (
    <Motion
      initial={screen === "large" ? motion_desktop.initial : false}
      variants={screen === "small" ? menuVariants_mobile : undefined}
      animate={
        screen === "large"
          ? motion_desktop.animate
          : navbarVisible
            ? "visible"
            : "hidden"
      }
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
  HeroBgOverlayMotion,
  NavbarBrandMotion,
  NavbarMenusMotion,
  DropdownMotion,
  SectionRevealMotion,
};
