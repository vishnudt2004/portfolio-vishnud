import { AnimatePresence, motion } from "motion/react";

import { useThemeMode } from "@contexts/ThemeModeContext";

// Categorization of animations:
// Base motion wrapper – for global use
// Predefined animations – for global use
// Predefined animations – for component-specific use
// AnimatePresence wrappers – for global use
// AnimatePresence wrappers – for component-specific use

// Base motion wrappers – for global use

const MotionWrapper = ({ as = "span", children, ...props }) => {
  if (!children || Array.isArray(children)) {
    throw new Error("MotionWrapper must have exactly one child element.");
  }

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

  // Custom React component (requires forwardRef; React 19 simplifies this)
  const MotionComponent = motion.create(children.type, {
    forwardMotionProps: true,
  });

  return <MotionComponent {...children.props} {...props} />;
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

// Predefined animations – for global use

const ZoomInMotion = ({ children, delay = 0, rest }) => (
  <MotionWrapper
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay } }}
    {...rest}
  >
    {children}
  </MotionWrapper>
);

// Predefined animations – for component-specific use

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

// AnimatePresence wrappers – for global use

const ThemeModeAnimatePresence = ({ children }) => {
  const { themeMode } = useThemeMode();

  return (
    <AnimatePresence mode="wait">
      <MotionWrapper
        key={themeMode}
        // initial={{ opacity: 0, scale: 0.98 }}
        // animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
        // exit={{ opacity: 0, scale: 1.02 }}
      >
        {children}
      </MotionWrapper>
    </AnimatePresence>
  );
};

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
  ZoomInMotion,
  NavbarBrandMotion,
  NavbarMenusMotion,
  ThemeModeAnimatePresence,
  NavbarDropdownAnimatePresence,
};
