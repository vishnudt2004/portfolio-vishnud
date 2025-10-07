import { useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";

import { useTheme } from "@/contexts/ThemeContext";

// Categorization of animations:
// Base motion wrapper – for global use
// Predefined animations – for component-specific use
// AnimatePresence wrappers – for component-specific use

// Base motion wrappers – for global use

const MotionWrapper = ({ as = "span", children, ...props }) => {
  if (!children || Array.isArray(children)) {
    throw new Error("MotionWrapper must have exactly one child element.");
  }

  // Precompute custom motion
  const CustomMotion = useMemo(() => {
    if (
      children &&
      typeof children.type !== "string" &&
      typeof children !== "string"
    ) {
      return motion.create(children.type, { forwardMotionProps: true });
    }
    return null;
  }, [children]);

  // Text node
  if (typeof children === "string") {
    const MotionComponent = motion[as];
    return <MotionComponent {...props}>{children}</MotionComponent>;
  }

  // HTML tag
  if (typeof children.type === "string") {
    const MotionComponent = motion[children.type];
    return <MotionComponent {...children.props} {...props} />;
  }

  // Custom React component
  if (CustomMotion) {
    return <CustomMotion {...children.props} {...props} />;
  }

  return null;
};

const MotionOnScroll = ({ children, ...rest }) => {
  return (
    <MotionWrapper
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 0.1 }} // Ensures performance, Trigger when 10% is visible
      {...rest}
    >
      {children}
    </MotionWrapper>
  );
};

// Predefined animations – for component-specific use

const HeroBgOverlayMotion = ({ children }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <MotionWrapper
        key={theme}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.7,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 1.2,
            delay: 0.6,
          },
        }}
      >
        {children}
      </MotionWrapper>
    </AnimatePresence>
  );
};

const HeroFgMotion = ({ children, delay = 0.9 }) => (
  <MotionWrapper
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    }}
  >
    {children}
  </MotionWrapper>
);

const NavbarBrandMotion = ({ children, screen = "small", navbarVisible }) => {
  const menuVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.3 },
    },
  };

  return (
    <MotionWrapper
      initial={screen === "large" ? menuVariants.hidden : false}
      variants={screen === "small" ? menuVariants : undefined}
      animate={
        screen === "large"
          ? menuVariants.visible
          : navbarVisible
            ? "visible"
            : "hidden"
      }
    >
      {children}
    </MotionWrapper>
  );
};

const NavbarMenusMotion = ({
  children,
  screen = "small",
  navbarVisible,
  delay = 0,
}) => {
  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + delay, duration: 0.5 },
    },
  };

  return (
    <MotionWrapper
      initial={screen === "large" ? { y: -20, opacity: 0 } : false}
      variants={screen === "small" ? menuVariants : undefined}
      animate={
        screen === "large"
          ? { y: 0, opacity: 1, transition: { duration: 0.5, delay } }
          : navbarVisible
            ? "visible"
            : "hidden"
      }
    >
      {children}
    </MotionWrapper>
  );
};

const SectionRevealMotion = ({ isHero, children }) =>
  isHero ? (
    children
  ) : (
    <MotionOnScroll
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: "easeOut" },
      }}
    >
      {children}
    </MotionOnScroll>
  );

// AnimatePresence wrappers – for component-specific use

const NavbarDropdownAnimatePresence = ({ children, dropDownVisible }) => {
  const dropDownVariants = {
    open: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {dropDownVisible && (
        <MotionWrapper
          key="dropdown"
          variants={dropDownVariants}
          animate={dropDownVisible ? "open" : "closed"}
          initial="closed"
          exit="closed"
        >
          {children}
        </MotionWrapper>
      )}
    </AnimatePresence>
  );
};

export {
  MotionWrapper,
  MotionOnScroll,
  HeroBgOverlayMotion,
  HeroFgMotion,
  NavbarBrandMotion,
  NavbarMenusMotion,
  NavbarDropdownAnimatePresence,
  SectionRevealMotion,
};
